import { useState } from "react";
import Modal from "./Modal"
import { NavLink } from "react-router";

const PlanModal = () => {

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
            <button className="p-11 flex justify-center items-center gap-8 rounded-7px bg-white border border-Outlines cursor-pointer" onClick={handleModalOpen}>
                <img src="asset/icons/tabler_cancel.svg" alt="icon" className='h-16' />
                <p className="text-sm font-medium text-main-text hidden sm:block lg:hidden xl:block">Cancel</p>
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

                <div className="flex flex-col gap-12 lg:gap-20">
                    <p className="text-xl lg:text-25px font-semibold text-main-text pr-40">Are you sure you want to cancel the Growth Plan?</p>

                    <div className="bg-table-header py-11 px-17 rounded-lg text-13px font-semibold text-secondary-text border border-Outlines flex justify-start items-center gap-10">
                        <img src="asset/icons/grey-attention.svg" alt="icon" className='h-15' />
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

                        {/* Starter */}
                        <div className="rounded-15px py-26 px-20 flex gap-22 justify-start border border-Outlines flex-col">
                            <div className="flex gap-13 justify-start items-center">
                                <img src="asset/icons/Starter.svg" alt="icon" className='h-49' />
                                <div className="space-y-8">
                                    <div>
                                        <p className="subsription-title">Starter</p>
                                        <p className="subsription-description">Hobbyists, testers, and new users</p>
                                    </div>
                                    <div className="flex gap-8 items-start justify-start flex-col flex-wrap">
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
                            <NavLink to={"/subscription"} className="disable-primary-btn">Downgrade to Starter</NavLink>
                        </div>

                        {/* Growth */}
                        <div className="rounded-15px py-26 px-20 flex gap-22 justify-start border-2 border-primary flex-col relative overflow-hidden">

                            {/* tag */}
                            <p className="bg-primary text-white text-sm font-medium py-4 px-13 rounded-bl-7px absolute top-0 right-0">Current Plan</p>

                            <div className="flex gap-13 justify-start items-center">
                                <img src="asset/icons/Growth.svg" alt="icon" className='h-49' />
                                <div className="space-y-8">
                                    <div>
                                        <p className="subsription-title">Growth</p>
                                        <p className="subsription-description">Freelancers and side businesses</p>
                                    </div>

                                    <div className="flex gap-8 items-start justify-start flex-col flex-wrap">
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

                            <button onClick={handleModalClose} className="primary-btn">Stay on Growth</button>

                        </div>

                    </div>

                </div>
            </Modal>
        </>
    )
}

export default PlanModal;