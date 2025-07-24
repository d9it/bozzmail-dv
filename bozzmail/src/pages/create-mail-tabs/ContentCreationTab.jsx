import { IoChevronBack, IoChevronDown, IoChevronForward, IoChevronUp } from "react-icons/io5";
import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import { PiWarningCircle } from "react-icons/pi";
import useDropdown from '../../hook/useDropdown';
import { TbTemplate } from "react-icons/tb";
import { GoPlus } from "react-icons/go";

const ContentCreationTab = () => {

  const [checked, setChecked] = useState(false);

  const dropdown1 = useDropdown();
  const dropdown2 = useDropdown();
  const dropdown3 = useDropdown();
  const dropdown4 = useDropdown();


  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-15 sm:gap-20 h-fit'>

        {/* Create Your Content */}
        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>
          <p className='tab-main-heading'>Create Your Content</p>

          {/* form */}
          <form action="" className='space-y-20'>

            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="ltemplate" className='label-text'>Letter Template <span>*</span></label>
              <div ref={dropdown1.ref} className="relative">
                <div className='flex gap-8 justify-start items-start flex-col'>
                  <button onClick={dropdown1.toggle} id='ltemplate' type='button' className="tab-select group">
                    <div className="flex gap-8">
                      <TbTemplate className="text-main-text text-lg" />
                      <p className='text-place-holder text-13px font-medium'>Hello Letter</p>
                    </div>
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
                      <li className='table-dropdown-title'>Hello Letter</li>
                      <li className='table-dropdown-title'>Greetings Letter 2943</li>
                      <li className='table-dropdown-title'>Test Sending Summer</li>
                      <li className='table-dropdown-title'>Follow-Up Letter (Spring Campaign)</li>
                    </ul>
                    <hr className='text-Outlines' />
                    <div className="flex gap-6 bg-icon rounded-md p-8 cursor-pointer items-center">
                      <GoPlus className='text-main-text text-base stroke-1' />
                      <p className='text-main-text text-13px font-semibold capitalize'>Create New Template</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className='flex justify-start gap-8 flex-col w-full'>
              <p className='label-text'>Print Options <span>*</span></p>
              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <input type="checkbox" className='peer peer-checked:border-Outlines' id='material' />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>
                <label htmlFor='material' className='checkbox-text'>Color printing (+$0.20/page)</label>
              </div>

              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <input type="checkbox" className='peer peer-checked:border-Outlines' id='ch2' />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>
                <label htmlFor='ch2' className='checkbox-text'>Double-sided printing (+$0.20/page)</label>
              </div>

              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <input type="checkbox" className='peer peer-checked:border-Outlines' id='ch3' />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>
                <label htmlFor='ch3' className='checkbox-text'>Insert Blank Page for Address (+$0.20/page)</label>
              </div>

              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <input type="checkbox" className='peer peer-checked:border-Outlines' id='ch4' />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>
                <label htmlFor='ch4' className='checkbox-text'>Perforate First Page (+$0.20/page)</label>
              </div>
            </div>

            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="psize" className='label-text'>Paper Size <span>*</span></label>
              <div ref={dropdown2.ref} className="relative">
                <div className='flex gap-8 justify-start items-start flex-col'>
                  <button onClick={dropdown2.toggle} id='psize' type='button' className="tab-select group">
                    <p className='text-place-holder text-13px font-medium'>Letter (8.5" × 11")</p>
                    <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown2.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                </div>

                {/* Dropdown */}
                {dropdown2.isOpen && (
                  <div className="form-dropdown-menu">
                    <ul className='table-dropdown-item dropdown-scrollbar'>
                      <li className='table-dropdown-title'>Letter (8.5" × 11")</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="envelope" className='label-text'>Envelope <span>*</span></label>
              <div ref={dropdown3.ref} className="relative">
                <div className='flex gap-8 justify-start items-start flex-col'>
                  <button onClick={dropdown3.toggle} id='envelope' type='button' className="tab-select group">
                    <p className='text-place-holder text-13px font-medium'>Standard</p>
                    <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown3.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                </div>

                {/* Dropdown */}
                {dropdown3.isOpen && (
                  <div className="form-dropdown-menu">
                    <ul className='table-dropdown-item dropdown-scrollbar'>
                      <li className='table-dropdown-title'>Standard</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="renvelope" className='label-text'>Return Envelope <span>*</span></label>
              <div ref={dropdown4.ref} className="relative">
                <div className='flex gap-8 justify-start items-start flex-col'>
                  <button onClick={dropdown4.toggle} id='renvelope' type='button' className="tab-select group">
                    <p className='text-place-holder text-13px font-medium'>Standard</p>
                    <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown4.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                </div>

                {/* Dropdown */}
                {dropdown4.isOpen && (
                  <div className="form-dropdown-menu-up !top-auto !bottom-full">
                    <ul className='table-dropdown-item dropdown-scrollbar'>
                      <li className='table-dropdown-title'>Standard</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </form>

          <hr className='text-Outlines' />

          {/* buttons */}
          <div className='flex justify-between items-center'>
            <NavLink to={"#"} className='flex items-center justify-between gap-8 button-border'>
              <IoChevronBack className="text-sm transition-transform duration-300 text-main-text" />
              <span> Previous</span>
            </NavLink>
            <NavLink to={"/create-labels"} className='flex items-center justify-between gap-8 button-icon'>
              <span> Next</span>
              <IoChevronForward className="text-sm transition-transform duration-300 text-white" />
            </NavLink>
          </div>

        </div>
      </div>
    </>
  )
}

export default ContentCreationTab
