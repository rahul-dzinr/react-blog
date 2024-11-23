import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from '../../components/layout/Layout';
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog, fetchSingleBlog, setDeleteStatus } from "../../../store/blogSlice";
import Spinner from "./components/spinner/Spinner";

const SingleBlog = () => {
  const { id } = useParams();
  const { inputData, deleteStatus } = useSelector((store) => store.blog);
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleBlog(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (inputData) {
      // Use Picsum Photos with the blog's ID to generate a consistent random image
      setImageUrl(`https://picsum.photos/800/600?random=${inputData._id}`);
    }
  }, [inputData]);

  const handleDelete = () => {
    dispatch(deleteBlog(id));
    
  };

  useEffect(() => {
    console.log(deleteStatus)
    if (deleteStatus === true) {
      dispatch(setDeleteStatus(null));
      navigate("/");
    }
  }, [deleteStatus, navigate, dispatch]);

  return (
    <Layout>
      {inputData ? (
        <div className="bg-gray-100 dark:bg-gray-800 py-8 h-screen">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src={imageUrl}
                    alt={inputData.title}
                    loading="lazy"
                  />
                </div>
                <div className="flex -mx-2 mb-4">
                  <div className="w-1/2 px-2">
                    <Link to={`/blog/edit/${id}`}>
                      <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                        Edit
                      </button>
                    </Link>
                  </div>
                  <div className="w-1/2 px-2">
                    <button
                      className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* Additional Blog Details */}
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                    {inputData.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {inputData.subtitle}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {inputData.description}
                  </p>
                  <div className="mt-2">
                    <span className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      #{inputData.category}
                    </span>
                  </div>
                  {inputData.userId && (
                    <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                      <p>Author: {inputData.userId.username}</p>
                      <p>Email: {inputData.userId.email}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </Layout>
  );
};

export default SingleBlog;