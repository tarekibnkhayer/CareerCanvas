import { useEffect } from "react";
import useAuth from "../myHooks/useAuth";
import useAxiosSecure from "../myHooks/useAxiosSecure";
import { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";


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
        <div className="lg:mt-32 mt-4 md:max-w-2xl max-w-xs lg:max-w-6xl mx-auto">
        <h1 className="text-center text-4xl mb-4">Bid Requests</h1>
        <hr className="mb-4 border-[2px]" />
         <div className="flex w-full overflow-x-auto">
        <table className="table">
            <thead>
                <tr>
                    <th>Job Title</th>
                    <th>Bidder Email</th>
                    <th>Deadline</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    bidRequests.map(bid => { 
                        return(<tr key={bid._id}>
                        <td>{bid.title}</td>
                        <td>{bid.bidderEmail}</td>
                        <td>{bid.deadline}</td>
                        <td>{bid.bidAmount} BDT</td>
                        <td>{bid.status}</td>
                        <td ><div className={bid.status !== 'pending'?'hidden': ''}><button  className="btn btn-success" onClick={() => handleAccept(bid._id)}>Accept</button> <button 
                        className="btn btn-error" onClick={() =>handleReject(bid._id)}>Reject</button></div>
                        <div className={bid.status !== 'in progress'?'hidden':''}>
      <ProgressBar completed={60} />
      </div>
      <div className={bid.status !== 'completed'?'hidden':''}>
        <ProgressBar completed={100}/>
                        </div>
                        <div className={bid.status !== 'canceled'?'hidden':''}>
                            <ProgressBar completed={0}/>
                        </div>
                        </td>
                    </tr>)})
                }
            </tbody>
        </table>
    </div>
       </div>
    );
};

export default BidRequests;