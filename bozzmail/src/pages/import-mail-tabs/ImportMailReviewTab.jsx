import { useEffect, useRef, useState } from 'react';
import { IoChevronBack, IoChevronDown, IoChevronForward, IoChevronUp } from "react-icons/io5";
import { NavLink } from 'react-router';
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { BiDetail } from "react-icons/bi";
import useDropdown from '../../hook/useDropdown';
import { RxCross2 } from "react-icons/rx";
import { TbFileExport } from "react-icons/tb";
import { PiWarningBold } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { PiWarningCircle } from "react-icons/pi";
import { TbTemplate } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import CreateTemplate from "../../components/CreateTemplate";
import DropdownWithPortal from '../../components/DropdownWithPortal';


const ImportMailReviewTab = () => {

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [checked, setChecked] = useState(false);

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
  const triggerRef4 = useRef();
  const dropdown5 = useDropdown();
  const triggerRef5 = useRef();
  const dropdown6 = useDropdown();
  const triggerRef6 = useRef();
  const dropdown7 = useDropdown();
  const triggerRef7 = useRef();
  const dropdown8 = useDropdown();
  const triggerRef8 = useRef();
  const dropdown9 = useDropdown();




  return (
    <>
      {/* Import Preview*/}
      <div className='py-20 sm:py-30 px-15 sm:px-30 bg-white rounded-15px sm:rounded-20px sm:space-y-20 space-y-10 w-full relative'>

        {/* dropdown */}
        <div className='flex justify-between'>
          <h2 className='font-semibold  text-17px sm:text-xl text-main-text'>Import Preview <span>(5)</span></h2>
          <img src="asset/icons/icon-park-outline_drag.svg" alt="icon" />
        </div>

        {/* search and dropdown */}
        <div className='w-full flex sm:flex-row flex-col'>
          <div className='w-full relative'>
            <input type="search" name='search' placeholder='Search Mail' className='table-search' />
            <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-13 left-10' />
          </div>

          <button onClick={() => setIsFilterOpen(!isFilterOpen)} className='flex justify-center gap-6 button-border w-full sm:hidden max-xl:mt-10'>
            <img src="asset/icons/filter.svg" alt="icon" />
            <span> Filters</span>
          </button>

          <div className={`filter-toggle sm:!w-1/2 xl:!w-1/4 ${isFilterOpen ? 'filter-open' : 'filter-close'}`}>
            <div className='filter-menu'>
              <div className='w-full grid grid-cols-1 sm:pl-20 gap-10 max-sm:mt-10'>

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

                {/* All Carriers */}
                <div ref={dropdown3.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <label htmlFor="carrier" className='label-text block sm:hidden'>Carrier</label>
                    <button onClick={dropdown3.toggle} ref={dropdown3.triggerRef} id='carrier' type='button' className="select-button group">
                      <p className='text-secondary-text text-13px font-medium'>All Carriers</p>
                      <IoChevronDown className={`text-base transition-transform duration-300 text-arrow ${dropdown3.isOpen ? 'rotate-180' : 'rotate-0'}`} />

                      {/* for selected option p tag (value) color and arrow color  */}
                      {/* <p className='text-main-text text-13px font-medium'>All Carriers</p>
                      <IoChevronDown className={`text-base transition-transform duration-300 text-main-text ${dropdown3.isOpen ? 'rotate-180' : 'rotate-0'}`} /> */}
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

                <button className='primary-btn mt-25 sm:!hidden' onClick={() => setIsFilterOpen(false)}>Save Filters</button>
              </div>
            </div>
          </div>
        </div>

        {/* Import Preview table */}
        <div className="relative">

          {/* 
            Note for Developer:
            selected tr display [I have set this design only in first tr and this table, so make sure it is applied in every table.]
          */}

          {checked && (
            <div className='absolute bottom-full pb-10 sm:pb-18 left-0 w-full'>
              <div className='bg-cta-secondary w-full py-5 sm:py-7 rounded-7px px-20 xl:px-20 flex justify-start items-center  gap-20 sm:gap-27 flex-wrap'>

                <div className='export-cross-btn' onClick={() => setChecked(false)}>
                  <RxCross2 />
                </div>
                <p className='text-13px font-medium text-white text-center'><span>1</span> Selected</p>

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
              </div>
            </div>
          )}

          {/* table */}
          <div className="table-content relative">
            <div className='overflow-x-auto main-scrollbar mb-10 w-full table-scroll'>
              <table className='table-auto w-full custom-table min-w-800'>
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
                    <th>ID</th>
                    <th>Template <p className='text-xs font-medium text-negative-warning'>1 error</p></th>
                    <th>Sender Full Name</th>
                    <th>Sender Email <p className='text-xs font-medium text-negative-warning'>1 error</p></th>
                    <th>Sender Phone</th>
                    <th>Sender Country</th>
                    <th>Sender Address Line 1 <p className='text-xs font-medium text-negative-warning'>1 error</p></th>
                    <th>Sender Address Line 2</th>
                    <th>Sender City</th>
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
                    <td>IMP-001</td>
                    <td>
                      {/* using portal */}
                      <div className='flex gap-5 table-inside-dropdown'>
                        <div ref={dropdown4.ref} className="relative min-w-3xs">
                          <div className='flex gap-8 justify-start items-start flex-col'>
                            <button ref={triggerRef4} onClick={dropdown4.toggle} id='ltemplate' type='button' className="tab-select tab-select-tabel group">
                              <div className="flex gap-8">
                                <TbTemplate className="text-main-text text-lg" />
                                <p className='text-place-holder text-13px font-medium'>Hello Letter</p>
                              </div>
                              <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown4.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                            </button>
                          </div>

                          <DropdownWithPortal isOpen={dropdown4.isOpen} triggerRef={triggerRef4} onClose={() => dropdown4.setIsOpen(false)} isModalOpen={isTemplateModalOpen} minWidth='296px'>
                            <div className='w-full relative'>
                              <input type="search" name='search' placeholder='Search' className='table-small-search' />
                              <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                            </div>
                            <ul className='table-dropdown-item dropdown-scrollbar'>
                              <li className='table-dropdown-title'>Hello Letter</li>
                              <li className='table-dropdown-title'>Greetings Letter 2943</li>
                              <li className='table-dropdown-title'>Test Sending Summer</li>
                              <li className='table-dropdown-title'>Follow-Up Letter (Spring Campaign)</li>
                            </ul>
                            <hr className='text-Outlines' />
                            <CreateTemplate onOpenChange={setIsTemplateModalOpen}/>
                          </DropdownWithPortal>
                        </div>

                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/edit.svg" alt="icon" className="h-14" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              Edit
                            </span>
                            <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                          </span>
                        </div>
                      </div>

                      {/* <div className='flex gap-5 table-inside-dropdown'>
                        <div ref={dropdown4.ref} className="relative min-w-3xs">
                          <div className='flex gap-8 justify-start items-start flex-col'>
                            <button onClick={dropdown4.toggle} id='ltemplate' type='button' className="tab-select tab-select-tabel group">
                              <div className="flex gap-8">
                                <TbTemplate className="text-main-text text-lg" />
                                <p className='text-main-text text-13px font-medium'>Hello Letter</p>
                              </div>
                              <IoChevronDown className={`text-base text-main-text transition-transform duration-300 ${dropdown4.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                            </button>
                          </div>

                          {dropdown4.isOpen && (
                            <div className="form-dropdown-menu">
                              <div className='w-full relative'>
                                <input type="search" name='search' placeholder='Search' className='table-small-search' />
                                <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                              </div>
                              <ul className='table-dropdown-item dropdown-scrollbar'>
                                <li className='table-dropdown-title'>Hello Letter</li>
                                <li className='table-dropdown-title'>Greetings Letter 2943</li>
                                <li className='table-dropdown-title'>Test Sending Summer</li>
                                <li className='table-dropdown-title'>Follow-Up Letter (Spring Campaign)</li>
                              </ul>
                              <hr className='text-Outlines' />
                              <CreateTemplate onOpenChange={setIsTemplateModalOpen}/>
                            </div>
                          )}
                        </div>

                        <div className="relative group">
                          <div className="action-btn !w-35 !h-35">
                            <img src="/asset/icons/edit.svg" alt="icon" className="h-14" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              Edit
                            </span>
                            <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                          </span>
                        </div>
                      </div> */}
                    </td>
                    <td>John Smith</td>
                    <td>john@techstars.com</td>
                    <td>+1 99 454 123675</td>
                    <td>United States</td>
                    <td>
                      {/* input style */}
                      {/* <div className="relative group">
                        <div className='error-display'>
                        <input type="text" className='w-full focus:outline-none border-none outline-none focus:border-negative-warning' /><PiWarningBold className='text-negative-warning text-sm flex-none' />
                      </div>
                        <span className="action-tooltip">
                          <span className='tooltip-label'>
                            Email format is invalid
                          </span>
                          <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                        </span>
                      </div> */}

                      <div className="relative group">
                        <p className='error-display'><span></span><PiWarningBold className='text-negative-warning text-sm' /></p>
                        <span className="action-tooltip">
                          <span className='tooltip-label'>
                            Email format is invalid
                          </span>
                          <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                        </span>
                      </div>

                      {/* only value */}
                      {/* 123 Main St */}
                    </td>
                    <td>-</td>
                    <td>California</td>
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
                    <td>IMP-002</td>
                    <td>
                      <div className='flex gap-5 table-inside-dropdown'>
                        <div ref={dropdown5.ref} className="relative min-w-3xs">
                          <div className='flex gap-8 justify-start items-start flex-col'>
                            <button ref={triggerRef5} onClick={dropdown5.toggle} id='ltemplate' type='button' className="tab-select tab-select-tabel group">
                              <div className="flex gap-8">
                                <TbTemplate className="text-main-text text-lg" />
                                <p className='text-place-holder text-13px font-medium'>Test Sending Summer</p>
                              </div>
                              <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown5.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                            </button>
                          </div>

                          <DropdownWithPortal isOpen={dropdown5.isOpen} triggerRef={triggerRef5} onClose={() => dropdown5.setIsOpen(false)} isModalOpen={isTemplateModalOpen} minWidth='296px'>
                            <div className='w-full relative'>
                              <input type="search" name='search' placeholder='Search' className='table-small-search' />
                              <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                            </div>
                            <ul className='table-dropdown-item dropdown-scrollbar'>
                              <li className='table-dropdown-title'>Hello Letter</li>
                              <li className='table-dropdown-title'>Greetings Letter 2943</li>
                              <li className='table-dropdown-title'>Test Sending Summer</li>
                              <li className='table-dropdown-title'>Follow-Up Letter (Spring Campaign)</li>
                            </ul>
                            <hr className='text-Outlines' />
                            <CreateTemplate onOpenChange={setIsTemplateModalOpen}/>
                          </DropdownWithPortal>
                        </div>

                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/edit.svg" alt="icon" className="h-14" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              Edit
                            </span>
                            <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>Mike Wilson</td>
                    <td>
                      {/* input style */}
                      {/* <div className="relative group">
                        <div className='error-display'>
                        <input type="text" className='w-full focus:outline-none border-none outline-none focus:border-negative-warning' /><PiWarningBold className='text-negative-warning text-sm flex-none' />
                      </div>
                        <span className="action-tooltip">
                          <span className='tooltip-label'>
                            Email format is invalid
                          </span>
                          <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                        </span>
                      </div> */}

                      <div className="relative group">
                        <p className='error-display'><span>mike@</span><PiWarningBold className='text-negative-warning text-sm' /></p>
                        <span className="action-tooltip">
                          <span className='tooltip-label'>
                            Email format is invalid
                          </span>
                          <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                        </span>
                      </div>

                      {/* only value */}
                      {/* mike@wilson.com */}

                    </td>
                    <td>+1 99 454 123675</td>
                    <td>United States</td>
                    <td>
                      {/* only value */}
                      {/* 789 Pine St */}

                      <div className="relative group">
                        <p className='border border-Outlines h-33 rounded-5px p-8 focus:border-outlines-active focus:outline-none cursor-pointer flex justify-start items-center'>789 Pine St</p>
                        <span className="action-tooltip">
                          <span className='tooltip-label'>
                            Address is invalid
                          </span>
                          <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                        </span>
                      </div>

                      {/* input style */}
                      {/* <div className="relative group">
                        <input type="text" className='border border-Outlines h-33 rounded-5px p-8 focus:border-outlines-active focus:outline-none cursor-pointer flex justify-start items-center' />
                        <span className="action-tooltip">
                          <span className='tooltip-label'>
                            Address is invalid
                          </span>
                          <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                        </span>
                      </div> */}

                    </td>
                    <td>-</td>
                    <td>California</td>
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
                    <td>IMP-003</td>
                    <td>
                      <div className='flex gap-5 table-inside-dropdown'>
                        <div ref={dropdown6.ref} className="relative min-w-3xs">
                          <div className='flex gap-8 justify-start items-start flex-col'>
                            <button ref={triggerRef6} onClick={dropdown6.toggle} id='ltemplate' type='button' className="tab-select tab-select-tabel group for-error">
                              <div className="flex gap-8">
                                <TbTemplate className="text-main-text text-lg" />
                                <p className='text-main-text text-13px font-medium'>Not specified</p>
                              </div>
                              <IoChevronDown className={`text-base text-main-text transition-transform duration-300 ${dropdown6.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                            </button>
                          </div>

                          <DropdownWithPortal isOpen={dropdown6.isOpen} triggerRef={triggerRef6} onClose={() => dropdown6.setIsOpen(false)} isModalOpen={isTemplateModalOpen} minWidth='296px'>
                            <div className='w-full relative'>
                              <input type="search" name='search' placeholder='Search' className='table-small-search' />
                              <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                            </div>
                            <ul className='table-dropdown-item dropdown-scrollbar'>
                              <li className='table-dropdown-title'>Hello Letter</li>
                              <li className='table-dropdown-title'>Greetings Letter 2943</li>
                              <li className='table-dropdown-title'>Test Sending Summer</li>
                              <li className='table-dropdown-title'>Follow-Up Letter (Spring Campaign)</li>
                            </ul>
                            <hr className='text-Outlines' />
                            <CreateTemplate onOpenChange={setIsTemplateModalOpen}/>
                          </DropdownWithPortal>
                        </div>
                      </div>
                    </td>
                    <td>Sarah Johnson</td>
                    <td>john@techstars.com</td>
                    <td>+1 99 454 123675</td>
                    <td>United States</td>
                    <td>
                      {/* only value */}
                      {/* 456 Oak Ave */}

                      <div className="relative group">
                        <p className='border border-Outlines h-33 rounded-5px p-8 focus:border-outlines-active focus:outline-none cursor-pointer flex justify-start items-center'>456 Oak Ave</p>
                        <span className="action-tooltip">
                          <span className='tooltip-label'>
                            Address is invalid
                          </span>
                          <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                        </span>
                      </div>

                      {/* input style */}
                      {/* <div className="relative group">
                        <input type="text" className='border border-Outlines h-33 rounded-5px p-8 focus:border-outlines-active focus:outline-none cursor-pointer flex justify-start items-center' />
                        <span className="action-tooltip">
                          <span className='tooltip-label'>
                            Address is invalid
                          </span>
                          <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                        </span>
                      </div> */}

                    </td>
                    <td>-</td>
                    <td>California</td>
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
                    <td>IMP-004</td>
                    <td>
                       <div className='flex gap-5 table-inside-dropdown'>
                        <div ref={dropdown7.ref} className="relative min-w-3xs">
                          <div className='flex gap-8 justify-start items-start flex-col'>
                            <button ref={triggerRef7} onClick={dropdown7.toggle} id='ltemplate' type='button' className="tab-select tab-select-tabel group">
                              <div className="flex gap-8">
                                <TbTemplate className="text-main-text text-lg" />
                                <p className='text-place-holder text-13px font-medium'>Test Sending Summer</p>
                              </div>
                              <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown7.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                            </button>
                          </div>

                          <DropdownWithPortal isOpen={dropdown7.isOpen} triggerRef={triggerRef7} onClose={() => dropdown7.setIsOpen(false)} isModalOpen={isTemplateModalOpen} minWidth='296px'>
                            <div className='w-full relative'>
                              <input type="search" name='search' placeholder='Search' className='table-small-search' />
                              <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                            </div>
                            <ul className='table-dropdown-item dropdown-scrollbar'>
                              <li className='table-dropdown-title'>Hello Letter</li>
                              <li className='table-dropdown-title'>Greetings Letter 2943</li>
                              <li className='table-dropdown-title'>Test Sending Summer</li>
                              <li className='table-dropdown-title'>Follow-Up Letter (Spring Campaign)</li>
                            </ul>
                            <hr className='text-Outlines' />
                            <CreateTemplate onOpenChange={setIsTemplateModalOpen}/>
                          </DropdownWithPortal>
                        </div>

                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/edit.svg" alt="icon" className="h-14" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              Edit
                            </span>
                            <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>Mike Wilson</td>
                    <td>john@techstars.com</td>
                    <td>+1 99 454 123675</td>
                    <td>United States</td>
                    <td>321 Elm Dr</td>
                    <td>-</td>
                    <td>California</td>
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
                    <td>IMP-005</td>
                    <td>
                      {/* using portal */}
                      <div className='flex gap-5 table-inside-dropdown'>
                        <div ref={dropdown8.ref} className="relative min-w-3xs">
                          <div className='flex gap-8 justify-start items-start flex-col'>
                            <button ref={triggerRef8} onClick={dropdown8.toggle} id='ltemplate' type='button' className="tab-select tab-select-tabel group">
                              <div className="flex gap-8">
                                <TbTemplate className="text-main-text text-lg" />

                                {/* Note for developers: max 24 character show */}
                                <p className='text-place-holder text-13px font-medium'>Follow-Up Letter (Spr...</p>
                              </div>
                              <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown8.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                            </button>
                          </div>

                          <DropdownWithPortal isOpen={dropdown8.isOpen} triggerRef={triggerRef8} onClose={() => dropdown8.setIsOpen(false)} isModalOpen={isTemplateModalOpen} minWidth='296px'>
                            <div className='w-full relative'>
                              <input type="search" name='search' placeholder='Search' className='table-small-search' />
                              <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                            </div>
                            <ul className='table-dropdown-item dropdown-scrollbar'>
                              <li className='table-dropdown-title'>Hello Letter</li>
                              <li className='table-dropdown-title'>Greetings Letter 2943</li>
                              <li className='table-dropdown-title'>Test Sending Summer</li>
                              <li className='table-dropdown-title'>Follow-Up Letter (Spring Campaign)</li>
                            </ul>
                            <hr className='text-Outlines' />
                            <CreateTemplate onOpenChange={setIsTemplateModalOpen}/>
                          </DropdownWithPortal>
                        </div>

                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/edit.svg" alt="icon" className="h-14" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              Edit
                            </span>
                            <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>Mike Wilson</td>
                    <td>john@techstars.com</td>
                    <td>+1 99 454 123675</td>
                    <td>United States</td>
                    <td></td>
                    <td>-</td>
                    <td>California</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div >

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10 sm:gap-20'>

          {/* 1 */}
          <div className='rounded-10px bg-card-sky-blue overflow-hidden'>
            <div className='flex justify-between items-center py-14 px-25 [background:linear-gradient(90deg,_#E8FCFE_0%,_#C2E9EC_100%)]'>
              <p className='font-semibold text-sm text-main-text uppercase'>Total items</p>
              <GoArrowUpRight className='text-skyblue-icon stroke-1 -rotate-30' />
            </div>
            <div className='pt-20 px-25 pb-30 w-full'>
              <p className='font-semibold text-xl text-main-text'>5</p>
            </div>
          </div>

          {/* 2 */}
          <div className='rounded-10px bg-card-light-green overflow-hidden'>
            <div className='flex justify-between items-center py-14 px-25 [background:linear-gradient(90deg,_#E4F7EC_0%,_#CDEFDB_100%)]'>
              <p className='font-semibold text-sm text-main-text uppercase'>Valid</p>
              <FaCheck className='text-lightgreen-icon stroke-1' />
            </div>
            <div className='pt-20 px-25 pb-30 w-full'>
              <p className='font-semibold text-xl text-main-text'>3</p>
            </div>
          </div>
        </div>

        <hr className='text-Outlines' />

        {/* buttons */}
        <div className='flex justify-between items-center'>
          {/* <NavLink to={"#"} className='flex items-center justify-between gap-8 button-border'>
            <IoChevronBack className="text-sm transition-transform duration-300 text-main-text" />
            <span> Previous</span>
          </NavLink> */}

          <div className='w-full flex items-center justify-end gap-10'>
            <div className="warning-message w-full">
              <PiWarningCircle className='text-secondary-text text-17px stroke-3 flex-none' />
              <p>Please fix these <span className='font-semibold text-negative-warning'>3 errors</span> highlighted in the table before proceeding.</p>
            </div>


            <NavLink to={"#"} className='flex items-center justify-between gap-8 button-icon'>
              <span> Next</span>
              <IoChevronForward className="text-sm transition-transform duration-300 text-white" />
            </NavLink>

            {/* disable button */}
            {/* <NavLink to={"#"} className='flex items-center justify-between gap-8 disable-button-icon'>
              <span> Next</span>
              <IoChevronForward className="text-sm transition-transform duration-300 text-white" />
            </NavLink> */}
          </div>
        </div>

      </div>
    </>
  )
}

export default ImportMailReviewTab
