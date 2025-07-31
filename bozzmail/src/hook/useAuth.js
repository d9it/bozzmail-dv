import { useState } from 'react';
import { useNavigate } from 'react-router';
import { authAPI } from '../api/authAPI';
import { useToast } from "../context/toast/ToastContext";

export const useAuth = () => {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Login function
  const login = async (credentials) => {
    setLoading(true);
    setError(null);

    try {
      const response = await authAPI.login(credentials);
      // console.log('login response: ', response);

      // Store token in localStorage
      if (response.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      showToast({ message: 'Login successful!', subText: 'Redirecting...' });
        navigate('/dashboard');
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Login failed. Please try again.';
      setError(errorMessage);
      showToast({ message: errorMessage, type: 'error' });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await authAPI.register(userData);
      console.log('register response: ', response);


      // Store token in localStorage if auto-login is enabled
      if (response.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      showToast({ message: 'Account created successfully!', subText: 'Redirecting...' });
        navigate('/dashboard');
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Registration failed. Please try again.';
      setError(errorMessage);
      showToast({ message: errorMessage, type: 'error' });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      // Clear localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      showToast({ message: 'Logged out successfully!', subText: 'Redirecting...' });
        navigate('/');
    }
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  // Get current user
  const getCurrentUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };

  // Send OTP
  const sendOTP = async (phoneData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await authAPI.sendOTP(phoneData);
      showToast({ message: 'OTP sent successfully!' });
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Failed to send OTP. Please try again.';
      setError(errorMessage);
      showToast({ message: errorMessage, type: 'error' });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const verifyOTP = async (otpData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await authAPI.verifyOTP(otpData);
      showToast({ message: 'OTP verified successfully!' });
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Invalid OTP. Please try again.';
      setError(errorMessage);
      showToast({ message: errorMessage, type: 'error' });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Forgot password
  const forgotPassword = async (emailData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await authAPI.forgotPassword(emailData);
      showToast({ message: 'Link has been successfully sent!' });
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Failed to send reset link. Please try again.';
      setError(errorMessage);
      showToast({ message: errorMessage, type: 'error' });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Reset password
  const resetPassword = async (resetData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await authAPI.resetPassword(resetData);
      showToast({ message: 'Login with your new password!' });
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Failed to reset password. Please try again.';
      setError(errorMessage);
      showToast({ message: errorMessage, type: 'error' });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    register,
    logout,
    sendOTP,
    verifyOTP,
    forgotPassword,
    resetPassword,
    isAuthenticated,
    getCurrentUser,
    loading,
    error,
    setError
  };
}; 