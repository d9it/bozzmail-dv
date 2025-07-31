import { useEffect, useState } from "react";
import Modal from "./Modal";
import { IoChevronDown } from "react-icons/io5";
import useDropdown from '../hook/useDropdown';
import ConfirmAccountDelete from "../components/ConfirmAccountDelete";
import * as Yup from 'yup';
import { regex } from '../utils/regex';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useUser } from '../hook/useUser';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import Spinner from "../utils/spinner/Spinner";
 
const EditProfile = ({modalOpen,modalClose}) => {
    // const dropdown1 = useDropdown();
    const dropdown2 = useDropdown();
    // const [modalOpen, setModalOpen] = useState(false);
    const { updateUserProfile, getUserDetails, loading, error } = useUser();
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [userData, setUserData] = useState(null);
 
    useEffect(() => {
        const existingUser = JSON.parse(localStorage.getItem('user')) || {};
        setUserData({
            fullName: existingUser?.fullName || '',
            email: existingUser?.email || '',
            phoneNumber: existingUser?.phoneNumber || ''
        });
    }, []);
 
    const initialValues = userData || {
        fullName: '',
        email: '',
        phoneNumber: ''
    };
 
    const validationSchema = Yup.object({
        fullName: Yup.string(),
        email: Yup.string()
            .matches(regex.email, 'Please enter a valid email address'),
        phoneNumber: Yup.string()
            .matches(regex.phoneNumber, 'Please enter a valid phone number'),
    });
 
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            // console.log('Submitting values:', values);
 
            await updateUserProfile({
                ...values,
                phoneNumber: values.phoneNumber,
            });
 
            // Get existing user from localStorage
            const existingUser = JSON.parse(localStorage.getItem('user')) || {};
 
            // Update it with new values
            const updatedUser = {
                ...existingUser,
                ...values,
            };
 
            // Save back to localStorage
            localStorage.setItem('user', JSON.stringify(updatedUser));
 
            setSaveSuccess(true);
        } catch (error) {
            console.error("Failed to update profile:", error);
        } finally {
            setSubmitting(false);
        }
    };
 
   useEffect(() => {
  if (saveSuccess) {
    const timer = setTimeout(() => {
      modalClose(); 
      setSaveSuccess(false); 
    }, 200);
    return () => clearTimeout(timer);
  }
}, [saveSuccess, modalClose]);
  
    return (
        <> 
            {/* model start */}
            <Modal isOpen={modalOpen} onClose={modalClose}>
 
                {/* alert */}
                {/* on click of save button this alert will be display */}
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    enableReinitialize={true}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, setFieldValue, setFieldTouched }) => (
                        <Form className="flex flex-col gap-12 sm:gap-20">
                            <div className="space-y-4">
                                <p className="text-xl sm:text-25px font-semibold text-main-text pr-40">Edit Profile</p>
                                <p className="font-medium text-13px sm:text-sm text-secondary-text">Update your personal information</p>
                            </div>
 
                            <div className='flex justify-start gap-8 flex-col w-full'>
                                <label htmlFor="fullName" className='label-text'>Full Name <span>*</span></label>
                                <Field type="text" name="fullName" placeholder='Rui Doe' className='form-input' />
                                <ErrorMessage name="fullName" component="div" className="error-message" />
                            </div>
 
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                                <div className='flex justify-start gap-8 flex-col w-full'>
                                    <label htmlFor="email" className='label-text'>Email <span>*</span></label>
                                    <Field type="email" name="email" placeholder='warehouse@techsolutions.com' className='form-input' />
                                    <ErrorMessage name="email" component="div" className="error-message" />
                                </div>
 
                                {/* Phone Number Drop Down */}
                                <div className='flex justify-start gap-8 flex-col w-full phone-flag-number '>
                                    <label htmlFor="phoneNumber" className='label-text'>Phone Number <span>*</span></label>
                                    <Field name="phoneNumber">
                                        {({ field }) => (
                                            <PhoneInput
                                                country={'us'}
                                                value={field.value}
                                                onChange={(phone) => {
                                                    setFieldValue('phoneNumber', phone);
                                                }}
                                                onBlur={() => {
                                                    setFieldTouched('phoneNumber', true);
                                                }}
                                                enableSearch={true}
                                                inputProps={{
                                                    name: 'phoneNumber',
                                                    required: true,
                                                    autoFocus: false,
                                                    placeholder: "(555) 555-0000"
                                                }}
                                                buttonClass="custom-flag-button"
                                                containerClass="w-full"
                                                dropdownClass="custom-dropdown"
                                            />
                                        )}
                                    </Field>
                                    <ErrorMessage name="phoneNumber" component="div" className="error-message" />
                                </div>

                            </div>
                            <hr className='text-Outlines' />
                            <div ref={dropdown2.ref} className="relative p-20 rounded-15px bg-danger-bg space-y-7">
                                <button onClick={dropdown2.toggle} id='danger' type='button' className="flex justify-between items-center w-full focus:border-none cursor-pointer">
                                    <p className="text-negative-warning font-semibold text-sm uppercase">Danger Zone</p>
                                    <IoChevronDown className={`text-base transition-transform duration-300 text-main-text ${dropdown2.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                </button>
                                {dropdown2.isOpen && (
                                    <div className="space-y-11">
                                        <p className="text-sm font-medium text-main-text">Permanently delete your account and all associated data</p>
                                        <ConfirmAccountDelete />
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-end items-center gap-10">
                                <button type="button" onClick={modalClose} className="outline-btn cursor-pointer">Cancel</button>
                                <button type="submit" disabled={isSubmitting} className={(loading || saveSuccess || isSubmitting) ? 'flex items-center justify-between gap-8 disable-button-icon' : 'flex items-center justify-between gap-8 button-icon'}>
                                    {
                                        saveSuccess ? (
                                            <div className="flex justify-center items-center w-full text-center">
                                                <img src="/asset/icons/check-white.svg" alt="Success" className="h-16" />
                                            </div>
                                        ) :
                                            (loading || isSubmitting) ? (
                                                <div className="flex justify-center items-center w-full text-center">
                                                    <Spinner />
                                                </div>
                                            ) : (
                                                <>
                                                    <span>Save</span>
                                                    <img src="asset/icons/white-save.svg" alt="icon" className="h-16" />
                                                </>
                                            )
                                    }
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
