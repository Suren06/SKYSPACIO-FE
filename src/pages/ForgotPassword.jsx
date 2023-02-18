import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Oauth from "../components/Oauth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="md:w-[60%] lg:w-[50%] mb-12 md:mb-6 md:h-[50%]">
          <img
            className="w-full rounded-2xl"
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80"
            alt="key"
          ></img>
        </div>
        <div className="w-full md:w-[60%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className="w-full px-4 py-2 text-lg text-gray-600 bg-white border-gray-300 rounded-md transition ease-in-out mb-3"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mt-3 mb-6">
              <p>
                Don't have an account?
                <Link
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                  to="/sign-up"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                  to="/sign-in"
                >
                  Sing in instead
                </Link>
              </p>
            </div>
            <button
              className="w-full text-white bg-teal-600 hover:bg-teal-700 px-6 py-2.5 text-base 
              font-medium rounded-full uppercase shadow-md transition duration-150 ease-in-out hover:shadow-lg active:bg-teal-800"
              type="submit"
            >
              Send reset password
            </button>
            <div className="flex my-4 items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <Oauth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
