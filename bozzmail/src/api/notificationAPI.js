import apiCall from './axios';

// Notification API endpoints
export const notificationAPI = {
  // Get user notifications
  getUserNotifications: async (page = 1, limit = 10) => {
    try {
      const response = await apiCall(`/user/notifications?page=${page}&limit=${limit}`, {}, 'GET');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Mark notifications as read
  markNotificationsAsRead: async (notificationIds) => {
    try {
      const response = await apiCall('/user/notifications/mark-read', { ids: notificationIds }, 'POST');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Delete notifications
  deleteNotifications: async (notificationIds) => {
    try {
      const response = await apiCall('/user/delete-notifications', { ids: notificationIds }, 'POST');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
}; 