import React  from 'react';
import SuggestionNewsCard from '../SuggestionNewsCard/SuggestionNewsCard';

const SuggestionNews = ({suggestionNews}) => {


    return (
        <div>
            <h1 className='text-primary text-2xl font-semibold'>Recommended For You</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 p-2'>
               {
                suggestionNews.map((news=> <SuggestionNewsCard key={news.id} news = {news}></SuggestionNewsCard>))
               }
            </div>
        </div>
    );
};

export default SuggestionNews;