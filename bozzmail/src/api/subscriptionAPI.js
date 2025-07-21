import apiCall from './axios';

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
  }
}

// Subscription API endpoints
export const subscriptionAPI = {
  // Get current user's subscription plan
  getCurrentSubscription: async () => {
    try {
      // console.log('Calling: /subscriptions/current');
      const response = await apiCall('/subscriptions/current', {}, 'GET');
      // console.log('Response from /subscriptions/current:', response);
      return response.data;
    } catch (error) {
      console.error('Error in getCurrentSubscription:', error);
      throw error.response?.data || error.message;
    }
  },

  // Get all available subscription plans
  getSubscriptionPlans: async () => {
    try {
      // console.log('Calling: /subscriptions/plans');
      const response = await apiCall('/subscriptions/plans', {}, 'GET');
      // console.log('Response from /subscriptions/plans:', response);
      return response.data;
    } catch (error) {
      console.error('Error in getSubscriptionPlans:', error);
      throw error.response?.data || error.message;
    }
  },

  // Upgrade subscription plan
  upgradeSubscription: async (planId, billingCycle = 'monthly') => {
    try {
      // console.log('Calling: /subscriptions/upgrade', { planId, billingCycle });
      const response = await apiCall('/subscriptions/upgrade', { planId, billingCycle }, 'POST');
      // console.log('Response from /subscriptions/upgrade:', response);
      return response.data;
    } catch (error) {
      console.error('Error in upgradeSubscription:', error);
      throw error.response?.data || error.message;
    }
  },

  // Cancel subscription
  cancelSubscription: async () => {
    try {
      // console.log('Calling: /subscriptions/cancel');
      const response = await apiCall('/subscriptions/cancel', {}, 'POST');
      // console.log('Response from /subscriptions/cancel:', response);
      return response.data;
    } catch (error) {
      console.error('Error in cancelSubscription:', error);
      throw error.response?.data || error.message;
    }
  },

  // Get user's wallet balance
  getWalletBalance: async () => {
    try {
      // console.log('Calling: /user/payment/wallet-balance');
      const response = await apiCall('/user/payment/wallet-balance', {}, 'GET');
      // console.log('Response from /user/payment/wallet-balance:', response);
      return response.data;
    } catch (error) {
      console.error('Error in getWalletBalance:', error);
      throw error.response?.data || error.message;
    }
  },

  // Get user's transaction history
  getTransactionHistory: async () => {
    try {
      // console.log('Calling: /user/payment/transactions');
      const response = await apiCall('/user/payment/transactions', {}, 'GET');
      // console.log('Response from /user/payment/transactions:', response);
      return response.data;
    } catch (error) {
      console.error('Error in getTransactionHistory:', error);
      throw error.response?.data || error.message;
    }
  },

  //Register for the payment
  registerUserForPayment: async (email, name, mobile) => {
    try {
      // console.log('Calling: /user/payment/register', { email, name, mobile });
      const response = await apiCall('/user/payment/register', { email, name, mobile }, 'POST');
      // console.log('Response from /user/payment/register:', response);
      return response.data;
    } catch (error) {
      console.error('Error in registerUserForPayment:', error);
      throw error.response?.data || error.message;
    }
  },

  // Add funds to wallet
  addWalletFunds: async (amount) => {
    try {
      // console.log('Calling: /user/payment/add-wallet-fund', { amount });
      const response = await apiCall('/user/payment/add-wallet-fund', { amount }, 'POST');
      // console.log('Response from /user/payment/add-wallet-fund:', response);
      return response.data;
    } catch (error) {
      console.error('Error in addWalletFunds:', error);
      throw error.response?.data || error.message;
    }
  },

  // Get subscription billing cycle
  getBillingCycle: async () => {
    try {
      // console.log('Calling: /subscriptions/billing-cycle');
      const response = await apiCall('/subscriptions/billing-cycle', {}, 'GET');
      // console.log('Response from /subscriptions/billing-cycle:', response);
      return response.data;
    } catch (error) {
      console.error('Error in getBillingCycle:', error);
      throw error.response?.data || error.message;
    }
  },

  // Get next renewal date
  getRenewalDate: async () => {
    try {
      // console.log('Calling: /subscriptions/renewal-date');
      const response = await apiCall('/subscriptions/renewal-date', {}, 'GET');
      // console.log('Response from /subscriptions/renewal-date:', response);
      return response.data;
    } catch (error) {
      console.error('Error in getRenewalDate:', error);
      throw error.response?.data || error.message;
    }
  },

  // Get user profile summary
  getUserProfileSummary: async () => {
    try {
      // console.log('Calling: /user/profile/summary');
      const response = await apiCall('/user/profile/summary', {}, 'GET');
      // console.log('Response from /user/profile/summary:', response);
      return response.data;
    } catch (error) {
      console.error('Error in getUserProfileSummary:', error);
      throw error.response?.data || error.message;
    }
  },
}; 