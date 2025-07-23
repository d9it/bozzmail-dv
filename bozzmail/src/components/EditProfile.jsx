import { useState, useEffect } from "react";
import Modal from "./Modal"
import { NavLink } from "react-router";
import { PiWarningCircle } from "react-icons/pi";
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";
import useDropdown from '../hook/useDropdown';
import ConfirmAccountDelete from "../components/ConfirmAccountDelete";
import { useUser } from '../hook/useUser';
import { useAuth } from '../hook/useAuth';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { regex } from "../utils/regex";
import Spinner from "../utils/spinner/Spinner";

const EditProfile = () => {

    const dropdown1 = useDropdown();
    const dropdown2 = useDropdown();
    const { updateUserProfile, loading } = useUser();
    const { getCurrentUser } = useAuth();
    const user = getCurrentUser();

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
        fullName: user?.fullName || '',
        phoneNumber: user?.phoneNumber || '',
        address: {
            street1: user?.address?.street1 || '',
            street2: user?.address?.street2 || '',
            city: user?.address?.city || '',
            state: user?.address?.state || '',
            country: user?.address?.country || '',
            postalCode: user?.address?.postalCode || ''
        }
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Full Name is required'),
        phoneNumber: Yup.string().required('Phone Number is required'),
        address: Yup.object({
            street1: Yup.string().required('Street Address is required'),
            city: Yup.string().required('City is required'),
            state: Yup.string().required('State is required'),
            country: Yup.string().required('Country is required'),
            postalCode: Yup.string().required('Postal Code is required')
        })
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            await updateUserProfile(values);
            setShowSuccessAlert(true);
            resetForm({ values: { ...values } });
            setTimeout(() => {
                setShowSuccessAlert(false);
                handleModalClose();
            }, 2000);
        } catch (err) {
            console.error('Profile update error:', err);
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <>
            {/* button for open model */}
            <button className='p-8 rounded-md bg-white hover:bg-icon flex items-center justify-start gap-6 w-full cursor-pointer border border-transparent' onClick={handleModalOpen}>
                <img src="/asset/icons/edit.svg" alt="icon" className='cursor-pointer' />
                <p className='dropdown-title'>Edit Profile</p>
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
                                    <p className="text-main-text font-semibold pb-2">Profile Updated Successfully</p>
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
                    enableReinitialize
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form className="flex flex-col gap-12 sm:gap-20">
                    <div className="space-y-4">
                        <p className="text-xl sm:text-25px font-semibold text-main-text pr-40">Edit Profile</p>
                        <p className="font-medium text-13px sm:text-sm text-secondary-text">Update your personal information</p>
                    </div>

                    <div className='flex justify-start gap-8 flex-col w-full'>
                        <label htmlFor="fullName" className='label-text'>Full Name <span>*</span></label>
                        <Field
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder='Rui Doe'
                            className={`form-input${errors.fullName && touched.fullName ? ' border-red-500' : ''}`}
                        />
                        <ErrorMessage name="fullName" component="span" className="text-red-500 text-sm" />
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                        <div className='flex justify-start gap-8 flex-col w-full'>
                            <label htmlFor="email" className='label-text'>Email <span>*</span></label>
                            <input type="email" name="" id="email" placeholder='warehouse@techsolutions .com' className='form-input' disabled />
                            <p className="text-secondary-text text-sm">Email cannot be changed</p>
                        </div>

                        <div className='flex justify-start gap-8 flex-col w-full'>
                            <label htmlFor="phoneNumber" className='label-text'>Phone Number <span>*</span></label>
                            <Field
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder='+1 (555) 555-0000'
                                className={`form-input${errors.phoneNumber && touched.phoneNumber ? ' border-red-500' : ''}`}
                            />
                            <ErrorMessage name="phoneNumber" component="span" className="text-red-500 text-sm" />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                        <div className='flex justify-start gap-8 flex-col w-full'>
                            <label htmlFor="street1" className='label-text'>Street Address <span>*</span></label>
                            <Field
                                type="text"
                                name="address.street1"
                                id="street1"
                                placeholder='123 Main St'
                                className={`form-input${errors.address?.street1 && touched.address?.street1 ? ' border-red-500' : ''}`}
                            />
                            <ErrorMessage name="address.street1" component="span" className="text-red-500 text-sm" />
                        </div>

                        <div className='flex justify-start gap-8 flex-col w-full'>
                            <label htmlFor="street2" className='label-text'>Street Address 2</label>
                            <Field
                                type="text"
                                name="address.street2"
                                id="street2"
                                placeholder='Apt 4B'
                                className='form-input'
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-10'>
                        <div className='flex justify-start gap-8 flex-col w-full'>
                            <label htmlFor="city" className='label-text'>City <span>*</span></label>
                            <Field
                                type="text"
                                name="address.city"
                                id="city"
                                placeholder='New York'
                                className={`form-input${errors.address?.city && touched.address?.city ? ' border-red-500' : ''}`}
                            />
                            <ErrorMessage name="address.city" component="span" className="text-red-500 text-sm" />
                        </div>

                        <div className='flex justify-start gap-8 flex-col w-full'>
                            <label htmlFor="state" className='label-text'>State <span>*</span></label>
                            <Field
                                type="text"
                                name="address.state"
                                id="state"
                                placeholder='NY'
                                className={`form-input${errors.address?.state && touched.address?.state ? ' border-red-500' : ''}`}
                            />
                            <ErrorMessage name="address.state" component="span" className="text-red-500 text-sm" />
                        </div>

                        <div className='flex justify-start gap-8 flex-col w-full'>
                            <label htmlFor="postalCode" className='label-text'>Postal Code <span>*</span></label>
                            <Field
                                type="text"
                                name="address.postalCode"
                                id="postalCode"
                                placeholder='10001'
                                className={`form-input${errors.address?.postalCode && touched.address?.postalCode ? ' border-red-500' : ''}`}
                            />
                            <ErrorMessage name="address.postalCode" component="span" className="text-red-500 text-sm" />
                        </div>
                    </div>

                    <div className='flex justify-start gap-8 flex-col w-full'>
                        <label htmlFor="country" className='label-text'>Country <span>*</span></label>
                        <Field
                            type="text"
                            name="address.country"
                            id="country"
                            placeholder='US'
                            className={`form-input${errors.address?.country && touched.address?.country ? ' border-red-500' : ''}`}
                        />
                        <ErrorMessage name="address.country" component="span" className="text-red-500 text-sm" />
                    </div>

                    <hr className='text-Outlines' />

                    <div ref={dropdown2.ref} className="relative p-20 rounded-15px bg-danger-bg space-y-7">
                        <button onClick={dropdown2.toggle} id='pno' type='button' className=" flex justify-between items-center w-full focus:border-none cursor-pointer">
                            <p className="text-negative-warning font-semibold text-sm uppercase">Danger Zone</p>
                            <IoChevronDown className={`text-base transition-transform duration-300 text-main-text ${dropdown2.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                        </button>

                        {/* Dropdown */}
                        {dropdown2.isOpen && (
                            <div className="space-y-11">
                                <p className="text-sm font-medium text-main-text">Permanently delete your account and all associated data</p>

                                <ConfirmAccountDelete/>
                            </div>
                        )}
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

export default EditProfile;