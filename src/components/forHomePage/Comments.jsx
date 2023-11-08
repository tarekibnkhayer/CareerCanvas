import Swal from "sweetalert2";


const Comments = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const phone = form.phone.value;
        const comment = {
            name, email, phone, message
        };
        fetch('https://career-canvas-server.vercel.app/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
       .then(res => res.json())
       .then(data => {
        if(data.insertedId){
            Swal.fire("Your message is submitted");
            form.reset();
        }
       })
    }
    return (
        <div className="lg:max-w-6xl mx-auto md:max-w-2xl max-w-xs  mt-10">
            <h2 className="text-center text-3xl font-bold  font-mono mb-2">Please Leave your Message for us</h2>
            <p className="text-center mb-4">We are committed to give you a nice user experience</p>
            <section className="rounded-xl bg-green-400">
	<div className="p-8 shadow-lg">
		<form className="space-y-4" onSubmit={handleSubmit}>
			<div className="w-full">
				<label className="sr-only" htmlFor="name">Name</label>
				<input className="input input-solid max-w-full" placeholder="Name" name="name" type="text" id="name" required />
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div>
					<label className="sr-only" htmlFor="email">Email</label>
					<input className="input input-solid" placeholder="Email address" name="email" type="email" id="email" />
				</div>

				<div>
					<label className="sr-only" htmlFor="phone">Phone</label>
					<input className="input input-solid" placeholder="Phone Number" name="phone" type="tel" id="phone" />
				</div>
			</div>

			<div className="w-full">
				<label className="sr-only" htmlFor="message">Message</label>

				<textarea className="textarea textarea-solid max-w-full" placeholder="Message" name="message" rows="8" id="message" required></textarea>
			</div>

			<div className="mt-4">
				<button type="submit" className="rounded-lg btn btn-primary  btn-block">Send Message</button>
			</div>
		</form>
	</div>
</section>
        </div>
    );
};

export default Comments;