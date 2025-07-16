import apiCall from './axios';

// Dashboard API endpoints
export const dashboardAPI = {
  // Get user profile details
  getUserProfile: async () => {
    try {
      const response = await apiCall('/user/details', {}, 'GET');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get user shipments (recent shipments)
  getUserShipments: async (page = 1, limit = 10) => {
    try {
      const response = await apiCall('/user/shipments/recent', { limit }, 'GET');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get wallet balance
  getWalletBalance: async () => {
    try {
      const response = await apiCall('/user/payment/wallet-balance', {}, 'GET');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get user transactions
  getUserTransactions: async () => {
    try {
      const response = await apiCall('/user/payment/transactions', {}, 'GET');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get user notifications
  getUserNotifications: async () => {
    try {
      const response = await apiCall('/user/notifications', {}, 'GET');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get address book (saved contacts)
  getAddressBook: async () => {
    try {
      const response = await apiCall('/address', {}, 'GET');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get dashboard statistics (will be created in backend)
  getDashboardStats: async () => {
    try {
      const response = await apiCall('/user/dashboard/stats', {}, 'GET');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get recent shipments summary
  getRecentShipments: async () => {
    try {
      const response = await apiCall('/user/shipments/recent', {}, 'GET');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
}; 