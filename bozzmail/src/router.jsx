import { Route, Routes, Navigate } from "react-router"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import ForgotPasswordResetLink from "./pages/auth/ForgotPasswordResetLink"
import ForgotPasswordLinkSent from "./pages/auth/ForgotPasswordLinkSent"
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage"
import SuccessMessagePage from "./pages/auth/SuccessMessagePage"
import DashboardPage from "./pages/DashboardPage"
import SubscriptionPage from "./pages/SubscriptionPage"
import PaidPlanManagement from "./pages/PaidPlanManagement"
import ProfessionalPlanManagement from "./pages/ProfessionalPlanManagement"
import ShippingLabelsPage from "./pages/ShippingLabelsPage"
import CreateLabelPage from "./pages/CreateLabelPage"
import ApiPage from "./pages/ApiPage"
import MainLayout from "./layouts/MainLayout"
import PrivateRoute from "./components/PrivateRoute"

const AppRoute = () => {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password-reset-link" element={<ForgotPasswordResetLink />} />
      <Route path="/forgot-password-link-sent" element={<ForgotPasswordLinkSent />} />
      <Route path="/forgot-password/:token" element={<ForgotPasswordPage />} />
      <Route path="/success-message" element={<SuccessMessagePage />} />

      <Route element={
        <PrivateRoute>
          <MainLayout />
        </PrivateRoute>
      }>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/paid-plan-management" element={<PaidPlanManagement />} />
        <Route path="/professional-plan-management" element={<ProfessionalPlanManagement />} />
        <Route path="/shipping-labels" element={<ShippingLabelsPage />} />
        <Route path="/create-labels" element={<CreateLabelPage />} />
        <Route path="/api" element={<ApiPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoute
