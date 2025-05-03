import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { ContextValue } from '../context/ContextValue';

const PostDetails = () => {

    const {title} = useParams();
    const {allNews} = useContext(ContextValue);
    const [newsDetail, setNewsDetail] = useState([]);
    const location = useLocation();
    const navigate = useNavigate()


    useEffect(()=>{
        const openedNews = allNews.find(news => news.title.toLowerCase().split(" ").join("-") === title)
        openedNews && setNewsDetail(openedNews)
    },[allNews, title])
    return (
        <div className='flex flex-col gap-4 items-start'>
            <img className='w-full max-h-[400px] object-cover' src={newsDetail.image_url} alt="" />
            <h2 className='text-lg sm:text-xl md:text-2xl font-bold leading-[30px] sm:leading-[36px] md:leading-[40px] lg:leading-[45px] text-[var(color-primary)]'>{newsDetail.title}</h2>
            <p className='text-base leading-[26px] text-[var(--color-accent)]'>{newsDetail.details}</p>
            <button onClick={() => navigate(location.state?.from || '/category/0')} className='btn bg-[var(--color-secondary)] text-white'>All news in this categoroy</button>
        </div>
    );
};

export default PostDetails;