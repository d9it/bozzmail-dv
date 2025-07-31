import { Route, Routes, Navigate } from "react-router"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import ForgotPasswordResetLink from "./pages/auth/ForgotPasswordResetLink"
import ForgotPasswordLinkSent from "./pages/auth/ForgotPasswordLinkSent"
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage"
import DashboardPage from "./pages/DashboardPage"
import SubscriptionPage from "./pages/SubscriptionPage"
import PaidPlanManagement from "./pages/PaidPlanManagement"
import ProfessionalPlanManagement from "./pages/ProfessionalPlanManagement"
import ShippingLabelsPage from "./pages/ShippingLabelsPage"
import CreateLabelPage from "./pages/CreateLabelPage"
import CreateMail from "./pages/CreateMail"
import ApiPage from "./pages/ApiPage"
import MainLayout from "./layouts/MainLayout"
import PrivateRoute from "./components/PrivateRoute"
import PrintMailPage from "./pages/PrintMailPage"
import ImportLabelPage from "./pages/ImportLabelPage"
import ImportMailPage from "./pages/ImportMailPage"
import ImportPdfPage from "./pages/ImportPdfPage"
import ImportPostCardsPage from "./pages/ImportPostCardsPage"
import ContactsPage from "./pages/ContactsPage" 
import ImportContactsPage from "./pages/ImportContactsPage"
import TrackingPage from "./pages/TrackingPage"
import { SubscriptionProvider } from './hook/useSubscription';
import ProtectedRoutes from './components/ProtectedRoutes';

const AppRoute = () => {

  return (
    <Routes>
    <Route element={<ProtectedRoutes />}>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password-reset-link" element={<ForgotPasswordResetLink />} />
      <Route path="/forgot-password-link-sent" element={<ForgotPasswordLinkSent />} />
      <Route path="/forgot-password/:token" element={<ForgotPasswordPage />} />
    </Route>

      <Route element={
        <PrivateRoute>
          <SubscriptionProvider>
            <MainLayout />
          </SubscriptionProvider>
        </PrivateRoute>
      }>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/paid-plan-management" element={<PaidPlanManagement />} />
        <Route path="/professional-plan-management" element={<ProfessionalPlanManagement />} />
        <Route path="/shipping-labels" element={<ShippingLabelsPage />} />
        <Route path="/create-labels" element={<CreateLabelPage />} />
        <Route path="/import-labels" element={<ImportLabelPage />} />
        <Route path="/print-mail" element={<PrintMailPage />} />
        <Route path="/create-mail" element={<CreateMail />} />
        <Route path="/import-mail" element={<ImportMailPage />} />
        <Route path="/import-pdf" element={<ImportPdfPage />} />
        <Route path="/import-postcards" element={<ImportPostCardsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/import-contacts" element={<ImportContactsPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/api" element={<ApiPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoute
