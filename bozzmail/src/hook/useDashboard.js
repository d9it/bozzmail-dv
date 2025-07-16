import { useState, useEffect } from 'react';
import { 
  getDashboardStats, 
  getRecentShipments, 
  getNotifications, 
  getUserProfileSummary 
} from '../api/dashboardAPI';
import { handleAPIError } from '../api/apiService';

export const useDashboard = () => {
  const [stats, setStats] = useState(null);
  const [recentShipments, setRecentShipments] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all dashboard data
  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch all data in parallel
      const [statsResponse, shipmentsResponse, notificationsResponse, profileResponse] = await Promise.all([
        getDashboardStats(),
        getRecentShipments(),
        getNotifications(),
        getUserProfileSummary()
      ]);

      setStats(statsResponse.data);
      setRecentShipments(shipmentsResponse.data);
      setNotifications(notificationsResponse.data);
      setUserProfile(profileResponse.data);
    } catch (error) {
      const errorMessage = handleAPIError(error);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Refresh dashboard data
  const refreshDashboard = () => {
    fetchDashboardData();
  };

  // Get unread notifications count
  const unreadNotificationsCount = notifications.filter(n => !n.isRead).length;

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Format time ago
  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return 'Yesterday';
    
    return formatDate(dateString);
  };

  // Get shipment status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600';
      case 'in_transit':
        return 'text-blue-600';
      case 'pending':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  // Get shipment status text
  const getStatusText = (status) => {
    switch (status) {
      case 'delivered':
        return 'Delivered';
      case 'in_transit':
        return 'In Transit';
      case 'pending':
        return 'Pending';
      default:
        return 'Unknown';
    }
  };

  // Load dashboard data on mount
  useEffect(() => {
    fetchDashboardData();
  }, []);

  return {
    // Data
    stats,
    recentShipments,
    notifications,
    userProfile,
    unreadNotificationsCount,
    
    // State
    loading,
    error,
    
    // Actions
    refreshDashboard,
    
    // Utilities
    formatCurrency,
    formatDate,
    formatTimeAgo,
    getStatusColor,
    getStatusText
  };
}; 