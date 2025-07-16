import useDropdown from '../hook/useDropdown';
import { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { TbFileExport } from "react-icons/tb";
import { IoChevronDown } from "react-icons/io5";


const DashboardPage = () => {

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (isFilterOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isFilterOpen]);

  const dropdown3 = useDropdown();
  const dropdown4 = useDropdown();
  const dropdown5 = useDropdown();
  const dropdown6 = useDropdown();
  const dropdown7 = useDropdown();
  const dropdown8 = useDropdown();
  const dropdown9 = useDropdown();

  return (
    <>

      {/* 
        Note for Developer:
        For every dropdown — when a value is selected, the <p> tag text color should change to 'text-main-text' 
        instead of 'text-secondary or text-place-holder' (which is used for the placeholder).
        
        In short:
        - Placeholder text uses 'text-secondary or text-place-holder color'
        - Selected value should use 'text-main-text color'

        Make sure to apply this rule consistently for all dropdowns wherever they appear.
      */}

      {/* dashboard cards */}
      <div className='py-20 lg:py-30 pr-15 lg:pr-30 bg-white rounded-15px lg:rounded-20px'>

        <div className='flex gap-15 lg:gap-25 items-center justify-start'>
          <div className='w-5 h-40 bg-cta-secondary rounded-tr-10px rounded-br-10px'></div>
          <div className='flex gap-5 lg:gap-10'>
            <img src="asset/icons/dashboard-big.svg" alt="icon" className='hidden lg:block' />
            <img src="asset/icons/heading_label.svg" alt="icon" className='block lg:hidden' />
            <h1 className='font-semibold text-22px lg:text-25px text-main-text'>Welcome back Rui!</h1>
          </div>
        </div>

        <p className='pr-15 lg:pl-30 text-17px font-medium text-secondary-text pt-5 hidden lg:block'>Here's what's happening with your shipments and mail</p>

        {/* cards */}
        <div className='pl-15 lg:pl-30 lg:grid xl:grid-cols-4 lg:grid-cols-2 flex items-center justify-start overflow-x-auto gap-10 lg:gap-20 pt-10 lg:pt-20'>

          <div className='bg-card-sky-blue card-layout'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='card-label'>Total Labels</p>
                <p className='card-number'>1,247</p>
                <p className="card-percentage [background:linear-gradient(90deg,_#EAF8F9_0%,_#F3FEFF_100%)]">
                  <img src="asset/icons/growth-green.svg" alt="icon" />
                  <span className='card-success-small-text'>+12% from last month</span>
                </p>
              </div>
              <img src="asset/icons/card-label.svg" alt="icon" className='z-20' />
            </div>
            <img src="asset/icons/skyblue-rectangle.svg" alt="image" className='absolute right-0 top-0 z-10 object-cover h-full' />
          </div>

          <div className='bg-card-light-green card-layout'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='card-label'>In Transit</p>
                <p className='card-number'>23</p>
                <p className="card-percentage [background:linear-gradient(90deg,_#EAF9F0_0%,_#F6FFFA_100%)]">
                  <img src="asset/icons/growth-green.svg" alt="icon" />
                  <span className='card-success-small-text'>+12% from last month</span>
                </p>
              </div>
              <img src="asset/icons/card-transit.svg" alt="icon" className='z-20' />
            </div>
            <img src="asset/icons/green-rectangle.svg" alt="image" className='absolute right-0 top-0 z-10 object-cover h-full' />
          </div>

          <div className='bg-card-light-purple card-layout'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='card-label'>Monthly Spend</p>
                <p className='card-number'>1,247</p>
                <p className="card-percentage [background:linear-gradient(90deg,_#F0EAF9_0%,_#F6F1FD_63.92%,_#F9F4FF_100%)]">
                  <img src="asset/icons/growth-red.svg" alt="icon" />
                  <span className='card-danger-small-text'>+8% from last month</span>
                </p>
              </div>
              <img src="asset/icons/card-monthly-spend.svg" alt="icon" className='z-20' />
            </div>
            <img src="asset/icons/purple-rectangle.svg" alt="image" className='absolute right-0 top-0 z-10 object-cover h-full' />
          </div>

          <div className='bg-card-cream card-layout'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='card-label'>Saved Contacts</p>
                <p className='card-number'>145</p>
                <p className="card-percentage [background:linear-gradient(90deg,_#F9F2EA_0%,_#FFFAF4_100%)]">
                  <img src="asset/icons/growth-green.svg" alt="icon" />
                  <span className='card-success-small-text'>+3 this week</span>
                </p>
              </div>
              <img src="asset/icons/card-contact.svg" alt="icon" className='z-20' />
            </div>
            <img src="asset/icons/cream-rectangle.svg" alt="image" className='absolute right-0 top-0 z-10 object-cover h-full' />
          </div>

        </div>
      </div>

      {/* quick access */}
      <div className='py-20 lg:py-30 px-15 lg:px-30 bg-white rounded-15px lg:rounded-20px'>

        <div className='flex justify-between'>
          <h2 className='font-semibold  text-17px lg:text-xl text-main-text'>Quick Actions</h2>
          <img src="asset/icons/icon-park-outline_drag.svg" alt="icon" />
        </div>


        {/* cards */}
        <div className='lg:grid xl:grid-cols-4 lg:grid-cols-2 flex items-center justify-start overflow-x-auto gap-10 lg:gap-20 pt-10 lg:pt-20'>

          <div className='border border-Outlines card-layout py-21'>
            <div className='flex justify-center items-center gap-7 flex-col text-center h-full'>
              <img src="asset/icons/label.svg" alt="image" className='h-27' />
              <p className='text-13px lg:text-15px font-medium text-cta-secondary'>Create Label</p>
            </div>
          </div>

          <div className='border border-Outlines card-layout py-21'>
            <div className='flex justify-center items-center gap-7 flex-col text-center h-full'>
              <img src="asset/icons/mail.svg" alt="image" className='h-27' />
              <p className='text-13px lg:text-15px font-medium text-cta-secondary'>Create Mail or Postcard</p>
            </div>
          </div>

          <div className='border border-Outlines card-layout py-21'>
            <div className='flex justify-center items-center gap-7 flex-col text-center h-full'>
              <img src="asset/icons/calendar.svg" alt="image" className='h-27' />
              <p className='text-13px lg:text-15px font-medium text-cta-secondary'>Schedule Pickup</p>
            </div>
          </div>

          <div className='border border-Outlines card-layout py-21'>
            <div className='flex justify-center items-center gap-7 flex-col text-center h-full'>
              <img src="asset/icons/tracking.svg" alt="image" className='h-27' />
              <p className='text-13px lg:text-15px font-medium text-cta-secondary'>Track Shipment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Shipments*/}
      <div className='py-20 lg:py-30 px-15 lg:px-30 bg-white rounded-15px lg:rounded-20px sm:space-y-20 space-y-10 w-full relative'>

        {/* dropdown */}
        <div className='flex justify-between'>
          <h2 className='font-semibold  text-17px lg:text-xl text-main-text'>Recent Shipments <span>(5)</span></h2>
          <img src="asset/icons/icon-park-outline_drag.svg" alt="icon" />
        </div>

        {/* search and dropdown */}
        <div className='w-full flex xl:flex-row flex-col'>
          <div className='w-full xl:w-1/3 2xl:w-1/2 relative'>
            <input type="search" name='search' placeholder='Search Shipments' className='table-search' />
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
                    <button onClick={dropdown3.toggle} id='carrier' type='button' className="select-button group">
                      <p className='text-secondary-text text-13px font-medium'>All Carriers</p>
                      <img src="/asset/icons/dropdown-gray.svg" alt="icon" className={`transition-transform duration-300 ${dropdown3.isOpen ? 'rotate-180' : 'rotate-0'}`} />
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
                    <button onClick={dropdown4.toggle} id='status' type='button' className="select-button group">
                      <p className='text-secondary-text text-13px font-medium'>All Statuses</p>
                      <img src="/asset/icons/dropdown-gray.svg" alt="icon" className={`transition-transform duration-300 ${dropdown4.isOpen ? 'rotate-180' : 'rotate-0'}`} />
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
                    <button onClick={dropdown5.toggle} id='time' type='button' className="select-button group">
                      <p className='text-secondary-text text-13px font-medium'>All Time</p>
                      <img src="/asset/icons/dropdown-gray.svg" alt="icon" className={`transition-transform duration-300 ${dropdown5.isOpen ? 'rotate-180' : 'rotate-0'}`} />
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
                    <button onClick={dropdown9.toggle} id='time' type='button' className="export-btn group">
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
                    <th>ID</th>
                    <th>Type</th>
                    <th>Service</th>
                    <th>Recipient</th>
                    <th>Status</th>
                    <th>Date</th>
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
                    <td>LBL-001</td>
                    <td>
                      <div className='flex gap-6 items-center justify-start'>
                        <img src="asset/icons/label.svg" alt="icon" className='h-15' /><span>Label</span>
                      </div>
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
                      <p>John Smith</p>
                      <p className='description'>New York, NY</p>
                    </td>
                    <td>
                      <div className='inline-block'>
                        <div className='badge success-badge'>
                          <img src="asset/table-image/success-check.svg" alt="icon" className='h-14' />
                          <p>Delivered</p>
                        </div>
                      </div>
                    </td>
                    <td>04.06.2025</td>
                    <td>
                      <div className='flex gap-5 justify-start items-center'>
                        {/* eye */}
                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/eye.svg" alt="icon" className="h-15" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              View Label
                            </span>
                            <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                          </span>
                        </div>

                        {/* download */}
                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/download.svg" alt="icon" className="h-19" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              Download Label
                            </span>
                            <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                          </span>
                        </div>

                        {/* tracking */}
                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/tracking.svg" alt="icon" className="h-20" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              Track
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
                    <td>LBL-002</td>
                    <td>
                      <div className='flex gap-6 items-center justify-start'>
                        <img src="asset/icons/postcard.svg" alt="icon" className='h-15' /><span>Postcard</span>
                      </div>
                    </td>
                    <td>
                      <div className='flex gap-6 items-center justify-start'>
                        <img src="asset/table-image/delivery.svg" alt="icon" className='h-29' />
                        <div>
                          <p>First Class</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>Sarah Johnson</p>
                      <p className='description'>Los Angeles, CA</p>
                    </td>
                    <td>
                      <div className='inline-block'>
                        <div className='badge info-badge'>
                          <img src="asset/table-image/info-delivery.svg" alt="icon" className='h-14' />
                          <p>In Transit</p>
                        </div>
                      </div>
                    </td>
                    <td>03.06.2025</td>
                    <td>
                      <div className='flex gap-5 justify-start items-center'>
                        {/* tracking */}
                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/tracking.svg" alt="icon" className="h-20" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              Track
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
                    <td>LBL-003</td>
                    <td>
                      <div className='flex gap-6 items-center justify-start'>
                        <img src="asset/icons/label.svg" alt="icon" className='h-15' /><span>Label</span>
                      </div>
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
                      <p>Mike Wilson</p>
                      <p className='description'>Chicago, IL</p>
                    </td>
                    <td>
                      <div className='inline-block'>
                        <div className='badge warning-badge'>
                          <img src="asset/table-image/warning-clock.svg" alt="icon" className='h-14' />
                          <p>Created</p>
                        </div>
                      </div>
                    </td>
                    <td>02.06.2025</td>
                    <td>
                      <div className='flex gap-5 justify-start items-center'>
                        {/* eye */}
                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/eye.svg" alt="icon" className="h-15" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              View Label
                            </span>
                            <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                          </span>
                        </div>

                        {/* download */}
                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/download.svg" alt="icon" className="h-19" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              Download Label
                            </span>
                            <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                          </span>
                        </div>

                        {/* tracking */}
                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/tracking.svg" alt="icon" className="h-20" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              Track
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
                    <td>LBL-004</td>
                    <td>
                      <div className='flex gap-6 items-center justify-start'>
                        <img src="asset/icons/latter.svg" alt="icon" className='h-15' /><span>Letter</span>
                      </div>
                    </td>
                    <td>
                      <div className='flex gap-6 items-center justify-start'>
                        <img src="asset/table-image/delivery.svg" alt="icon" className='h-29' />
                        <div>
                          <p>Standart Class</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>Emily Davis</p>
                      <p className='description'>Seattle, WA</p>
                    </td>
                    <td>
                      <div className='inline-block'>
                        <div className='badge info-badge'>
                          <img src="asset/table-image/info-delivery.svg" alt="icon" className='h-14' />
                          <p>In Transit</p>
                        </div>
                      </div>
                    </td>
                    <td>01.06.2025</td>
                    <td>
                      <div className='flex gap-5 justify-start items-center'>
                        {/* tracking */}
                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/tracking.svg" alt="icon" className="h-20" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              Track
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
                    <td>LBL-005</td>
                    <td>
                      <div className='flex gap-6 items-center justify-start'>
                        <img src="asset/icons/label.svg" alt="icon" className='h-15' /><span>Label</span>
                      </div>
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
                      <p>David Brown</p>
                      <p className='description'>London, UK</p>
                    </td>
                    <td>
                      <div className='inline-block'>
                        <div className='badge success-badge'>
                          <img src="asset/table-image/success-check.svg" alt="icon" className='h-14' />
                          <p>Delivered</p>
                        </div>
                      </div>
                    </td>
                    <td>30.05.2025</td>
                    <td>
                      <div className='flex gap-5 justify-start items-center'>
                        {/* eye */}
                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/eye.svg" alt="icon" className="h-15" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              View Label
                            </span>
                            <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                          </span>
                        </div>

                        {/* download */}
                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/download.svg" alt="icon" className="h-19" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              Download Label
                            </span>
                            <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                          </span>
                        </div>

                        {/* tracking */}
                        <div className="relative group">
                          <div className="action-btn">
                            <img src="/asset/icons/tracking.svg" alt="icon" className="h-20" />
                          </div>
                          <span className="action-tooltip">
                            <span className='tooltip-label'>
                              Track
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

      {/* Active Pickup Requests*/}
      <div className='py-20 lg:py-30 px-15 lg:px-30 bg-white rounded-15px lg:rounded-20px space-y-20'>

        {/* dropdown */}
        <div className='flex justify-between'>
          <h2 className='font-semibold  text-17px lg:text-xl text-main-text'>Active Pickup Requests <span>(5)</span></h2>
          <img src="asset/icons/icon-park-outline_drag.svg" alt="icon" />
        </div>

        {/* search and dropdown */}
        <div className='w-full flex xl:flex-row flex-col'>
          <div className='w-full xl:w-1/3 2xl:w-1/2 relative'>
            <input type="search" name='search' placeholder='Search Pickup Requests' className='table-search' />
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
                <div ref={dropdown6.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <label htmlFor="carrier" className='label-text block sm:hidden'>Carrier</label>
                    <button onClick={dropdown6.toggle} id='carrier' type='button' className="select-button group">
                      <p className='text-secondary-text text-13px font-medium'>All Carriers</p>
                      <img src="/asset/icons/dropdown-gray.svg" alt="icon" className={`transition-transform duration-300 ${dropdown6.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown6.isOpen && (
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
                <div ref={dropdown7.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <label htmlFor="status" className='label-text block sm:hidden'>Status</label>
                    <button onClick={dropdown7.toggle} id='status' type='button' className="select-button group">
                      <p className='text-secondary-text text-13px font-medium'>All Statuses</p>
                      <img src="/asset/icons/dropdown-gray.svg" alt="icon" className={`transition-transform duration-300 ${dropdown7.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown7.isOpen && (
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
                <div ref={dropdown8.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <label htmlFor="time" className='label-text block sm:hidden'>Time</label>
                    <button onClick={dropdown8.toggle} id='time' type='button' className="select-button group">
                      <p className='text-secondary-text text-13px font-medium'>All Time</p>
                      <img src="/asset/icons/dropdown-gray.svg" alt="icon" className={`transition-transform duration-300 ${dropdown8.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown8.isOpen && (
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

        {/* Active Pickup Requests table */}
        <div className="table-content">
          <div className='overflow-x-auto main-scrollbar max-xl:mb-10 w-full'>
            <table className='table-auto w-full custom-table'>
              <thead className='bg-table-header'>
                <tr>
                  <th><label className="flex items-center cursor-pointer relative w-20 h-20">
                    <input type="checkbox" className='peer peer-checked:border-Outlines' />
                    <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                      <img src="/asset/icons/check.svg" alt="" className='h-19' />
                    </span>
                  </label></th>
                  <th>Labels</th>
                  <th>Carrier & Service</th>
                  <th>Address</th>
                  <th>Date and Time</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td><label className="flex items-center cursor-pointer relative w-20 h-20">
                    <input type="checkbox" className='peer peer-checked:border-Outlines' />
                    <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                      <img src="/asset/icons/check.svg" alt="" className='h-19' />
                    </span>
                  </label></td>
                  <td className="w-full lg:w-175">
                    <div className="flex flex-wrap gap-6">
                      <p className="label-badge">
                        <img src="asset/icons/label.svg" alt="icon" className='h-13' /><span>LBL-001</span>
                      </p>
                      <p className="label-badge">
                        <img src="asset/icons/label.svg" alt="icon" className='h-13' /><span>LBL-002</span>
                      </p>
                      <p className="label-badge">
                        <img src="asset/icons/label.svg" alt="icon" className='h-13' /><span>LBL-003</span>
                      </p>
                    </div>
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
                    <p>123 Business St</p>
                    <p className='description'>San Francisco, CA 94105</p>
                  </td>
                  <td>
                    <p>11.07.2025</p>
                    <p className='description'>9:00 AM - 12:00 PM</p>
                  </td>
                  <td>
                    <div className='inline-block'>
                      <div className='badge schedule-badge'>
                        <img src="asset/table-image/schedule-calandar.svg" alt="icon" className='h-14' />
                        <p>Scheduled</p>
                      </div>
                    </div>
                  </td>
                  <td>$8.5</td>
                  <td>
                    <div className='flex gap-5 justify-start items-center'>
                      {/* delete */}
                      <div className="relative group">
                        <div className="action-btn">
                          <img src="/asset/icons/delete.svg" alt="icon" className="h-17" />
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
                  <td><label className="flex items-center cursor-pointer relative w-20 h-20">
                    <input type="checkbox" className='peer peer-checked:border-Outlines' />
                    <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                      <img src="/asset/icons/check.svg" alt="" className='h-19' />
                    </span>
                  </label>
                  </td>
                  <td className="w-full lg:w-175">
                    <div className="flex flex-wrap gap-6">
                      <p className="label-badge">
                        <img src="asset/icons/label.svg" alt="icon" className='h-13' /><span>LBL-001</span>
                      </p>
                    </div>
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
                    <p>Sarah Johnson</p>
                    <p className='description'>Los Angeles, CA</p>
                  </td>
                  <td>
                    <p>11.07.2025</p>
                    <p className='description'>9:00 AM - 12:00 PM</p>
                  </td>
                  <td>
                    <div className='inline-block'>
                      <div className='badge warning-badge'>
                        <img src="asset/table-image/warning-clock.svg" alt="icon" className='h-14' />
                        <p>Created</p>
                      </div>
                    </div>
                  </td>
                  <td>Free</td>
                  <td>
                    <div className='flex gap-5 justify-start items-center'>
                      {/* edit */}
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

                      {/* delete */}
                      <div className="relative group">
                        <div className="action-btn">
                          <img src="/asset/icons/delete.svg" alt="icon" className="h-17" />
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
                      <input type="checkbox" className='peer peer-checked:border-Outlines' />
                      <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                        <img src="/asset/icons/check.svg" alt="" className='h-19' />
                      </span>
                    </label>
                  </td>
                  <td className="w-full lg:w-175">
                    <div className="flex flex-wrap gap-6">
                      <p className="label-badge">
                        <img src="asset/icons/label.svg" alt="icon" className='h-13' /><span>LBL-001</span>
                      </p>
                      <p className="label-badge">
                        <img src="asset/icons/label.svg" alt="icon" className='h-13' /><span>LBL-003</span>
                      </p>
                    </div>
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
                    <p>Mike Wilson</p>
                    <p className='description'>Chicago, IL</p>
                  </td>
                  <td>
                    <p>11.07.2025</p>
                    <p className='description'>9:00 AM - 12:00 PM</p>
                  </td>
                  <td>
                    <div className='inline-block'>
                      <div className='badge success-badge'>
                        <img src="asset/table-image/success-check.svg" alt="icon" className='h-14' />
                        <p>Completed</p>
                      </div>
                    </div>
                  </td>
                  <td>$22.9</td>
                  <td>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>


    </>
  )
}

export default DashboardPage
