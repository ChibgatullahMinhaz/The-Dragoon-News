import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import Logo from "../../assets/logo.png";
import { NewsContext } from "../../Store/Context/Context";
const LatestNews = () => {
  const {news} = useContext(NewsContext)
  console.log(news);
  return (
    <div
      className="bg-base-300 p-3 rounded-lg flex items-center "
      pauseOnClick={true}
    >
      <button className="btn btn-secondary">Latest</button>

      <Marquee speed={50} pauseOnHover={true} pauseOnClick={true}>
        <p className="font-semibold text-primary">
          Trump says Harvard University's tax-exempt status will be revoked |
        </p>
        <p className="font-semibold text-primary">
          Trump budget plan draws pushback from key Senate Republicans |
        </p>
        <p className="font-semibold text-primary">
          Friday briefing: Reform takes Labour scalp in knife-edge Runcorn
          byelection{" "}
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
