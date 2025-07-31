import { Navigate, Outlet } from 'react-router';

const ProtectedRoutes = () => {
  const token = localStorage.getItem('token');

  // If user is already logged in, redirect to dashboard
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  // If not logged in, allow access to auth routes
  return <Outlet />;
};

export default ProtectedRoutes;
