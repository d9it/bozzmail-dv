import { IoChevronBack, IoChevronDown, IoChevronForward, IoChevronUp } from "react-icons/io5";
import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import useDropdown from '../../hook/useDropdown';
import { PiWarningCircle } from "react-icons/pi";
import { GoPlus } from "react-icons/go";

const CustomTab = () => {

  const [showItem, setShowItem] = useState(false);
  const [showDetails, setShowDetails] = useState(false);


  const dropdown1 = useDropdown();
  const dropdown2 = useDropdown();
  const dropdown3 = useDropdown();
  const dropdown4 = useDropdown();

  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-15 sm:gap-20 h-fit'>

        {/* Customs Declaration */}
        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>
          <div className="space-y-4">
            <p className='tab-main-heading'>Customs Declaration</p>
            <div className="flex gap-6 items-center justify-start">
              <img src="asset/icons/flag.svg" alt="icon" className="h-14" />
              <p className="text-sm font-medium text-secondary-text">Great Britain (GB)</p>
            </div>
          </div>

          <div className="warning-message">
            <PiWarningCircle className='text-secondary-text text-17px stroke-3 flex-none' />
            <div className="space-y-2">
              <p>Shipping restrictions for GB:</p>
              <ul className="font-medium text-xs list-disc pl-20">
                <li>Food items</li>
                <li>Plants</li>
                <li>Certain textiles</li>
              </ul>
            </div>
          </div>

          {/* form */}
          <form action="" className='space-y-20'>

            {/* Shipment Type */}
            <p className='tab-heading'>Shipment Type</p>

            <div className='flex justify-start gap-8 flex-col w-full relative'>
              <p className='label-text'>Type of Contents</p>

              <label className='radio-input-label'>
                <input type="radio" name='content-type' />
                <span>Gift</span>
              </label>
              <label className='radio-input-label'>
                <input type="radio" name='content-type' />
                <span>Documents</span>
              </label>
              <label className='radio-input-label'>
                <input type="radio" name='content-type' />
                <span>Merchandise</span>
              </label>
              <label className='radio-input-label'>
                <input type="radio" name='content-type' />
                <span>Personal Use</span>
              </label>
              <label className='radio-input-label'>
                <input type="radio" name='content-type' />
                <span>Sample</span>
              </label>
              <label className='radio-input-label'>
                <input type="radio" name='content-type' />
                <span>Return</span>
              </label>
            </div>

            <div className='flex justify-start gap-8 flex-col w-full relative'>
              <label htmlFor="description" className='label-text'>Detailed Description<span>*</span></label>
              <textarea name="" id="description" className='form-input resize-none' placeholder='Not specified' rows={4}></textarea>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-20'>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="currency" className='label-text'>Currency <span>*</span></label>
                <div ref={dropdown1.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <button onClick={dropdown1.toggle} ref={dropdown1.triggerRef} id='currency' type='button' className="tab-select group">
                      <p className='text-place-holder text-13px font-medium'>USD – US Dollars</p>
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
                        <li className='table-dropdown-title'>NGN – Nigerian Naira</li>
                        <li className='table-dropdown-title'>EUR – Euro</li>
                        <li className='table-dropdown-title'>USD – US Dollars</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="incoterms" className='label-text'>Incoterms <span>*</span></label>
                <div ref={dropdown2.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <button onClick={dropdown2.toggle} ref={dropdown2.triggerRef} id='incoterms' type='button' className="tab-select group">
                      <p className='text-place-holder text-13px font-medium'>DDU – Delivered Duty Paid</p>
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
                        <li className='table-dropdown-title'>DDP – Delivered Duty Paid</li>
                        <li className='table-dropdown-title'>DDU – Delivered Duty Unpaid</li>
                        <li className='table-dropdown-title'>DAP – Delivered at Place</li>
                        <li className='table-dropdown-title'>EXW – Ex Works</li>
                        <li className='table-dropdown-title'>FOB – Free on Board</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <hr className='text-Outlines' />

            {/* Commercial Information */}
            <p className='tab-heading'>Commercial Information</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="invoice" className='label-text'>Invoice Number <span>*</span></label>
                <input type="text" name="" id="invoice" required placeholder='INV-2024-001' className='form-input' />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="porder" className='label-text'>Purchase Order Number <span>*</span></label>
                <input type="text" name="" id="porder" required placeholder='PO-2024-001' className='form-input' />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="tax-id" className='label-text'>Sender Tax ID / EIN <span>*</span></label>
                <input type="text" name="" id="tax-id" required placeholder='12-3456789' className='form-input' />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="rtax-id" className='label-text'>Recipient Tax ID (if applicable) <span>*</span></label>
                <input type="text" name="" id="rtax-id" required placeholder='Tax ID' className='form-input' />
              </div>
            </div>
          </form>
        </div>

        {/* Contents */}
        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>
          <p className='tab-main-heading'>Contents</p>

          {/* warning message */}
          {!showItem && !showDetails && (
            <div className="warning-message">
              <PiWarningCircle className='text-secondary-text text-17px stroke-3 flex-none' />
              <div className="space-y-2">
                <p>No items added yet</p>
                <p className="font-medium text-xs">Click "Add Item" to begin.</p>
              </div>
            </div>
          )}

          {/* add item form */}
          {showItem && (
            <div className="border border-Outlines p-20 rounded-lg space-y-10 sm:space-y-20">

              <div className="flex justify-between items-center gap-10">
                <p className='tab-heading'>Item 1</p>

                {/* delete */}
                <div className="relative group">
                  <div className="action-btn">
                    <img src="/asset/icons/red-delete.svg" alt="icon" className="h-15" />
                  </div>
                  <span className="action-tooltip">
                    <span className='tooltip-label'>
                      Delete
                    </span>
                    <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                  </span>
                </div>
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="des" className='label-text'>Description <span>*</span></label>
                <input type="text" name="" id="des" required placeholder='Water Pump' className='form-input' />
              </div>

              <div className='flex flex-col sm:flex-row xl:flex-col 2xl:flex-row items-center justify-center gap-10 sm:gap-20 h-full'>
                <div className='flex justify-start gap-8 flex-col w-full sm:w-1/3 xl:w-full 2xl:w-1/3'>
                  <label htmlFor="qua" className='label-text'>Quantity <span>*</span></label>
                  <div className='relative'>
                    <input type="number" name="" id="qua" required placeholder='1' className='form-input' />
                    <div className='absolute top-6 right-8 flex flex-col gap-2'>
                      <div className='number-arrow-btn'>
                        <IoChevronUp />
                      </div>
                      <div className='number-arrow-btn'>
                        <IoChevronDown />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 w-full'>
                  <div className='flex justify-start gap-8 flex-col w-full'>
                    <label htmlFor="weight" className='label-text'>Weight per Item (lbs) <span>*</span></label>
                    <input type="text" name="" id="weight" required placeholder='12.00' className='form-input' />
                  </div>

                  <div className='flex justify-start gap-8 flex-col w-full'>
                    <label htmlFor="value-item" className='label-text'>Value per Item ($) <span>*</span></label>
                    <input type="text" name="" id="value-item" required placeholder='50.00' className='form-input' />
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-20'>
                <div className='flex justify-start gap-8 flex-col w-full form-last-dropdown'>
                  <label htmlFor="country" className='label-text'>Country of Origin <span>*</span></label>
                  <div ref={dropdown3.ref} className="relative">
                    <div className='flex gap-8 justify-start items-start flex-col'>
                      <button onClick={dropdown3.toggle} ref={dropdown3.triggerRef} id='country' type='button' className="tab-select group">
                        <p className='text-place-holder text-13px font-medium'>United States</p>
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
                          <li className='table-dropdown-title'>United Republic of Tanzania</li>
                          <li className='table-dropdown-title'>United Arab Emirates</li>
                          <li className='table-dropdown-title'>United States</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className='flex justify-start gap-8 flex-col w-full form-last-dropdown'>
                  <label htmlFor="hs-code" className='label-text'>HS Code (Harmonized System) <span>*</span></label>
                  <div ref={dropdown4.ref} className="relative">
                    <div className='flex gap-8 justify-start items-start flex-col'>
                      <button onClick={dropdown4.toggle} ref={dropdown4.triggerRef} id='hs-code' type='button' className="tab-select group">
                        <p className='text-place-holder text-13px font-medium'>6403.99.60</p>
                        <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown4.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                      </button>
                    </div>

                    {/* Dropdown */}
                    {dropdown4.isOpen && (
                      <div className="form-dropdown-menu-up">
                        <div className='w-full relative'>
                          <input type="search" name='search' placeholder='Search' className='table-small-search' />
                          <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                        </div>
                        <ul className='table-dropdown-item dropdown-scrollbar'>
                          <li className='table-dropdown-title'>
                            <div className="flex justify-start items-center">
                              <p className="w-1/2">8517.12.00</p>
                              <p className="text-13px font-medium text-secondary-text w-1/2">Mobile phones</p>
                            </div>
                          </li>
                          <li className='table-dropdown-title'>
                            <div className="flex justify-start items-center">
                              <p className="w-1/2">6109.10.00</p>
                              <p className="text-13px font-medium text-secondary-text w-1/2">T-shirts, tank tops - Cotton</p>
                            </div>
                          </li>
                          <li className='table-dropdown-title'>
                            <div className="flex justify-start items-center">
                              <p className="w-1/2">6403.99.60</p>
                              <p className="text-13px font-medium text-secondary-text w-1/2">Footwear - Other materials</p>
                            </div>
                          </li>
                          <li className='table-dropdown-title'>
                            <div className="flex justify-start items-center">
                              <p className="w-1/2">4901.99.00</p>
                              <p className="text-13px font-medium text-secondary-text w-1/2">Books and printed matter</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-center">
                <button className='flex items-center justify-between gap-8 button-icon' onClick={() => {
                  setShowDetails(true);
                  setShowItem(false);
                }}>
                  <span> Save Draft</span>
                  <img src="asset/icons/white-save.svg" alt="icon" className="h-16" />
                </button>
              </div>

            </div>
          )}

          {/* details */}
          {showDetails && (
            <div className="py-20 pl-20 pr-10 rounded-lg border border-Outlines bg-form-input flex justify-between gap-10">
              <div className="font-medium text-secondary-text">
                <p className="font-semibold text-13px">Item 1</p>
                <p className="text-main-text text-sm">Water Pump</p>
                <p className="text-xs pt-4">1 • 12 lbs • $50 • United States • 6403.99.60 </p>
              </div>

              <div className="flex items-center justify-end gap-10 flex-wrap">

                <div className="flex items-center gap-10">
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
                      <img src="/asset/icons/red-delete.svg" alt="icon" className="h-15" />
                    </div>
                    <span className="action-tooltip">
                      <span className='tooltip-label'>
                        Delete
                      </span>
                      <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                    </span>
                  </div>
                </div>

                <img src="asset/icons/icon-park-outline_drag.svg" alt="icon" className="h-18" />

              </div>
            </div>
          )}

          {/* add item btn */}
          <button className='small-button-border' onClick={() => setShowItem(true)}>
            <GoPlus className='text-cta-secondary text-sm stroke-1' />
            <p>Add Item</p>
          </button>

          {/* summary details */}
          {showDetails && (
            <div className="p-20 rounded-lg bg-card-sky-blue space-y-16 bg-no-repeat bg-right-top" style={{ backgroundImage: "url('asset/icons/summery-bg.svg')" }}>

              <p className="text-sm font-semibold text-main-text uppercase">Declaration Summary</p>

              <table>
                <tbody className="text-main-text font-medium text-sm">
                  <tr>
                    <td className="text-main-text-shaded pr-30">Total Items: </td>
                    <td className="font-semibold">1</td>
                  </tr>
                  <tr>
                    <td className="text-main-text-shaded pr-30">Total Weight: </td>
                    <td className="font-semibold">12.00 lbs</td>
                  </tr>
                  <tr>
                    <td className="text-main-text-shaded pr-30">Total Value: </td>
                    <td className="font-semibold">$122</td>
                  </tr>
                </tbody>
              </table>

              <hr className='text-blue-line' />

              <div className="space-y-3">
                <p className="font-semibold text-base text-main-text">Estimated Duties & Taxes: <span className="text-primary sm:pl-10">$6.10</span></p>
                <p className="text-main-text-shaded text-xs font-medium max-w-xs">This is an estimate. Actual duties may vary and are determined by destination customs authorities.</p>
              </div>

            </div>
          )}

          <hr className='text-Outlines' />

          {/* buttons */}
          <div className='flex justify-between items-center flex-wrap'>
            <NavLink to={"#"} className='flex items-center justify-between gap-8 button-border'>
              <IoChevronBack className="text-sm transition-transform duration-300 text-main-text" />
              <span> Previous</span>
            </NavLink>
            <NavLink to={"#"} className='flex items-center justify-between gap-8 button-icon'>
              <span> Next</span>
              <IoChevronForward className="text-sm transition-transform duration-300 text-white" />
            </NavLink>

            {/* for disable */}
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

export default CustomTab
