import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import useAuth from "../../myHooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const navLinks = (
    <>
      <NavLink to="/" className="ml-5">
        Home
      </NavLink>
      <NavLink to="/addJob" className="ml-5">
        Add job
      </NavLink>
      <NavLink to="/" className="ml-5">
        My posted jobs
      </NavLink>
      <NavLink to="/" className="ml-5">
        My bids
      </NavLink>
      <NavLink to="/" className="ml-5">
        Bid requests
      </NavLink>
    </>
  );
  const handleLogout = () => {
    logoutUser()
      .then()
      .catch((err) => Swal.fire(err.message));
  };
  return (
    <div>
      <div className="navbar navbar-sticky hidden lg:flex">
        <div className="navbar-start">
          <img
            src="https://i.imgur.com/xR9jzDk.jpg"
            alt="website logo"
            className="w-20"
          />
        </div>
        <div className="navbar-center">{navLinks}</div>
        <div className="navbar-end">
          {user ? (
            <>
              <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
              <img src={user?.photoURL} alt=""  className="w-12 rounded-full"/>
              <p>{user.displayName}</p>
            </>
          ) : (
            <>
              <NavLink to="/login" className="mr-4 btn btn-primary">
                Login
              </NavLink>
              <img
                src="https://i.imgur.com/BSXLY0r.png"
                alt=""
                className="w-12"
              />
            </>
          )}
        </div>
      </div>
      {/* for mobile */}
      <div className="lg:hidden ">
        <div className="navbar rounded-lg">
          <div className="navbar-start">
            <div className="dropdown">
              <label className="btn  mx-2" tabIndex="0">
                <AiOutlineMenu className="text-xl"></AiOutlineMenu>
              </label>
              <div className="dropdown-menu dropdown-menu-right-bottom">
                {/* <a className="dropdown-item text-sm">Profile</a>
		<a tabIndex="-1" className="dropdown-item text-sm">Account settings</a>
		<a tabIndex="-1" className="dropdown-item text-sm">Subscriptions</a> */}
                <NavLink to="/" className="dropdown-item text-sm">
                  Home
                </NavLink>
                <NavLink to="/" className="dropdown-item text-sm">
                  Add job
                </NavLink>
                <NavLink to="/" className="dropdown-item text-sm">
                  My posted job
                </NavLink>
                <NavLink to="/" className="dropdown-item text-sm">
                  My bids
                </NavLink>
                <NavLink to="/" className="dropdown-item text-sm">
                  Bid requests
                </NavLink>
              </div>
            </div>
          </div>
          <div className="navbar-center">
            <img
              src="https://i.imgur.com/xR9jzDk.jpg"
              alt="website logo"
              className="w-24"
            />
          </div>
          <div className="navbar-end">
            <NavLink to="/" className="text-sm md:text-xl mr-2">
              Login
            </NavLink>
            <img
              src="https://i.imgur.com/BSXLY0r.png"
              alt="user default logo"
              className="w-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
