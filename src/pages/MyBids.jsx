import { useEffect } from "react";
import useAuth from "../myHooks/useAuth";
import useAxiosSecure from "../myHooks/useAxiosSecure";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const MyBids = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [myBids, setMyBids] = useState([]);
    let serial = 1;
    useEffect(() => {
        axiosSecure.get(`/bids/find/${user.email}`)
        .then(res => setMyBids(res.data))
    },[axiosSecure, user.email]);
    const handleCompleted = async(id)=> {
        const status = 'completed';
        const statusNum = 1;
        const statusObj = {status, statusNum}
        await axiosSecure.put(`/bidRequests/status/${id}?email=${user.email}`, statusObj);
        setMyBids(myBids.map(bid => bid._id === id? {...bid, status}: bid));
    };
    const handleChange = e => {
        e.preventDefault();
        const sortField = 'statusNum';
        const sortOrder = e.target.value;
        if(sortOrder){
          return  axiosSecure.get(`/sorting/${user.email}?sortField=${sortField}&sortOrder=${sortOrder}`)
         .then(res =>{ 
            setMyBids(res.data)
        });
        }
        else{
            axiosSecure.get(`/bids/find/${user.email}`)
            .then(res => setMyBids(res.data))
        }
    }
    return (
        <div className="lg:mt-32 mt-4 md:max-w-2xl max-w-xs lg:max-w-6xl mx-auto">
            <Helmet>
                <title>CareerCanvas | MyBids</title>
            </Helmet>
    <h1 className="text-center text-4xl mb-4">My Bids</h1>
            <div className="w-48 float-right my-3">
            <select className="input" onChange={handleChange}>
              <option value="">Default</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            </div>
    <hr className="mb-4 border-[2px]" />
     <div className="flex w-full overflow-x-auto">
	<table className="table">
		<thead>
			<tr>
				<th>Serial</th>
				<th>Job Title</th>
                <th>Buyer Email</th>
                <th>Deadline</th>
                <th>Status</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
            {myBids && 
                myBids.map(myBid => <tr key={myBid._id}>
                    <th>{serial++}</th>
                    <td>{myBid.title}</td>
                    <td>{myBid.buyerEmail}</td>
                    <td>{myBid.deadline}</td>
                    <td>{myBid.status}</td>
                    <td><button  onClick={() => handleCompleted(myBid._id)} className="btn btn-secondary" disabled={myBid.status !== 'in progress'}>Complete</button></td>
                </tr>)
            }
		</tbody>
	</table>
</div>
   </div>
    );
};

export default MyBids;