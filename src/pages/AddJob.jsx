import useAuth from "../myHooks/useAuth";
import useAxiosSecure from "../myHooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const categories = form.categories.value;
    const minPrice = form.minPrice.value;
    const maxPrice = form.maxPrice.value;
    const title = form.title.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const job = {
      email,
      categories,
      minPrice,
      maxPrice,
      title,
      description,
      deadline,
    };
    axiosSecure
    .post(`/jobs`, job)
    .then(() => Swal.fire("Job added successfully"));
  };
  return (
    <div className="lg:mt-28 bg-[#F4F3F0] max-w-2xl mx-auto py-6">
      <form
        className="mx-auto  flex w-full max-w-sm flex-col gap-6"
        onSubmit={handleAddJob}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-green-600 font-mono  font-bold">
            Add Job Here
          </h1>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label className="form-label">Email address</label>

            <input
              placeholder="Type here"
              name="email"
              value={user.email}
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
                  required
                  type="date"
                  className="input max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="form-field">
            <label className="form-label">Job categories</label>
            <select name="categories" className="input  max-w-full">
              <option value="Web Development">Web Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphic Design">Graphic Design</option>
            </select>
          </div>

          <div className="flex gap-4">
            <div className="form-field">
              <label className="form-label">Minimum price</label>
              <div className="form-control">
                <input
                  name="minPrice"
                  placeholder="Type here in BDT"
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
                className="border-[2px]"
              ></textarea>
            </div>
          </div>
          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button type="submit" className="btn btn-primary w-full">
                Add Job
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
