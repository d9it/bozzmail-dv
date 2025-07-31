import { useState } from "react";
import Modal from "./Modal"
import { NavLink } from "react-router";
import { PiWarningCircle } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import { IoCardOutline } from "react-icons/io5";
import useDropdown from '../hook/useDropdown';
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";

const CreateContact = () => {

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

    const dropdown2 = useDropdown();
    const dropdown3 = useDropdown();
    const dropdown4 = useDropdown();
    const dropdown5 = useDropdown();

    return (
        <>
            {/* button for open model */}
            <button className='flex items-center justify-between gap-8 button-icon flex-none' onClick={handleModalOpen}>
                <img src="asset/icons/white-plus.svg" alt="icon" />
                <span className='sm:block hidden'> Create Contact</span>
            </button>

            {/* <button className='flex items-center justify-between gap-8 disable-button-icon' onClick={handleModalOpen}>
                    <img src="asset/icons/white-plus.svg" alt="icon" />
                    <span className='sm:block hidden'> Create Contact</span>
                </button> */}

            {/* model start */}
            <Modal isOpen={modalOpen} onClose={handleModalClose}>

                {/* alert */}
                <div className="fixed max-xl:top-16 max-xl:left-1/2 max-xl:transform max-xl:-translate-x-1/2 xl:bottom-30 xl:right-30 max-xl:px-16 max-xl:w-full max-xl:flex max-xl:justify-center z-500">
                    <div className="bg-white rounded-15px overflow-hidden relative w-fit shadow-box">
                        <div className="flex justify-start items-start gap-14 pt-20 pb-16 pr-50 xl:pr-60 pl-20">
                            <img src="/asset/icons/success.svg" alt="icon" className="h-20 flex-none" />
                            <div className="w-full sm:max-w-md max-h-100 sm:max-h-90 overflow-auto dropdown-scrollbar">
                                <p className="text-main-text font-semibold pb-2">Contact created successfully!</p>
                            </div>
                        </div>
                        <div className="h-3 bg-primary"></div>

                        {/* cross alert */}
                        <img src="/asset/icons/cross.svg" alt="icon" className="h-16 flex-none absolute top-12 right-24 cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-col gap-12 sm:gap-20">
                    <div className="space-y-4">
                        <p className="text-xl sm:text-25px font-semibold text-main-text pr-40">Create New Contact</p>
                        <p className="font-medium text-13px sm:text-sm text-secondary-text">Add a new contact to your address book for easy shipping</p>
                    </div>

                    <form action="" className='space-y-12 sm:space-y-20'>
                        {/* general */}
                        <div className="space-y-20">
                            <p className='tab-heading'>General</p>

                            <div className="space-y-10">
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                                    <div className='flex justify-start gap-8 flex-col w-full'>
                                        <label htmlFor="name" className='label-text'>Full Name <span>*</span></label>
                                        <input type="text" name="" id="name" required placeholder='John Smith' className='form-input' />
                                    </div>

                                    <div className='flex justify-start gap-8 flex-col w-full'>
                                        <label htmlFor="company" className='label-text'>Company <span>*</span></label>
                                        <input type="text" name="" id="company" required placeholder='Tech Solutions Inc.' className='form-input' />
                                    </div>
                                </div>
                                <div className='flex justify-start gap-8 flex-col w-full'>
                                    <label htmlFor="title" className='label-text'>Job Title <span>*</span></label>
                                    <input type="text" name="" id="title" required placeholder='Not specified' className='form-input' />
                                </div>
                            </div>
                        </div>

                        {/* contact */}
                        <div className="space-y-20">
                            <p className='tab-heading'>Contacts</p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-10'>

                                <div className='flex justify-start gap-8 flex-col w-full'>
                                    <label htmlFor="pno" className='label-text'>Phone Number <span>*</span></label>
                                    <div ref={dropdown5.ref} className="relative">
                                        <div className='flex gap-8 justify-start items-start flex-col'>
                                            <button onClick={dropdown5.toggle} ref={dropdown5.triggerRef} id='pno' type='button' className="tab-select group !py-10">
                                                <div className='flex items-center justify-start gap-13'>
                                                    <div className='flex gap-5 items-center'>
                                                        <img src="/asset/icons/flag.svg" alt="icon" />
                                                        <IoChevronDown className={`text-sm transition-transform duration-300 text-arrow ${dropdown5.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                                    </div>

                                                    <div className='text-left'>
                                                        <span className='text-secondary-text text-xs font-medium pr-6'>+1</span>
                                                        <span className='text-place-holder text-sm font-medium'>(555) 555-0000</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>

                                        {/* Dropdown */}
                                        {dropdown5.isOpen && (
                                            <div className="form-dropdown-menu">
                                                <div className='w-full relative'>
                                                    <input type="search" name='search' placeholder='Search' className='table-small-search' autoFocus/>
                                                    <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                                                </div>
                                                <ul className='table-dropdown-item dropdown-scrollbar w-full'>
                                                    <li className='table-dropdown-title'>
                                                        <div className='flex justify-start items-center gap-20'>
                                                            <div className='flex justify-start items-center gap-9 flex-none'>
                                                                <img src="/asset/icons/flag.svg" alt="icon" />
                                                                +255
                                                            </div>
                                                            <p className='text-main-text'>United Republic of Tanzania</p>
                                                        </div>
                                                    </li>
                                                    <li className='table-dropdown-title'>
                                                        <div className='flex justify-start items-center gap-20'>
                                                            <div className='flex justify-start items-center gap-9 flex-none'>
                                                                <img src="/asset/icons/flag.svg" alt="icon" />
                                                                +255
                                                            </div>
                                                            <p className='text-main-text'>Uruguay</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className='flex justify-start gap-8 flex-col w-full'>
                                    <label htmlFor="email" className='label-text'>Email <span>*</span></label>
                                    <input type="email" name="" id="email" required placeholder='warehouse@techsolutions .com' className='form-input' />
                                </div>
                            </div>
                        </div>

                        {/* address */}
                        <div className="space-y-20">
                            <p className='tab-heading'>Address</p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                                <div className='flex justify-start gap-8 flex-col w-full'>
                                    <label htmlFor="country" className='label-text'>Country <span>*</span></label>
                                    <div ref={dropdown2.ref} className="relative">
                                        <div className='flex gap-8 justify-start items-start flex-col'>
                                            <button onClick={dropdown2.toggle} ref={dropdown2.triggerRef} id='country' type='button' className="tab-select group">
                                                <p className='text-place-holder text-13px font-medium'>United States</p>
                                                <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown2.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                            </button>
                                        </div>

                                        {/* Dropdown */}
                                        {dropdown2.isOpen && (
                                            <div className="form-dropdown-menu">
                                                <div className='w-full relative'>
                                                    <input type="search" name='search' placeholder='Search' className='table-small-search' autoFocus/>
                                                    <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                                                </div>
                                                <ul className='table-dropdown-item dropdown-scrollbar'>
                                                    <li className='table-dropdown-title'>United Republic of Tanzania</li>
                                                    <li className='table-dropdown-title'>United Kingdom</li>
                                                    <li className='table-dropdown-title'>United Arab Emirates</li>
                                                    <li className='table-dropdown-title'>United States</li>
                                                    <li className='table-dropdown-title'>Uruguay</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className='flex justify-start gap-8 flex-col w-full'>
                                    <label htmlFor="add1" className='label-text'>Address Line 1 <span>*</span></label>
                                    <input type="text" name="" id="add1" required placeholder='123 Business St' className='form-input' />
                                </div>

                                <div className='flex justify-start gap-8 flex-col w-full'>
                                    <label htmlFor="add2" className='label-text'>Address Line 2 <span>*</span></label>
                                    <input type="text" name="" id="add2" required placeholder='Apt, Suite, Unit, etc.' className='form-input' />
                                </div>

                                <div className='flex justify-start gap-8 flex-col w-full'>
                                    <label htmlFor="city" className='label-text'>City <span>*</span></label>
                                    <div ref={dropdown3.ref} className="relative">
                                        <div className='flex gap-8 justify-start items-start flex-col'>
                                            <button onClick={dropdown3.toggle} ref={dropdown3.triggerRef} id='city' type='button' className="tab-select group">
                                                <p className='text-place-holder text-13px font-medium text-left'>Lompoc</p>
                                                <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown3.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                            </button>
                                        </div>

                                        {/* Dropdown */}
                                        {dropdown3.isOpen && (
                                            <div className="form-dropdown-menu">
                                                <div className='w-full relative'>
                                                    <input type="search" name='search' placeholder='Search' className='table-small-search' autoFocus/>
                                                    <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                                                </div>
                                                <ul className='table-dropdown-item dropdown-scrollbar'>
                                                    <li className='table-dropdown-title'>Lodi</li>
                                                    <li className='table-dropdown-title'>Lompoc</li>
                                                    <li className='table-dropdown-title'>Long Beach</li>
                                                    <li className='table-dropdown-title'>Los Angeles</li>
                                                    <li className='table-dropdown-title'>Los Banos</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className='flex justify-start gap-8 flex-col w-full'>
                                    <label htmlFor="state" className='label-text'>State <span>*</span></label>

                                    <div ref={dropdown4.ref} className="relative">
                                        <div className='flex gap-8 justify-start items-start flex-col'>
                                            <button onClick={dropdown4.toggle} ref={dropdown4.triggerRef} id='state' type='button' className="tab-select group">
                                                <p className='text-place-holder text-13px font-medium'>California</p>
                                                <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown4.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                            </button>
                                        </div>

                                        {/* Dropdown */}
                                        {dropdown4.isOpen && (
                                            <div className="form-dropdown-menu-up">
                                                <div className='w-full relative'>
                                                    <input type="search" name='search' placeholder='Search' className='table-small-search' autoFocus/>
                                                    <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                                                </div>
                                                <ul className='table-dropdown-item dropdown-scrollbar'>
                                                    <li className='table-dropdown-title'>Arkansas</li>
                                                    <li className='table-dropdown-title'>Arizona</li>
                                                    <li className='table-dropdown-title'>Alaska</li>
                                                    <li className='table-dropdown-title'>Colorado</li>
                                                    <li className='table-dropdown-title'>California</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                </div>

                                <div className='flex justify-start gap-8 flex-col w-full'>
                                    <label htmlFor="zipcode" className='label-text'>Zip Code <span>*</span></label>
                                    <input type="text" name="" id="zipcode" required placeholder='94105' className='form-input' />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end items-center gap-10">
                            <button onClick={handleModalClose} className="outline-btn cursor-pointer">Cancel</button>
                            <button className='flex items-center justify-between gap-8 button-icon'>
                                <RiUserLine className="text-white text-base" />
                                <span> Create Contact</span>
                            </button>
                        </div>

                    </form>

                </div>
            </Modal>
        </>
    )
}

export default CreateContact;