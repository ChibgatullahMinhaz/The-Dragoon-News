import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { NewsContext } from "../../Store/Context/Context";
import NewsCard from "../../Components/NewsCard/NewsCard";
import Loading from "../../Components/Loading/Loading";


const CategoryNews = () => {
  const { id } = useParams();
  const { news, isLoading } = useContext(NewsContext);
  const [allCategoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(news);
    } else if (id == "1") {
      const filteredNews = news.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = news.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [id, setCategoryNews, news]);
  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div>
          <h2 className="font-bold mb-5">
            Total{" "}
            <span className="text-secondary">{allCategoryNews.length}</span>{" "}
            news Found
          </h2>

          <div className="grid grid-cols-1 gap-5">
            {allCategoryNews.map((news) => (
              <NewsCard key={news.id} news={news}></NewsCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryNews;
