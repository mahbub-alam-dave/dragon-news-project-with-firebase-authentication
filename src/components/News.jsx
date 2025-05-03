import React from 'react';
import { FaEye } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { Link, useLocation } from 'react-router';

const News = ({ news }) => {

  const location = useLocation()
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="border rounded-lg p-4 shadow-sm space-y-3">
      {/* Author Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-lg">
          <span className="cursor-pointer">🔗</span>
          <span className="cursor-pointer">📤</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg leading-6">{title}</h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt="thumbnail"
        className="w-full h-48 object-cover rounded-md"
      />

      {/* Details (first 100 chars) */}
      <Link to={`/${title.toLowerCase().split(" ").join("-")}`} state={{from: location.pathname}}><p  className="text-sm text-gray-700">
        {details.slice(0, 100)}...
        <span className="text-orange-600 font-semibold cursor-pointer ml-1">Read More</span>
      </p></Link>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          {Array(rating.number)
            .fill()
            .map((_, i) => (
              <AiFillStar key={i} />
            ))}
          <span className="text-gray-700 ml-1">{rating.number}.0</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default News;
