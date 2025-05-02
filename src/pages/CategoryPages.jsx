import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ContextValue } from '../context/ContextValue';
import News from '../components/News';

const CategoryPages = () => {

    const [categoryNews, setCategoryNews] = useState([])

    const { allNews} = useContext(ContextValue);
    // const allNews = useLoaderData()
    const {categoryId} = useParams();



    useEffect(()=>{
        if(categoryId == 0){
            setCategoryNews(allNews)
        }

        else if(categoryId == 1) {
           const filteredNews = allNews.filter(news => news.others.is_today_pick);
            setCategoryNews(filteredNews)
        }
        else {
            const filteredNews = allNews.filter(news => news.category_id == categoryId);
            setCategoryNews(filteredNews)
        }
    },[allNews, categoryId])

    console.log(categoryNews)
    return (
        <div>
            category page {categoryId}
            {
                categoryNews.map(news => <News 
                        key={news.id} 
                        news={news}/>)
            }
        </div>
    );
};

export default CategoryPages;