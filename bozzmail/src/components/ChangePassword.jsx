import { useState } from "react";
import Modal from "./Modal"
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";
import useDropdown from '../hook/useDropdown';
import { MdLockOutline } from "react-icons/md";
import { CgEye } from "react-icons/cg";
import { BsEyeSlash } from "react-icons/bs";
import { useUser } from '../hook/useUser';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { regex } from "../utils/regex";
import Spinner from "../utils/spinner/Spinner";

const ChangePassword = () => {

    const dropdown1 = useDropdown();
    const dropdown2 = useDropdown();
    const { changePassword, loading } = useUser();

    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
        document.body.classList.add('overflow-y-hidden');
    }

    const handleModalClose = () => {
        setModalOpen(false)
        document.body.classList.remove('overflow-y-hidden');
        setShowSuccessAlert(false);
    }

    const initialValues = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    };

    const validationSchema = Yup.object({
        currentPassword: Yup.string().required('Current password is required'),
        newPassword: Yup.string()
            .required('New password is required')
            .matches(regex.password, 'Password must contain at least 8 characters, uppercase, lowercase, number, and special character'),
        confirmPassword: Yup.string()
            .required('Please confirm your new password')
            .oneOf([Yup.ref('newPassword'), null], 'Passwords do not match')
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            await changePassword({
                currentPassword: values.currentPassword,
                newPassword: values.newPassword
            });
            setShowSuccessAlert(true);
            resetForm();
            setTimeout(() => {
                setShowSuccessAlert(false);
                handleModalClose();
            }, 2000);
        } catch (err) {
            console.error('Password change error:', err);
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <>
            {/* button for open model */}
            <button className='p-8 rounded-md bg-white hover:bg-icon flex items-center justify-start gap-6 w-full cursor-pointer border border-transparent' onClick={handleModalOpen}>
                <MdLockOutline className="text-xs text-main-text" />
                <p className='dropdown-title'>Change Password</p>
            </button>

            {/* model start */}
            <Modal isOpen={modalOpen} onClose={handleModalClose}>

                {/* alert */}
                {showSuccessAlert && (
                    <div className="fixed max-xl:top-16 max-xl:left-1/2 max-xl:transform max-xl:-translate-x-1/2 xl:bottom-30 xl:right-30 max-xl:px-16 max-xl:w-full max-xl:flex max-xl:justify-center z-2000000">
                        <div className="bg-white rounded-15px overflow-hidden relative w-fit shadow-box">
                            <div className="flex justify-start items-start gap-14 pt-20 pb-16 pr-50 xl:pr-60 pl-20">
                                <img src="/asset/icons/success.svg" alt="icon" className="h-20 flex-none" />
                                <div className="w-full sm:max-w-md max-h-100 sm:max-h-90 overflow-auto dropdown-scrollbar">
                                    <p className="text-main-text font-semibold pb-2">Password Updated Successfully</p>
                                </div>
                            </div>
                            <div className="h-3 bg-primary"></div>

                            {/* cross alert */}
                            <img src="/asset/icons/cross.svg" alt="icon" className="h-16 flex-none absolute top-12 right-24 cursor-pointer" onClick={() => setShowSuccessAlert(false)} />
                        </div>
                    </div>
                )}

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form className="flex flex-col gap-12 sm:gap-20">
                    <div className="space-y-4">
                        <p className="text-xl sm:text-25px font-semibold text-main-text pr-40">Change Password</p>
                        <p className="font-medium text-13px sm:text-sm text-secondary-text">Enter your current password and choose a new one</p>
                    </div>

                    <div className='flex justify-start gap-8 flex-col w-full'>
                        <label htmlFor="currentPassword" className="label-text">Current Password</label>
                        <div className="relative">
                            <Field
                                type={showPassword ? "text" : "password"}
                                name="currentPassword"
                                id="currentPassword"
                                placeholder="•••••••••••••••••••••••••"
                                className={`form-input${errors.currentPassword && touched.currentPassword ? ' border-red-500' : ''}`}
                            />
                            <button type="button"
                                className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ?
                                    <CgEye className="text-base text-cta-secondary flex-none" /> :
                                    <BsEyeSlash className="text-base text-cta-secondary flex-none rotate-y-180" />
                                }
                            </button>
                        </div>
                        <ErrorMessage name="currentPassword" component="span" className="text-red-500 text-sm" />
                    </div>

                    <div className='flex justify-start gap-8 flex-col w-full'>
                        <label htmlFor="newPassword" className="label-text">New Password</label>
                        <div className="relative">
                            <Field
                                type={showNewPassword ? "text" : "password"}
                                name="newPassword"
                                id="newPassword"
                                placeholder="•••••••••••••••••••••••••"
                                className={`form-input${errors.newPassword && touched.newPassword ? ' border-red-500' : ''}`}
                            />
                            <button type="button"
                                className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center cursor-pointer"
                                onClick={() => setShowNewPassword(!showNewPassword)}>
                                {showNewPassword ?
                                    <CgEye className="text-base text-cta-secondary flex-none" /> :
                                    <BsEyeSlash className="text-base text-cta-secondary flex-none rotate-y-180" />
                                }
                            </button>
                        </div>
                        <ErrorMessage name="newPassword" component="span" className="text-red-500 text-sm" />
                    </div>

                    <div className='flex justify-start gap-8 flex-col w-full'>
                        <label htmlFor="confirmPassword" className="label-text">Confirm New Password</label>
                        <div className="relative">
                            <Field
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="•••••••••••••••••••••••••"
                                className={`form-input${errors.confirmPassword && touched.confirmPassword ? ' border-red-500' : ''}`}
                            />
                            <button type="button"
                                className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center cursor-pointer"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ?
                                    <CgEye className="text-base text-cta-secondary flex-none" /> :
                                    <BsEyeSlash className="text-base text-cta-secondary flex-none rotate-y-180" />
                                }
                            </button>
                        </div>
                        <ErrorMessage name="confirmPassword" component="span" className="text-red-500 text-sm" />
                    </div>

                    <div className="flex justify-end items-center gap-10">
                        <button type="button" onClick={handleModalClose} className="outline-btn cursor-pointer">Cancel</button>
                        <button 
                            type="submit" 
                            disabled={loading || isSubmitting}
                            className={`flex items-center justify-between gap-8 ${loading || isSubmitting ? 'disable-primary-btn' : 'button-icon'}`}
                        >
                            {loading || isSubmitting ? (
                                <div className="flex justify-center items-center w-full text-center">
                                    <Spinner />
                                </div>
                            ) : (
                                <>
                                    <span>Save</span>
                                    <img src="asset/icons/white-save.svg" alt="icon" className="h-16" />
                                </>
                            )}
                        </button>
                    </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    )
}

export default ChangePassword;