import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import Card from "./blog/components/card/Card";
import Spinner from "./blog/components/spinner/Spinner";
import { fetchBlog } from "../../store/blogSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { inputData, status } = useSelector((store) => store.blog);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4; // Changed to 4 to show 2 rows of 2 cards

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  const filteredData = useMemo(() => {
    if (!Array.isArray(inputData)) return [];
    
    return inputData.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [inputData, searchTerm]);

  // Pagination calculation
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredData.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredData.length / blogsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const PaginationButton = ({ pageNumber, isActive }) => (
    <button
      onClick={() => handlePageChange(pageNumber)}
      className={`px-4 py-2 mx-1 rounded-md ${
        isActive 
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
      }`}
    >
      {pageNumber}
    </button>
  );

  const Pagination = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex items-center justify-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Previous
        </button>

        {startPage > 1 && (
          <>
            <PaginationButton pageNumber={1} isActive={currentPage === 1} />
            {startPage > 2 && (
              <span className="px-3 py-2 text-gray-500 dark:text-gray-400">...</span>
            )}
          </>
        )}

        {pageNumbers.map(number => (
          <PaginationButton
            key={number}
            pageNumber={number}
            isActive={currentPage === number}
          />
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="px-3 py-2 text-gray-500 dark:text-gray-400">...</span>
            )}
            <PaginationButton
              pageNumber={totalPages}
              isActive={currentPage === totalPages}
            />
          </>
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {status === "loading" ? (
          <Spinner />
        ) : (
          <>
            {/* Updated grid layout for 2 cards per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {currentBlogs && currentBlogs.length > 0 ? (
                currentBlogs.map((data) => (
                  <div key={data._id} className="w-full">
                    <Card data={data} />
                  </div>
                ))
              ) : (
                <p className="text-center col-span-full text-gray-600 dark:text-gray-400">
                  No blogs found.
                </p>
              )}
            </div>

            {filteredData.length > blogsPerPage && <Pagination />}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Home;