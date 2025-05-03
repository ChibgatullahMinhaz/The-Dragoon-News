import React from "react";
import { Link } from "react-router";

const SuggestionNewsCard = ({ news }) => {
  const { title, image_url, id ,author } = news;
  
  
 
  return (
    <Link
      to={`/news/${id}`}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <div className="shadow-sm p-1">
        <img className="rounded-xl" src={image_url} alt={title} />

        <h1 className="text-primary text-xl font-bold">
          {title.length > 23 ? <>{title.slice(0, 25)}...</> : title}
        </h1>
        <p>
            {author.published_date}
        </p>
      </div>
    </Link>
  );
};

export default SuggestionNewsCard;
