import React, { useContext, useEffect, useState } from "react";
import { LoaderContext, NewsContext } from "../Context/Context";
import { toast } from "react-toastify";

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const { setIsLoading, isLoading } = useContext(LoaderContext);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/news.json");
        const Data = await response.json();
        setNews(Data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadNews();
  }, [setIsLoading]);
  const newsData = {
    news,
    setNews,
    isLoading,
    setIsLoading,
  };
  return <NewsContext value={newsData}>{children}</NewsContext>;
};

export default NewsProvider;
