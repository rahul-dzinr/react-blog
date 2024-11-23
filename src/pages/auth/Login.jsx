// auth/login.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { login, setStatus } from "../../../store/authSlice";
import STATUSES from "../../globals/status/statuses";

const Login = () => {

  const {user, status, token} = useSelector((state)=>state.auth)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const handleLogin = (data) => {
    // Add login logic here
    dispatch(login(data))
  };

  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      localStorage.setItem('jwt', token);
      console.log(status);
      navigate('/');
      dispatch(setStatus(null))
    }
  }, [status]);

  return (
     <Form type="Login" user={user ? user : ""} onSubmit={handleLogin} />

  );
}


  export default Login