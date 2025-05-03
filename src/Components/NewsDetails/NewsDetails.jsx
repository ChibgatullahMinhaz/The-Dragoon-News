import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "../../Store/Context/Context";
import { Link, useParams } from "react-router";
import SuggestionNews from "../suggestionNews/SuggestionNews";

const NewsDetails = () => {
  const { Id } = useParams();
  const { news } = useContext(NewsContext);
  const [details, setDetails] = useState({});
  const [suggestionNews, setSuggestionNews] = useState([]);
  
  useEffect(() => {
    const findNews = news.find((data) => data.id == Id);
    setDetails(findNews);
    const filteredSuggestionNews = news.filter(
      (news) => news?.category_id == details?.category_id
    );
    setSuggestionNews(filteredSuggestionNews);
  }, [Id, news, details]);


  return (
    <div className="space-y-4">
      <h1 className="text-primary font-semibold my-4">Dragon News</h1>

      <section className="shadow-md p-3">
        <img src={details?.thumbnail_url} alt="title" />
        <p>{details?.details}</p>
        <Link
          to={`/category/${details?.category_id}`}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="btn btn-secondary mt-5"
        >
          All news in this category
        </Link>
      </section>

      <SuggestionNews suggestionNews={suggestionNews}></SuggestionNews>
    </div>
  );
};

export default NewsDetails;
