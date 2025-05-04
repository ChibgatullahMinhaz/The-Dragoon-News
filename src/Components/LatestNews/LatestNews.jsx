import React, { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Logo from "../../assets/logo.png";
import { NewsContext } from "../../Store/Context/Context";
const LatestNews = () => {
  const { news } = useContext(NewsContext);
  const [brakingNews, setBrakingNews] = useState([]);
  useEffect(() => {
    const latestNews = news.filter(
      (news) => news?.others?.is_today_pick == true
    );
    setBrakingNews(latestNews);
  }, [news]);
  return (
    <div
      className="bg-base-300 p-3 rounded-lg flex items-center "
      pauseOnClick={true}
    >
      <button className="btn btn-secondary">Latest</button>

      <Marquee speed={50} pauseOnHover={true} pauseOnClick={true}>
        {brakingNews &&
          brakingNews.map((news) => (
            <p className="font-semibold text-primary">
              {news.title} <span className="space-x-3"> ||  </span> 
            </p> 
          ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
