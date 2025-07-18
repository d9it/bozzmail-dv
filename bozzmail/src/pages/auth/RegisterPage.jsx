import React, { useState } from "react";
import { NavLink } from "react-router";
import FooterPage from "../../components/FooterPage";
import { useAuth } from "../../hook/useAuth";
import Spinner from "../../utils/spinner/Spinner";
import { regex } from "../../utils/regex";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterPage = () => {
  const { register, loading, error } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const initialValues = {
    fullName: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string()
      .required('Email is required')
      .matches(regex.email, 'Please enter a valid email address'),
    password: Yup.string()
      .required('Password is required')
      .matches(regex.password, 'Password must contain at least 8 characters, uppercase, lowercase, number, and special character'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await register(values);
      resetForm();
      setRegistrationSuccess(true);
    } catch (err) {
      console.error('Registration error:', err);
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

        <p className="text-center font-semibold text-xl pt-10 text-main-text">Create your account</p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="pt-20 space-y-20">
              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="fullName" className="label-text">Full Name</label>
                <Field
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Enter your full name"
                  className={`form-input${errors.fullName && touched.fullName ? ' border-red-500' : ''}`}
                />
                <ErrorMessage name="fullName" component="span" className="text-red-500 text-sm" />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="email" className="label-text">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="hello@company.com"
                  className={`form-input${errors.email && touched.email ? ' border-red-500' : ''}`}
                />
                <ErrorMessage name="email" component="span" className="text-red-500 text-sm" />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="password" className="label-text">Password</label>
                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="•••••••••••••••••••••••••"
                    className={`form-input${errors.password && touched.password ? ' border-red-500' : ''}`}
                  />
                  <button
                    type="button"
                    className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <img
                      src={showPassword ? "/asset/icons/view-off.svg" : "/asset/icons/eye.svg"}
                      alt="icon"
                    />
                  </button>
                </div>
                <ErrorMessage name="password" component="span" className="text-red-500 text-sm" />
              </div>

              <button
                className={(loading || registrationSuccess || isSubmitting) ? "disable-primary-btn w-full" : "primary-btn w-full"}
                type="submit"
                disabled={loading || registrationSuccess || isSubmitting}
              >
                {registrationSuccess ? (
                  <div className="flex justify-center items-center w-full text-center">
                    <img src="/asset/icons/check-white.svg" alt="Success" className="h-24" />
                  </div>
                ) : (loading || isSubmitting) ? (
                  <div className="flex justify-center items-center w-full text-center">
                    <Spinner />
                  </div>
                ) : (
                  "Sign Up"
                )}
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-sm font-medium text-main-text text-center pt-20">
          Already have an account? <NavLink to={"/"} className="text-link">Sign in</NavLink>
        </p>
      </div>

      {/* footer */}
      <div className='text-center'>
        <FooterPage />
      </div>
    </div>
  );
};

export default RegisterPage;