import { Route, Routes, Navigate } from "react-router";
import { useAuth } from "./hook/useAuth";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordResetLink from "./pages/auth/ForgotPasswordResetLink";
import ForgotPasswordLinkSent from "./pages/auth/ForgotPasswordLinkSent";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import SuccessMessagePage from "./pages/auth/SuccessMessagePage";
import DashboardPage from "./pages/DashboardPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import PaidPlanManagement from "./pages/PaidPlanManagement";
import ProfessionalPlanManagement from "./pages/ProfessionalPlanManagement";
import ShippingLabelsPage from "./pages/ShippingLabelsPage";
import CreateLabelPage from "./pages/CreateLabelPage";
import ApiPage from "./pages/ApiPage";
import MainLayout from "./layouts/MainLayout";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

// Public Route Component (redirects to dashboard if already logged in)
const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
};

const AppRoute = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicRoute><LoginPage /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
      <Route path="/forgot-password-reset-link" element={<PublicRoute><ForgotPasswordResetLink /></PublicRoute>} />
      <Route path="/forgot-password-link-sent" element={<PublicRoute><ForgotPasswordLinkSent /></PublicRoute>} />
      <Route path="/forgot-password" element={<PublicRoute><ForgotPasswordPage /></PublicRoute>} />
      <Route path="/success-message" element={<PublicRoute><SuccessMessagePage /></PublicRoute>} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/paid-plan-management" element={<PaidPlanManagement />} />
        <Route path="/professional-plan-management" element={<ProfessionalPlanManagement />} />
        <Route path="/shipping-labels" element={<ShippingLabelsPage />} />
        <Route path="/create-labels" element={<CreateLabelPage />} />
        <Route path="/api" element={<ApiPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
