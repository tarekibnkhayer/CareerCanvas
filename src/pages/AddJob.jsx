import useAuth from "../myHooks/useAuth";

const AddJob = () => {
	const {user} = useAuth();
    return (
      <div className="lg:mt-28 bg-[#F4F3F0] max-w-2xl mx-auto py-6">
<div className="mx-auto  flex w-full max-w-sm flex-col gap-6">
	<div className="flex flex-col items-center">
		<h1 className="text-3xl text-green-600 font-mono  font-bold">Add Job Here</h1>
	</div>
	<div className="form-group">
		<div className="form-field">
			<label className="form-label">Email address</label>

			<input placeholder="Type here" value={user.email} type="email" className="input max-w-full" />
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
				<input placeholder="Type here in BDT" type="number" className="input max-w-full" />
			</div>
		</div>
		<div className="form-field">
			<label className="form-label">Maximum price</label>
			<div className="form-control">
				<input placeholder="Type here in BDT" type="number" className="input max-w-full" />
			</div>
		</div>
		</div>
		<div className="form-field">
			<label className="form-label">Job Title</label>
			<div className="form-control">
				<input placeholder="Type here" type="text" className="input max-w-full" />
			</div>
		</div>
		<div className="form-field">
			<label className="form-label">Description</label>
			<div className="form-control">
				<textarea name="description" id="" cols="60" rows="5" className="border-[2px]"></textarea>
			</div>
		</div>
		<div className="form-field pt-5">
			<div className="form-control justify-between">
				<button type="button" className="btn btn-primary w-full">Add Job</button>
			</div>
		</div>

		
	</div>
</div>
 </div>
    );
};

export default AddJob;