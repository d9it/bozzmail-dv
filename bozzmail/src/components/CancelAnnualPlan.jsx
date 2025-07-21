import { useState } from "react";
import Modal from "./Modal"
import { NavLink } from "react-router";
import { PiWarningCircle } from "react-icons/pi";
import { useSubscription } from "../hook/useSubscription";
import { useToast } from "../context/toast/ToastContext";

const CancelAnnualPlan = () => {

    const [isMonthCheck, setIsMonthCheck] = useState(false);
    const { 
        currentSubscription, 
        loading, 
        error,
        upgradePlan 
    } = useSubscription();
    const { showToast } = useToast();

    const handleChangeToggle = (event) => {
        setIsMonthCheck(event.target.checked)
    }

    const handleSwitchToMonthly = async () => {
        const result = await upgradePlan(currentSubscription?.plan || 'starter', 'monthly');
        
        if (result.success) {
            showToast({ 
                message: 'Successfully switched to monthly billing!', 
                subText: 'Redirecting...' 
            });
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else {
            showToast({ 
                message: result.error || 'Failed to switch billing cycle', 
                type: 'error' 
            });
        }
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
            {currentSubscription?.billingCycle === 'yearly' && (<button className="flex items-center gap-10 text-primary cursor-pointer focus:border-none" onClick={handleModalOpen}>
                <img src="asset/icons/refresh-primary.svg" alt="icon" />
                <p className="hidden sm:block">Switch to monthly</p>
            </button>)}

            {/* model start */}
            <Modal isOpen={modalOpen} onClose={handleModalClose}>

                {/* alert */}
                <div className="fixed max-xl:top-16 max-xl:left-1/2 max-xl:transform max-xl:-translate-x-1/2 xl:bottom-30 xl:right-30 max-xl:px-16 max-xl:w-full max-xl:flex max-xl:justify-center z-2000000">
                    <div className="bg-white rounded-15px overflow-hidden relative w-fit shadow-box">
                        <div className="flex justify-start items-start gap-14 pt-20 pb-16 pr-96 xl:pr-80 pl-20">
                            <img src="/asset/icons/success.svg" alt="icon" className="h-20 flex-none" />
                            <div>
                                <p className="text-main-text font-semibold pb-0.5">You switched to montly billing</p>
                            </div>
                        </div>
                        <div className="h-3 bg-primary"></div>

                        {/* cross alert */}
                        <img src="/asset/icons/cross.svg" alt="icon" className="h-16 flex-none absolute top-12 right-24 cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-col gap-12 sm:gap-20">
                    <p className="text-xl sm:text-25px font-semibold text-main-text pr-40">Switch to Monthly Billing?</p>

                    <p className="text-15px font-medium text-main-text">By switching to monthly billing, your current <span className="font-semibold">20% annual discount will be removed.</span></p>

                    <div className="warning-message">
                        <PiWarningCircle className='text-secondary-text text-17px stroke-3 flex-none'/>
                        <p>Your subscription will renew at $19/month instead of $182.40/year.</p>
                    </div>

                    <div className="flex justify-end items-center gap-10">
                        <button onClick={handleModalClose} className="outline-btn cursor-pointer">Cancel</button>
                        <button 
                            onClick={handleSwitchToMonthly}
                            disabled={loading}
                            className={loading ? "disable-primary-btn" : "primary-btn"}
                        >
                            {loading ? 'Switching...' : 'Yes, switch to monthly'}
                        </button>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default CancelAnnualPlan;