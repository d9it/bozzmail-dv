import { useEffect, useState } from 'react';
import { IoChevronBack, IoChevronDown, IoChevronForward, IoChevronUp } from "react-icons/io5";
import { NavLink } from 'react-router';
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { BiDetail } from "react-icons/bi";

const ReviewTab = () => {

  return (
    <>

      {/* Review & Confirm */}
      <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 w-full'>
        <p className='tab-main-heading'>Review & Confirm</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-20'>

          {/* 1 */}
          <div className='rounded-10px bg-card-sky-blue overflow-hidden'>
            <div className='flex justify-between items-center py-14 px-25 [background:linear-gradient(90deg,_#E8FCFE_0%,_#C2E9EC_100%)]'>
              <p className='font-semibold text-sm text-main-text uppercase'>From</p>
              <GoArrowUpRight className='text-skyblue-icon stroke-1 -rotate-30' />
            </div>
            <div className='pt-20 px-25 pb-30 space-y-5 w-full'>
              <ul className='w-full text-main-text font-medium text-sm'>
                <li className='font-semibold'>John Smith</li>
                <li>Tech Solutions Inc.</li>
                <li>+1 (555) 555-0000</li>
                <li className='break-all'>warehouse@techsolutions.com</li>
                <li>United States</li>
                <li>123 Business St</li>
                <li>San Francisco</li>
                <li>California</li>
                <li>94105</li>
              </ul>
            </div>
          </div>

          {/* 2 */}
          <div className='rounded-10px bg-card-light-green overflow-hidden'>
            <div className='flex justify-between items-center py-14 px-25 [background:linear-gradient(90deg,_#E4F7EC_0%,_#CDEFDB_100%)]'>
              <p className='font-semibold text-sm text-main-text uppercase'>To</p>
              <GoArrowDownLeft className='text-lightgreen-icon stroke-1 -rotate-30' />
            </div>
            <div className='pt-20 px-25 pb-30 space-y-5 w-full'>
              <ul className='w-full text-main-text font-medium text-sm'>
                <li className='font-semibold'>Sarah Johnson</li>
                <li>-</li>
                <li>+1 (555) 987-6543</li>
                <li className='break-all'>sarah.j@email.com</li>
                <li>United States</li>
                <li>123 Business St</li>
                <li>Los Angeles</li>
                <li>California</li>
                <li>90210</li>
              </ul>
            </div>
          </div>

          {/* 3 */}
          <div className='rounded-10px bg-card-light-purple overflow-hidden'>
            <div className='flex justify-between items-center py-14 px-25 [background:linear-gradient(90deg,_#E9E0F6_0%,_#DFD1F3_100%)]'>
              <p className='font-semibold text-sm text-main-text uppercase'>Package Details</p>
              <BiDetail className='text-lightpurple-icon stroke-0 text-lg'/>
            </div>
            <div className='pt-20 px-25 pb-30 w-full'>
              <table className='w-full text-main-text font-medium text-sm table-auto'>
                <tbody>
                  <tr className='align-top'>
                    <td className='font-semibold pr-20'>Weight:</td>
                    <td>12 lbs</td>
                  </tr>
                  <tr className='align-top'>
                    <td className='font-semibold pr-20'>Dimensions:</td>
                    <td>12" × 12" × 12"</td>
                  </tr>
                  <tr className='align-top'>
                    <td className='font-semibold pr-20'>Value:</td>
                    <td>$12</td>
                  </tr>
                  <tr className='align-top'>
                    <td className='font-semibold pr-20'>Contents:</td>
                    <td>Description goes here</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 4 */}
          <div className='rounded-10px bg-card-light-blue overflow-hidden'>
            <div className='flex justify-between items-center py-14 px-25 [background:linear-gradient(90deg,_#EFFAFE_0%,_#E1EFF4_100%)]'>
              <p className='font-semibold text-sm text-main-text uppercase'>Shipping Service</p>
              <TbTruckDelivery className='text-info-text stroke-1 text-xl '/>
            </div>
            <div className='pt-20 px-25 pb-30 w-full flex justify-start items-start gap-7'>
              <img src="asset/table-image/type-1.svg" alt="image" className='h-25' />
              <div className='font-medium '>
                <p className='text-sm text-main-text'>USPS Priority Mail</p>
                <p className='pb-5 text-secondary-text text-xs'>1-3 business days</p>
                <p className='text-primary text-15px'>$8.45</p>
              </div>
            </div>
          </div>
        </div>

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

export default ReviewTab
