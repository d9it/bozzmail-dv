import { useState } from "react";
import Modal from "./Modal"
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";
import useDropdown from '../hook/useDropdown';
import { MdLockOutline } from "react-icons/md";
import { CgEye } from "react-icons/cg";
import { BsEyeSlash } from "react-icons/bs";

const NotificationSetting = ({modalOpen,modalClose}) => {

    const dropdown1 = useDropdown();
    const dropdown2 = useDropdown();

    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            {/* button for open model */}
            {/* <button className='p-8 rounded-md bg-white hover:bg-icon flex items-center justify-start gap-6 w-full cursor-pointer border border-transparent' onClick={handleModalOpen}>
                <img src="/asset/icons/bell.svg" alt="icon" className='cursor-pointer' />
                <p className='dropdown-title'>Notifications</p>
            </button> */}

            {/* model start */}
            <Modal isOpen={modalOpen} onClose={modalClose}>

                {/* alert */}
                <div className="fixed max-xl:top-16 max-xl:left-1/2 max-xl:transform max-xl:-translate-x-1/2 xl:bottom-30 xl:right-30 max-xl:px-16 max-xl:w-full max-xl:flex max-xl:justify-center z-500">
                    <div className="bg-white rounded-15px overflow-hidden relative w-fit shadow-box">
                        <div className="flex justify-start items-start gap-14 pt-20 pb-16 pr-50 xl:pr-60 pl-20">
                            <img src="/asset/icons/success.svg" alt="icon" className="h-20 flex-none" />
                            <div className="w-full sm:max-w-md max-h-100 sm:max-h-90 overflow-auto dropdown-scrollbar">
                                <p className="text-main-text font-semibold pb-2">Notifications settings updated!</p>
                            </div>
                        </div>
                        <div className="h-3 bg-primary"></div>

                        {/* cross alert */}
                        <img src="/asset/icons/cross.svg" alt="icon" className="h-16 flex-none absolute top-12 right-24 cursor-pointer" />
                    </div>
                </div>

                <form className="flex flex-col gap-12 sm:gap-20">
                    <div className="space-y-4">
                        <p className="text-xl sm:text-25px font-semibold text-main-text pr-40">Notification Settings</p>
                        <p className="font-medium text-13px sm:text-sm text-secondary-text">Choose how you want to receive notifications</p>
                    </div>

                    <div className="flex justify-between gap-10 items-center">
                        <div className="space-y-3 text-main-text">
                            <p className="text-15px font-semibold">Email Notifications</p>
                            <p className="text-sm font-medium">Receive updates via email about your shipments and account</p>
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="hs-small-switch-soft" className="relative inline-block w-44 h-24 cursor-pointer">
                                <input type="checkbox" id="hs-small-switch-soft" className="peer sr-only" />
                                <span className="absolute inset-0 bg-white border border-secondary-text rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-[#EFF8F9] peer-checked:border-primary peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
                                <span className="absolute top-1/2 left-2 -translate-y-1/2 w-20 h-20 bg-secondary-text rounded-full transition-transform duration-200 ease-in-out peer-checked:bg-primary peer-checked:translate-x-full"></span>
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-between gap-10 items-center">
                        <div className="space-y-3 text-main-text">
                            <p className="text-15px font-semibold">SMS Notifications</p>
                            <p className="text-sm font-medium">Receive text messages for important updates and deliveries</p>
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="sms" className="relative inline-block w-44 h-24 cursor-pointer">
                                <input type="checkbox" id="sms" className="peer sr-only" />
                                <span className="absolute inset-0 bg-white border border-secondary-text rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-[#EFF8F9] peer-checked:border-primary peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
                                <span className="absolute top-1/2 left-2 -translate-y-1/2 w-20 h-20 bg-secondary-text rounded-full transition-transform duration-200 ease-in-out peer-checked:bg-primary peer-checked:translate-x-full"></span>
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-end items-center gap-10">
                        <button onClick={modalClose} className="outline-btn cursor-pointer">Cancel</button>
                        <button onClick={modalClose} className='flex items-center justify-between gap-8 button-icon'>
                            <span> Save</span>
                            <img src="asset/icons/white-save.svg" alt="icon" className="h-16" />
                        </button>
                    </div>

                </form>
            </Modal>
        </>
    )
}

export default NotificationSetting;