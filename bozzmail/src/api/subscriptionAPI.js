import axios from './axios';

// Mock subscription plans data (since backend doesn't have subscription APIs yet)
const MOCK_PLANS = {
  starter: {
    id: 'starter',
    name: 'Starter',
    description: 'Hobbyists, testers, and new users',
    price: { monthly: 0, yearly: 0 },
    features: [
      'Create and print shipping labels',
      'Send letters and postcards (pay per piece sent)',
      'Store up to 10 contacts',
      'Limited support',
      'No API access',
      'Standard shipping rates',
      'No access to the Partner Program',
      'Manual one-by-one shipping & mailing only',
      'No batch import tools'
    ],
    included: [0, 1, 2],
    excluded: [3, 4, 5, 6, 7, 8]
  },
  growth: {
    id: 'growth',
    name: 'Growth',
    description: 'Freelancers and side businesses',
    price: { monthly: 19, yearly: 182.4 },
    features: [
      'Create and print shipping labels',
      'Send letters and postcards (pay per piece sent)',
      'Store up to 50 contacts',
      'Priority support',
      'Full API access',
      'Access to discounted shipping rates',
      'Access to the Partner Program',
      'Manual one-by-one shipping & mailing only',
      'No batch import tools'
    ],
    included: [0, 1, 2, 3, 4, 5, 6],
    excluded: [7, 8]
  },
  professional: {
    id: 'professional',
    name: 'Professional',
    description: 'Teams and growing businesses',
    price: { monthly: 49, yearly: 470.4 },
    features: [
      'Create and print shipping labels',
      'Send letters and postcards (pay per piece sent)',
      'Store unlimited contacts',
      'Priority support',
      'Full API access',
      'Access to discounted shipping rates',
      'Access to the Partner Program',
      'Batch shipping & mailing tools',
      'Import/export for contacts/campaigns'
    ],
    included: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    excluded: []
  }
};

// Get current user's subscription plan
export const getCurrentSubscription = async () => {
  try {
    const response = await axios.get('/subscriptions/current');
    return {
      success: true,
      data: response.data.data
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to fetch current subscription'
    };
  }
};

// Get all available subscription plans
export const getSubscriptionPlans = async () => {
  try {
    const response = await axios.get('/subscriptions/plans');
    return {
      success: true,
      data: response.data.data
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to fetch subscription plans'
    };
  }
};

// Upgrade subscription plan
export const upgradeSubscription = async (planId, billingCycle = 'monthly') => {
  try {
    const response = await axios.post('/subscriptions/upgrade', {
      planId,
      billingCycle
    });
    return {
      success: true,
      data: response.data.data
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to upgrade subscription'
    };
  }
};

// Cancel subscription
export const cancelSubscription = async () => {
  try {
    const response = await axios.post('/subscriptions/cancel');
    return {
      success: true,
      data: response.data.data
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to cancel subscription'
    };
  }
};

// Get user's wallet balance (existing API)
export const getWalletBalance = async () => {
  try {
    const response = await axios.get('/user/payment/wallet-balance');
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to fetch wallet balance'
    };
  }
};

// Get user's transaction history (existing API)
export const getTransactionHistory = async () => {
  try {
    const response = await axios.get('/user/payment/transactions');
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to fetch transaction history'
    };
  }
};

// Add funds to wallet (existing API)
export const addWalletFunds = async (amount) => {
  try {
    const response = await axios.post('/user/payment/add-wallet-fund', { amount });
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to add wallet funds'
    };
  }
};

// Get subscription billing cycle
export const getBillingCycle = async () => {
  try {
    const response = await axios.get('/subscriptions/billing-cycle');
    return {
      success: true,
      data: response.data.data
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to fetch billing cycle'
    };
  }
};

// Get next renewal date
export const getRenewalDate = async () => {
  try {
    const response = await axios.get('/subscriptions/renewal-date');
    return {
      success: true,
      data: response.data.data
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to fetch renewal date'
    };
  }
};

// Get user profile summary (existing API)
export const getUserProfileSummary = async () => {
  try {
    const response = await axios.get('/user/profile/summary');
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to fetch user profile'
    };
  }
}; 