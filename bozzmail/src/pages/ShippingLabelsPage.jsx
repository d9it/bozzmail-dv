import { NavLink } from 'react-router';
import useDropdown from '../hook/useDropdown';
import { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";

const ShippingLabelsPage = () => {


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

  return (
    <>
      {/*  cards */}
      <div className='py-20 sm:py-30 pr-15 sm:pr-30 bg-white rounded-15px sm:rounded-20px'>

        <div className='flex gap-15 sm:gap-25 items-center justify-start'>
          <div className='w-5 h-40 bg-cta-secondary rounded-tr-10px rounded-br-10px'></div>
          <div className='flex gap-5 sm:gap-10'>
            <img src="asset/icons/heading_label.svg" alt="icon" />
            <h1 className='font-semibold text-22px sm:text-25px text-main-text'>Shipping Labels</h1>
          </div>
        </div>

        <p className='pr-15 sm:pl-30 text-17px font-medium text-secondary-text pt-5 hidden sm:block'>Create and manage your shipping labels for packages and mail</p>

        {/* cards */}
        <div className='pl-15 sm:pl-30 lg:grid xl:grid-cols-4 lg:grid-cols-2 flex items-center justify-start overflow-x-auto gap-10 sm:gap-20 pt-10 sm:pt-20'>
          <div className='border border-Outlines card-layout py-21 w-full'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='font-medium text-10px uppercase mb-5 text-main-text'>Total Labels</p>
                <p className='font-semibold text-xl text-main-text'>7</p>
              </div>
              <img src="asset/icons/bx_label.svg" alt="icon" className='z-20' />
            </div>
            <img src="asset/icons/shape-bg.png" alt="image" className='absolute right-0 top-0 z-10 object-cover h-full' />
          </div>

          <div className='border border-Outlines card-layout py-21 w-full'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='font-medium text-10px uppercase mb-5 text-main-text'>Total Spent</p>
                <p className='font-semibold text-xl text-main-text'>$226.65</p>
              </div>
              <img src="asset/icons/spent.svg" alt="icon" className='z-20' />
            </div>
            <img src="asset/icons/shape-bg.png" alt="image" className='absolute right-0 top-0 z-10 object-cover h-full' />
          </div>

          <div className='border border-Outlines card-layout py-21 w-full'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='font-medium text-10px uppercase mb-5 text-main-text'>Avg. Cost</p>
                <p className='font-semibold text-xl text-main-text'>$32.38</p>
              </div>
              <img src="asset/icons/cost.svg" alt="icon" className='z-20' />
            </div>
            <img src="asset/icons/shape-bg.png" alt="image" className='absolute right-0 top-0 z-10 object-cover h-full' />
          </div>

          <div className='border border-Outlines card-layout py-21 w-full'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='font-medium text-10px uppercase mb-5 text-main-text'>International</p>
                <p className='font-semibold text-xl text-main-text'>2</p>
              </div>
              <img src="asset/icons/international.svg" alt="icon" className='z-20' />
            </div>
            <img src="asset/icons/shape-bg.png" alt="image" className='absolute right-0 top-0 z-10 object-cover h-full' />
          </div>
        </div>
      </div>

      {/* Recent Labels */}
      <div className='py-20 sm:py-30 px-15 sm:px-30 bg-white rounded-15px sm:rounded-20px sm:space-y-20 space-y-10 w-full'>
        {/* dropdown */}
        <div className='flex justify-between items-center gap-8'>
          <h2 className='font-semibold text-17px sm:text-xl text-main-text'>Recent Labels<span>(6)</span></h2>
          <div className="flex justify-end gap-8">
            <NavLink to={"#"} className='flex items-center justify-between gap-8 button-border'>
              <img src="asset/icons/import-file.svg" alt="icon" />
              <span className='sm:block hidden'> Import Labels</span>
            </NavLink>
            <NavLink to={"/create-labels"} className='flex items-center justify-between gap-8 button-icon'>
              <img src="asset/icons/white-plus.svg" alt="icon" />
              <span className='sm:block hidden'> Create Label</span>
            </NavLink>
          </div>
        </div>

        {/* search and dropdown */}
        <div className='w-full flex xl:flex-row flex-col'>
          <div className='w-full xl:w-1/3 2xl:w-1/2 relative'>
            <input type="search" name='search' placeholder='Search Labels' className='table-search' />
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
                    <button onClick={dropdown4.toggle} id='status' type='button' className="select-button group">
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
                    <button onClick={dropdown5.toggle} id='time' type='button' className="select-button group">
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
        <div className="table-content">
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
                  <th>Recipient</th>
                  <th>Destination</th>
                  <th>Carrier</th>
                  <th>Status</th>
                  <th>Cost</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <label className="flex items-center cursor-pointer relative w-20 h-20">
                      <input type="checkbox" className='peer peer-checked:border-Outlines' />
                      <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                        <img src="/asset/icons/check.svg" alt="" className='h-19' />
                      </span>
                    </label>
                  </td>
                  <td>LBL-001</td>
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
                      <div className='badge success-badge'>
                        <img src="asset/table-image/success-check.svg" alt="icon" className='h-14' />
                        <p>Delivered</p>
                      </div>
                    </div>
                  </td>
                  <td>$8.45</td>
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
                        <p>Shipped</p>
                      </div>
                    </div>
                  </td>
                  <td>$12.30</td>
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
                  <td>LBL-003</td>
                  <td><p>Sarah Johnson</p></td>
                  <td>
                    <p>456 Oak Ave,</p>
                    <p className='description'>Los Angeles, CA 90210</p>
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
                      <div className='badge schedule-badge'>
                        <img src="asset/table-image/print.svg" alt="icon" className='h-14' />
                        <p>Printed</p>
                      </div>
                    </div>
                  </td>
                  <td>$26.75</td>
                  <td>22.06.2025</td>
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

                      {/* calendar */}
                      <div className="relative group">
                        <div className="action-btn">
                          <img src="/asset/icons/calendar.svg" alt="icon" className="h-20" />
                        </div>
                        <span className="action-tooltip">
                          <span className='tooltip-label'>
                            calendar
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
                  <td><p>Mike Wilson</p></td>
                  <td>
                    <p>321 Elm Dr</p>
                    <p className='description'>Miami, FL 33101</p>
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
                      <div className='badge paid-badge'>
                        <img src="asset/table-image/paid.svg" alt="icon" className='h-14' />
                        <p>Paid</p>
                      </div>
                    </div>
                  </td>
                  <td>$3.95</td>
                  <td>26.06.2025</td>
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

                      {/* calendar */}
                      <div className="relative group">
                        <div className="action-btn">
                          <img src="/asset/icons/calendar.svg" alt="icon" className="h-20" />
                        </div>
                        <span className="action-tooltip">
                          <span className='tooltip-label'>
                            calendar
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
                  <td>DRAFT-LBL-005</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className='inline-block'>
                      <div className='badge draft-badge'>
                        <img src="asset/table-image/draft.svg" alt="icon" className='h-14' />
                        <p>Draft</p>
                      </div>
                    </div>
                  </td>
                  <td></td>
                  <td>01.06.2025</td>
                  <td>
                    <div className='flex gap-5 justify-start items-center'>
                      {/* play */}
                      <div className="relative group">
                        <div className="action-btn">
                          <img src="/asset/icons/play.svg" alt="icon" className="h-19" />
                        </div>
                        <span className="action-tooltip">
                          <span className='tooltip-label'>
                            play
                          </span>
                          <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                        </span>
                      </div>

                      {/* delete */}
                      <div className="relative group">
                        <div className="action-btn">
                          <img src="/asset/icons/delete.svg" alt="icon" className="h-20" />
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
                  <td>
                    <div className='flex flex-wrap gap-6 items-center'>
                      LBL-006
                      <p className="label-badge">
                        <img src="asset/icons/international.svg" alt="icon" className='h-13' /><span>Intl</span>
                      </p>
                    </div>
                  </td>
                  <td><p>David Brown</p></td>
                  <td>
                    <p>123 Regent St</p>
                    <p className='description'>London, England W1B 4HA</p>
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
                      <div className='badge success-badge'>
                        <img src="asset/table-image/success-check.svg" alt="icon" className='h-14' />
                        <p>Delivered</p>
                      </div>
                    </div>
                  </td>
                  <td>$33.40</td>
                  <td>28.05.2025</td>
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
                    </div>
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
export default ShippingLabelsPage
