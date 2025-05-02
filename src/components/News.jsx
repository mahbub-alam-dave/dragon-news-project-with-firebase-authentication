import React from 'react';

const News = ({news}) => {
    return (
        <div>
           <img src={news.image_url} alt="" /> 
        </div>
    );
};

export default News;