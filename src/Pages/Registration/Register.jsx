import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import { ImSpinner } from "react-icons/im";
import { FaGoogle } from "react-icons/fa";
import { saveUser } from "../../api/auth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    loading,
    setLoading,
    signIn,
    signInWithGoogle,
    updateUserProfile,
    createUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const cpassword = event.target.cpassword.value;
    const photoUrl = event.target.photoUrl.value;
    console.log(name, email, password, cpassword, photoUrl);

    if (password !== cpassword) {
      toast.error("Password Not matched");
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Please enter one capital letter");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("Please enter one special letter");
    } else {
      createUser(email, password)
        .then(() => {
          updateUserProfile(name, photoUrl)
            .then(() => {
              toast.success("Signup Successful");
              //save user to db
              saveUser(result.user);
              navigate(from, { replace: true });
            })
            .catch((error) => {
              setLoading(false);
              console.log(error.message);
              toast.error(error.message);
            });
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.message);
          toast.error(err.message);
        });
    }
  };

  // Handle Google Sign In
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        // save user to db
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6  lg:px-8 w-2/3 mx-auto py-5 mt-5 mb-10 border">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://i.ibb.co/znGVTBn/Logo.png"
          alt="Your Company"
        />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Please Register
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              for="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autocomplete="name"
                required
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autocomplete="current-password"
                required
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <span
                onClick={handlePasswordToggle}
                className="absolute inset-y-0 right-3 pl-3 flex items-center"
              >
                {showPassword ? (
                  <AiOutlineEye></AiOutlineEye>
                ) : (
                  <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                )}
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                for="cpassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2 relative">
              <input
                id="cpassword"
                name="cpassword"
                type={showConfirmPassword ? "text" : "password"}
                autocomplete="confirm-password"
                required
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <span
                onClick={handleConfirmPasswordToggle}
                className="absolute inset-y-0 right-3 pl-3 flex items-center"
              >
                {showConfirmPassword ? (
                  <AiOutlineEye></AiOutlineEye>
                ) : (
                  <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                )}
              </span>
            </div>
          </div>
          <div>
            <label
              for="photoUrl"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Photo URL
            </label>
            <div className="mt-2">
              <input
                id="photoUrl"
                name="photoUrl"
                type="text"
                autocomplete="phptoUrl"
                required
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-2 p-2 rounded-lg mt-3 mx-auto bg-black text-white w-2/3"
        >
          <FaGoogle className="" />
          Google
        </button>
        <p className="text-red-500 text-lg text-center my-2"></p>
      </div>
    </div>
  );
};

export default Register;
