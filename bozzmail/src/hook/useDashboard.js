import { useState, useEffect } from 'react';
import { dashboardAPI } from '../api/dashboardAPI';
import { toast } from 'react-toastify';

export const useDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dashboardData, setDashboardData] = useState({
    userProfile: null,
    shipments: [],
    walletBalance: 0,
    transactions: [],
    notifications: [],
    addressBook: [],
    stats: {
      totalLabels: 0,
      inTransit: 0,
      monthlySpend: 0,
      savedContacts: 0
    },
    recentShipments: []
  });

  // Fetch all dashboard data
  const fetchDashboardData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch all data in parallel
      const [
        userProfile,
        shipments,
        walletBalance,
        transactions,
        notifications,
        addressBook
      ] = await Promise.all([
        dashboardAPI.getUserProfile(),
        dashboardAPI.getUserShipments(1, 5), // Get recent 5 shipments
        dashboardAPI.getWalletBalance(),
        dashboardAPI.getUserTransactions(),
        dashboardAPI.getUserNotifications(),
        dashboardAPI.getAddressBook()
      ]);

      // Calculate statistics from the data
      const stats = {
        totalLabels: shipments?.total || 0,
        inTransit: shipments?.data?.filter(s => s.status === 'in_transit').length || 0,
        monthlySpend: calculateMonthlySpend(transactions),
        savedContacts: addressBook?.length || 0
      };

      setDashboardData({
        userProfile: userProfile?.data,
        shipments: shipments?.data || [],
        walletBalance: walletBalance?.balance || 0,
        transactions: transactions?.data || [],
        notifications: notifications?.data || [],
        addressBook: addressBook || [],
        stats,
        recentShipments: shipments?.data || []
      });

    } catch (err) {
      const errorMessage = err.message || 'Failed to load dashboard data';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Calculate monthly spend from transactions
  const calculateMonthlySpend = (transactions) => {
    if (!transactions?.data) return 0;
    
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    return transactions.data
      .filter(transaction => {
        const transactionDate = new Date(transaction.created_at);
        return transactionDate.getMonth() === currentMonth && 
               transactionDate.getFullYear() === currentYear &&
               transaction.status === 'successful';
      })
      .reduce((total, transaction) => total + (transaction.amount || 0), 0);
  };

  // Refresh dashboard data
  const refreshDashboard = () => {
    fetchDashboardData();
  };

  // Get user's first name for welcome message
  const getUserFirstName = () => {
    if (!dashboardData.userProfile?.fullName) return 'User';
    return dashboardData.userProfile.fullName.split(' ')[0];
  };

  // Get shipment status count
  const getShipmentStatusCount = (status) => {
    return dashboardData.shipments.filter(shipment => shipment.status === status).length;
  };

  // Get recent shipments for display
  const getRecentShipments = (limit = 5) => {
    return dashboardData.shipments.slice(0, limit);
  };

  // Get unread notifications count
  const getUnreadNotificationsCount = () => {
    return dashboardData.notifications.filter(notification => !notification.isRead).length;
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return {
    dashboardData,
    loading,
    error,
    refreshDashboard,
    getUserFirstName,
    getShipmentStatusCount,
    getRecentShipments,
    getUnreadNotificationsCount
  };
}; 