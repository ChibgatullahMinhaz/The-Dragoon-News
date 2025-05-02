import React from "react";
import { NavLink } from "react-router";
import User from '../../assets/user.png';
export const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-4">
      <div> </div>
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
      <div className="flex gap-x-1.5">
        <img src={User} alt="user icon " />
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};
