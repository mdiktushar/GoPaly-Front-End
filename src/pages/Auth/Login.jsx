import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faG } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../providers/FirebaseAuthProvider";
import isEmail from "validator/es/lib/isEmail";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const { singIn, googleLogin } = useContext(AuthContext);
  const [errorMessage, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useTitle('Login')

  const goTo = location.state?.from?.pathname || `/`;

  const loginHandler = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email.length == 0) {
      setError("Please Enter Email");
      return;
    }
    if (password.length < 6) {
      setError(`Password can't be less than 6 letters`);
      return;
    }
    if (!isEmail(email)) {
      setError("Not an Email");
      return;
    }
    singIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Login Successful: ", user);
        navigate(goTo, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-gray-100 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <img src={logo} alt="" width={400} />
          <p className="text-red-600 text-center">{errorMessage}</p>

          <br />
          <p>
            Don't have an account..?{" "}
            <Link to={`/register`} className="font-semibold text-green-800">
              Register
            </Link>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm bg-white my-10">
          <form onSubmit={loginHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="demo@email.com"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <button
            className="btn btn-circle btn-outline m-auto mb-3"
            onClick={() => googleLogin(navigate, goTo)}
          >
            <FontAwesomeIcon icon={faG} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
