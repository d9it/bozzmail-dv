import { useState, useEffect } from "react"
import { NavLink } from "react-router";
import CancelPlanModal from "../components/CancelPlanModal";
import CancelPlan from "../components/CancelAnnualPlan";
import { useSubscription } from "../hook/useSubscription";
import { useToast } from "../context/toast/ToastContext";

const ProfessionalPlanManagement = () => {

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
        // console.log('ProfessionalPlanManagement - Current Subscription:', currentSubscription);
        // console.log('ProfessionalPlanManagement - Subscription Plans:', subscriptionPlans);
        // console.log('ProfessionalPlanManagement - Loading:', loading);
        // console.log('ProfessionalPlanManagement - Error:', error);
    }, [currentSubscription, subscriptionPlans, loading, error]);

    const handleChangeToggle = (event) => {
        setIsMonthCheck(event.target.checked)
    }

    const handleUpgrade = async (planId) => {
        const billingCycle = isMonthCheck ? 'yearly' : 'monthly';
        const result = await upgradePlan(planId, billingCycle);
        
        if (result.success) {
            showToast({ 
                message: `Successfully upgraded to ${planId} plan!`, 
                subText: 'Redirecting...' 
            });
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else {
            showToast({ 
                message: result.error || 'Failed to upgrade subscription', 
                type: 'error' 
            });
        }
    }

    return (
        <>
            {/*cards */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-15 sm:gap-20">
                <div className='py-20 sm:py-30 pr-15 sm:pr-30 bg-white rounded-15px sm:rounded-20px'>
                    <div className='flex gap-10 sm:gap-25 items-center justify-start'>
                        <div className='w-5 h-40 bg-cta-secondary rounded-tr-10px rounded-br-10px'></div>
                        <div className='flex gap-5 sm:gap-10'>
                            <h1 className='font-semibold text-22px sm:text-25px text-main-text'>Subscription</h1>
                        </div>
                    </div>

                    {/* card */}
                    <div className='pl-15 sm:pl-30 pt-10 sm:pt-20'>

                        <div className='bg-card-light-yellow rounded-15px p-15 flex justify-between items-center flex-wrap gap-20'>
                            <div className="gap-20 flex justify-start items-center">
                                <img src={`asset/icons/${currentSubscription?.plan ? currentSubscription.plan.charAt(0).toUpperCase() + currentSubscription.plan.slice(1) : 'Professional'}.svg`} alt="icon" className='h-49' />
                                <div>
                                    <p className='subsription-description'>Your Plan</p>
                                    <p className='subsription-title'>{currentSubscription?.plan ? currentSubscription.plan.charAt(0).toUpperCase() + currentSubscription.plan.slice(1) : 'Professional'}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-10">

                                <a href="#upgarde" className="flex items-center justify-between gap-8 button-border" >
                                    <img src="asset/icons/upgrade.svg" alt="icon" className='h-16' />
                                    <span className="hidden sm:block">Upgrade</span>
                                </a>

                               <CancelPlanModal />
                            </div>
                        </div>

                        <div className="pt-20 flex flex-col justify-start items-start gap-10 text-sm font-medium text-main-text">
                            <div className="flex gap-15">
                                <div className="flex items-center gap-10 min-w-90 sm:min-w-130">
                                    <img src="asset/icons/solar_calendar-linear.svg" alt="icon" />
                                    <p>Billing cycle:</p>
                                </div>
                                <p>{currentSubscription?.billingCycle === 'yearly' ? 'Annual' : 'Monthly'} <span className="text-secondary-text">({currentSubscription?.billingCycle === 'yearly' ? `$${currentSubscription?.yearlyPrice}/year` : `$${currentSubscription?.monthlyPrice}/month`})</span></p>

                                <CancelPlan />
                            </div>
                            <div className="flex justify-start items-start gap-15">
                                <div className="flex items-center gap-10 min-w-90 sm:min-w-130">
                                    <img src="asset/icons/cycle.svg" alt="icon" />
                                    <p>Next renewal:</p>
                                </div>
                                <div className="flex items-center justify-start gap-15 flex-wrap">
                                    <div>
                                        <p className="text-sm font-medium text-negative-warning flex gap-4 items-center"><img src="asset/icons/warning-alert.svg" alt="icon" className="h-14"/>Yesterday</p>
                                        <p className="text-sm font-medium text-secondary-text">There was a problem with the card!</p>
                                    </div>
                                    <button className="py-8 px-11 border border-Outlines focus:border-outlines-active active:border-outlines-active rounded-7px text-sm font-medium text-main-text cursor-pointer">Fix It</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='max-sm:py-20 max-sm:px-15 sm:p-30 bg-white rounded-15px sm:rounded-20px flex gap-10 sm:gap-20 justify-start items-start flex-col'>

                    <div className='flex gap-6 sm:gap-10'>
                        <img src="asset/icons/flash-solid.svg" alt="icon" />
                        <h2 className='font-semibold text-17px sm:text-xl text-main-text'>Quick actions</h2>
                    </div>

                    <div className="space-y-8">
                        <p className='font-semibold text-base text-main-text'>Shipments</p>
                        <div className="flex flex-wrap gap-10">
                            <p className="subscription-badge">
                                <img src="asset/icons/label.svg" alt="icon" className='h-17' /><span>Create Label</span>
                            </p>

                            <p className="subscription-badge">
                                <img src="asset/icons/mail.svg" alt="icon" className='h-17' /><span>Create Mail</span>
                            </p>

                            <p className="subscription-badge">
                                <img src="asset/icons/calendar.svg" alt="icon" className='h-17' /><span>Create Schedule Pickup</span>
                            </p>

                        </div>
                    </div>

                    <div className="space-y-8">
                        <p className='font-semibold text-base text-main-text'>Management</p>
                        <div className="flex flex-wrap gap-10">
                            <p className="rounded-7px p-11 flex gap-8 border border-Outlines text-sm font-medium">
                                <img src="asset/icons/billing.svg" alt="icon" className='h-17' /><span>Transactions</span>
                            </p>

                            <p className="rounded-7px p-11 flex gap-8 border border-Outlines text-sm font-medium">
                                <img src="asset/icons/contact.svg" alt="icon" className='h-17' /><span>Contacts ({currentSubscription?.usedContacts || 4} of {currentSubscription?.maxContacts || 10})</span>
                            </p>

                            <p className="rounded-7px p-11 flex gap-8 border border-Outlines text-sm font-medium">
                                <img src="asset/icons/help.svg" alt="icon" className='h-17' /><span>Help</span>
                            </p>

                        </div>
                    </div>

                </div>

            </div>

            <div className="bg-white rounded-20px max-sm:py-20 max-sm:px-15 sm:p-30 flex justify-start gap-10 sm:gap-20 flex-col" id="upgarde">
                {/* header */}
                <div className="flex justify-between sm:justify-start items-center gap-10 sm:gap-30 flex-wrap">
                    <p className="font-semibold text-xl text-main-text">Plans</p>
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
                    {loading ? (
                        <div className="col-span-full text-center py-20">
                            <p className="text-main-text">Loading subscription plans...</p>
                        </div>
                    ) : error ? (
                        <div className="col-span-full text-center py-20">
                            <p className="text-red-500">Error loading plans: {error}</p>
                        </div>
                    ) : subscriptionPlans && subscriptionPlans.length > 0 ? (
                        subscriptionPlans.map((plan) => {
                            const isCurrentPlan = currentSubscription?.plan === plan.id;
                            const isPopular = plan.id === 'growth';
                            
                            return (
                                <div 
                                    key={plan.id}
                                    className={`rounded-15px py-26 px-20 flex gap-22 justify-start ${
                                        isCurrentPlan ? 'border-2 border-primary' : 'border border-Outlines'
                                    } flex-col relative overflow-hidden ${
                                        plan.id === 'professional' ? 'md:col-span-2 xl:col-span-1' : ''
                                    }`}
                                >
                                    {/* Popular tag */}
                                    {isPopular && (
                                        <p className="bg-primary text-white text-sm font-medium py-4 px-13 rounded-bl-7px absolute top-0 right-0">
                                            Most Popular
                                        </p>
                                    )}

                                    <div className="flex gap-13 justify-start items-center">
                                        <img src={`asset/icons/${plan.name}.svg`} alt="icon" className='h-49' />
                                        <div className="space-y-8">
                                            <div>
                                                <p className="subsription-title">{plan.name}</p>
                                                <p className="subsription-description">{plan.description}</p>
                                            </div>
                                            
                                            <div className="flex gap-8 items-center flex-wrap">
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

                                    <p className="bg-table-header p-10 rounded-5px text-xs font-medium text-main-text">
                                        {plan.id === 'starter' ? 'Try the full workflow at no cost — just pay when you ship or mail.' :
                                         plan.id === 'growth' ? 'Designed for solo operations that need recurring contact management and carrier discounts.' :
                                         'Built for teams that need automation, scalability, and deeper workflow integration.'}
                                    </p>

                                    <button 
                                        onClick={() => handleUpgrade(plan.id)}
                                        disabled={loading || isCurrentPlan}
                                        className={loading || isCurrentPlan ? "disable-primary-btn" : "primary-btn"}
                                    >
                                        {loading ? 'Processing...' : isCurrentPlan ? 'Current Plan' : 
                                         currentSubscription?.plan === 'professional' && plan.id === 'starter' ? 'Downgrade to Starter' :
                                         currentSubscription?.plan === 'professional' && plan.id === 'growth' ? 'Downgrade to Growth' :
                                         currentSubscription?.plan === 'growth' && plan.id === 'starter' ? 'Downgrade to Starter' :
                                         'Upgrade to ' + plan.name}
                                    </button>
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
        </>
    )
}

export default ProfessionalPlanManagement
