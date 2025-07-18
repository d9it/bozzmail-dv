import apiCall from './axios';

// Authentication API endpoints
export const authAPI = {
  // Login with email and password
  login: async (credentials) => {
    try {
      const response = await apiCall('/auth/signin/password', credentials, 'POST');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Register new user
  register: async (userData) => {
    try {
      const response = await apiCall('/auth/signup', userData, 'POST');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Send OTP for phone verification
  sendOTP: async (phoneData) => {
    try {
      const response = await apiCall('/auth/send-otp', phoneData, 'POST');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Verify OTP
  verifyOTP: async (otpData) => {
    try {
      const response = await apiCall('/auth/verify-otp', otpData, 'POST');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Forgot password
  forgotPassword: async (emailData) => {
    try {
      const response = await apiCall('/auth/forgot-password', emailData, 'POST');
      console.log('forgot password response: ',response)
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Reset password
  resetPassword: async (resetData) => {
    try {
      const response = await apiCall('/auth/reset-password', resetData, 'POST');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Logout
  logout: async () => {
    try {
      const response = await apiCall('/auth/logout', {}, 'GET');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
}; 