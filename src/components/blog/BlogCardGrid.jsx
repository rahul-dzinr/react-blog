import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogCardGrid = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://react30.onrender.com/api/user/blog');
        // Filter out blogs without an image
        const filteredBlogs = response.data.data.filter(blog => blog.imageUrl);
        setBlogs(filteredBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {blogs.map(blog => (
        <a key={blog._id} className="group flex flex-col focus:outline-none" href="#">
          <div className="aspect-w-4 aspect-h-3 overflow-hidden bg-gray-100 rounded-xl dark:bg-neutral-800">
            <img
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-xl w-full h-full"
              src={blog.imageUrl}
              alt={blog.title}
            />
          </div>
          <div className="pt-4">
            <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-primary-400">
              {blog.title}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">{blog.subtitle}</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-300">{blog.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="py-1 px-3 bg-white text-gray-600 border border-gray-200 text-xs rounded-full dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                {blog.category}
              </span>
              <span className="py-1 px-3 bg-white text-gray-600 border border-gray-200 text-xs rounded-full dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                {blog.userId.username}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default BlogCardGrid;