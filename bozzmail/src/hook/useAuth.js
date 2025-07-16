import { useState } from 'react';
import { useNavigate } from 'react-router';
import { authAPI } from '../api/authAPI';
import { toast } from 'react-toastify';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Login function
  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await authAPI.login(credentials);
      
      // Store token in localStorage
      if (response.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      }
      
      toast.success('Login successful!');
      navigate('/dashboard');
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Login failed. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
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
      
      // Store token in localStorage if auto-login is enabled
      if (response.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      }
      
      toast.success('Registration successful!');
      navigate('/dashboard');
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Registration failed. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
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
      navigate('/login');
      toast.success('Logged out successfully');
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
      toast.success('OTP sent successfully!');
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Failed to send OTP. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
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
      toast.success('OTP verified successfully!');
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Invalid OTP. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
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
      toast.success('Password reset link sent to your email!');
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Failed to send reset link. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
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
    isAuthenticated,
    getCurrentUser,
    loading,
    error,
    setError
  };
}; 