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
    },[allNews, categoryId]);

    if(categoryNews.length === 0) {
        return <div className='flex justify-center items-center py-16'>
            <h2 className='text-xl md:text-2xl font-bold'>No news at this category</h2>
            </div>
    }

    return (
        <div className='flex flex-col gap-4 md:gap-6 '>
            <span className='text-[color:var(--color-primary)] text-lg md:text-xl font-semibold leading-[30px]'>Dragon News Home</span>
            <div className='flex flex-col gap-4 md:gap-6'>
            {
            categoryNews.map(news => <News 
                        key={news.id} 
                        news={news}/>)
            }
            </div>
        </div>
    );
};

export default CategoryPages;