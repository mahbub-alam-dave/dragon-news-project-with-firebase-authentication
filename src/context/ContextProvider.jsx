import React, { useEffect, useState } from 'react';
import { ContextValue } from './ContextValue';

const ContextProvider = ({children}) => {

    const [allNews, setAllNews] = useState([])
    useEffect(()=>{
        fetch("/news.json").
        then(res => res.json()).
        then(data => setAllNews(data))
    },[])

    return (
        <ContextValue.Provider value={{allNews, setAllNews}}>
            {children}
        </ContextValue.Provider>
    );
};

export default ContextProvider;