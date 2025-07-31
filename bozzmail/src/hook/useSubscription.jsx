import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { subscriptionAPI } from '../api/subscriptionAPI';

const SubscriptionContext = createContext(null);

export const SubscriptionProvider = ({ children }) => {
  const [currentSubscription, setCurrentSubscription] = useState(null);
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
  const [billingCycle, setBillingCycle] = useState(null);
  const [renewalDate, setRenewalDate] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Clear error utility function
  const clearError = useCallback(() => setError(null), []);

  // Fetch current subscription
  const fetchCurrentSubscription = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await subscriptionAPI.getCurrentSubscription();
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
  }, []);

  // Fetch subscription plans
  const fetchSubscriptionPlans = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await subscriptionAPI.getSubscriptionPlans();
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
  }, []);

  // Upgrade subscription
  const upgradePlan = useCallback(async (planId, billingCycle = 'monthly') => {
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
  }, [fetchCurrentSubscription]);

  // Cancel subscription
  const cancelPlan = useCallback(async () => {
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
  }, [fetchCurrentSubscription]);

  // Fetch wallet balance
  const fetchWalletBalance = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await subscriptionAPI.getWalletBalance();
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
  }, []);

  // Fetch transaction history
  const fetchTransactions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await subscriptionAPI.getTransactionHistory();
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
  }, []);

  // Add funds to wallet
  const addFunds = useCallback(async (amount, user) => {
    setLoading(true);
    setError(null);
    try {
      if (!user.walletToken) {
        // Register user for payment
        await subscriptionAPI.registerUserForPayment(user.email, user.name, user.mobile);
      }
      // Now add funds
      const result = await subscriptionAPI.addWalletFunds(amount);
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
  }, [fetchWalletBalance]);

  // Fetch billing cycle
  const fetchBillingCycle = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await subscriptionAPI.getBillingCycle();
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
  }, []);

  // Fetch renewal date
  const fetchRenewalDate = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await subscriptionAPI.getRenewalDate();
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
  }, []);

  // Fetch user profile summary
  const fetchUserProfile = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await subscriptionAPI.getUserProfileSummary();
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
  }, []);

  // Initialize data on mount
  useEffect(() => {
    fetchCurrentSubscription();
    fetchUserProfile()
  }, []);

  const contextValue = {
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
    clearError,
    isLoading: loading,
    hasError: !!error
  };

  return (
    <SubscriptionContext.Provider value={contextValue}>
      {children}
    </SubscriptionContext.Provider>
  );
};

// Custom hook to use subscription context
export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscriptionContext must be used within a SubscriptionProvider');
  }
  return context;
};