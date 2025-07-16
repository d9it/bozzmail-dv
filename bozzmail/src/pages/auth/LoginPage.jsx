import React, { useState } from "react";
import { NavLink } from "react-router";
import FooterPage from "../../components/FooterPage";
import { useAuth } from "../../hook/useAuth";
import { toast } from 'react-toastify';

const LoginPage = () => {
  const { login, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await login(formData);
    } catch (err) {
      console.error('Login error:', err);
    }
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

        <form onSubmit={handleSubmit} className="pt-20 space-y-20">
          <div className='flex justify-start gap-8 flex-col w-full'>
            <label htmlFor="email" className="label-text">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="hello@company.com"
              className={`form-input ${errors.email ? 'border-red-500' : ''}`}
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
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
                className={`form-input ${errors.password ? 'border-red-500' : ''}`}
                value={formData.password}
                onChange={handleInputChange}
              />

              <button
                type="button"
                className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
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
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>

          <button 
            type="submit" 
            className="primary-btn w-full"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
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
