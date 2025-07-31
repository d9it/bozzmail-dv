import { NavLink } from 'react-router';
import useDropdown from '../hook/useDropdown';
import { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";
import { TbFileExport } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import TypedLettersBulkImport from '../components/Mail/TypedLettersBulkImport';
import PdfBulkImport from '../components/Mail/PdfBulkImport';
import PostCardsBulkImport from '../components/Mail/PostCardsBulkImport';
import { TbFileImport } from "react-icons/tb";
import { AiOutlineException } from "react-icons/ai";

const TrackingPage = () => {

  // for track is model open or not
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [checked, setChecked] = useState(false);

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
  const dropdown9 = useDropdown();

  return (
    <>
      {/*  cards */}
      <div className='py-20 sm:py-30 pr-15 sm:pr-30 bg-white rounded-15px sm:rounded-20px'>

        <div className='flex gap-15 sm:gap-25 items-center justify-start'>
          <div className='w-5 h-40 bg-cta-secondary rounded-tr-10px rounded-br-10px'></div>
          <div className='flex items-center justify-start gap-5 sm:gap-10'>
            <img src="asset/icons/black-tracking.svg" alt="icon" className='h-25' />
            <h1 className='font-semibold text-22px sm:text-25px text-main-text'>Tracking</h1>
          </div>
        </div>

        <p className='pr-15 sm:pl-30 text-17px font-medium text-secondary-text hidden sm:block'>Track your packages and get real-time delivery updates.</p>
      </div>

      {/* Recent Labels */}
      <div className='py-20 sm:py-30 px-15 sm:px-30 bg-white rounded-15px sm:rounded-20px sm:space-y-20 space-y-10 w-full'>

        <h2 className='font-semibold text-17px sm:text-xl text-main-text'>Active Shipments <span>(3)</span></h2>

        {/* search and dropdown */}
        <div className='w-full flex xl:flex-row flex-col'>
          <div className='w-full xl:w-1/3 2xl:w-1/2 relative'>
            <input type="search" name='search' placeholder='Enter Tracking Number (try: BZ123456789US)' className='table-search' />
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

                {/* All Carriers */}
                <div ref={dropdown3.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <label htmlFor="carrier" className='label-text block sm:hidden'>Carrier</label>
                    <button onClick={dropdown3.toggle} ref={dropdown3.triggerRef} id='carrier' type='button' className="select-button group">
                      <p className='text-secondary-text text-13px font-medium'>All Carriers</p>
                      <IoChevronDown className={`text-base transition-transform duration-300 text-arrow ${dropdown3.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown3.isOpen && (
                    <div className="table-dropdown-menu">
                      <div className='w-full relative'>
                        <input type="search" name='search' placeholder='Search' className='table-small-search' autoFocus/>
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

        {/* Recent Shipments table */}
        <div className="relative">

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

          <div className="table-content relative">
            <div className='overflow-x-auto main-scrollbar max-xl:mb-10 w-full'>
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
                    <th>Tracking Number</th>
                    <th>Type</th>
                    <th>Recipient</th>
                    <th>Destination</th>
                    <th>Carrier</th>
                    <th>Status</th>
                    <th>Est. Delivery</th>
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
                    <td>BZ123456789US</td>
                    <td>
                      <div className='flex gap-6 items-center justify-start'>
                        <MdMailOutline className='text-sm text-main-text' /><span>Letter</span>
                      </div>
                    </td>
                    <td><p>John Smith</p></td>
                    <td>
                      <p>123 Main St</p>
                      <p className='description'>New York, NY 10001</p>
                    </td>
                    <td>
                      <div className='flex gap-6 items-center justify-start'>
                        <img src="asset/table-image/type-1.svg" alt="icon" className='h-29' />
                        <div>
                          <p>USPS</p>
                          <p className='description'>Priority Mail</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className='inline-block'>
                        <div className='badge info-badge'>
                          <img src="asset/table-image/badge-delivery.svg" alt="icon" className='h-16' />
                          <p>Mailed</p>
                        </div>
                      </div>
                    </td>
                    <td>Today by 6:00 PM</td>
                    <td>
                      <div className='flex gap-5 justify-start items-center'>
                        {/* eye */}
                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/eye.svg" alt="icon" className="h-15" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              View
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
                        <input type="checkbox" className='peer peer-checked:border-Outlines' />
                        <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                          <img src="/asset/icons/check.svg" alt="" className='h-19' />
                        </span>
                      </label>
                    </td>
                    <td>BZ123456789US</td>
                    <td>
                      <div className='flex gap-6 items-center justify-start'>
                        <MdMailOutline className='text-sm text-main-text' /><span>Letter</span>
                      </div>
                    </td>
                    <td><p>Mike Wilson</p></td>
                    <td>
                      <p>789 Pine St</p>
                      <p className='description'>Chicago, IL 60601</p>
                    </td>
                    <td>
                      <div className='flex gap-6 items-center justify-start'>
                        <img src="asset/table-image/dhl.svg" alt="icon" className='h-29' />
                        <div>
                          <p>DHL</p>
                          <p className='description'>Express</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className='inline-block'>
                        <div className='badge info-badge'>
                          <img src="asset/table-image/badge-delivery.svg" alt="icon" className='h-16' />
                          <p>Mailed</p>
                        </div>
                      </div>
                    </td>
                    <td>29.07.2025</td>
                    <td>
                      <div className='flex gap-5 justify-start items-center'>
                        {/* eye */}
                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/eye.svg" alt="icon" className="h-15" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              View
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
                        <input type="checkbox" className='peer peer-checked:border-Outlines' />
                        <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                          <img src="/asset/icons/check.svg" alt="" className='h-19' />
                        </span>
                      </label>
                    </td>
                    <td>BZ123456789US</td>
                    <td>
                      <div className='flex gap-6 items-center justify-start'>
                        <MdMailOutline className='text-sm text-main-text' /><span>Letter</span>
                      </div>
                    </td>
                    <td><p>Sarah Johnson</p></td>
                    <td>
                      <p>456 Oak Ave,</p>
                      <p className='description'>Los Angeles, CA 90210</p>
                    </td>
                    <td>
                      <div className='flex gap-6 items-center justify-start'>
                        <img src="asset/table-image/ups.svg" alt="icon" className='h-29' />
                        <div>
                          <p>UPS</p>
                          <p className='description'>Ground</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className='inline-block'>
                        <div className='badge error-badge'>
                          <AiOutlineException className='text-xs'/>
                          <p>Exception</p>
                        </div>
                      </div>
                    </td>
                    <td>Delayed - Update pending</td>
                    <td>
                      <div className='flex gap-5 justify-start items-center'>
                        {/* eye */}
                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/eye.svg" alt="icon" className="h-15" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              View
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
export default TrackingPage
