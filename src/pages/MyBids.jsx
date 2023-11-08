import { useEffect } from "react";
import useAuth from "../myHooks/useAuth";
import useAxiosSecure from "../myHooks/useAxiosSecure";
import { useState } from "react";


const MyBids = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [myBids, setMyBids] = useState([]);
    let serial = 1;
    useEffect(() => {
        axiosSecure.get(`/bids/find/${user.email}`)
        .then(res => setMyBids(res.data))
    },[axiosSecure, user.email]);
    const handleCompleted = id => {
        const status = 'completed';
        axiosSecure.put(`/bidRequests/status/${id}`, {status}).then();
    }
    return (
        <div className="mt-32 max-w-6xl mx-auto">
    <h1 className="text-center text-4xl mb-4">My Bids</h1>
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
            {
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