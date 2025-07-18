import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import FooterPage from "../../components/FooterPage";
import { useAuth } from "../../hook/useAuth";
import Spinner from "../../utils/spinner/Spinner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { regex } from "../../utils/regex";

const ForgotPasswordPage = () => {
  const { resetPassword, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();
  const { token } = useParams();

  const initialValues = {
    password: '',
    cpassword: ''
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .required('New password is required')
      .matches(regex.password, 'Password must contain at least 8 characters, uppercase, lowercase, number, and special character'),
    cpassword: Yup.string()
      .required('Please confirm your new password')
      .oneOf([Yup.ref('password'), null], 'Passwords do not match'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setApiError("");
    if (!token) {
      setApiError("Reset token is missing. Please use the link from your email.");
      setSubmitting(false);
      return;
    }
    try {
      await resetPassword({ newPassword: values.password, token });
      setSuccess(true);
      resetForm();
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      setApiError(err.message || "Failed to reset password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-light-gray space-y p-16">
      {/* logo */}
      <div className="flex justify-center items-center pb-96">
        <img src="/asset/images/logo/main-logo.svg" alt="logo" title="Logo" className="h-38" />
      </div>
      {/* form */}
      <div className="max-w-form mx-auto bg-white p-30 rounded-20px">
        <div className="flex justify-center items-center p-8">
          <img src="/asset/images/logo/logo-icon.svg" alt="logo" title="Logo" className="h-38" />
        </div>
        <p className="text-center font-semibold text-xl pt-10 text-main-text">Create new Password</p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="pt-20 space-y-20">
              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="password" className="label-text">New Password</label>
                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="•••••••••••••••••••••••••"
                    className={`form-input${errors.password && touched.password ? ' border-red-500' : ''}`}
                    disabled={loading || success}
                  />
                  <button
                    type="button"
                    className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading || success}
                  >
                    <img src={showPassword ? "/asset/icons/view-off.svg" : "/asset/icons/eye.svg"} alt="icon" />
                  </button>
                </div>
                <ErrorMessage name="password" component="span" className="text-red-500 text-sm" />
              </div>
              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="cpassword" className="label-text">Confirm New Password</label>
                <div className="relative">
                  <Field
                    type={showCPassword ? "text" : "password"}
                    name="cpassword"
                    id="cpassword"
                    placeholder="•••••••••••••••••••••••••"
                    className={`form-input${errors.cpassword && touched.cpassword ? ' border-red-500' : ''}`}
                    disabled={loading || success}
                  />
                  <button
                    type="button"
                    className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center cursor-pointer"
                    onClick={() => setShowCPassword(!showCPassword)}
                    disabled={loading || success}
                  >
                    <img src={showCPassword ? "/asset/icons/view-off.svg" : "/asset/icons/eye.svg"} alt="icon" />
                  </button>
                </div>
                <ErrorMessage name="cpassword" component="span" className="text-red-500 text-sm" />
              </div>
              {apiError && <div className="text-red-500 text-center py-4">{apiError}</div>}
              <button
                className={(loading || success || isSubmitting) ? "disable-primary-btn w-full" : "primary-btn w-full"}
                type="submit"
                disabled={loading || success || isSubmitting}
              >
                {success ? (
                  <div className="flex justify-center items-center w-full text-center">
                    <img src="/asset/icons/check-white.svg" alt="Success" className="h-24" />
                  </div>
                ) : (loading || isSubmitting) ? (
                  <div className="flex justify-center items-center w-full text-center">
                    <Spinner />
                  </div>
                ) : (
                  "Confirm"
                )}
              </button>
            </Form>
          )}
        </Formik>

        {/* {success && (
          <div className="text-green-600 text-center py-8">Password reset successful! Redirecting to login...</div>
        )} */}
      </div>
      {/* footer */}
      <div className='text-center'>
        <FooterPage />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;