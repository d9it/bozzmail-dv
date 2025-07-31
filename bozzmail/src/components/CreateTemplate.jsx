import { useState } from "react";
import Modal from "./Modal"
import { NavLink } from "react-router";
import { PiWarningCircle } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import { IoCardOutline } from "react-icons/io5";
import useDropdown from '../hook/useDropdown';
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";
import NewFallCampaign from './NewFallCampaign';

const CreateTemplate = ({ onOpenChange }) => {

    const dropdown1 = useDropdown();
    const dropdown2 = useDropdown();
    const dropdown3 = useDropdown();

    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
        onOpenChange?.(true); // tell parent modal is open
        document.body.classList.add('overflow-y-hidden');
    }

    const handleModalClose = () => {
        setModalOpen(false);
        onOpenChange?.(false); // tell parent modal is closed
        document.body.classList.remove('overflow-y-hidden');
    }
    return (
        <>
            {/* button for open model */}
            <button className="create-mail-template" onClick={handleModalOpen}>
                <GoPlus className='text-main-text text-base stroke-1' />
                <p className='create-template-text'>Create New Template</p>
            </button>

            {/* model start */}
            <Modal isOpen={modalOpen} onClose={handleModalClose}>
                <div className="flex flex-col gap-12 sm:gap-20">
                    <p className="text-xl sm:text-25px font-semibold text-main-text pr-40">CreateTemplate</p>

                    <div className='flex justify-start gap-8 flex-col w-full'>
                        <label htmlFor="destination" className='label-text'>Collateral Destination <span>*</span></label>
                        <div ref={dropdown1.ref} className="relative">
                            <div className='flex gap-8 justify-start items-start flex-col'>
                                <button onClick={dropdown1.toggle} ref={dropdown1.triggerRef} id='destination' type='button' className="tab-select group">
                                    <p className='text-place-holder text-13px font-medium'>United States</p>
                                    <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown1.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                </button>
                            </div>

                            {/* Dropdown */}
                            {dropdown1.isOpen && (
                                <div className="form-dropdown-menu">
                                    <div className='w-full relative'>
                                        <input type="search" name='search' placeholder='Search' className='table-small-search' />
                                        <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                                    </div>
                                    <ul className='table-dropdown-item dropdown-scrollbar'>
                                        <li className='table-dropdown-title'>US & International</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='flex justify-start gap-8 flex-col w-full'>
                        <label htmlFor="collateral-type" className='label-text'>Collateral Type <span>*</span></label>
                        <div ref={dropdown2.ref} className="relative">
                            <div className='flex gap-8 justify-start items-start flex-col'>
                                <button onClick={dropdown2.toggle} ref={dropdown2.triggerRef} id='collateral-type' type='button' className="tab-select group">
                                    <p className='text-place-holder text-13px font-medium'>Letter</p>
                                    <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown2.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                </button>
                            </div>

                            {/* Dropdown */}
                            {dropdown2.isOpen && (
                                <div className="form-dropdown-menu">
                                    <div className='w-full relative'>
                                        <input type="search" name='search' placeholder='Search' className='table-small-search' />
                                        <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                                    </div>
                                    <ul className='table-dropdown-item dropdown-scrollbar'>
                                        <li className='table-dropdown-title'>Letter</li>
                                        <li className='table-dropdown-title'>Postcard (6x4)</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='flex justify-start gap-8 flex-col w-full relative'>
                        <p className='label-text'>Type</p>

                        <label className='radio-input-label'>
                            <input type="radio" name='type' />
                            <span>Rich Design</span>
                        </label>
                        <label className='radio-input-label'>
                            <input type="radio" name='type' />
                            <span>HTML</span>
                        </label>
                    </div>
 
                    <div className='flex justify-start gap-8 flex-col w-full'>
                        <label htmlFor="template-name" className='label-text'>Template Name <span>*</span></label>
                        <input type="text" name="" id="template-name" required placeholder='New Fall Campaign' className='form-input' />
                    </div>

                    <div className='flex justify-start gap-8 flex-col w-full form-last-dropdown'>
                        <label htmlFor="template-design" className='label-text'>Inherit Another Template’s Design <span>*</span></label>
                        <div ref={dropdown3.ref} className="relative">
                            <div className='flex gap-8 justify-start items-start flex-col'>
                                <button onClick={dropdown3.toggle}  id='template-design' type='button' className="tab-select group">
                                    <p className='text-place-holder text-13px font-medium'>Greetings Letter 2943</p>
                                    <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown3.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                </button>
                            </div>

                            {/* Dropdown */}
                            {dropdown3.isOpen && (
                                <div className="form-dropdown-menu-up">
                                    <div className='w-full relative'>
                                        <input type="search" name='search' placeholder='Search' className='table-small-search' />
                                        <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                                    </div>
                                    <ul className='table-dropdown-item dropdown-scrollbar'>
                                        <li className='table-dropdown-title'>Greetings Letter 2943</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-end items-center gap-10">
                        <button onClick={handleModalClose} className="outline-btn cursor-pointer">Cancel</button>
                        <NewFallCampaign/>
                    </div>


                </div>
            </Modal>
        </>
    )
}

export default CreateTemplate;