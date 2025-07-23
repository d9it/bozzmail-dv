import { useState, useEffect } from "react";
import Modal from "./Modal"
import { PiWarningCircle } from "react-icons/pi";
import { useToast } from "../context/toast/ToastContext";

const CancelPlanModal = ({ currentSubscription, subscriptionPlans, loading, error, upgradePlan }) => {

    const [isMonthCheck, setIsMonthCheck] = useState(false);
    const { showToast } = useToast();

    const handlePlanChange = async (planId) => {
        const billingCycle = isMonthCheck ? 'yearly' : 'monthly';
        const result = await upgradePlan(planId, billingCycle);

        if (result.success) {
            let message = '';
            let subText = '';

            if (planId === 'starter') {
                message = 'Your plan has been downgraded';
                subText = 'Come back to paid plan whenever you are ready!';
            } else if (currentSubscription?.plan === planId && currentSubscription?.billingCycle !== billingCycle) {
                message = `Your billing cycle has been changed to ${billingCycle === 'yearly' ? 'Annually' : 'Monthly'}`;
            } else {
                message = `Your plan has been upgraded to ${planId.charAt(0).toUpperCase() + planId.slice(1)}`;
            }

            showToast({
                message,
                subText
            });
            handleModalClose();
        } else {
            showToast({
                message: result.error || 'Failed to change subscription',
                type: 'error'
            });
        }
    };

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

    // Debug logging
    useEffect(() => {
        // console.log('===CancelPlanModal - Current Subscription plan:===', currentSubscription);
        // setCurrentSubscription(currentSubscription);
        // console.log('CancelPlanModal - Subscription Plans:', subscriptionPlans);
        // console.log('CancelPlanModal - Current Subscription billing cycle:', );
        // console.log('CancelPlanModal - Loading:', loading);
        // console.log('CancelPlanModal - Error:', error);
    }, [currentSubscription]);

    // Set toggle to match current plan's billing cycle when modal opens
    useEffect(() => {
        if (modalOpen && currentSubscription?.billingCycle) {
            setIsMonthCheck(currentSubscription.billingCycle === 'yearly');
        }
    }, [modalOpen, currentSubscription]);

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


                <div className="flex flex-col gap-12 sm:gap-20">
                    <p className="text-xl sm:text-25px font-semibold text-main-text pr-40">Are you sure you want to cancel the <span className='capitalize'>{currentSubscription?.plan || 'Growth'}</span> Plan?</p>

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

                        <p className="text-sm font-medium text-secondary-text">Annually <span className={`${isMonthCheck ? "text-positive-warning" : "text-primary"}`}>(-20%)</span></p>
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

                            subscriptionPlans
                                .filter(plan => plan.id === 'starter' || plan.id === currentSubscription?.plan)
                                .map((plan) => {
                                    const selectedBillingCycle = isMonthCheck ? 'yearly' : 'monthly';
                                    const isCurrentPlan = currentSubscription?.plan === plan.id && currentSubscription?.billingCycle === selectedBillingCycle;
                                    const isSamePlanDifferentCycle = currentSubscription?.plan === plan.id && currentSubscription?.billingCycle !== selectedBillingCycle;

                                    let buttonLabel = '';
                                    if (isCurrentPlan) {
                                        buttonLabel = `Stay On ${plan.name}`;
                                    } else if (plan.id === 'starter') {
                                        buttonLabel = `Downgrade to Starter `;
                                    } else if (isSamePlanDifferentCycle) {
                                        buttonLabel = `Upgrade to ${plan.name} `;
                                    } else {
                                        buttonLabel = `Upgrade to ${plan.name} `;
                                    }

                                    return (
                                        <div
                                            key={plan.id}
                                            className={`rounded-15px py-26 px-20 flex gap-22 justify-start ${isCurrentPlan ? 'border-2 border-primary' : 'border border-Outlines'
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

                                            {
                                                <button
                                                    onClick={isCurrentPlan ? handleModalClose : () => handlePlanChange(plan.id)}
                                                    disabled={loading && !isCurrentPlan}
                                                    className={loading && !isCurrentPlan ? "disable-primary-btn" : "primary-btn"}
                                                >
                                                    {loading && !isCurrentPlan ? 'Processing...' : buttonLabel}
                                                </button>
                                            }
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

export default CancelPlanModal