import { useState, useEffect, createContext, useContext } from 'react';
import { authAPI, handleAPIError } from '../api/apiService';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Check if user is logged in on app start
    useEffect(() => {
        const token = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');
        
        if (token && savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (error) {
                console.error('Error parsing saved user:', error);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
        }
        setLoading(false);
    }, []);

    const login = async (credentials) => {
        try {
            setError(null);
            setLoading(true);
            const response = await authAPI.login(credentials);
            
            if (response.data?.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                setUser(response.data.user);
                return { success: true, data: response.data };
            } else {
                throw new Error('Login failed - no token received');
            }
        } catch (error) {
            const errorMessage = handleAPIError(error);
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData) => {
        try {
            setError(null);
            setLoading(true);
            const response = await authAPI.register(userData);
            
            if (response.data?.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                setUser(response.data.user);
                return { success: true, data: response.data };
            } else {
                throw new Error('Registration failed - no token received');
            }
        } catch (error) {
            const errorMessage = handleAPIError(error);
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await authAPI.logout();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setUser(null);
            setError(null);
        }
    };

    const forgotPassword = async (email) => {
        try {
            setError(null);
            setLoading(true);
            const response = await authAPI.forgotPassword(email);
            return { success: true, data: response.data };
        } catch (error) {
            const errorMessage = handleAPIError(error);
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    const resetPassword = async (data) => {
        try {
            setError(null);
            setLoading(true);
            const response = await authAPI.resetPassword(data);
            return { success: true, data: response.data };
        } catch (error) {
            const errorMessage = handleAPIError(error);
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    const verifyOTP = async (otp) => {
        try {
            setError(null);
            setLoading(true);
            const response = await authAPI.verifyOTP(otp);
            return { success: true, data: response.data };
        } catch (error) {
            const errorMessage = handleAPIError(error);
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    const clearError = () => {
        setError(null);
    };

    const value = {
        user,
        loading,
        error,
        login,
        register,
        logout,
        forgotPassword,
        resetPassword,
        verifyOTP,
        clearError,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}; 