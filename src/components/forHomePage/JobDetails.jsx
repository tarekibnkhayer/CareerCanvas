import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../myHooks/useAxiosSecure";
import { useState } from "react";
import useAuth from "../../myHooks/useAuth";


const JobDetails = () => {
    const {id} = useParams();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [job, setJob] = useState();
    useEffect(() => {
        axiosSecure.get(`/postedJobs/find/${id}`)
        .then(res => setJob(res.data));
    },[axiosSecure, id]);
    return (
        <div className="lg:mt-32 max-w-xl mx-auto space-y-4">
           <h1 className="text-center text-3xl font-semibold"> <span className="text-green-500">Job Title:</span> {job?.title}</h1>
           <hr  className="border-[2px]"/>
           <p className="text-2xl font-semibold"><span className="text-blue-600">Buyer Email:  </span>{job?.email}</p>
           <p className="text-xl font-semibold"><span className="text-blue-600">Deadline: </span>{job?.deadline}</p>
           <p className="text-xl "><span className="  text-blue-600">Work Description:  </span>{job?.description}</p>
           <p className="text-xl"><span className="text-blue-600">Price Range:  </span>{job?.minPrice} - {job?.maxPrice} BDT</p>
           <p className="text-xl font-medium"><span className="text-blue-600">Your Email:  </span>{user?.email}</p>
           <div className="border px-2 py-4">
            <h2 className="text-center text-3xl font-bold mb-4">Place Your Bid:</h2>
            <hr  className="border-[2px]"/>
            <form
        className="mx-auto  flex w-full max-w-sm flex-col gap-6 "
      >
        <div className="flex flex-col items-center">
        </div>
        <div className="form-group">
          <div className="form-field">
            <label className="form-label">Buyer Email address</label>

            <input
              placeholder="Type here"
              name="email"
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
              name="email"
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
                  className="input max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button type="submit" className="btn btn-primary w-full" disabled={user.email === job?.email}>
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