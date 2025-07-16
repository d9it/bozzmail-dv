import React, { useState } from "react";
import { NavLink } from "react-router";
import FooterPage from "../../components/FooterPage";
import { useAuth } from "../../hook/useAuth";
import { toast } from 'react-toastify';

const ForgotPasswordResetLink = () => {
  const { forgotPassword, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    try {
      await forgotPassword({ email });
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Failed to send reset link");
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
        <p className="text-center font-semibold text-xl pt-10 text-main-text">Forgot Password</p>
        <p className="text-sm font-medium text-center pt-10 text-main-text-shaded">Please provide your Email so we can send you the reset password link</p>
        {success ? (
          <div className="text-green-600 text-center py-8">Reset link sent! Please check your email.</div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-20 space-y-20">
            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="email" className="label-text">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="hello@company.com"
                className={`form-input ${error ? 'border-red-500' : ''}`}
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={loading}
              />
              {error && <span className="text-red-500 text-sm">{error}</span>}
            </div>
            <button type="submit" className="primary-btn block w-full" disabled={loading}>
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
        )}
        <NavLink to={"/login"} className="text-link text-center block pt-20">Go back to Login</NavLink>
      </div>
      {/* footer */}
      <div className='text-center'>
        <FooterPage />
      </div>
    </div>
  );
};

export default ForgotPasswordResetLink;
