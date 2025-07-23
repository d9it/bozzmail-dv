import { useState, useEffect } from 'react';
import { notificationAPI } from '../api/notificationAPI';
import { useToast } from "../context/toast/ToastContext";

export const useNotification = () => {
  const { showToast } = useToast();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unreadCount, setUnreadCount] = useState(0);

  // Get user notifications
  const getUserNotifications = async (page = 1, limit = 10) => {
    setLoading(true);
    setError(null);

    try {
      const response = await notificationAPI.getUserNotifications(page, limit);
      setNotifications(response.notifications?.data || []);
      
      // Calculate unread count
      const unreadNotifications = (response.notifications?.data || []).filter(
        notification => !notification.is_read
      );
      setUnreadCount(unreadNotifications.length);
      
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Failed to fetch notifications.';
      setError(errorMessage);
      showToast({ message: errorMessage, type: 'error' });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Mark notifications as read
  const markNotificationsAsRead = async (notificationIds) => {
    setLoading(true);
    setError(null);

    try {
      const response = await notificationAPI.markNotificationsAsRead(notificationIds);
      
      // Update local state
      setNotifications(prevNotifications => 
        prevNotifications.map(notification => 
          notificationIds.includes(notification._id) 
            ? { ...notification, is_read: true }
            : notification
        )
      );
      
      // Recalculate unread count
      const updatedUnreadCount = notifications.filter(
        notification => !notification.is_read
      ).length;
      setUnreadCount(updatedUnreadCount);

      showToast({ message: 'Notifications marked as read!' });
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Failed to mark notifications as read.';
      setError(errorMessage);
      showToast({ message: errorMessage, type: 'error' });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete notifications
  const deleteNotifications = async (notificationIds) => {
    setLoading(true);
    setError(null);

    try {
      const response = await notificationAPI.deleteNotifications(notificationIds);
      
      // Update local state
      setNotifications(prevNotifications => 
        prevNotifications.filter(notification => 
          !notificationIds.includes(notification._id)
        )
      );
      
      // Recalculate unread count
      const updatedUnreadCount = notifications.filter(
        notification => !notification.is_read
      ).length;
      setUnreadCount(updatedUnreadCount);

      showToast({ message: 'Notifications deleted successfully!' });
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Failed to delete notifications.';
      setError(errorMessage);
      showToast({ message: errorMessage, type: 'error' });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Mark single notification as read
  const markNotificationAsRead = async (notificationId) => {
    return await markNotificationsAsRead([notificationId]);
  };

  // Delete single notification
  const deleteNotification = async (notificationId) => {
    return await deleteNotifications([notificationId]);
  };

  // Clear all notifications
  const clearAllNotifications = async () => {
    const allNotificationIds = notifications.map(notification => notification._id);
    if (allNotificationIds.length > 0) {
      return await deleteNotifications(allNotificationIds);
    }
  };

  // Load notifications on mount
  useEffect(() => {
    getUserNotifications();
  }, []);

  return {
    notifications,
    loading,
    error,
    unreadCount,
    getUserNotifications,
    markNotificationsAsRead,
    markNotificationAsRead,
    deleteNotifications,
    deleteNotification,
    clearAllNotifications,
  };
}; 