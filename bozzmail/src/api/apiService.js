import apiCall from './axios';

// Auth API calls
export const authAPI = {
  login: (credentials) => apiCall('/auth/login', credentials, 'POST'),
  register: (userData) => apiCall('/auth/register', userData, 'POST'),
  forgotPassword: (email) => apiCall('/auth/forgot-password', { email }, 'POST'),
  resetPassword: (data) => apiCall('/auth/reset-password', data, 'POST'),
  verifyOTP: (otp) => apiCall('/auth/verify-otp', { otp }, 'POST'),
  logout: () => apiCall('/auth/logout', {}, 'POST'),
};

// User API calls
export const userAPI = {
  getProfile: () => apiCall('/user/profile', {}, 'GET'),
  updateProfile: (data) => apiCall('/user/profile', data, 'PUT'),
  getAddresses: () => apiCall('/user/addresses', {}, 'GET'),
  addAddress: (address) => apiCall('/user/addresses', address, 'POST'),
  updateAddress: (id, address) => apiCall(`/user/addresses/${id}`, address, 'PUT'),
  deleteAddress: (id) => apiCall(`/user/addresses/${id}`, {}, 'DELETE'),
  getNotifications: () => apiCall('/user/notifications', {}, 'GET'),
  markNotificationRead: (id) => apiCall(`/user/notifications/${id}/read`, {}, 'PUT'),
};

// Shipment API calls
export const shipmentAPI = {
  createShipment: (shipmentData) => apiCall('/shipments', shipmentData, 'POST'),
  getShipments: (params = {}) => apiCall('/shipments', params, 'GET'),
  getShipment: (id) => apiCall(`/shipments/${id}`, {}, 'GET'),
  updateShipment: (id, data) => apiCall(`/shipments/${id}`, data, 'PUT'),
  deleteShipment: (id) => apiCall(`/shipments/${id}`, {}, 'DELETE'),
  trackShipment: (id) => apiCall(`/shipments/${id}/track`, {}, 'GET'),
  batchShipments: (data) => apiCall('/shipments/batch', data, 'POST'),
};

// Pickup API calls
export const pickupAPI = {
  schedulePickup: (pickupData) => apiCall('/pickup', pickupData, 'POST'),
  getPickups: (params = {}) => apiCall('/pickup', params, 'GET'),
  getPickup: (id) => apiCall(`/pickup/${id}`, {}, 'GET'),
  updatePickup: (id, data) => apiCall(`/pickup/${id}`, data, 'PUT'),
  cancelPickup: (id) => apiCall(`/pickup/${id}/cancel`, {}, 'PUT'),
};

// Payment API calls
export const paymentAPI = {
  getWallet: () => apiCall('/user/wallet', {}, 'GET'),
  addFunds: (data) => apiCall('/user/wallet/add-funds', data, 'POST'),
  getTransactions: (params = {}) => apiCall('/user/transactions', params, 'GET'),
  getSubscription: () => apiCall('/user/subscription', {}, 'GET'),
  upgradeSubscription: (plan) => apiCall('/user/subscription/upgrade', { plan }, 'POST'),
  cancelSubscription: () => apiCall('/user/subscription/cancel', {}, 'POST'),
};

// Print Mail API calls
export const printMailAPI = {
  createPrintMail: (data) => apiCall('/print-mail', data, 'POST'),
  getPrintMails: (params = {}) => apiCall('/print-mail', params, 'GET'),
  getPrintMail: (id) => apiCall(`/print-mail/${id}`, {}, 'GET'),
  updatePrintMail: (id, data) => apiCall(`/print-mail/${id}`, data, 'PUT'),
  deletePrintMail: (id) => apiCall(`/print-mail/${id}`, {}, 'DELETE'),
};

// Customs API calls
export const customsAPI = {
  getHSCodes: (params = {}) => apiCall('/customs/hscodes', params, 'GET'),
  getCustomsInfo: (params = {}) => apiCall('/customs/info', params, 'GET'),
};

// Admin API calls (if user has admin role)
export const adminAPI = {
  getAllUsers: (params = {}) => apiCall('/admin/users', params, 'GET'),
  getUser: (id) => apiCall(`/admin/users/${id}`, {}, 'GET'),
  updateUser: (id, data) => apiCall(`/admin/users/${id}`, data, 'PUT'),
  deleteUser: (id) => apiCall(`/admin/users/${id}`, {}, 'DELETE'),
  getSystemStats: () => apiCall('/admin/stats', {}, 'GET'),
};

// Utility function to handle API responses
export const handleAPIResponse = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  throw new Error(response.data?.message || 'API request failed');
};

// Utility function to handle API errors
export const handleAPIError = (error) => {
  if (error.response) {
    // Server responded with error status
    const { status, data } = error.response;
    switch (status) {
      case 401:
        // Unauthorized - redirect to login
        localStorage.removeItem('token');
        window.location.href = '/login';
        break;
      case 403:
        // Forbidden
        throw new Error('Access denied');
      case 404:
        // Not found
        throw new Error('Resource not found');
      case 422:
        // Validation error
        throw new Error(data?.message || 'Validation failed');
      case 500:
        // Server error
        throw new Error('Server error occurred');
      default:
        throw new Error(data?.message || 'An error occurred');
    }
  } else if (error.request) {
    // Network error
    throw new Error('Network error - please check your connection');
  } else {
    // Other error
    throw new Error(error.message || 'An error occurred');
  }
}; 