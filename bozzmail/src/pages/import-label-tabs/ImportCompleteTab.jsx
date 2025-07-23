import { IoChevronBack, IoChevronDown, IoChevronForward, IoChevronUp } from "react-icons/io5";
import { CgEye } from "react-icons/cg";
import { FaCheck } from "react-icons/fa6";
import { NavLink } from 'react-router';
import { LuCopy } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { FiClock } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { PiWarningCircle } from "react-icons/pi";
import { MdLockOutline } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbFileImport } from "react-icons/tb";
import { GrDocumentZip } from "react-icons/gr";

const CompleteTab = () => {

  const [selectedService, setSelectedService] = useState('');

  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-15 sm:gap-20 h-fit'>

        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>

          <div className="flex items-center justify-center gap-20 flex-col text-center">
            <div className="w-60 h-60 rounded-full bg-success-badge flex items-center justify-center">
              <FaCheck className="text-3xl text-success-text" />
            </div>
            <div className="space-y-4">
              <p className='tab-main-heading'>Label Created Successfully!</p>
              <p className="text-sm font-medium text-main-text">Your shipping label has been created and is ready to use.</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-10 flex-wrap">
            <NavLink to={"#"} className='flex items-center justify-between gap-8 button-border'>
              <TbFileImport className="text-base text-main-text"/>
              <span> Import New Labels</span>
            </NavLink>
            <NavLink to={"#"} className='flex items-center justify-between gap-8 button-border'>
              <GrDocumentZip className="text-base text-main-text"/>
              <span> Download Labels</span>
            </NavLink>
          </div>

          <hr className='text-Outlines' />

          <div className="text-center flex justify-center items-center flex-col gap-10">
            <p className="text-sm font-medium text-main-text-shaded">Tracking Number</p>
            <div className="border border-Outlines bg-form-input py-7 pr-7 pl-15 rounded-lg w-fit flex justify-center items-center gap-10 flex-wrap">
              <p className="text-base font-medium text-secondary-text">BZ123456789US</p>

              <div className='flex gap-5 justify-start items-center'>
                {/* copy */}
                <div className="relative group">
                  <div className="small-button-border">
                    <LuCopy className="text-base text-cta-secondary" />
                    <span>Copy</span>
                  </div>
                  <span className="action-tooltip">
                    <span className='tooltip-label'>
                      Copy
                    </span>
                    <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                  </span>
                </div>

                {/* tracking */}
                <div className="relative group">
                  <div className="small-button-border">
                    <img src="/asset/icons/tracking.svg" alt="icon" className="h-20" />
                    <span>Track</span>
                  </div>
                  <span className="action-tooltip">
                    <span className='tooltip-label'>
                      Track
                    </span>
                    <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>
          <div className="space-y-4">
            <p className='tab-main-heading'>Pickup Options</p>
            <p className="text-sm font-medium text-secondary-text">Choose how would you like to send this package?</p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-15'>

            <label className={`py-9 pr-30 pl-15 flex items-center justify-start gap-16 rounded-lg cursor-pointer ${selectedService === 'drop' ? 'border border-secondary-text bg-form-input' : 'border border-Outlines bg-white'}`}>
              <input type="radio" name='carrier' value="drop" onChange={(e) => setSelectedService(e.target.value)} />
              <div className='flex gap-11 items-center text-sm font-medium text-main-text'>
                <img src="asset/icons/delivery-drop.svg" alt="icon" />
                <span>Drop Off at Carrier Location</span>
              </div>
            </label>

            <label className={`py-9 pr-30 pl-15 flex items-center justify-start gap-16 rounded-lg cursor-pointer ${selectedService === 'pickup' ? 'border border-secondary-text bg-form-input' : 'border border-Outlines bg-white'}`}>
              <input type="radio" name='carrier' value="pickup" onChange={(e) => setSelectedService(e.target.value)} />
              <div className='flex gap-11 items-center text-sm font-medium text-main-text'>
                <LuCalendar className="text-sm text-main-text" />
                <span>Schedule Pickup</span>
              </div>
            </label>
          </div>

          {selectedService === 'drop' && (
            <>
              <p className='tab-heading'>Details</p>

              <div className="space-y-10">

                <div className="bg-form-input border border-Outlines rounded-lg py-13 px-15">
                  <div className="flex justify-between w-full items-center gap-8">
                    <div className="flex justify-start items-start gap-12">
                      <img src="asset/icons/building.svg" alt="icon" className="h-16" />

                      <div>
                        <p className="text-main-text text-sm font-medium">USPS Post Office - Downtown</p>
                        <p className="text-secondary-text text-xs font-medium">456 Market St, San Francisco, CA 94102</p>

                        <div className='text-secondary-text pt-6 font-medium text-xs flex items-center justify-start gap-5'>
                          <FiClock className="flex-none" />
                          <p>Mon-Fri: 9AM-5PM, Sat: 9AM-3PM</p>
                        </div>
                      </div>
                    </div>

                    {/* map */}
                    <div className="relative group">
                      <div className="flex justify-center items-center border border-Outlines hover:border-outlines-active focus:border-outlines-active rounded-md gap-5 cursor-pointer bg-white py-6 px-8 text-13px font-medium text-cta-secondary">
                        <HiOutlineLocationMarker className="text-base text-cta-secondary" />
                        <span>Map</span>
                      </div>
                      <span className="action-tooltip">
                        <span className='tooltip-label'>
                          Map
                        </span>
                        <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-form-input border border-Outlines rounded-lg py-13 px-15">
                  <div className="flex justify-between w-full items-center gap-8">
                    <div className="flex justify-start items-start gap-12">
                      <img src="asset/icons/building.svg" alt="icon" className="h-16" />

                      <div>
                        <p className="text-main-text text-sm font-medium">USPS Post Office - Uptown</p>
                        <p className="text-secondary-text text-xs font-medium">111 Fisherman St, San Francisco, CA 94102</p>

                        <div className='text-secondary-text pt-6 font-medium text-xs flex items-center justify-start gap-5'>
                          <FiClock className="flex-none" />
                          <p>Mon-Fri: 9AM-5PM, Sat: 9AM-3PM</p>
                        </div>
                      </div>
                    </div>

                    {/* map */}
                    <div className="relative group">
                      <div className="flex justify-center items-center border border-Outlines hover:border-outlines-active focus:border-outlines-active rounded-md gap-5 cursor-pointer bg-white py-6 px-8 text-13px font-medium text-cta-secondary">
                        <HiOutlineLocationMarker className="text-base text-cta-secondary" />
                        <span>Map</span>
                      </div>
                      <span className="action-tooltip">
                        <span className='tooltip-label'>
                          Map
                        </span>
                        <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </>
          )}

          {selectedService === 'pickup' && (
            <>
            <p className='tab-heading'>Details</p>
          <NavLink to={"/create-labels"} className='flex items-center justify-between gap-8 button-icon w-fit'>
                <LuCalendar className="text-17px text-white flex-none" />
                <span> Schedule Pickup</span>
              </NavLink>
            </>
          )}
        </div>

      </div>
    </>
  )
}

export default CompleteTab
