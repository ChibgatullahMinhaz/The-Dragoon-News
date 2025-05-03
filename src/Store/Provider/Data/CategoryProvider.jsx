import React, { useContext, useEffect, useState } from "react";
import { CategoryContext, LoaderContext } from "../../Context/Context";


const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const { setIsLoading, isLoading } = useContext(LoaderContext);

  useEffect(() => {
   
    const fetchCategories = async () => {
     try {
        setIsLoading(true);
        const response = await fetch("/categories.json");
        const Data = await response.json();
        setCategories(Data);
        
     } catch (error) {
        console.log(error.message);
     }finally{
        setIsLoading(false);
     }
    };
    fetchCategories();
  }, [setCategories, setIsLoading]);

  const allData = {
    categories,
    setIsLoading,
    isLoading,
  };
  return <CategoryContext value={allData}>{children}</CategoryContext>;
};

export default CategoryProvider;
