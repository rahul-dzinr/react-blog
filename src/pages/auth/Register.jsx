// auth/register.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, setStatus } from "../../../store/authSlice";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import STATUSES from "../../globals/status/statuses";

const Register = () => {
  const { status } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (data) => {
    dispatch(register(data));
  };

  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      console.log(status);
      dispatch(setStatus(null))
      navigate('/login');
    }
  }, [status]);

  return (
    <Form type='register' onSubmit={handleRegister} />
  );
};

export default Register;