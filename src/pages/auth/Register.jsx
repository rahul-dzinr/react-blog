// auth/register.jsx
import { inputField } from "./authStyles";
import Form from "./form";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add register logic here
  };

  return (
    <div className="auth-container flex h-screen">
      <div className="left-panel flex items-center justify-center w-1/2 bg-gray-50">
        <Form title="Create your Account" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className={inputField}
          />
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

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Register
          </button>

          <p className="text-gray-600 mt-4">
            Already have an account? <a href="/login" className="text-blue-500">Log in</a>
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


  export default Register