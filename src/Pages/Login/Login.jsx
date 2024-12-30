import { Link, useNavigate } from "react-router-dom";
import userIcon from "../../assets/icons/user.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { isLoading, setIsLoading, userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
        setIsLoading(false);
        navigate("/");
        toast.success("Singed in Successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          theme: "colored",
        });
      })

      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          theme: "colored",
        });
        setIsLoading(false);
      });
  };

  return (
    <section className="min-h-screen mx-auto flex justify-center items-center">
      <div className="w-full md:w-auto md:min-w-[400px] shadow-lg p-5 rounded-xl border border-slate-100">
        <img className="w-16 mx-auto mb-5" src={userIcon} alt="" />
        <h3 className="text-center font-semibold text-3xl mb-4">Log In</h3>
        <form onSubmit={handleSubmit} className="w-full">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Email</span>
            </div>
            <input
              required
              name="email"
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Password</span>
            </div>
            <input
              required
              name="password"
              minLength={8}
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <Link className="text-blue-600 font-semibold text-center block hover:underline mt-2">
            Forgot Password
          </Link>
          <button className="btn bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white w-full mt-3">
            {isLoading && (
              <span className="loading loading-spinner loading-md"></span>
            )}{" "}
            LOGIN
          </button>
        </form>
        <div className="divider">OR</div>
        <button
          type="button"
          className="w-full justify-center text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 19"
          >
            <path
              fillRule="evenodd"
              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
              clipRule="evenodd"
            />
          </svg>
          Sign in with Google
        </button>
        <p className="mt-3 text-center font-semibold">
          Don't have an account?{" "}
          <Link className="text-blue-600 hover:underline" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
