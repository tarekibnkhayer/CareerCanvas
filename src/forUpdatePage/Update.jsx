import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../myHooks/useAxiosSecure";
import Swal from "sweetalert2";


const Update = () => {
    const {id} = useParams();
    const [job, setJob] = useState(null);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`postedJobs/find/${id}`)
        .then(res => setJob(res.data));
    },[axiosSecure, id]);
    const currentDate = new Date().toISOString().split("T")[0];
    const handleUpdateJobInfo = (e) => {
        e.preventDefault();
        const form = e.target;
        const categories = form.categories.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const updatedInfo = {
          categories,
          minPrice,
          maxPrice,
          title,
          description,
          deadline,
        };
        axiosSecure
        .put(`/jobs/update/${id}`, updatedInfo)
        .then(res => {
           if(res.data.modifiedCount){
            Swal.fire("Job info successfully updated");
           }
        });
      };
    return (
             <div className="lg:mt-28 bg-[#F4F3F0] max-w-2xl mx-auto py-6">
      <form
        className="mx-auto  flex w-full max-w-sm flex-col gap-6" onSubmit={handleUpdateJobInfo}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-green-600 font-mono  font-bold">
            Update Job Info
          </h1>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label className="form-label">Email address</label>

            <input
              placeholder="Type here"
              name="email"
              value={job?.email}
              readOnly
              type="email"
              className="input max-w-full"
            />
          </div>
          <div className="flex gap-4">
            <div className="form-field">
              <label className="form-label">Job title</label>
              <div className="form-control">
                <input
                  name="title"
                  placeholder="Type here"
                  defaultValue={job?.title}
                  required
                  type="text"
                  className="input max-w-full"
                />
              </div>
            </div>
            <div className="form-field">
              <label className="form-label">Deadline</label>
              <div className="form-control">
                <input
                  name="deadline"
                  placeholder="Type here in BDT"
                  defaultValue={job?.deadline}
                  required
                  type="date"
                  min={currentDate}
                  className="input max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="form-field">
            <label className="form-label">Job categories</label>
            <select name="categories" defaultValue={job?.categories} className="input  max-w-full">
              <option value="Web Development" selected={job?.categories === 'Web Development'}>Web Development</option>
              <option value="Digital Marketing" selected={job?.categories === 'Digital Marketing'}>Digital Marketing</option>
              <option value="Graphic Design" selected={job?.categories === 'Graphic Design'}>Graphic Design</option>
            </select>
          </div>

          <div className="flex gap-4">
            <div className="form-field">
              <label className="form-label">Minimum price</label>
              <div className="form-control">
                <input
                  name="minPrice"
                  placeholder="Type here in BDT"
                  defaultValue={job?.minPrice}
                  required
                  type="number"
                  className="input max-w-full"
                />
              </div>
            </div>
            <div className="form-field">
              <label className="form-label">Maximum price</label>
              <div className="form-control">
                <input
                  name="maxPrice"
                  placeholder="Type here in BDT"
                  defaultValue={job?.maxPrice}
                  required
                  type="number"
                  className="input max-w-full"
                />
              </div>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Description</label>
            <div className="form-control">
              <textarea
                name="description"
                id=""
                cols="60"
                rows="5"
                defaultValue={job?.description}
                className="border-[2px] px-4"
              ></textarea>
            </div>
          </div>
          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button type="submit" className="btn btn-primary w-full">
               Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    );
};

export default Update;