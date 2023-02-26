import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router";

const Oauth = () => {
  const navigate = useNavigate();

  const onGoogleSignin = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google!");
    }
  };
  return (
    <button
      type="button"
      onClick={onGoogleSignin}
      className="primary bg-[#ff5833e6] hover:bg-[#ff5833] text-white flex items-center justify-center w-full  px-6 py-2.5 text-base justify-items-center
    font-medium rounded-full uppercase shadow-lg transition duration-150 ease-in-out hover:shadow-lg border-2 hover:border-zinc-300"
    >
      <FcGoogle className="mr-6 text-2xl bg-white rounded-full" />
      Continue with Google
    </button>
  );
};

export default Oauth;
