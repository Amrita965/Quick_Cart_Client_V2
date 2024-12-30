import { Link } from "react-router-dom";
import logo from "../../assets/logo/quick-cart-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  console.log(user);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        // logout successful
        toast.success("Logout Successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          theme: "colored",
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          theme: "colored",
        });
      });
  };

  const navLinks = (
    <>
      <li>
        <Link className="font-semibold" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="font-semibold" to="/company">
          Company
        </Link>
      </li>
      <li>
        <Link className="font-semibold" to="/services">
          Services
        </Link>
      </li>
      <li>
        <Link className="font-semibold" to="/testimonials">
          Testimonials
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="flex items-center btn btn-ghost">
            <img className="w-12" src={logo} alt="" />
            <h2 className="text-2xl font-semibold">Quick Cart</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                {user?.photoURL ? (
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL}
                    />
                  </div>
                ) : (
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-12 rounded-full">
                      <span className="text-xl">{user.displayName?.charAt(0)}</span>
                    </div>
                  </div>
                )}
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white"
            >
              START SALE
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
