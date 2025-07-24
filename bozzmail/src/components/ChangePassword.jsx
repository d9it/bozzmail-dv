import { useState } from "react";
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

const ChangePassword = () => {

    const dropdown1 = useDropdown();
    const dropdown2 = useDropdown();

    const {changePassword,loading} = useUser();

    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
        document.body.classList.add('overflow-y-hidden');
    }

    const handleModalClose = () => {
        setModalOpen(false)
        document.body.classList.remove('overflow-y-hidden');
    }

    // const handleChangePassword = async () => {
    //     await changePassword();
    // }

    const handleChangePassword = async (values, { setSubmitting, setErrors, resetForm }) => {
  try {
    const payload = {
      currentPassword: values.password,
      newPassword: values.npassword,
    };

    await changePassword(payload); 
    resetForm();
  } catch (err) {
    const errorMessage = err?.message || "Something went wrong. Please try again.";
    setErrors({ api: errorMessage });
  } finally {
    setSubmitting(false);
  }
};


    const validationSchema = Yup.object({
        password: Yup.string()
                    .required("Current password is required"),
                    // .matches(regex.password, 'Password must contain at least 8 characters, uppercase, lowercase, number, and special character'),
        npassword: Yup.string()
                .matches(regex.password, 'New Password must contain at least 8 characters, uppercase, lowercase, number, and special character')
                .required("New password is required"),
        cpassword: Yup.string()
                .oneOf([Yup.ref("npassword"), null], "Passwords must match")
                .required("Confirm password is required"),
    });

    return (
        <>
            {/* button for open model */}
            <button className='p-8 rounded-md bg-white hover:bg-icon flex items-center justify-start gap-6 w-full cursor-pointer border border-transparent' onClick={handleModalOpen}>
                <MdLockOutline className="text-xs text-main-text" />
                <p className='dropdown-title'>Change Password</p>
            </button>

            {/* model start */}
            <Modal isOpen={modalOpen} onClose={handleModalClose}>
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
                            <ErrorMessage name="password" component="div" className="error-message" />
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
                            <ErrorMessage name="npassword" component="div" className="error-message" />
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
                            <ErrorMessage name="cpassword" component="div" className="error-message" />
                        </div>
                    </div>

                    <div className="flex justify-end items-center gap-10">
                        <button type="button" onClick={handleModalClose} className="outline-btn cursor-pointer">Cancel</button>
                        {loading ? 
                        (<div className="flex justify-center items-center w-full text-center">
                            <Spinner />
                        </div>):(<button type="submit" className='flex items-center justify-between gap-8 button-icon'>
                                <span>Save</span>
                                <img src="asset/icons/white-save.svg" alt="icon" className="h-16" />
                            </button>)
                        }
                    </div>

                    </Form>
                </Formik>
            </Modal>
        </>
    )
}

export default ChangePassword;