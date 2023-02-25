import React from "react";
import { FcGoogle } from "react-icons/fc";

const Oauth = () => {
  return (
    <button
      className="primary bg-[#FF5733] hover:bg-[#ff0000] text-white flex items-center justify-center w-full  px-6 py-2.5 text-base justify-items-center
    font-medium rounded-full uppercase shadow-lg transition duration-150 ease-in-out hover:shadow-lg border-2 hover:border-zinc-300"
    >
      <FcGoogle className="mr-6 text-2xl bg-white rounded-full" />
      Continue with Google
    </button>
  );
};

export default Oauth;
