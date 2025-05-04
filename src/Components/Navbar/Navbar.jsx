import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import User from '../../assets/user.png';
import { AuthContext } from "../../Store/Context/Context";
import { toast } from "react-toastify";
export const Navbar = () => {
  const {user,logout} = useContext(AuthContext);
  const {photoURL,email,displayName} =user || {};

  const handleSingOut =()=> {
    logout().then(()=> {
      toast.success('log-out Successfully')
    }).catch(error=> {
      toast.error(error)
    })
  }

  return (
    <div className="flex justify-between items-center my-4">
      <div className="hide md:block"> </div>
      <ul className="flex gap-x-2.5 text-accent">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
      
        <li>
          <NavLink to="/Career">Career</NavLink>
        </li>
      
      </ul>
     {
      user ? 
      <div className="flex gap-x-2 items-center">
        <h1 className="hidden md:block">{displayName}</h1>
      <img onClick={handleSingOut} src={photoURL} alt={displayName}  className="w-10  h-10 rounded-full"/>
      </div> : (
        <div className="flex gap-x-1.5">
        <img src={User} alt="user icon " />
        <Link to={`/auth/login`} className="btn btn-primary">Login</Link>
      </div>
      )
     }
    </div>
  );
};
