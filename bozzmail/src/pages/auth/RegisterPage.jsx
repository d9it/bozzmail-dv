import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import FooterPage from "../../components/FooterPage";
import LoadingSpinner from "../../components/LoadingSpinner";
import SuccessMessage from "../../components/SuccessMessage";
import PasswordStrength from "../../components/PasswordStrength";
import { useAuth } from "../../hook/useAuth";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register, loading, error, clearError } = useAuth();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
    
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      errors.firstName = "First name must be at least 2 characters";
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      errors.lastName = "Last name must be at least 2 characters";
    }
    
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      errors.password = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }
    
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    
    if (!formData.agreeToTerms) {
      errors.agreeToTerms = "You must agree to the terms and conditions";
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
    
    const registrationData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.toLowerCase(),
      password: formData.password
    };
    
    const result = await register(registrationData);
    
    if (result.success) {
      // Show success message before redirecting
      setShowSuccess(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  // Show success message if registration was successful
  if (showSuccess) {
    return (
      <SuccessMessage
        title="Account Created Successfully!"
        message="Your account has been created and you're now logged in. Redirecting to dashboard..."
        actionText="Go to Dashboard"
        onAction={() => navigate("/dashboard")}
      />
    );
  }

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

        <p className="text-center font-semibold text-xl pt-10 text-main-text">Create your account</p>

        {/* API Error Display */}
        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="pt-20 space-y-20">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="firstName" className="label-text">First Name</label>
              <input 
                type="text" 
                name="firstName" 
                id="firstName" 
                placeholder="John"
                className={`form-input ${validationErrors.firstName ? 'border-red-500' : ''}`}
                value={formData.firstName}
                onChange={handleInputChange}
              />
              {validationErrors.firstName && (
                <span className="text-red-500 text-sm">{validationErrors.firstName}</span>
              )}
            </div>

            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="lastName" className="label-text">Last Name</label>
              <input 
                type="text" 
                name="lastName" 
                id="lastName" 
                placeholder="Doe"
                className={`form-input ${validationErrors.lastName ? 'border-red-500' : ''}`}
                value={formData.lastName}
                onChange={handleInputChange}
              />
              {validationErrors.lastName && (
                <span className="text-red-500 text-sm">{validationErrors.lastName}</span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className='flex justify-start gap-8 flex-col w-full'>
            <label htmlFor="email" className="label-text">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="john.doe@company.com"
              className={`form-input ${validationErrors.email ? 'border-red-500' : ''}`}
              value={formData.email}
              onChange={handleInputChange}
            />
            {validationErrors.email && (
              <span className="text-red-500 text-sm">{validationErrors.email}</span>
            )}
          </div>

          {/* Password */}
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
                onClick={() => togglePasswordVisibility('password')}
                className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center hover:bg-gray-50"
              >
                <img 
                  src={showPassword ? "/asset/icons/view-off.svg" : "/asset/icons/eye.svg"} 
                  alt="icon" 
                />
              </button>
            </div>
            {validationErrors.password && (
              <span className="text-red-500 text-sm">{validationErrors.password}</span>
            )}
            <PasswordStrength password={formData.password} />
            <p className="text-xs text-gray-500 mt-1">
              Password must be at least 8 characters with uppercase, lowercase, and number
            </p>
          </div>

          {/* Confirm Password */}
          <div className='flex justify-start gap-8 flex-col w-full'>
            <label htmlFor="confirmPassword" className="label-text">Confirm Password</label>
            <div className="relative">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                name="confirmPassword" 
                id="confirmPassword" 
                placeholder="•••••••••••••••••••••••••"
                className={`form-input ${validationErrors.confirmPassword ? 'border-red-500' : ''}`}
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('confirmPassword')}
                className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center hover:bg-gray-50"
              >
                <img 
                  src={showConfirmPassword ? "/asset/icons/view-off.svg" : "/asset/icons/eye.svg"} 
                  alt="icon" 
                />
              </button>
            </div>
            {validationErrors.confirmPassword && (
              <span className="text-red-500 text-sm">{validationErrors.confirmPassword}</span>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className='flex justify-start gap-8 flex-col w-full'>
            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                name="agreeToTerms" 
                id="agreeToTerms"
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
              />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                I agree to the{" "}
                <NavLink to="/terms" className="text-link hover:underline">
                  Terms and Conditions
                </NavLink>
                {" "}and{" "}
                <NavLink to="/privacy" className="text-link hover:underline">
                  Privacy Policy
                </NavLink>
              </label>
            </div>
            {validationErrors.agreeToTerms && (
              <span className="text-red-500 text-sm">{validationErrors.agreeToTerms}</span>
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
                <span>Creating account...</span>
              </div>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <p className="text-sm font-medium text-main-text text-center pt-20">
          Already have an account? <NavLink to={"/"} className="text-link">Sign in</NavLink>
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