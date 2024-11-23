import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from '../../components/layout/Layout';
import { setEditStatus, editBlog } from "../../../store/blogSlice";

const EditBlog = () => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    category: "",
    description: "",
    image: "",
  });
  const { editStatus } = useSelector((store) => store.blog);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };

  const handleEditBlog = (e) => {
    e.preventDefault();
    dispatch(editBlog(data, id));
  };

  useEffect(() => {
    if (editStatus === true) {
      dispatch(setEditStatus(null));
      navigate(`/blog/${id}`);
    }
  }, [editStatus, navigate, id, dispatch]);

  return (
    <Layout>
      <form onSubmit={handleEditBlog}>
        <div className="max-w-2xl mx-auto p-4 bg-[#f2f2f2]">
          <h2 className="text-center text-4xl mt-5 font-bold">Edit Blog</h2>
          <br />
          <div className="mb-6">
            <label htmlFor="title" className="block text-lg font-medium text-gray-800 mb-1">
              Title
            </label>
            <input
              value={data.title}
              type="text"
              id="title"
              name="title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              onChange={handleChange}
              required
            />
          </div>
          {/* Add other fields similarly */}
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </Layout>
  );
};

export default EditBlog;
