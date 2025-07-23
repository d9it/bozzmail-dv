import { useState, useEffect } from 'react';
import { subscriptionAPI } from '../api/subscriptionAPI';

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
      const result = await subscriptionAPI.getCurrentSubscription();
      // console.log('Fetch current subscriptions: ', result.data);
      if (result.success) {
        return setCurrentSubscription(result.data);
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
      const result = await subscriptionAPI.getSubscriptionPlans();
      // console.log('Get subscriptions Plans: ', result)

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
      const result = await subscriptionAPI.upgradeSubscription(planId, billingCycle);
      if (result.success) {
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
      const result = await subscriptionAPI.cancelSubscription();
      if (result.success) {
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
      const result = await subscriptionAPI.getWalletBalance();
      // console.log('Fetch wallet balance result: ', result)

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
      const result = await subscriptionAPI.getTransactionHistory();
      // console.log('Fetch transaction history result: ', result)

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
  const addFunds = async (amount, user) => {
    setLoading(true);
    setError(null);
    try {
      if (!user.walletToken) {
        // Register user for payment
        await subscriptionAPI.registerUserForPayment(user.email, user.name, user.mobile);
      }
      // Now add funds
      const result = await subscriptionAPI.addWalletFunds(amount);
      // console.log('Add funds to wallet result: ', result);
      // Refresh wallet balance after adding funds
      await fetchWalletBalance();
      return { success: true, data: result };
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
      const result = await subscriptionAPI.getBillingCycle();
      // console.log('Fetch billing cycle result: ', result)

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
      const result = await subscriptionAPI.getRenewalDate();
      // console.log('Fetch renewal date result: ', result)

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
      const result = await subscriptionAPI.getUserProfileSummary();
      // console.log('Fetch user profile summary result: ', result)

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
    // fetchWalletBalance();
    fetchUserProfile();
  }, []);

  return {
    // State
    currentSubscription,
    setCurrentSubscription,
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