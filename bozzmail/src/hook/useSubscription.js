import { useState, useEffect } from 'react';
import {
  getCurrentSubscription,
  getSubscriptionPlans,
  upgradeSubscription,
  cancelSubscription,
  getBillingCycle,
  getRenewalDate,
  getWalletBalance,
  getTransactionHistory,
  addWalletFunds,
  getUserProfileSummary
} from '../api/subscriptionAPI';

export const useSubscription = () => {
  const [currentSubscription, setCurrentSubscription] = useState(null);
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
  const [billingCycle, setBillingCycle] = useState(null);
  const [renewalDate, setRenewalDate] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch current subscription
  const fetchCurrentSubscription = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getCurrentSubscription();
      if (result.success) {
        setCurrentSubscription(result.data);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to fetch current subscription');
    } finally {
      setLoading(false);
    }
  };

  // Fetch subscription plans
  const fetchSubscriptionPlans = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getSubscriptionPlans();
      if (result.success) {
        setSubscriptionPlans(result.data);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to fetch subscription plans');
    } finally {
      setLoading(false);
    }
  };

  // Upgrade subscription
  const upgradePlan = async (planId, billingCycle = 'monthly') => {
    setLoading(true);
    setError(null);
    try {
      const result = await upgradeSubscription(planId, billingCycle);
      if (result.success) {
        // Refresh current subscription after upgrade
        await fetchCurrentSubscription();
        return { success: true, data: result.data };
      } else {
        setError(result.error);
        return { success: false, error: result.error };
      }
    } catch (err) {
      const errorMsg = 'Failed to upgrade subscription';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  // Cancel subscription
  const cancelPlan = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await cancelSubscription();
      if (result.success) {
        // Refresh current subscription after cancellation
        await fetchCurrentSubscription();
        return { success: true, data: result.data };
      } else {
        setError(result.error);
        return { success: false, error: result.error };
      }
    } catch (err) {
      const errorMsg = 'Failed to cancel subscription';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  // Fetch wallet balance
  const fetchWalletBalance = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getWalletBalance();
      if (result.success) {
        setWalletBalance(result.data);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to fetch wallet balance');
    } finally {
      setLoading(false);
    }
  };

  // Fetch transaction history
  const fetchTransactions = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getTransactionHistory();
      if (result.success) {
        setTransactions(result.data);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to fetch transaction history');
    } finally {
      setLoading(false);
    }
  };

  // Add funds to wallet
  const addFunds = async (amount) => {
    setLoading(true);
    setError(null);
    try {
      const result = await addWalletFunds(amount);
      if (result.success) {
        // Refresh wallet balance after adding funds
        await fetchWalletBalance();
        return { success: true, data: result.data };
      } else {
        setError(result.error);
        return { success: false, error: result.error };
      }
    } catch (err) {
      const errorMsg = 'Failed to add funds to wallet';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  // Fetch billing cycle
  const fetchBillingCycle = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getBillingCycle();
      if (result.success) {
        setBillingCycle(result.data);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to fetch billing cycle');
    } finally {
      setLoading(false);
    }
  };

  // Fetch renewal date
  const fetchRenewalDate = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getRenewalDate();
      if (result.success) {
        setRenewalDate(result.data);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to fetch renewal date');
    } finally {
      setLoading(false);
    }
  };

  // Fetch user profile summary
  const fetchUserProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getUserProfileSummary();
      if (result.success) {
        setUserProfile(result.data);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to fetch user profile');
    } finally {
      setLoading(false);
    }
  };

  // Initialize data on mount
  useEffect(() => {
    fetchCurrentSubscription();
    fetchSubscriptionPlans();
    fetchBillingCycle();
    fetchRenewalDate();
    fetchWalletBalance();
    fetchUserProfile();
  }, []);

  return {
    // State
    currentSubscription,
    subscriptionPlans,
    billingCycle,
    renewalDate,
    walletBalance,
    transactions,
    userProfile,
    loading,
    error,

    // Actions
    fetchCurrentSubscription,
    fetchSubscriptionPlans,
    fetchBillingCycle,
    fetchRenewalDate,
    upgradePlan,
    cancelPlan,
    fetchWalletBalance,
    fetchTransactions,
    addFunds,
    fetchUserProfile,

    // Utility functions
    clearError: () => setError(null),
    isLoading: loading,
    hasError: !!error
  };
}; 