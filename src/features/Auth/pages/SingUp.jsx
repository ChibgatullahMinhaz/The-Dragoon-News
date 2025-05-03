import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../../Store/Context/Context";

const SingUp = () => {
  const { createUser, sendVerificationEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCreateAccount = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const checked = e.target.terms.checked;
    if (!checked) {
      toast.warn("please Accept our terms and conditions");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        sendVerificationEmail(result.user)
          .then(() => {
            toast.success("We Send a Verification Mail");
          })
          .catch((error) => {
            toast.warning("something wrong" + error.message);
          });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
        toast.warning("You have Already an Account! Please Login");
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-10">
      <div className="card-body">
        <form className="fieldset" onSubmit={handleCreateAccount}>
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            name="name"
            placeholder="Type here"
          />
          <label className="label">Photo URL</label>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </g>
            </svg>
            <input
              type="text"
              required
              name="photo"
              placeholder="https://"
              defaultValue="https://"
              pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
              title="Must be valid URL"
            />
          </label>
          <label className="label">Email</label>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              name="email"
              placeholder="mail@site.com"
              required
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <label className="label">Password</label>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              minlength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>
          <div className="flex gap-x-2">
            <input
              type="checkbox"
              name="terms"
              className="checkbox checkbox-xs"
            />
            <p>Accept our terms and conditions</p>
          </div>

          <p>
            You have an account? Please Login!{" "}
            <Link to="/auth/login" className="text-blue-400 underline">
              Login
            </Link>{" "}
          </p>
          <button type="submit" className="btn btn-primary mt-4">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingUp;