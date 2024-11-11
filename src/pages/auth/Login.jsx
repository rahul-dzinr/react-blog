// auth/login.jsx

import { inputField } from "./authStyles";
import Form from "./form";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <div className="auth-container flex h-screen">
      <div className="left-panel flex items-center justify-center w-1/2 bg-gray-50">
        <Form title="Log in to your Account" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className={inputField}
          />
          <input
            type="password"
            placeholder="Password"
            className={inputField}
          />
          
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="/forgot-password" className="text-blue-500 text-sm">Forgot Password?</a>
          </div>
          
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Log in
          </button>
          
          <p className="text-gray-600 mt-4">
            Don’t have an account? <a href="/register" className="text-blue-500">Create an account</a>
          </p>
        </Form>
      </div>

      <div className="right-panel w-1/2 bg-blue-600 text-white flex flex-col items-center justify-center p-12">
        <h2 className="text-3xl font-bold mb-4">Connect with every application.</h2>
        <p className="text-center max-w-xs">
          Everything you need in an easily customizable dashboard.
        </p>
      </div>
    </div>
  );
}


  export default Login