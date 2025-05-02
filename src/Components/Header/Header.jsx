import React from "react";
import { format } from "date-fns";

import Logo from "../../assets/logo.png";
const Header = () => {
  const date = new Date();
  const formatted = format(date, "EEEE, MMMM d, yyyy");
  return (
    <>
      <div className="flex justify-center items-center my-3">
        <img src={Logo} alt="Journalism Without Fear or Favour" />
      </div>
      <h1 className="text-center text-accent text-xl">
        Journalism Without Fear or Favour
      </h1>

      <h1 className="text-xl text-accent text-center font-bold my-3">
        {formatted}
      </h1>
    
    </>
  );
};

export default Header;
