import { IoChevronBack, IoChevronDown, IoChevronForward, IoChevronUp } from "react-icons/io5";
import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import { PiWarningCircle } from "react-icons/pi";

const PackageTab = () => {

  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-15 sm:gap-20 h-fit'>

        {/* Package Information */}
        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>
          <p className='tab-main-heading'>Package Information</p>

          {/* form */}
          <form action="" className='space-y-20'>

            {/* general */}
            <p className='tab-heading'>General</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
              <div className='flex justify-start gap-8 flex-col w-full relative'>
                <label htmlFor="weight" className='label-text'>Weight (lbs)<span>*</span></label>
                <input type="text" name="" id="weight" required placeholder='2.5' className='form-input' />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="dvalue" className='label-text'>Declared Value ($) <span>*</span></label>
                <input type="text" name="" id="dvalue" required placeholder='100.00' className='form-input' />
              </div>
            </div>
            <hr className='text-Outlines' />

            {/* Dimensions */}
            <p className='tab-heading'>Dimensions</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="length" className='label-text'>Length (in.)<span>*</span></label>
                <div className='relative'>
                  <input type="number" name="" id="length" required placeholder='12' className='form-input' />
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

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="width" className='label-text'>Width (in.)<span>*</span></label>
                <div className='relative'>
                  <input type="number" name="" id="width" required placeholder='8' className='form-input' />
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

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="height" className='label-text'>Height (in.)<span>*</span></label>
                <div className='relative'>
                  <input type="number" name="" id="height" required placeholder='4' className='form-input' />
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
            </div>
            <hr className='text-Outlines' />

            {/* Return label */}
            <p className='tab-heading'>Return label</p>
            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="rlabel" className='label-text'>Add a Return Label</label>
              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <input type="checkbox" className='peer peer-checked:border-Outlines' id='rlabel' />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>

                <label htmlFor='rlabel' className='checkbox-text'>Yes (+$5.60)</label>
              </div>
            </div>

            <div className="warning-message">
              <PiWarningCircle className='text-secondary-text text-17px stroke-3 flex-none'/>
              <p>Return label will use the same address, weight, and dimensions.</p>
            </div>
            <hr className='text-Outlines' />

            {/* Insurance */}
            <p className='tab-heading'>Insurance</p>
            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="insurance" className='label-text'>Add Shipment Insurance</label>
              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <input type="checkbox" className='peer peer-checked:border-Outlines' id='insurance' onChange={(e) => setChecked(e.target.checked)} />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>
                <label htmlFor='insurance' className='checkbox-text'>Yes</label>
              </div>
            </div>

            {checked && (
              <>
                <div className='flex justify-start gap-8 flex-col w-full relative sm:w-1/2'>
                  <label htmlFor="insured" className='label-text'>Insured Value ($)<span>*</span></label>
                  <input type="text" name="" id="insured" required placeholder='50.00' className='form-input' />
                </div>

                <div className="warning-message">
                  <PiWarningCircle className='text-secondary-text text-17px stroke-3 flex-none'/>
                  <p>Insurance fee is 1.5% of the insured value. Minimum: $1, Maximum: $20.</p>
                </div>
              </>
            )}

          </form>
        </div>

        {/* Recipient Information */}
        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>
          <p className='tab-main-heading'>Recipient Information</p>

          {/* form */}
          <form action="" className='space-y-20'>

            <div className='flex justify-start gap-8 flex-col w-full relative'>
              <label htmlFor="description" className='label-text'>Description<span>*</span></label>
              <textarea name="" id="description" className='form-input resize-none' placeholder='Not specified' rows={4}></textarea>
            </div>

            <div className='flex justify-start gap-8 flex-col w-full'>
              <p className='label-text'>Hazardous Materials <span>*</span></p>
              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <input type="checkbox" className='peer peer-checked:border-Outlines' id='material' />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>
                <label htmlFor='material' className='checkbox-text'>Shipment contains alcohol</label>
              </div>

              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <input type="checkbox" className='peer peer-checked:border-Outlines' id='ch2' />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>
                <label htmlFor='ch2' className='checkbox-text'>Shipment contains dry ice</label>
              </div>

              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <input type="checkbox" className='peer peer-checked:border-Outlines' id='ch3' />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>
                <label htmlFor='ch3' className='checkbox-text'>Shipment contains lithium batteries (hazardous material)</label>
              </div>
            </div>



          </form>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default PackageTab
