import { useEffect, useState } from "react";
import useAuth from "../myHooks/useAuth";
import useAxiosSecure from "../myHooks/useAxiosSecure";
import {AiFillDelete} from 'react-icons/ai';
import {BsFillPencilFill} from "react-icons/bs"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const MyPostedJobs = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [postedJobs, setPostedJobs] = useState([]);
    let serial = 1;
    useEffect(() => {
        axiosSecure
        .get(`/postedJobs/${user.email}`)
        .then(res => setPostedJobs(res.data));
    },[axiosSecure, serial, user.email]);
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            axiosSecure.delete(`/postedJobs/${id}?email=${user?.email}`)
            .then(res => {
                if(res.data.deletedCount){
                    Swal.fire({
                 title: "Deleted!",
                 text: "Your file has been deleted.",
                 icon: "success"
               });
               const remaining = postedJobs.filter(postedJob => postedJob._id !== id);
               setPostedJobs(remaining);
                }
            })
            }
          });
    }
    return (
   <div className="lg:mt-32 mt-4 lg:max-w-6xl md:max-w-2xl max-w-xs mx-auto">
    <Helmet>
        <title>CareerCanvas | My posted jobs</title>
    </Helmet>
    <h1 className="text-center text-4xl mb-4">My Posted Jobs</h1>
    <hr className="mb-4 border-[2px]" />
     <div className="flex w-full overflow-x-auto">
	<table className="table">
		<thead>
			<tr>
				<th>Serial</th>
				<th>Title</th>
				<th>Category</th>
                <th>Max Price</th>
                <th>Min Price</th>
                <th>Deadline</th>
				<th>Update</th>
                <th>Delete</th>
			</tr>
		</thead>
		<tbody>
            {
                postedJobs.map(postedJob => <tr key={postedJob._id}>
                    <th>{serial++}</th>
                    <td>{postedJob.title}</td>
                    <td>{postedJob.categories}</td>
                    <td>{postedJob.maxPrice}</td>
                    <td>{postedJob.minPrice}</td>
                    <td>{postedJob.deadline}</td>
                    <td><Link to={`/update/${postedJob._id}`}><BsFillPencilFill className="text-2xl"></BsFillPencilFill></Link></td>
                     <td><AiFillDelete className="text-2xl" onClick={() => handleDelete(postedJob._id)}></AiFillDelete></td>
                </tr>)
            }
		</tbody>
	</table>
</div>
   </div>
    );
};

export default MyPostedJobs;