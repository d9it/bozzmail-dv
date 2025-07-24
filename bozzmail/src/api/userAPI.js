import apiCall from './axios';

// User API endpoints
export const userAPI = {
  // Get user details
  getUserDetails: async () => {
    try {
      const response = await apiCall('/user/details', {}, 'GET');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Update user profile
  updateUserProfile: async (userData) => {
    try {
      const response = await apiCall('/user/update', userData, 'POST');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Change password
  changePassword: async (passwordData) => {
    try {
      const response = await apiCall('/user/change-password', passwordData, 'POST');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Upload profile picture
  uploadProfilePicture: async (formData) => {
    try {
      const response = await apiCall('/user/update-profile-pic', formData, 'POST', {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Delete profile picture
  deleteProfilePicture: async () => {
    try {
      const response = await apiCall('/user/delete-profile-pic', {}, 'DELETE');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Delete user account
  deleteAccount: async () => {
    try {
      const response = await apiCall('/user/delete', {}, 'POST');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

}; 