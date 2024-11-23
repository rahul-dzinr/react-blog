import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token: user, status } = useSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    setIsLoggedIn(!!token || !!user);
  }, [user]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    navigate("/login");
  }, [navigate]);

  const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto px-4 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
            <h1>Logo</h1>
          </Link>
          <div className="flex md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={toggleMenu}
              className="ml-2 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring dark:text-gray-400 dark:hover:text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-4 mt-4 md:mt-0`}
        >
          {/* <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <Link to="/work" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Work</Link>
            <Link to="/services" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</Link>
            <Link to="/careers" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Careers</Link>
          </div> */}

          <div className="flex flex-col md:flex-row md:items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-2">
            <button
              onClick={toggleTheme}
              className="hidden md:block p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {isLoggedIn ? (
              <>
                <Link
                  to="/blog/add"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  Create Blog
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-white bg-lime-500 rounded-md hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-lime-500 rounded-md hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

