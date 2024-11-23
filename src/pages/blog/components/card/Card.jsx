import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const imageUrl = useMemo(() => {
    return `https://picsum.photos/800/600?random=${data._id}`;
  }, [data._id]);

  return (
    <Link to={`/blog/${data._id}`} className="w-full md:w-[calc(50%-1rem)] mb-8">
      <div className="rounded-xl overflow-hidden shadow-lg backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:scale-105 h-[600px] flex flex-col">
        <div className="relative h-96 overflow-hidden">
          <img 
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
            src={imageUrl} 
            alt={data.title}
            loading="lazy"
          />
        </div>
        <div className="px-6 py-4 flex-grow flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-2xl mb-2 text-gray-800 dark:text-white line-clamp-2">{data.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 text-base line-clamp-3">{data.description}</p>
          </div>
          <div className="pt-4">
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
              #{data.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

