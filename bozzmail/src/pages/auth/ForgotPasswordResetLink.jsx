import React, { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router";
import FooterPage from "../../components/FooterPage";
import { useAuth } from "../../hook/useAuth";
import Spinner from "../../utils/spinner/Spinner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { regex } from "../../utils/regex";

const ForgotPasswordResetLink = () => {
  const navigate = useNavigate();
  const { forgotPassword, loading } = useAuth();
  const [success, setSuccess] = useState(false);

  const initialValues = {
    email: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .matches(regex.email, 'Please enter a valid email address'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await forgotPassword({ email: values.email });
      setSuccess(true);
      resetForm();
      navigate('/forgot-password-link-sent');
    } catch (err) {
      console.log(err);
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
        <p className="text-center font-semibold text-xl pt-10 text-main-text">Forgot Password</p>
        <p className="text-sm font-medium text-center pt-10 text-main-text-shaded">Please provide your Email so we can send you the reset password link</p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="pt-20 space-y-20">
              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="email" className="label-text">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="hello@company.com"
                  className={`form-input${errors.email && touched.email ? ' border-red-500' : ''}`}
                  disabled={loading || success}
                />
                <ErrorMessage name="email" component="span" className="error-message" />
              </div>
              <button
                className={(loading || success || isSubmitting) ? "disable-primary-btn block w-full" : "primary-btn block w-full"}
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
                  "Send Reset Link"
                )}
              </button>
            </Form>
          )}
        </Formik>

        {/* {success && (
          <div className="text-green-600 text-center py-8">Reset link sent! Please check your email.</div>
        )} */}

        <NavLink to={"/"} className="text-link text-center block pt-20">Go back to Login</NavLink>
      </div>
      {/* footer */}
      <div className='text-center'>
        <FooterPage />
      </div>
    </div>
  );
};

export default ForgotPasswordResetLink;