import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../myHooks/useAxiosSecure";
import { useState } from "react";
import useAuth from "../../myHooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const JobDetails = () => {
    const {id} = useParams();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [job, setJob] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.get(`/postedJobs/find/${id}?email=${user?.email}`)
        .then(res => setJob(res.data));
    },[axiosSecure, id, user?.email]);
    const deadlineSetByOwner = job?.deadline;
    const deadlineDate = new Date(deadlineSetByOwner);
    const currentDate = new Date();
    const CurrentDate = new Date().toISOString().split("T")[0];
    const handleBid = e => {
        e.preventDefault();
        const form = e.target;
        const buyerEmail = form.buyerEmail.value;
        const bidderEmail = form.bidderEmail.value;
        const bidAmount = form.bidAmount.value;
        const deadline = form.deadline.value;
        const title = job?.title;
        const status = 'pending';
        const statusNum = 3;
        const bid = {
            buyerEmail, bidderEmail, bidAmount, deadline, title, status, statusNum
        };
        axiosSecure.post(`/bids?email=${user?.email}`, bid)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire('Your bidding is successfully submitted');
                navigate('/myBids');
            }
        })
    }
    return (
        <div className="lg:mt-32  mt-4 max-w-xs md:max-w-xl mx-auto space-y-4">
          <Helmet>
            <title>CareerCanvas | Job Details</title>
          </Helmet>
           <h1 className="text-center text-3xl font-semibold"> <span className="text-green-500">Job Title:</span> {job?.title}</h1>
           <hr  className="border-[2px]"/>
           <p className="text-2xl font-semibold"><span className="text-blue-600">Buyer Email:  </span>{job?.email}</p>
           <p className="text-xl font-semibold"><span className="text-blue-600">Deadline: </span>{job?.deadline}</p>
           <p className="text-xl "><span className="  text-blue-600">Work Description:  </span>{job?.description}</p>
           <p className="text-xl"><span className="text-blue-600">Price Range:  </span>{job?.minPrice} - {job?.maxPrice} BDT</p>
           <p className="text-xl font-medium"><span className="text-blue-600">Your Email:  </span>{user?.email}</p>
           <p className="text-xl font-medium"><span className="text-blue-600">Your Name:   </span>{user?.displayName}</p>
           <div className="border px-2 py-4">
            <h2 className="text-center text-3xl font-bold mb-4">Place Your Bid:</h2>
            <hr  className="border-[2px]"/>
            <form
        className="mx-auto  flex w-full max-w-sm flex-col gap-6 "
        onSubmit={handleBid}
      >
        <div className="flex flex-col items-center">
        </div>
        <div className="form-group">
          <div className="form-field">
            <label className="form-label">Buyer Email address</label>

            <input
              placeholder="Type here"
              name="buyerEmail"
              value={job?.email}
              readOnly
              type="email"
              className="input max-w-full"
            />
          </div>
          <div className="form-field">
            <label className="form-label">Bidder Email address</label>

            <input
              placeholder="Type here"
              name="bidderEmail"
              value={user?.email}
              readOnly
              type="email"
              className="input max-w-full"
            />
          </div>
          <div className="flex gap-4">
            <div className="form-field">
              <label className="form-label">Bidding Amount</label>
              <div className="form-control">
                <input
                  name="bidAmount"
                  placeholder="Give amount in BDT"
                  required
                  type="number"
                  className="input max-w-full"
                />
              </div>
            </div>
            <div className="form-field">
              <label className="form-label">Give your Deadline</label>
              <div className="form-control">
                <input
                  name="deadline"
                  placeholder="Type here in BDT"
                  required
                  type="date"
                  min={CurrentDate}
                  className="input max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button type="submit" className="btn btn-primary w-full" disabled={user.email === job?.email || currentDate > deadlineDate}>
               Bid On the Project
              </button>
            </div>
          </div>
        </div>
      </form>
           </div>
        </div>
    );
};

export default JobDetails;