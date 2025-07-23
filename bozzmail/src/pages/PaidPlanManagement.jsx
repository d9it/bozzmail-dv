import { useState } from "react"
import { NavLink } from "react-router";
import CancelAnnualPlan from "../components/CancelAnnualPlan";
import CancelPlanModal from "../components/CancelPlanModal";

const PaidPlanManagement = () => {

    const [isMonthCheck, setIsMonthCheck] = useState(false);

    const handleChangeToggle = (event) => {
        setIsMonthCheck(event.target.checked)
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

                        <div className='bg-card-light-purple rounded-15px p-15 flex justify-between items-center flex-wrap gap-20'>
                            <div className="gap-20 flex justify-start items-center">
                                <img src="asset/icons/Growth.svg" alt="icon" className='h-49' />
                                <div>
                                    <p className='subsription-description'>Your Plan</p>
                                    <p className='subsription-title'>Growth</p>
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
                            <div className="flex justify-start items-start gap-15">
                                <div className="flex items-center gap-10 min-w-90 sm:min-w-130">
                                    <img src="asset/icons/solar_calendar-linear.svg" alt="icon" />
                                    <p>Billing cycle:</p>
                                </div>
                                <p>Annual <span className="text-secondary-text">($182.4/year)</span></p>

                                <CancelAnnualPlan />
                            </div>
                            <div className="flex justify-start items-start gap-15">
                                <div className="flex items-center gap-10 min-w-90 sm:min-w-130">
                                    <img src="asset/icons/cycle.svg" alt="icon" />
                                    <p>Next renewal:</p>
                                </div>
                                <p>June 12, 2026</p>
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
                                <img src="asset/icons/contact.svg" alt="icon" className='h-17' /><span>Contacts (4 of 10)</span>
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

                    {/* Starter */}
                    <div className="rounded-15px py-26 px-20 flex gap-22 justify-start border border-Outlines flex-col">
                        <div className="flex gap-13 justify-start items-center">
                            <img src="asset/icons/Starter.svg" alt="icon" className='h-49' />
                            <div className="space-y-8">
                                <div>
                                    <p className="subsription-title">Starter</p>
                                    <p className="subsription-description">Hobbyists, testers, and new users</p>
                                </div>
                                <div className="flex gap-8 items-center flex-wrap">
                                    {!isMonthCheck ?
                                        <p className="subscription-amount">$0/mo.</p> :
                                        <>
                                            <p className="subscription-amount">$0/mo.</p>
                                            <div className="text-secondary-text text-sm font-medium flex items-center gap-14 break-all flex-wrap"><s className="font-semibold">$0/mo.</s><p>$0/year</p></div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>

                        <hr className="border-Outlines w-full" />

                        <div className="space-y-16">
                            <p className="font-semibold text-xs uppercase text-main-text">Includes:</p>

                            <ul className="space-y-10">
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Create and print shipping labels</p>
                                </li>
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Send letters and postcards (pay per piece sent)</p>
                                </li>
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Store up to <b>10 contacts</b></p>
                                </li>
                                <li className="subscription-unprovided">
                                    <img src="asset/icons/gray-check.svg" alt="icon" className='h-14' />
                                    <p>Limited support</p>
                                </li>
                                <li className="subscription-unprovided">
                                    <img src="asset/icons/gray-check.svg" alt="icon" className='h-14' />
                                    <p>No API access</p>
                                </li>
                                <li className="subscription-unprovided">
                                    <img src="asset/icons/gray-cross.svg" alt="icon" className='h-14' />
                                    <p>Standart shipping rates</p>
                                </li>
                                <li className="subscription-unprovided">
                                    <img src="asset/icons/gray-cross.svg" alt="icon" className='h-14' />
                                    <p>No access to the Partner Program</p>
                                </li>
                                <li className="subscription-unprovided">
                                    <img src="asset/icons/gray-cross.svg" alt="icon" className='h-14' />
                                    <p>Manual one-by-one shipping & mailing only</p>
                                </li>
                                <li className="subscription-unprovided">
                                    <img src="asset/icons/gray-cross.svg" alt="icon" className='h-14' />
                                    <p>No batch import tools</p>
                                </li>
                            </ul>
                        </div>

                        <p className="bg-table-header p-10 rounded-5px text-xs font-medium text-main-text">Try the full workflow at no cost — just pay when you ship or mail.</p>

                        <NavLink to={"/subscription"} className="primary-btn">Downgrade to Starter</NavLink>
                    </div>

                    {/* Growth */}
                    <div className="rounded-15px py-26 px-20 flex gap-22 justify-start border border-Outlines flex-col  overflow-hidden">

                        <div className="flex gap-13 justify-start items-center">
                            <img src="asset/icons/Growth.svg" alt="icon" className='h-49' />
                            <div className="space-y-8">
                                <div>
                                    <p className="subsription-title">Growth</p>
                                    <p className="subsription-description">Freelancers and side businesses</p>
                                </div>

                                <div className="flex gap-8 items-center flex-wrap">
                                    {!isMonthCheck ?
                                        <p className="subscription-amount">$19/mo.</p> :
                                        <>
                                            <p className="subscription-amount">$15.2/mo.</p>
                                            <div className="text-secondary-text text-sm font-medium flex items-center gap-14 break-all flex-wrap"><s className="font-semibold">$19/mo.</s><p>$182.4/year</p></div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>

                        <hr className="border-Outlines w-full" />

                        <div className="space-y-16">
                            <p className="font-semibold text-xs uppercase text-main-text">Includes:</p>

                            <ul className="space-y-10">
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Create and print shipping labels</p>
                                </li>
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Send letters and postcards (pay per piece sent)</p>
                                </li>
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Store up to <b>50 contacts</b></p>
                                </li>
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Priority support</p>
                                </li>
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Full API access</p>
                                </li>
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Access to discounted shipping rates</p>
                                </li>
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Access to the Partner Program</p>
                                </li>
                                <li className="subscription-unprovided">
                                    <img src="asset/icons/gray-cross.svg" alt="icon" className='h-14' />
                                    <p>Manual one-by-one shipping & mailing only</p>
                                </li>
                                <li className="subscription-unprovided">
                                    <img src="asset/icons/gray-cross.svg" alt="icon" className='h-14' />
                                    <p>No batch import tools</p>
                                </li>
                            </ul>
                        </div>

                        <p className="bg-table-header p-10 rounded-5px text-xs font-medium text-main-text">Designed for solo operations that need recurring contact management and carrier discounts.</p>

                        <NavLink to={"/#"} className="disable-primary-btn">Current Plan</NavLink>

                    </div>

                    {/* Professional */}
                    <div className="md:col-span-2 xl:col-span-1 rounded-15px py-26 px-20 flex gap-22 justify-start border border-Outlines flex-col">
                        <div className="flex gap-13 justify-start items-center">
                            <img src="asset/icons/Professional.svg" alt="icon" className='h-49' />
                            <div className="space-y-8">
                                <div>
                                    <p className="subsription-title">Professional</p>
                                    <p className="subsription-description">Small brands, marketers, and teams</p>
                                </div>

                                <div className="flex gap-8 items-center flex-wrap">
                                    {!isMonthCheck ?
                                        <p className="subscription-amount">$49/mo.</p> :
                                        <>
                                            <p className="subscription-amount">$39.2/mo.</p>
                                            <div className="text-secondary-text text-sm font-medium flex items-center gap-14 break-all flex-wrap"><s className="font-semibold">$0/mo.</s><p>$470.4/year</p></div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>

                        <hr className="border-Outlines w-full" />

                        <div className="space-y-16">
                            <p className="font-semibold text-xs uppercase text-main-text">Includes:</p>

                            <ul className="space-y-10">
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Create and print shipping labels</p>
                                </li>
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Send letters and postcards (pay per piece sent)</p>
                                </li>
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Store up to <b>500 contacts</b></p>
                                </li>
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Priority support</p>
                                </li>
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Full API access</p>
                                </li>
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Access to discounted shipping rates</p>
                                </li>
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Access to the Partner Program</p>
                                </li>
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Batch shipping and mass mailing tools</p>
                                </li>
                                <li className="subscription-provided">
                                    <img src="asset/icons/check.svg" alt="icon" className='h-14' />
                                    <p>Import/export for contacts/campaigns</p>
                                </li>
                            </ul>
                        </div>

                        <p className="bg-table-header p-10 rounded-5px text-xs font-medium text-main-text">Built for teams that need automation, scalability, and deeper workflow integration.</p>

                        <NavLink to={"/professional-plan-management"} className="primary-btn">Upgrade to Professional</NavLink>

                    </div>

                </div>
            </div>
        </>
    )
}

export default PaidPlanManagement
