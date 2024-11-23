import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from 'react';  // Import Suspense from react
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Home from "../pages/Home";
import Protected from "../Protected";
import { Navbar } from "../components";

const AddBlog = lazy(() => import("../pages/blog/AddBlog"));
const EditBlog = lazy(() => import("../pages/blog/EditBlog"));
const SingleBlog = lazy(() => import("../pages/blog/SingleBlog"));

const AllRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/add" element={<Protected><AddBlog /></Protected>} />
          <Route path="/blog/edit/:id" element={<Protected><EditBlog /></Protected>} />
          <Route path="/blog/:id" element={<SingleBlog />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AllRoutes;
