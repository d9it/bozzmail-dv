import React, { useState } from "react";
import { NavLink } from "react-router";
import FooterPage from "../../components/FooterPage";
import { useAuth } from "../../hook/useAuth";
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const { register, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    
    if (!formData.fullName) {
      newErrors.fullName = 'Full Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, number, and special character';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      // Remove confirmPassword from the data sent to API
      const { confirmPassword, ...userData } = formData;
      await register(userData);
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-light-gray space-y p-16">
      {/* logo */}
      <div className="flex justify-center items-center pb-96">
        <img src="/asset/images/logo/main-logo.svg" alt="logo" title="Logo" className="h-38" />
      </div>

      {/* form */}
      <div className="max-w-form mx-auto bg-white p-30 rounded-20px">
        <div className="flex justify-center items-center p-8">
          <img src="/asset/images/logo/logo-icon.svg" alt="logo" title="Logo" className="h-38" />
        </div>

        <p className="text-center font-semibold text-xl pt-10 text-main-text">Create your account</p>

        <form onSubmit={handleSubmit} className="pt-20 space-y-20">
          <div className='flex justify-start gap-8 flex-col w-full'>
            <label htmlFor="fullName" className="label-text">Full Name</label>
            <input 
              type="text" 
              name="fullName" 
              id="fullName" 
              placeholder="Enter your full name"
              className={`form-input ${errors.fullName ? 'border-red-500' : ''}`}
              value={formData.fullName}
              onChange={handleInputChange}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">{errors.fullName}</span>
            )}
          </div>

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
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>

          <div className='flex justify-start gap-8 flex-col w-full'>
            <label htmlFor="confirmPassword" className="label-text">Confirm Password</label>
            <div className="relative">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                name="confirmPassword" 
                id="confirmPassword" 
                placeholder="•••••••••••••••••••••••••"
                className={`form-input ${errors.confirmPassword ? 'border-red-500' : ''}`}
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <img 
                  src={showConfirmPassword ? "/asset/icons/view-off.svg" : "/asset/icons/eye.svg"} 
                  alt="icon" 
                />
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">{errors.confirmPassword}</span>
            )}
          </div>

          <button 
            type="submit" 
            className="primary-btn w-full"
            disabled={loading}
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="text-sm font-medium text-main-text text-center pt-20">
          Already have an account? <NavLink to={"/login"} className="text-link">Sign in</NavLink>
        </p>
      </div>

      {/* footer */}
      <div className='text-center'>
        <FooterPage />
      </div>
    </div>
  );
};

export default RegisterPage;