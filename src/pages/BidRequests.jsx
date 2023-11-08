import { useEffect } from "react";
import useAuth from "../myHooks/useAuth";
import useAxiosSecure from "../myHooks/useAxiosSecure";
import { useState } from "react";


const BidRequests = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [bidRequests, setBidRequests] = useState([]);
    useEffect(() => {
        axiosSecure.get(`/bidRequests/${user.email}`)
        .then(res => setBidRequests(res.data || []));
    }, [axiosSecure, user.email]);
    const handleAccept = (id) => {
        const  status = 'in progress';
        axiosSecure.put(`/bidRequests/status/${id}`, {status}).then();
      };
      
      const handleReject = (id) => {
        const status = 'canceled';
        axiosSecure.put(`/bidRequests/status/${id}`,{ status}).then();

      };
    return (
        <div className="mt-32 max-w-6xl mx-auto">
        <h1 className="text-center text-4xl mb-4">My Posted Jobs</h1>
        <hr className="mb-4 border-[2px]" />
         <div className="flex w-full overflow-x-auto">
        <table className="table">
            <thead>
                <tr>
                    <th>Job Title</th>
                    <th>Bidder Email</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    bidRequests.map(bid => { 
                        console.log("Bid Object:", bid); 
                        return(<tr key={bid._id}>
                        <td>{bid.title}</td>
                        <td>{bid.bidderEmail}</td>
                        <td>{bid.deadline}</td>
                        <td>{bid.status}</td>
                        <td><button  className="btn btn-success" onClick={() => handleAccept(bid._id)}>Accept</button> <button 
                        className="btn btn-error" onClick={() =>handleReject(bid._id)}>Reject</button></td>
                    </tr>)})
                }
            </tbody>
        </table>
    </div>
       </div>
    );
};

export default BidRequests;