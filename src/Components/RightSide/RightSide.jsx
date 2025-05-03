import React, { useContext } from "react";
import QZone from "./QZone";
import FindUs from "./FindUs";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../../Store/Context/Context";

export const RightSide = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="space-y-8">
      {user ? "" : <SocialLogin></SocialLogin>}
      <FindUs></FindUs>
      <QZone></QZone>
    </div>
  );
};
