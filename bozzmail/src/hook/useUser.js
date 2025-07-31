import { useState,useEffect } from 'react';
import { userAPI } from '../api/userAPI';
import { useToast } from "../context/toast/ToastContext";
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router';

export const useUser = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { getCurrentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get user details
  const getUserDetails = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await userAPI.getUserDetails();
      // console.log('user details: ',response)
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Failed to fetch user details.';
      setError(errorMessage);
      showToast({ message: errorMessage, type: 'error' });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update user profile
  const updateUserProfile = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await userAPI.updateUserProfile(userData);
      
      // Update local storage with new user data
      const currentUser = getCurrentUser();
      if (currentUser) {
        const updatedUser = { ...currentUser, ...userData };
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }

      showToast({ message: 'Profile updated successfully!' });
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Failed to update profile. Please try again.';
      setError(errorMessage);
      showToast({ message: errorMessage, type: 'error' });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Change password
  const changePassword = async (passwordData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await userAPI.changePassword(passwordData);
      showToast({ message: 'Password Updated Successfully' });
      // console.log('response data: ',response);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/');
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Failed to change password. Please try again.';
      setError(errorMessage);
      showToast({ message: errorMessage, type: 'error' });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Upload profile picture
  const uploadProfilePicture = async (file) => {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('profileImg', file);

      const response = await userAPI.uploadProfilePicture(formData);
      
      // Update local storage with new profile image
      const currentUser = getCurrentUser();
      if (currentUser && response.data) {
        const updatedUser = { ...currentUser, profile_img: response.data.profile_img };
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }

      showToast({ message: 'Profile picture updated successfully!' });
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Failed to upload profile picture. Please try again.';
      setError(errorMessage);
      showToast({ message: errorMessage, type: 'error' });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete profile picture
  const deleteProfilePicture = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await userAPI.deleteProfilePicture();
      
      // Update local storage to remove profile image
      const currentUser = getCurrentUser();
      if (currentUser) {
        const updatedUser = { ...currentUser, profile_img: null };
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }

      showToast({ message: 'Profile picture deleted successfully!' });
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Failed to delete profile picture. Please try again.';
      setError(errorMessage);
      showToast({ message: errorMessage, type: 'error' });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete account
  const deleteAccount = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await userAPI.deleteAccount();

      localStorage.removeItem('user');
      localStorage.removeItem('token');

      showToast({ message: 'Your account was successfully removed' });
      return response;
    } catch (err) {
      const errorMessage = err.message || 'Failed to delete account. Please try again.';
      setError(errorMessage);
      showToast({ message: errorMessage, type: 'error' });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // const paymentRegister = async (paymentData) => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const response = await userAPI.paymentRegister(paymentData);
  //     return response;
  //   } catch (err) {
  //     const errorMessage = err.message || 'Failed to reset password. Please try again.';
  //     setError(errorMessage);
  //     showToast({ message: errorMessage, type: 'error' });
  //     throw err;
  //   } finally {
  //     setLoading(false);
  //   }
  // };

    // Initialize data on mount
    // useEffect(() => {
    //   getUserDetails
    // }, []);


  return {
    loading,
    error,
    getUserDetails,
    updateUserProfile,
    changePassword,
    uploadProfilePicture,
    deleteProfilePicture,
    deleteAccount,
    // paymentRegister
  };
}; 