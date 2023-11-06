import { useEffect, useState } from "react";
import useAuth from "../myHooks/useAuth";
import useAxiosSecure from "../myHooks/useAxiosSecure";
import {AiFillDelete} from 'react-icons/ai';
import {BsFillPencilFill} from "react-icons/bs"


const MyPostedJobs = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [postedJobs, setPostedJobs] = useState([]);
    const handleUpdate = id => {
      console.log(id);
    }
    let serial = 1;
    useEffect(() => {
        axiosSecure
        .get(`/postedJobs/${user.email}`)
        .then(res => setPostedJobs(res.data));
    },[axiosSecure, serial, user.email]);
    return (
    <div className="flex w-full overflow-x-auto mt-32">
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
                    <td><BsFillPencilFill className="text-2xl" onClick={() => handleUpdate(postedJob._id)}></BsFillPencilFill></td>
                     <td><AiFillDelete className="text-2xl"></AiFillDelete></td>
                </tr>)
            }
		</tbody>
	</table>
</div>
    );
};

export default MyPostedJobs;