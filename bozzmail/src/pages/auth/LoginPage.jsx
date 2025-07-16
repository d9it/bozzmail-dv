import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import FooterPage from "../../components/FooterPage";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useAuth } from "../../hook/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loading, error, clearError } = useAuth();
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
    
    // Clear API error when user starts typing
    if (error) {
      clearError();
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const result = await login(formData);
    
    if (result.success) {
      // Redirect to dashboard on successful login
      navigate("/dashboard");
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-light-gray space-y-16 p-16">
      {/* logo */}
      <div className="flex justify-center items-center pb-96 mb-0">
        <img src="/asset/images/logo/main-logo.svg" alt="logo" title="Logo" className="h-38" />
      </div>

      {/* form */}
      <div className="max-w-form mx-auto bg-white p-30 rounded-20px">
        <div className="flex justify-center items-center p-8">
          <img src="/asset/images/logo/logo-icon.svg" alt="logo" title="Logo" className="h-38" />
        </div>

        <p className="text-center font-semibold text-xl pt-10 text-main-text">Welcome back!</p>

        {/* API Error Display */}
        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="pt-20 space-y-20">
          <div className='flex justify-start gap-8 flex-col w-full'>
            <label htmlFor="email" className="label-text">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="hello@company.com"
              className={`form-input ${validationErrors.email ? 'border-red-500' : ''}`}
              value={formData.email}
              onChange={handleInputChange}
            />
            {validationErrors.email && (
              <span className="text-red-500 text-sm">{validationErrors.email}</span>
            )}
          </div>

          <div className='flex justify-start gap-8 flex-col w-full'>
            <label htmlFor="password" className="label-text">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                name="password" 
                id="password" 
                placeholder="•••••••••••••••••••••••••"
                className={`form-input ${validationErrors.password ? 'border-red-500' : ''}`}
                value={formData.password}
                onChange={handleInputChange}
              />

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center hover:bg-gray-50"
              >
                <img 
                  src={showPassword ? "/asset/icons/view-off.svg" : "/asset/icons/eye.svg"} 
                  alt="icon" 
                />
              </button>

              <NavLink to={"/forgot-password-reset-link"} className="text-link text-right block pt-4">
                Forgot Password?
              </NavLink>
            </div>
            {validationErrors.password && (
              <span className="text-red-500 text-sm">{validationErrors.password}</span>
            )}
          </div>

          <button 
            type="submit" 
            className="primary-btn w-full disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <LoadingSpinner size="sm" text="" />
                <span>Logging in...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="text-sm font-medium text-main-text text-center pt-20">
          Don't have an account? <NavLink to={"/register"} className="text-link">Create an account</NavLink>
        </p>
      </div>

      {/* footer */}
      <div className='text-center'>
        <FooterPage />
      </div>
    </div>
  );
};

export default LoginPage;
