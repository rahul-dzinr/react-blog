import Layout from '../../components/layout/Layout'
import Form from "./components/form/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import STATUSES from "../../globals/status/statuses";
import { addBlog } from "../../../store/blogSlice";
import { useEffect } from "react";

const AddBlog = () => {
  const navigate = useNavigate();

  const { status } = useSelector((store) => store.blog);
  console.log(status)
  const dispatch = useDispatch();
  const handleAddBlog = (data) => {
    dispatch(addBlog(data));
  };

  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      navigate("/");
    }
  }, [status, navigate]);

  return (
    <Layout>
      <Form type="Create" onSubmit={handleAddBlog} />
    </Layout>
  );
};

export default AddBlog;
