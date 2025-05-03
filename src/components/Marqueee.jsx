import React, { useContext, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { ContextValue } from '../context/ContextValue';

const Marqueee = () => {

    const [breakingNews, setBreakingNews] = useState([]);
    const {allNews} = useContext(ContextValue);

    useEffect(()=>{
        const filteredNews = allNews.filter(news => news.others.is_today_pick === true)
        setBreakingNews(filteredNews)
    },[allNews])

    return (
<div className='bg-gray-100 flex items-center p-4 gap-4'>
        <span className='bg-red-500 px-5 py-2 font-medium text-lg sm:text-xl leading-[30px] text-white'>Latest</span>
        <Marquee className='flex gap-5'>
             {/* <span className='font-semibold text-base sm:text-lg leading-[30px] text-[#403f3f] mr-4'>Match Highlights: Germany vs Spain — as it happened   !</span> */}
        {
            breakingNews.map(news => {
                return(
                    <span key={news.id} className='font-semibold text-base sm:text-lg leading-[30px] text-[#403f3f] mr-4'>{news.title}</span>
                )
            })
        }
        
        </Marquee>
        </div>
    );
};

export default Marqueee;