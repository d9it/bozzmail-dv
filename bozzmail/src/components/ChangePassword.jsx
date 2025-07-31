import { useState,useEffect } from "react";
import Modal from "./Modal"
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";
import useDropdown from '../hook/useDropdown';
import { MdLockOutline } from "react-icons/md";
import { CgEye } from "react-icons/cg";
import { BsEyeSlash } from "react-icons/bs";
import { useUser } from "../hook/useUser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { regex } from "../utils/regex";
import Spinner from "../utils/spinner/Spinner";

const ChangePassword = ({modalOpen,modalClose}) => {

    const [saveChange, setSaveChange] = useState(false);
    const {changePassword,loading} = useUser();
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const handleChangePassword = async (values, { setSubmitting, setErrors, resetForm }) => {
    try {
        const payload = {
        currentPassword: values.password,
        newPassword: values.npassword,
        };

        await changePassword(payload);
        setSaveChange(true);
        resetForm();
    } catch (err) {
        const errorMessage = err?.message || "Something went wrong. Please try again.";
        setErrors({ api: errorMessage });
    } finally {
        setSubmitting(false);
    }
};

useEffect(() => {
  if (saveChange) {
    const timer = setTimeout(() => {
      setSaveChange(false);
        modalOpen(false)
    }, 200);
    return () => clearTimeout(timer);
  }
}, [saveChange]);


    const validationSchema = Yup.object({
        password: Yup.string()
                    .required("Current password is required"),
        npassword: Yup.string()
                .matches(regex.password, 'New Password must contain at least 8 characters, uppercase, lowercase, number, and special character')
                .required("New password is required"),
        cpassword: Yup.string()
                .oneOf([Yup.ref("npassword"), null], "Passwords must match")
                .required("Confirm password is required"),
    });

    return (
        <>
        {/* model start */}
        <Modal isOpen={modalOpen} onClose={modalClose}>
        <Formik
            initialValues={{
                password: "",
                npassword: "",
                cpassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleChangePassword}
        >
                <Form className="flex flex-col gap-12 sm:gap-20">
                    <div className="space-y-4">
                        <p className="text-xl sm:text-25px font-semibold text-main-text pr-40">Change Password</p>
                        <p className="font-medium text-13px sm:text-sm text-secondary-text">Enter your current password and choose a new one</p>
                    </div>

                    <div className='flex justify-start gap-8 flex-col w-full'>
                        <label htmlFor="password" className="label-text">Password</label>
                        <div className="relative">
                            <Field type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="•••••••••••••••••••••••••"
                                className="form-input" />
                            <button type="button"
                                className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ?
                                    <CgEye className="text-base text-cta-secondary flex-none" /> :
                                    <BsEyeSlash className="text-base text-cta-secondary flex-none rotate-y-180" />
                                }
                            </button>
                            <ErrorMessage name="password" component="div" className="error-message-icon" />
                        </div>
                    </div>

                    <div className='flex justify-start gap-8 flex-col w-full'>
                        <label htmlFor="npassword" className="label-text">New Password</label>
                        <div className="relative">
                            <Field type={showNewPassword ? "text" : "password"}
                                name="npassword"
                                id="npassword"
                                placeholder="•••••••••••••••••••••••••"
                                className="form-input" />
                            <button type="button"
                                className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center cursor-pointer"
                                onClick={() => setShowNewPassword(!showNewPassword)}>
                                {showNewPassword ?
                                    <CgEye className="text-base text-cta-secondary flex-none" /> :
                                    <BsEyeSlash className="text-base text-cta-secondary flex-none rotate-y-180" />
                                }
                            </button>
                            <ErrorMessage name="npassword" component="div" className="error-message-icon" />
                        </div>
                    </div>

                    <div className='flex justify-start gap-8 flex-col w-full'>
                        <label htmlFor="cpassword" className="label-text">Confirm New Password</label>
                        <div className="relative">
                            <Field type={showConfirmPassword ? "text" : "password"}
                                name="cpassword"
                                id="cpassword"
                                placeholder="•••••••••••••••••••••••••"
                                className="form-input" />
                            <button type="button"
                                className="rounded-md bg-white border border-Outlines h-32 w-32 absolute right-8 top-8 flex items-center justify-center cursor-pointer"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ?
                                    <CgEye className="text-base text-cta-secondary flex-none" /> :
                                    <BsEyeSlash className="text-base text-cta-secondary flex-none rotate-y-180" />
                                }
                            </button>
                            <ErrorMessage name="cpassword" component="div" className="error-message-icon" />
                        </div>
                    </div>

                    <div className="flex justify-end items-center gap-10">
                        <button type="button" onClick={modalClose} className="outline-btn cursor-pointer">Cancel</button>
                        <button type="submit" className={`flex items-center justify-between gap-8 ${loading || saveChange ? 'disable-button-icon' : 'button-icon'}`}>
                            {
                        saveChange ? (
                                <div className={`flex justify-center items-center w-full text-center`}>
                                    <img src="/asset/icons/check-white.svg" alt="Success" className="h-16" />
                                </div>
                            ):
                            (loading) ? (
                                <div className="flex justify-center items-center w-full text-center">
                                    <Spinner />
                                </div>
                            ):(
                                <>
                                <span>Save</span>
                                <img src="asset/icons/white-save.svg" alt="icon" className="h-16" />
                                </>
                            )
                        }
                        </button>           
                    </div>

                    </Form>
                </Formik>
            </Modal>
        </>
    )
}

export default ChangePassword;