// auth/form.jsx
import { formContainer,  socialButton } from "./authStyles";

export default function Form({ title, onSubmit, children }) {
  return (
    <div className={formContainer}>
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      
      <div className="flex justify-center gap-4 mb-6">
        <button className={socialButton}>
          <img src="/path/to/google-icon.png" alt="Google" className="w-5 h-5 mr-2" /> Google
        </button>
        <button className={socialButton}>
          <img src="/path/to/facebook-icon.png" alt="Facebook" className="w-5 h-5 mr-2" /> Facebook
        </button>
      </div>

      <p className="text-gray-500 mb-4">or continue with email</p>
      
      <form onSubmit={onSubmit} className="w-full">
        {children}
      </form>
    </div>
  );
}
