import { useEffect, useState } from 'react';
import { IoChevronBack, IoChevronDown, IoChevronForward, IoChevronUp } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import { NavLink } from 'react-router';
import useDropdown from '../../hook/useDropdown';

const CarrierServiceTab = () => {

  const [selectedService, setSelectedService] = useState('');

  return (
    <>

      {/* Choose Carrier & Service */}
      <div className='bg-white rounded-15px lg:rounded-20px py-20 px-15 lg:p-30 space-y-10 lg:space-y-20 xl:w-1/2 w-full'>
        <p className='text-xl font-semibold text-main-text'>Choose Carrier & Service</p>

        <p className='text-sm text-main-text font-semibold uppercase'>Carrier</p>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-15'>

          <label className={`py-9 pr-30 pl-15 flex items-center justify-start gap-16 rounded-lg cursor-pointer ${selectedService === 'usps' ? 'border border-secondary-text bg-form-input' : 'border border-Outlines bg-white'}`}>
            <input type="radio" name='carrier' value="usps" onChange={(e) => setSelectedService(e.target.value)} />
            <div className='flex gap-11 items-center text-sm font-medium text-main-text'>
              <img src="asset/table-image/type-1.svg" alt="icon" />
              <span>USPS</span>
            </div>
          </label>

          <label className={`py-9 pr-30 pl-15 flex items-center justify-start gap-16 rounded-lg cursor-pointer ${selectedService === 'ups' ? 'border border-secondary-text bg-form-input' : 'border border-Outlines bg-white'}`}>
            <input type="radio" name='carrier' value="ups" onChange={(e) => setSelectedService(e.target.value)} />
            <div className='flex gap-11 items-center text-sm font-medium text-main-text'>
              <img src="asset/table-image/ups.svg" alt="icon" />
              <span>UPS</span>
            </div>
          </label>

          <label className={`py-9 pr-30 pl-15 flex items-center justify-start gap-16 rounded-lg cursor-pointer ${selectedService === 'dhl' ? 'border border-secondary-text bg-form-input' : 'border border-Outlines bg-white'}`}>
            <input type="radio" name='carrier' value="dhl" onChange={(e) => setSelectedService(e.target.value)} />
            <div className='flex gap-11 items-center text-sm font-medium text-main-text'>
              <img src="asset/table-image/dhl.svg" alt="icon" />
              <span>DHL</span>
            </div>
          </label>
        </div>

        {selectedService && (
          <>
            <hr className='text-Outlines' />

            <p className='text-sm text-main-text font-semibold uppercase'>Service</p>

            <div className='flex flex-col justify-start gap-10'>

              {/* for selected option design */}
              <label className='py-9 pr-30 pl-15 flex items-center justify-start gap-16 rounded-lg border border-secondary-text cursor-pointer focus:border-secondary-text active:border-secondary-text bg-form-input'>
                <input type="radio" name='service' checked />
                <div className='flex justify-between items-center w-full gap-7'>

                  <div className='flex justify-start items-start sm:items-center sm:flex-row flex-col gap-5 w-full'>
                    <div className='w-full sm:w-1/2'>
                      <p className='text-main-text text-sm font-medium'>First-Class Mail</p>
                      <p className='text-xs font-medium text-secondary-text'>Standard delivery</p>
                    </div>

                    <div className='text-secondary-text font-medium text-xs flex items-center justify-start gap-5'>
                      <FiClock />
                      <p>3-5 business days</p>
                    </div>
                  </div>

                  <p className='text-sm font-semibold text-primary'>$3.95</p>

                </div>
              </label>

              <label className='py-9 pr-30 pl-15 flex items-center justify-start gap-16 rounded-lg border border-Outlines cursor-pointer focus:border-secondary-text active:border-secondary-text bg-white'>
                <input type="radio" name='service' />
                <div className='flex justify-between items-center w-full gap-7'>

                  <div className='flex justify-start items-start sm:items-center sm:flex-row flex-col gap-5 w-full'>
                    <div className='w-full sm:w-1/2'>
                      <p className='text-main-text text-sm font-medium'>Priority Mail</p>
                      <p className='text-xs font-medium text-secondary-text'>Fast delivery with tracking</p>
                    </div>

                    <div className='text-secondary-text font-medium text-xs flex items-center justify-start gap-5'>
                      <FiClock />
                      <p>1-3 business days</p>
                    </div>
                  </div>

                  <p className='text-sm font-semibold text-primary'>$8.45</p>

                </div>
              </label>

              <label className='py-9 pr-30 pl-15 flex items-center justify-start gap-16 rounded-lg border border-Outlines cursor-pointer focus:border-secondary-text active:border-secondary-text bg-white'>
                <input type="radio" name='service' />
                <div className='flex justify-between items-center w-full gap-7'>

                  <div className='flex justify-start items-start sm:items-center sm:flex-row flex-col gap-5 w-full'>
                    <div className='w-full sm:w-1/2'>
                      <p className='text-main-text text-sm font-medium'>Priority Mail Express</p>
                      <p className='text-xs font-medium text-secondary-text'>Overnight delivery</p>
                    </div>

                    <div className='text-secondary-text font-medium text-xs flex items-center justify-start gap-5'>
                      <FiClock />
                      <p>1-2 business days</p>
                    </div>
                  </div>

                  <p className='text-sm font-semibold text-primary'>$28.95</p>

                </div>
              </label>
            </div>
          </>
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
        </div>
      </div>
    </>
  )
}

export default CarrierServiceTab
