import { useState } from "react";
import Modal from "./Modal"
import { NavLink } from "react-router";
import { PiWarningCircle } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import { IoCardOutline } from "react-icons/io5";

const TopUpWallet = () => {

    const [isMonthCheck, setIsMonthCheck] = useState(false);

    const handleChangeToggle = (event) => {
        setIsMonthCheck(event.target.checked)
    }

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
            <button className='small-button-border' onClick={handleModalOpen}>
                <GoPlus className='text-cta-secondary text-sm stroke-1' />
                <p>Top Up</p>
            </button>

            {/* model start */}
            <Modal isOpen={modalOpen} onClose={handleModalClose}>

                {/* alert */}
                <div className="fixed max-xl:top-16 max-xl:left-1/2 max-xl:transform max-xl:-translate-x-1/2 xl:bottom-30 xl:right-30 max-xl:px-16 max-xl:w-full max-xl:flex max-xl:justify-center z-500">
                    <div className="bg-white rounded-15px overflow-hidden relative w-fit shadow-box">
                        <div className="flex justify-start items-start gap-14 pt-20 pb-16 pr-50 xl:pr-60 pl-20">
                            <img src="/asset/icons/success.svg" alt="icon" className="h-20 flex-none" />
                            <div className="w-full sm:max-w-md max-h-100 sm:max-h-90 overflow-auto dropdown-scrollbar">
                                <p className="text-main-text font-semibold pb-2">Funds added successfully!</p>
                                <p className="text-secondary-text text-sm font-medium">$57 has been added to your wallet</p>
                            </div>
                        </div>
                        <div className="h-3 bg-primary"></div>

                        {/* cross alert */}
                        <img src="/asset/icons/cross.svg" alt="icon" className="h-16 flex-none absolute top-12 right-24 cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-col gap-12 sm:gap-20">
                    <div className="space-y-4">
                        <p className="text-xl sm:text-25px font-semibold text-main-text pr-40">Top Up Wallet</p>
                        <p className="font-medium text-13px sm:text-sm text-secondary-text">Add money to your BozzMail wallet for shipping and mail services.</p>
                    </div>

                    <div className='flex justify-start gap-8 flex-col w-full relative'>
                        <label htmlFor="insured" className='label-text'>Amount ($)<span>*</span></label>
                        <input type="text" name="" id="insured" required placeholder='50.00' className='form-input' />
                    </div>

                    <div className="warning-message">
                        <PiWarningCircle className='text-secondary-text text-17px stroke-3 flex-none' />
                        <p>You will be redirected to our secure payment processor to complete the transaction.</p>
                    </div>

                    <div className="flex justify-end items-center gap-10">
                        <button onClick={handleModalClose} className="outline-btn cursor-pointer">Cancel</button>
                        <button className='flex items-center justify-between gap-8 button-icon'>
                            <IoCardOutline className="text-white text-base"/>
                            <span> Add $50.00</span>
                        </button>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default TopUpWallet;