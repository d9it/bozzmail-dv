import { useState, useEffect } from "react";
import Modal from "./Modal"
import { NavLink } from "react-router";
import { PiWarningCircle } from "react-icons/pi";
import { useSubscription } from "../hook/useSubscription";
import { useToast } from "../context/toast/ToastContext";

const PlanModal = () => {

    const [isMonthCheck, setIsMonthCheck] = useState(false);
    const { 
        currentSubscription, 
        subscriptionPlans, 
        loading, 
        error,
        upgradePlan 
    } = useSubscription();
    const { showToast } = useToast();

    // Debug logging
    useEffect(() => {
        console.log('PlanModal - Current Subscription:', currentSubscription);
        console.log('PlanModal - Subscription Plans:', subscriptionPlans);
        console.log('PlanModal - Loading:', loading);
        console.log('PlanModal - Error:', error);
    }, [currentSubscription, subscriptionPlans, loading, error]);

    const handleChangeToggle = (event) => {
        setIsMonthCheck(event.target.checked)
    }

    const handleDowngrade = async () => {
        const billingCycle = isMonthCheck ? 'yearly' : 'monthly';
        const result = await upgradePlan('starter', billingCycle);
        
        if (result.success) {
            showToast({ 
                message: 'Successfully downgraded to Starter plan!', 
                subText: 'Redirecting...' 
            });
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else {
            showToast({ 
                message: result.error || 'Failed to downgrade subscription', 
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
            <button className="flex items-center justify-between gap-8 button-border" onClick={handleModalOpen}>
                <img src="asset/icons/tabler_cancel.svg" alt="icon" className='h-16' />
                <p className="hidden sm:block">Cancel</p>
            </button>

            {/* model start */}
            <Modal isOpen={modalOpen} onClose={handleModalClose}>

                {/* alert */}
                <div className="fixed max-xl:top-16 max-xl:left-1/2 max-xl:transform max-xl:-translate-x-1/2 xl:bottom-30 xl:right-30 max-xl:px-16 max-xl:w-full max-xl:flex max-xl:justify-center z-2000000">
                    <div className="bg-white rounded-15px overflow-hidden relative w-fit shadow-box">
                        <div className="flex justify-start items-start gap-14 pt-20 pb-16 pr-96 xl:pr-80 pl-20">
                            <img src="/asset/icons/success.svg" alt="icon" className="h-20 flex-none" />
                            <div>
                                <p className="text-main-text font-semibold pb-0.5">Your plan has been downgraded</p>
                                <p className="text-secondary-text text-sm font-medium">Come back to paid plan whenever you ready!</p>
                            </div>
                        </div>
                        <div className="h-3 bg-primary"></div>

                        {/* cross alert */}
                        <img src="/asset/icons/cross.svg" alt="icon" className="h-16 flex-none absolute top-12 right-24 cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-col gap-12 sm:gap-20">
                    <p className="text-xl sm:text-25px font-semibold text-main-text pr-40">Are you sure you want to cancel the {currentSubscription?.plan ? currentSubscription.plan.charAt(0).toUpperCase() + currentSubscription.plan.slice(1) : 'Growth'} Plan?</p>

                    <div className="warning-message">
                        <PiWarningCircle className='text-secondary-text text-17px stroke-3 flex-none' />
                        <p>Canceling means you will be switched to our Starter plan which is free.</p>
                    </div>

                    <div className="flex gap-10 items-center justify-start flex-wrap">
                        <p className="text-sm font-medium text-main-text">Monthly</p>

                        {/* toggle */}
                        <div className="flex items-center">
                            <label htmlFor="hs-small-switch-soft" className="relative inline-block w-44 h-24 cursor-pointer">
                                <input type="checkbox" id="hs-small-switch-soft" className="peer sr-only" checked={isMonthCheck} onChange={handleChangeToggle} />
                                <span className="absolute inset-0 bg-white border border-secondary-text rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-[#EFF8F9] peer-checked:border-primary peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
                                <span className="absolute top-1/2 left-2 -translate-y-1/2 w-20 h-20 bg-secondary-text rounded-full transition-transform duration-200 ease-in-out peer-checked:bg-primary peer-checked:translate-x-full"></span>
                            </label>
                        </div>

                        <p className="text-sm font-medium text-secondary-text">Annualy <span className="text-primary">(-20%)</span></p>
                    </div>

                    {/* cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        {loading ? (
                            <div className="col-span-full text-center py-20">
                                <p className="text-main-text">Loading subscription plans...</p>
                            </div>
                        ) : error ? (
                            <div className="col-span-full text-center py-20">
                                <p className="text-red-500">Error loading plans: {error}</p>
                            </div>
                        ) : subscriptionPlans && subscriptionPlans.length > 0 ? (
                            subscriptionPlans.filter(plan => plan.id === 'starter' || plan.id === currentSubscription?.plan).map((plan) => {
                                const isCurrentPlan = currentSubscription?.plan === plan.id;
                                
                                return (
                                    <div 
                                        key={plan.id}
                                        className={`rounded-15px py-26 px-20 flex gap-22 justify-start ${
                                            isCurrentPlan ? 'border-2 border-primary' : 'border border-Outlines'
                                        } flex-col relative overflow-hidden`}
                                    >
                                        {/* Current Plan tag */}
                                        {isCurrentPlan && (
                                            <p className="bg-primary text-white text-sm font-medium py-4 px-13 rounded-bl-7px absolute top-0 right-0">Current Plan</p>
                                        )}

                                        <div className="flex gap-13 justify-start items-center">
                                            <img src={`asset/icons/${plan.name}.svg`} alt="icon" className='h-49' />
                                            <div className="space-y-8">
                                                <div>
                                                    <p className="subsription-title">{plan.name}</p>
                                                    <p className="subsription-description">{plan.description}</p>
                                                </div>
                                                
                                                <div className="flex gap-8 items-start justify-start flex-col flex-wrap">
                                                    {!isMonthCheck ? (
                                                        <p className="subscription-amount">
                                                            ${plan.price.monthly}/mo.
                                                        </p>
                                                    ) : (
                                                        <>
                                                            <p className="subscription-amount">
                                                                ${(plan.price.yearly / 12).toFixed(1)}/mo.
                                                            </p>
                                                            <div className="text-secondary-text text-sm font-medium flex items-center gap-14 break-all flex-wrap">
                                                                <s className="font-semibold">${plan.price.monthly}/mo.</s>
                                                                <p>${plan.price.yearly}/year</p>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="border-Outlines w-full" />

                                        <div className="space-y-16">
                                            <p className="font-semibold text-xs uppercase text-main-text">Includes:</p>

                                            <ul className="space-y-10">
                                                {plan.features.map((feature, index) => {
                                                    const isIncluded = plan.included.includes(index);
                                                    const isExcluded = plan.excluded.includes(index);
                                                    
                                                    return (
                                                        <li key={index} className={isIncluded ? "subscription-provided" : "subscription-unprovided"}>
                                                            <img 
                                                                src={isIncluded ? "asset/icons/check.svg" : isExcluded ? "asset/icons/gray-cross.svg" : "asset/icons/gray-check.svg"} 
                                                                alt="icon" 
                                                                className='h-14' 
                                                            />
                                                            <p dangerouslySetInnerHTML={{ __html: feature }}></p>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>

                                        {plan.id === 'starter' && (
                                            <button 
                                                onClick={handleDowngrade}
                                                disabled={loading || isCurrentPlan}
                                                className={loading || isCurrentPlan ? "disable-primary-btn" : "primary-btn"}
                                            >
                                                {loading ? 'Downgrading...' : isCurrentPlan ? 'Current Plan' : 'Downgrade to Starter'}
                                            </button>
                                        )}
                                    </div>
                                );
                            })
                        ) : (
                            <div className="col-span-full text-center py-20">
                                <p className="text-main-text">No subscription plans available.</p>
                            </div>
                        )}
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default PlanModal