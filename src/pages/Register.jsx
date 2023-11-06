import { NavLink } from "react-router-dom";
import useAuth from "../myHooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
    const {createUser, updateUserInfo} = useAuth()
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);
        createUser(email, password)
        .then(() => {
            updateUserInfo(name, photo)
            .then(() => {
                Swal.fire("User is created successfully");
                form.reset();
            })
            .catch((err) => Swal.fire(err.message));
        })
        .catch(err => Swal.fire(err.message));
    }
    return (
        <form onSubmit={handleRegister} className="mx-auto flex w-full max-w-sm flex-col gap-6 mt-36">
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">Register</h1>
            <p className="text-sm">create a new account here</p>
        </div>
        <div className="form-group">
            <div className="form-field">
                <label className="form-label">Name</label>
    
                <input placeholder="Type here" name="name" type="text" className="input max-w-full" />
            </div>
            <div className="form-field">
                <label className="form-label">Email address</label>
    
                <input placeholder="Type here" name="email" type="email" className="input max-w-full" />
            </div>
            <div className="form-field">
                <label className="form-label">Password</label>
                <div className="form-control">
                    <input placeholder="Type here" name="password" type="password" className="input max-w-full" />
                </div>
            </div>
            <div className="form-field">
                <label className="form-label">Photo URL</label>
                <div className="form-control">
                    <input placeholder="Type here" name="photo" type="url" className="input max-w-full" />
                </div>
            </div>
            <div className="form-field pt-5">
                <div className="form-control justify-between">
                    <button type="submit" className="btn btn-primary w-full">Register</button>
                </div>
            </div>
    
            <div className="form-field">
                <div className="form-control justify-center">
                    <NavLink className="link link-underline-hover link-primary text-sm" to="/login">Already have an account? Login</NavLink>
                </div>
            </div>
        </div>
    </form>
    );
};

export default Register;