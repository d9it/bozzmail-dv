import React, { useState } from 'react';
import { useAuth } from '../hook/useAuth';
import { userAPI, handleAPIError } from '../api/apiService';

const APITest = () => {
  const { user, login, logout, isAuthenticated } = useAuth();
  const [testResult, setTestResult] = useState('');
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    try {
      const response = await userAPI.getProfile();
      setTestResult(`✅ API Test Successful! User: ${response.data?.name || 'Unknown'}`);
    } catch (error) {
      setTestResult(`❌ API Test Failed: ${handleAPIError(error)}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    const result = await login({
      email: 'test@example.com',
      password: 'password123'
    });
    
    if (result.success) {
      setTestResult('✅ Login successful!');
    } else {
      setTestResult(`❌ Login failed: ${result.error}`);
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h2 className="text-xl font-bold mb-4">API Connection Test</h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600">Backend URL: {import.meta.env.VITE_BACKEND_URL}</p>
          <p className="text-sm text-gray-600">Authentication Status: {isAuthenticated ? '✅ Logged In' : '❌ Not Logged In'}</p>
          {user && <p className="text-sm text-gray-600">User: {user.email}</p>}
        </div>

        <div className="space-x-2">
          {!isAuthenticated ? (
            <button
              onClick={handleLogin}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Test Login
            </button>
          ) : (
            <>
              <button
                onClick={testAPI}
                disabled={loading}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
              >
                {loading ? 'Testing...' : 'Test API Call'}
              </button>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {testResult && (
          <div className={`p-3 rounded ${
            testResult.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {testResult}
          </div>
        )}
      </div>
    </div>
  );
};

export default APITest; 