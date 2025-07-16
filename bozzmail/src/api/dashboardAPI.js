import apiCall from './axios';

// Dashboard Statistics
export const getDashboardStats = () => {
  return apiCall('/user/dashboard/stats', {}, 'GET');
};

// Recent Shipments
export const getRecentShipments = (limit = 5) => {
  return apiCall('/user/shipments/recent', { limit }, 'GET');
};

// Notifications
export const getNotifications = (unreadOnly = false) => {
  return apiCall('/user/notifications', { unread: unreadOnly }, 'GET');
};

// User Profile Summary
export const getUserProfileSummary = () => {
  return apiCall('/user/profile/summary', {}, 'GET');
};

// Mark notification as read
export const markNotificationRead = (notificationId) => {
  return apiCall(`/user/notifications/${notificationId}/read`, {}, 'PUT');
};

// Clear all notifications
export const clearAllNotifications = () => {
  return apiCall('/user/notifications/clear', {}, 'DELETE');
}; 