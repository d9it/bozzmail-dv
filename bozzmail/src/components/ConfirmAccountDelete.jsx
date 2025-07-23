import { useState } from "react";
import Modal from "./Modal"
import { NavLink } from "react-router";
import { PiWarningCircle } from "react-icons/pi";
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";
import useDropdown from '../hook/useDropdown';


const ConfirmAccountDelete = () => {

    const dropdown1 = useDropdown();
    const dropdown2 = useDropdown();

    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
        document.body.classList.add('overflow-y-hidden');
    }

    const handleModalClose = () => {
        setModalOpen(false)
        document.body.classList.remove('overflow-y-hidden');
    }
    return (
        <>
            {/* button for open model */}
            <div onClick={handleModalOpen} className='flex items-center justify-between gap-8 small-button-border !border-border-danger w-fit'>
                <img src="asset/icons/red-delete.svg" alt="icon" className="h-17" />
                <span className='text-negative-warning'> Delete Account</span>
            </div>

            {/* model start */}
            <Modal isOpen={modalOpen} onClose={handleModalClose}>

                {/* alert */}
                {/* this alert will be display on register page after click on yes delete account */}
                <div className="fixed max-xl:top-16 max-xl:left-1/2 max-xl:transform max-xl:-translate-x-1/2 xl:bottom-30 xl:right-30 max-xl:px-16 max-xl:w-full max-xl:flex max-xl:justify-center z-2000000">
                    <div className="bg-white rounded-15px overflow-hidden relative w-fit shadow-box">
                        <div className="flex justify-start items-start gap-14 pt-20 pb-16 pr-50 xl:pr-60 pl-20">
                            <img src="/asset/icons/success.svg" alt="icon" className="h-20 flex-none" />
                            <div className="w-full sm:max-w-md max-h-100 sm:max-h-90 overflow-auto dropdown-scrollbar">
                                <p className="text-main-text font-semibold pb-2">Your account was successfully removed</p>
                            </div>
                        </div>
                        <div className="h-3 bg-primary"></div>

                        {/* cross alert */}
                        <img src="/asset/icons/cross.svg" alt="icon" className="h-16 flex-none absolute top-12 right-24 cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-col gap-12 sm:gap-20">
                    <div className="space-y-4">
                        <p className="text-xl sm:text-25px font-semibold text-main-text pr-40">Are you sure?</p>
                        <p className="font-medium text-13px sm:text-sm text-secondary-text">You will lose all of the data you have in your account</p>
                    </div>
                    
                    {/* on click of set loader and redirect to register page and alert page set on register page */}
                    <div className="flex justify-end items-center gap-10">
                        <button onClick={handleModalClose} className="outline-btn cursor-pointer">Cancel</button>
                        <NavLink to={"/register"}  className='flex items-center justify-between gap-8 delete-btn'>
                            <img src="asset/icons/white-delete.svg" alt="icon" className="h-16" />
                            <span> Yes, Delete Account</span>
                        </NavLink>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default ConfirmAccountDelete;