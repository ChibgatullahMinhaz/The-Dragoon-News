import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Store/Context/Context";
import { toast } from "react-toastify";
import { Navigate } from "react-router";
import { GoogleAuthProvider } from "firebase/auth";

const SocialLogin = () => {
  const {creteUserWithGoogle} = useContext(AuthContext);

   // login with google
    const provider = new GoogleAuthProvider();
    const handleLoginWithGoogle = () => {
      creteUserWithGoogle(provider)
        .then((result) => {
          console.log(result);
          toast.success("User Login Successfully");
          Navigate( location?.state || "/");
        })
        .catch((error) => {
          toast.warning(error);
        });
    };

  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button  onClick={handleLoginWithGoogle} className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={24} /> Login with Google
        </button>
        <button className="btn btn-outline btn-primary w-full">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
