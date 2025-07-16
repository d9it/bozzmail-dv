import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import FooterPage from "../../components/FooterPage";
import { useAuth } from "../../hook/useAuth";

const ForgotPasswordPage = () => {
  const { resetPassword, loading } = useAuth();
  const [formData, setFormData] = useState({
    password: '',
    cpassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Extract token from query string
  const query = new URLSearchParams(location.search);
  const token = query.get('token');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.password) {
      newErrors.password = 'New password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, number, and special character';
    }
    if (!formData.cpassword) {
      newErrors.cpassword = 'Please confirm your new password';
    } else if (formData.password !== formData.cpassword) {
      newErrors.cpassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    if (!validateForm()) return;
    if (!token) {
      setApiError("Reset token is missing. Please use the link from your email.");
      return;
    }
    try {
      await resetPassword({ password: formData.password, token });
      setSuccess(true);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setApiError(err.message || "Failed to reset password");
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
        <p className="text-center font-semibold text-xl pt-10 text-main-text">Create new Password</p>
        {success ? (
          <div className="text-green-600 text-center py-8">Password reset successful! Redirecting to login...</div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-20 space-y-20">
            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="password" className="label-text">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="•••••••••••••••••••••••••"
                  className={`form-input ${errors.password ? 'border-red-500' : ''}`}
                  value={formData.password}
                  onChange={handleInputChange}
                  disabled={loading}
                />
                <button
                  type="button"
                  className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img src={showPassword ? "/asset/icons/view-off.svg" : "/asset/icons/eye.svg"} alt="icon" />
                </button>
              </div>
              {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
            </div>
            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="cpassword" className="label-text">Confirm New Password</label>
              <div className="relative">
                <input
                  type={showCPassword ? "text" : "password"}
                  name="cpassword"
                  id="cpassword"
                  placeholder="•••••••••••••••••••••••••"
                  className={`form-input ${errors.cpassword ? 'border-red-500' : ''}`}
                  value={formData.cpassword}
                  onChange={handleInputChange}
                  disabled={loading}
                />
                <button
                  type="button"
                  className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center cursor-pointer"
                  onClick={() => setShowCPassword(!showCPassword)}
                >
                  <img src={showCPassword ? "/asset/icons/view-off.svg" : "/asset/icons/eye.svg"} alt="icon" />
                </button>
              </div>
              {errors.cpassword && <span className="text-red-500 text-sm">{errors.cpassword}</span>}
            </div>
            {apiError && <div className="text-red-500 text-center py-4">{apiError}</div>}
            <button type="submit" className="primary-btn w-full" disabled={loading}>
              {loading ? 'Resetting...' : 'Confirm'}
            </button>
          </form>
        )}
      </div>
      {/* footer */}
      <div className='text-center'>
        <FooterPage />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
