import { NavLink } from 'react-router';
import useDropdown from '../hook/useDropdown';
import { useEffect, useRef, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";
import { TbFileExport } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import TypedLettersBulkImport from '../components/Mail/TypedLettersBulkImport';
import PdfBulkImport from '../components/Mail/PdfBulkImport';
import PostCardsBulkImport from '../components/Mail/PostCardsBulkImport';
import { LuSquareActivity } from "react-icons/lu";
import { RiUserLine } from "react-icons/ri";
import { TbFileImport } from "react-icons/tb";
import { HiUpload } from "react-icons/hi";
import { TbTemplate } from "react-icons/tb";
import DropdownWithPortal from '../components/DropdownWithPortal';
import CreateContact from '../components/CreateContact';
import { FiPackage } from "react-icons/fi";
import ContactsImport from '../components/ContactsImport';

const ContactsPage = () => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const tableRef = useRef(null);

    // for track is model open or not
    const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);

    useEffect(() => {
        if (isFilterOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isFilterOpen]);

    const dropdown1 = useDropdown();
    const dropdown3 = useDropdown();
    const dropdown4 = useDropdown();
    const dropdown5 = useDropdown();
    const dropdown6 = useDropdown();
    const triggerRef6 = useRef();
    const dropdown7 = useDropdown();
    const triggerRef7 = useRef();
    const dropdown8 = useDropdown();
    const triggerRef8 = useRef();
    const dropdown10 = useDropdown();
    const triggerRef10 = useRef();
    const dropdown9 = useDropdown();

    return (
        <>
            {/*  cards */}
            <div className='py-20 sm:py-30 pr-15 sm:pr-30 bg-white rounded-15px sm:rounded-20px'>

                <div className='flex gap-15 sm:gap-25 items-center justify-start'>
                    <div className='w-5 h-40 bg-cta-secondary rounded-tr-10px rounded-br-10px'></div>
                    <div className='flex items-center justify-start gap-5 sm:gap-10'>
                        <img src="/asset/icons/contact.svg" alt="icon" className='h-25' />
                        <h1 className='font-semibold text-22px sm:text-25px text-main-text'>Contacts</h1>
                    </div>
                </div>

                <p className='pr-15 sm:pl-30 text-17px font-medium text-secondary-text hidden sm:block'>Manage your shipping addresses and contact information for easy order creation.</p>

                {/* cards */}
                <div className='pl-15 sm:pl-30 lg:grid xl:grid-cols-3 lg:grid-cols-2 flex items-center justify-start overflow-x-auto gap-10 sm:gap-20 pt-10 sm:pt-20'>

                    <div className='border border-Outlines card-layout py-21 w-full'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='font-medium text-10px uppercase mb-5 text-main-text'>Total Contacts</p>
                                <p className='font-semibold text-xl text-main-text'>4</p>
                            </div>
                            <RiUserLine className='text-secondary-text text-xl z-2' />
                        </div>
                        <img src="asset/icons/shape-bg.png" alt="image" className='absolute right-0 top-0 z-1 object-cover h-full' />
                    </div>

                    <div className='border border-Outlines card-layout py-21 w-full'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='font-medium text-10px uppercase mb-5 text-main-text'>With Company</p>
                                <p className='font-semibold text-xl text-main-text'>2</p>
                            </div>
                            <img src="asset/icons/building.svg" alt="icon" className='h-21 z-2' />
                        </div>
                        <img src="asset/icons/shape-bg.png" alt="image" className='absolute right-0 top-0 z-1 object-cover h-full' />
                    </div>

                    <div className='border border-Outlines card-layout py-21 w-full'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='font-medium text-10px uppercase mb-5 text-main-text'>Recently used</p>
                                <p className='font-semibold text-xl text-main-text'>3</p>
                            </div>
                            <LuSquareActivity className='text-secondary-text text-xl z-2' />
                        </div>
                        <img src="asset/icons/shape-bg.png" alt="image" className='absolute right-0 top-0 z-1 object-cover h-full' />
                    </div>
                </div>
            </div>

            {/* contacts */}
            <div className='py-20 sm:py-30 px-15 sm:px-30 bg-white rounded-15px sm:rounded-20px sm:space-y-20 space-y-10 w-full'>

                {/* header */}
                <div className='flex flex-col gap-10'>
                    <div className='flex justify-between items-center gap-8'>

                        <div className='flex gap-20 items-center justify-start flex-wrap'>
                            <h2 className='font-semibold text-17px sm:text-xl text-main-text'>All Contacts <span>(4)</span></h2>

                            {/* plan card for large screen */}
                            <div className='py-5 px-7 rounded-7px border border-lime-border bg-lime xl:flex gap-15 justify-start items-center flex-wrap hidden'>
                                <div className='flex gap-7 items-center justify-start flex-wrap'>
                                    <img src="/asset/icons/Starter.svg" alt="icon" className='h-29' />
                                    <div>
                                        <p className='text-xs font-medium text-secondary-text'>Starter Plan</p>
                                        <p className='text-xs font-semibold text-main-text'>6 of 10 contacts left</p>
                                    </div>
                                </div>

                                <NavLink to={"/subscription"} className='py-3 px-6 border border-Outlines focus:border-outlines-active active:border-outlines-active rounded-5px text-11px font-medium text-cta-secondary flex items-center gap-3 bg-white cursor-pointer'>
                                    <HiUpload className='text-xs text-cta-secondary' />
                                    Upgrade
                                </NavLink>
                            </div>
                        </div>

                        {/* buttons */}
                        <div className="flex justify-end gap-8 flex-wrap">

                            <ContactsImport label="Import" labelClassName="sm:block hidden"/>

                            <div ref={dropdown1.ref} className="relative">
                                <div className='flex gap-8 justify-start items-start flex-col'>
                                    <button className='flex items-center justify-between gap-8 button-border' onClick={dropdown1.toggle} ref={dropdown1.triggerRef}>
                                        <TbFileExport className="text-lg text-main-text" />
                                        <span className='sm:block hidden'>Export</span>
                                        <IoChevronDown className={`text-lg transition-transform duration-300 text-main-text ${dropdown1.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                    </button>
                                </div>

                                {/* Dropdown */}
                                {dropdown1.isOpen && (
                                    <div className="form-dropdown-menu max-sm:!min-w-150">

                                        <div className='table-dropdown-item dropdown-scrollbar'>
                                            <button className='table-dropdown-title text-left border border-transparent'>.xslx</button>
                                            <button className='table-dropdown-title text-left border border-transparent'>.csv</button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <CreateContact/>
                        </div>
                    </div>

                    {/* plan card for small screen */}
                    <div className='py-5 px-7 rounded-7px border border-lime-border bg-lime flex gap-15 justify-start items-center flex-wrap xl:hidden'>
                        <div className='flex gap-7 items-center justify-start flex-wrap'>
                            <img src="/asset/icons/Starter.svg" alt="icon" className='h-29' />
                            <div>
                                <p className='text-xs font-medium text-secondary-text'>Starter Plan</p>
                                <p className='text-xs font-semibold text-main-text'>6 of 10 contacts left</p>
                            </div>
                        </div>

                        <NavLink to={"/subscription"} className='py-3 px-6 border border-Outlines focus:border-outlines-active active:border-outlines-active rounded-5px text-11px font-medium text-cta-secondary flex items-center gap-3 bg-white cursor-pointer'>
                            <HiUpload className='text-xs text-cta-secondary' />
                            Upgrade
                        </NavLink>
                    </div>
                </div>

                {/* search and dropdown */}
                <div className='w-full flex xl:flex-row flex-col'>
                    <div className='w-full xl:w-1/3 2xl:w-1/2 relative'>
                        <input type="search" name='search' placeholder='Search Contacts' className='table-search' />
                        <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-13 left-10' />
                    </div>

                    <button onClick={() => setIsFilterOpen(!isFilterOpen)} className='flex justify-center gap-6 button-border w-full sm:hidden max-xl:mt-10'>
                        <img src="asset/icons/filter.svg" alt="icon" />
                        <span> Filters</span>
                    </button>

                    <div className={`filter-toggle ${isFilterOpen ? 'filter-open' : 'filter-close'}`}>
                        <div className='filter-menu'>
                            <div className='w-full grid sm:grid-cols-3 grid-cols-1 xl:pl-20 gap-10 max-xl:mt-10'>

                                <div className='flex justify-between items-center pb-14 sm:hidden'>
                                    <div className='flex gap-14 items-center justify-start flex-wrap'>
                                        <p className='font-semibold text-17px text-main-text'>Filters</p>
                                        <button className='flex justify-between items-center gap-6 filter-btn'>
                                            <img src="asset/icons/trash.svg" alt="icon" className='h-15' />
                                            <span className=''>Clear all filters</span>
                                        </button>
                                    </div>

                                    <RxCross2 className='h-24 text-main-text cursor-pointer' onClick={() => setIsFilterOpen(false)} />
                                </div>

                                {/* All Types */}
                                <div ref={dropdown3.ref} className="relative">
                                    <div className='flex gap-8 justify-start items-start flex-col'>
                                        <label htmlFor="types" className='label-text block sm:hidden'>Types</label>
                                        <button onClick={dropdown3.toggle} ref={dropdown3.triggerRef} id='types' type='button' className="select-button group">
                                            <p className='text-secondary-text text-13px font-medium'>All Types</p>
                                            <IoChevronDown className={`text-base transition-transform duration-300 text-arrow ${dropdown3.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                        </button>
                                    </div>

                                    {/* Dropdown */}
                                    {dropdown3.isOpen && (
                                        <div className="table-dropdown-menu">
                                            <div className='w-full relative'>
                                                <input type="search" name='search' placeholder='Search' className='table-small-search' />
                                                <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                                            </div>
                                            <ul className='table-dropdown-item dropdown-scrollbar'>
                                                <li className='table-dropdown-title'>USPS</li>
                                                <li className='table-dropdown-title'>DHL</li>
                                                <li className='table-dropdown-title'>UPS</li>
                                                <li className='table-dropdown-title'>Other</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* All Statuses */}
                                <div ref={dropdown4.ref} className="relative">
                                    <div className='flex gap-8 justify-start items-start flex-col'>
                                        <label htmlFor="status" className='label-text block sm:hidden'>Status</label>
                                        <button onClick={dropdown4.toggle} ref={dropdown4.triggerRef} id='status' type='button' className="select-button group">
                                            <p className='text-secondary-text text-13px font-medium'>All Statuses</p>
                                            <IoChevronDown className={`text-base transition-transform duration-300 text-arrow ${dropdown4.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                        </button>
                                    </div>

                                    {/* Dropdown */}
                                    {dropdown4.isOpen && (
                                        <div className="table-dropdown-menu">
                                            <ul className='table-dropdown-item dropdown-scrollbar'>
                                                <li className='table-dropdown-title'>Delivered</li>
                                                <li className='table-dropdown-title'>Completed</li>
                                                <li className='table-dropdown-title'>In transit</li>
                                                <li className='table-dropdown-title'>Created</li>
                                                <li className='table-dropdown-title'>Paid</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* All Time */}
                                <div ref={dropdown5.ref} className="relative">
                                    <div className='flex gap-8 justify-start items-start flex-col'>
                                        <label htmlFor="time" className='label-text block sm:hidden'>Time</label>
                                        <button onClick={dropdown5.toggle} ref={dropdown5.triggerRef} id='time' type='button' className="select-button group">
                                            <p className='text-secondary-text text-13px font-medium'>All Time</p>
                                            <IoChevronDown className={`text-base transition-transform duration-300 text-arrow ${dropdown5.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                        </button>
                                    </div>

                                    {/* Dropdown */}
                                    {dropdown5.isOpen && (
                                        <div className="table-dropdown-menu">
                                            <ul className='table-dropdown-item dropdown-scrollbar'>
                                                <li className='table-dropdown-title'>USPS</li>
                                                <li className='table-dropdown-title'>UPS</li>
                                                <li className='table-dropdown-title'>DHL</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <button className='primary-btn mt-25 sm:!hidden' onClick={() => setIsFilterOpen(false)}>Save Filters</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* contact table */}
                <div className="relative">

                    {checked && (
                        <div className='absolute bottom-full pb-10 sm:pb-18 left-0 w-full'>
                            <div className='bg-cta-secondary w-full py-5 sm:py-7 rounded-7px px-20 xl:px-20 flex justify-start items-center  gap-20 sm:gap-27 flex-wrap'>

                                <div className='export-cross-btn' onClick={() => setChecked(false)}>
                                    <RxCross2 />
                                </div>
                                <p className='text-13px font-medium text-white text-center'><span>1</span> Selected</p>

                                <div className='flex gap-10 justify-start items-center flex-wrap'>
                                    {/* export dropdown */}
                                    <div ref={dropdown9.ref} className="relative">
                                        <div className='flex gap-8 justify-start items-start flex-col'>
                                            <button onClick={dropdown9.toggle} ref={dropdown9.triggerRef} id='time' type='button' className="export-btn group">
                                                <TbFileExport className='text-lg' />
                                                <p className='text-13px font-medium'>Export</p>
                                                <IoChevronDown className={`text-lg transition-transform duration-300 ${dropdown9.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                            </button>
                                        </div>

                                        {/* Dropdown */}
                                        {dropdown9.isOpen && (
                                            <div className="filter-dropdown-menu w-full">
                                                <ul className='table-dropdown-item dropdown-scrollbar'>
                                                    <li className='table-dropdown-title'>.xslx</li>
                                                    <li className='table-dropdown-title'>.csv</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <button id='time' type='button' className="export-btn">
                                            <img src="/asset/icons/white-delete.svg" alt="" className='h-17' />
                                            <p className='text-13px font-medium'>Delete</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="table-content relative" ref={tableRef}>
                        <div className='overflow-x-auto main-scrollbar max-xl:mb-10 w-full table-scroll'>
                            <table className='table-auto w-full custom-table'>
                                <thead className='bg-table-header'>
                                    <tr>
                                        <th>
                                            <label className="flex items-center cursor-pointer relative w-20 h-20">
                                                <input type="checkbox" className='peer peer-checked:border-Outlines' />
                                                <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                                                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                                                </span>
                                            </label>
                                        </th>
                                        <th>Name</th>
                                        <th>Company</th>
                                        <th>Contact Info</th>
                                        <th>Address</th>
                                        <th>Last Used</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className={`${checked ? 'bg-table-header-active' : ''}`}>
                                        <td>
                                            <label className="flex items-center cursor-pointer relative w-20 h-20">
                                                <input type="checkbox" className='peer peer-checked:border-Outlines' onChange={(e) => setChecked(e.target.checked)} />
                                                <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                                                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                                                </span>
                                            </label>
                                        </td>
                                        <td><p>John Smith</p></td>
                                        <td><p>Tech Solutions Inc.</p></td>
                                        <td>
                                            <p>john.smith@techsolutions.com</p>
                                            <p className='description'>+1 (555) 123-4567</p>
                                        </td>
                                        <td>
                                            <p>123 Business St</p>
                                            <p className='description'>San Francisco, CA 94105</p>
                                        </td>
                                        <td><p>04.06.2025</p></td>
                                        <td>
                                            <div className='flex gap-5 justify-start items-center action-dropdown'>
                                                <div className='table-inside-dropdown'>
                                                    <div ref={dropdown6.ref} className="relative">
                                                        <div className='flex gap-8 justify-start items-start flex-col'>
                                                            <button ref={triggerRef6} onClick={dropdown6.toggle} id='ltemplate' type='button' className="tab-select tab-select-tabel group">
                                                                <div className="flex gap-8">
                                                                    <FiPackage className='text-base text-cta-secondary flex-none' />
                                                                    <p className='text-cta-secondary text-13px font-medium'>Create</p>
                                                                </div>
                                                                <IoChevronDown className={`text-base text-cta-secondary transition-transform duration-300 ${dropdown6.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                                            </button>
                                                        </div>

                                                        <DropdownWithPortal tableRef={tableRef} isOpen={dropdown6.isOpen} triggerRef={triggerRef6} onClose={() => dropdown6.setIsOpen(false)} isModalOpen={isTemplateModalOpen} minWidth="152px">
                                                            <div>
                                                                <button className='table-dropdown-title text-left border border-transparent'>Label</button>
                                                                <TypedLettersBulkImport onOpenChange={setIsTemplateModalOpen} />
                                                                <PdfBulkImport onOpenChange={setIsTemplateModalOpen} />
                                                                <PostCardsBulkImport onOpenChange={setIsTemplateModalOpen} />
                                                            </div>
                                                        </DropdownWithPortal>
                                                    </div>
                                                </div>

                                                {/* edit */}
                                                <div className="relative group">
                                                    <div className="action-btn">
                                                        <img src="/asset/icons/edit.svg" alt="icon" className="h-15" />
                                                    </div>
                                                    <span className="action-tooltip">
                                                        <span className='tooltip-label'>
                                                            Edit
                                                        </span>
                                                        <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                                                    </span>
                                                </div>

                                                {/* delete */}
                                                <div className="relative group">
                                                    <div className="action-btn">
                                                        <img src="/asset/icons/delete.svg" alt="icon" className="h-15" />
                                                    </div>
                                                    <span className="action-tooltip">
                                                        <span className='tooltip-label'>
                                                            Delete
                                                        </span>
                                                        <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <label className="flex items-center cursor-pointer relative w-20 h-20">
                                                <input type="checkbox" className='peer peer-checked:border-Outlines' onChange={(e) => setChecked(e.target.checked)} />
                                                <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                                                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                                                </span>
                                            </label>
                                        </td>
                                        <td><p>Sarah Johnson</p></td>
                                        <td><p>-</p></td>
                                        <td>
                                            <p>sarah.johnson@email.com</p>
                                            <p className='description'>+1 (555) 987-6543</p>
                                        </td>
                                        <td>
                                            <p>456 Oak Avenue</p>
                                            <p className='description'>Los Angeles, CA 90210</p>
                                        </td>
                                        <td><p>02.06.2025</p></td>
                                        <td>
                                            <div className='flex gap-5 justify-start items-center action-dropdown'>
                                                <div className='table-inside-dropdown'>
                                                    <div ref={dropdown7.ref} className="relative">
                                                        <div className='flex gap-8 justify-start items-start flex-col'>
                                                            <button ref={triggerRef7} onClick={dropdown7.toggle} id='ltemplate' type='button' className="tab-select tab-select-tabel group">
                                                                <div className="flex gap-8">
                                                                    <FiPackage className='text-base text-cta-secondary flex-none' />
                                                                    <p className='text-cta-secondary text-13px font-medium'>Create</p>
                                                                </div>
                                                                <IoChevronDown className={`text-base text-cta-secondary transition-transform duration-300 ${dropdown7.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                                            </button>
                                                        </div>

                                                        <DropdownWithPortal tableRef={tableRef} isOpen={dropdown7.isOpen} triggerRef={triggerRef7} onClose={() => dropdown7.setIsOpen(false)} isModalOpen={isTemplateModalOpen} minWidth="152px">
                                                            <div>
                                                                <button className='table-dropdown-title text-left border border-transparent'>Label</button>
                                                                <TypedLettersBulkImport onOpenChange={setIsTemplateModalOpen} />
                                                                <PdfBulkImport onOpenChange={setIsTemplateModalOpen} />
                                                                <PostCardsBulkImport onOpenChange={setIsTemplateModalOpen} />
                                                            </div>
                                                        </DropdownWithPortal>
                                                    </div>
                                                </div>

                                                {/* edit */}
                                                <div className="relative group">
                                                    <div className="action-btn">
                                                        <img src="/asset/icons/edit.svg" alt="icon" className="h-15" />
                                                    </div>
                                                    <span className="action-tooltip">
                                                        <span className='tooltip-label'>
                                                            Edit
                                                        </span>
                                                        <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                                                    </span>
                                                </div>

                                                {/* delete */}
                                                <div className="relative group">
                                                    <div className="action-btn">
                                                        <img src="/asset/icons/delete.svg" alt="icon" className="h-15" />
                                                    </div>
                                                    <span className="action-tooltip">
                                                        <span className='tooltip-label'>
                                                            Delete
                                                        </span>
                                                        <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <label className="flex items-center cursor-pointer relative w-20 h-20">
                                                <input type="checkbox" className='peer peer-checked:border-Outlines' onChange={(e) => setChecked(e.target.checked)} />
                                                <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                                                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                                                </span>
                                            </label>
                                        </td>
                                        <td><p>David Brown</p></td>
                                        <td><p>Global Shipping Ltd.</p></td>
                                        <td>
                                            <p>david.brown@globalshipping.com</p>
                                            <p className='description'>+1 (555) 456-7890</p>
                                        </td>
                                        <td>
                                            <p>789 Industrial Blvd</p>
                                            <p className='description'>SChicago, IL 60601</p>
                                        </td>
                                        <td><p>Yesterday</p></td>
                                        <td>
                                            <div className='flex gap-5 justify-start items-center action-dropdown'>
                                                <div className='table-inside-dropdown'>
                                                    <div ref={dropdown8.ref} className="relative">
                                                        <div className='flex gap-8 justify-start items-start flex-col'>
                                                            <button ref={triggerRef8} onClick={dropdown8.toggle} id='ltemplate' type='button' className="tab-select tab-select-tabel group">
                                                                <div className="flex gap-8">
                                                                    <FiPackage className='text-base text-cta-secondary flex-none' />
                                                                    <p className='text-cta-secondary text-13px font-medium'>Create</p>
                                                                </div>
                                                                <IoChevronDown className={`text-base text-cta-secondary transition-transform duration-300 ${dropdown8.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                                            </button>
                                                        </div>

                                                        <DropdownWithPortal tableRef={tableRef} isOpen={dropdown8.isOpen} triggerRef={triggerRef8} onClose={() => dropdown8.setIsOpen(false)} isModalOpen={isTemplateModalOpen} minWidth="152px">
                                                            <div>
                                                                <button className='table-dropdown-title text-left border border-transparent'>Label</button>
                                                                <TypedLettersBulkImport onOpenChange={setIsTemplateModalOpen} />
                                                                <PdfBulkImport onOpenChange={setIsTemplateModalOpen} />
                                                                <PostCardsBulkImport onOpenChange={setIsTemplateModalOpen} />
                                                            </div>
                                                        </DropdownWithPortal>
                                                    </div>
                                                </div>

                                                {/* edit */}
                                                <div className="relative group">
                                                    <div className="action-btn">
                                                        <img src="/asset/icons/edit.svg" alt="icon" className="h-15" />
                                                    </div>
                                                    <span className="action-tooltip">
                                                        <span className='tooltip-label'>
                                                            Edit
                                                        </span>
                                                        <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                                                    </span>
                                                </div>

                                                {/* delete */}
                                                <div className="relative group">
                                                    <div className="action-btn">
                                                        <img src="/asset/icons/delete.svg" alt="icon" className="h-15" />
                                                    </div>
                                                    <span className="action-tooltip">
                                                        <span className='tooltip-label'>
                                                            Delete
                                                        </span>
                                                        <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <label className="flex items-center cursor-pointer relative w-20 h-20">
                                                <input type="checkbox" className='peer peer-checked:border-Outlines' onChange={(e) => setChecked(e.target.checked)} />
                                                <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                                                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                                                </span>
                                            </label>
                                        </td>
                                        <td><p>Emily Davis</p></td>
                                        <td><p>-</p></td>
                                        <td>
                                            <p>emily.davis@personal.com</p>
                                            <p className='description'>+1 (555) 321-0987</p>
                                        </td>
                                        <td>
                                            <p>321 Pine Road</p>
                                            <p className='description'>Seattle, WA 98101</p>
                                        </td>
                                        <td><p>Never</p></td>
                                        <td>
                                            <div className='flex gap-5 justify-start items-center action-dropdown'>
                                                <div className='table-inside-dropdown'>
                                                    <div ref={dropdown10.ref} className="relative">
                                                        <div className='flex gap-8 justify-start items-start flex-col'>
                                                            <button ref={triggerRef10} onClick={dropdown10.toggle} id='ltemplate' type='button' className="tab-select tab-select-tabel group">
                                                                <div className="flex gap-8">
                                                                    <FiPackage className='text-base text-cta-secondary flex-none' />
                                                                    <p className='text-cta-secondary text-13px font-medium'>Create</p>
                                                                </div>
                                                                <IoChevronDown className={`text-base text-cta-secondary transition-transform duration-300 ${dropdown10.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                                            </button>
                                                        </div>

                                                        <DropdownWithPortal tableRef={tableRef} isOpen={dropdown10.isOpen} triggerRef={triggerRef10} onClose={() => dropdown10.setIsOpen(false)} isModalOpen={isTemplateModalOpen} minWidth="152px">
                                                            <div>
                                                                <button className='table-dropdown-title text-left border border-transparent'>Label</button>
                                                                <TypedLettersBulkImport onOpenChange={setIsTemplateModalOpen} />
                                                                <PdfBulkImport onOpenChange={setIsTemplateModalOpen} />
                                                                <PostCardsBulkImport onOpenChange={setIsTemplateModalOpen} />
                                                            </div>
                                                        </DropdownWithPortal>
                                                    </div>
                                                </div>

                                                {/* edit */}
                                                <div className="relative group">
                                                    <div className="action-btn">
                                                        <img src="/asset/icons/edit.svg" alt="icon" className="h-15" />
                                                    </div>
                                                    <span className="action-tooltip">
                                                        <span className='tooltip-label'>
                                                            Edit
                                                        </span>
                                                        <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                                                    </span>
                                                </div>

                                                {/* delete */}
                                                <div className="relative group">
                                                    <div className="action-btn">
                                                        <img src="/asset/icons/delete.svg" alt="icon" className="h-15" />
                                                    </div>
                                                    <span className="action-tooltip">
                                                        <span className='tooltip-label'>
                                                            Delete
                                                        </span>
                                                        <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactsPage
