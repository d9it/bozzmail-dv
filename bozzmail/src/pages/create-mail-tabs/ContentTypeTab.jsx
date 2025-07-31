import { useEffect, useState } from 'react';
import { IoChevronBack, IoChevronDown, IoChevronForward, IoChevronUp } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import { NavLink } from 'react-router';
import useDropdown from '../../hook/useDropdown';
import { TfiExport } from "react-icons/tfi";

const ContentTypeTab = () => {

  const [selectedService, setSelectedService] = useState('');
  const [ContentType, setContentType] = useState('');
  const handleChange = (e) => {
        console.log('Selected option:', e.target.value);

    setContentType(e.target.value); // set state when radio changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContentType(e.target.value);
    console.log('Selected option:', ContentType);
  };

  return (
    <>

      {/* Choose Content Type */}
      <form onSubmit={handleSubmit}>
        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20  w-full'>
          <p className='tab-main-heading'>Choose Content Type</p>

          <p className='tab-heading'>Carrier</p>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-15'>

            {/* for active class bg-form-input border-outlines-active otherwise bg-white border-Outlines*/}
            <label className={`py-15 pr-30 pl-15 flex items-start gap-11 rounded-10px border  ${ContentType === 'type-letter' ? ' bg-form-input border-outlines-active' : 'bg-white border-Outlines'}`}>
              <input type="radio" name='email-type' value="type-letter" onChange={handleChange} />
              <div className='flex gap-11 items-start text-sm font-medium text-main-text'>
                <div className='w-35 h-35 flex justify-center items-center rounded-md bg-card-sky-blue flex-none'>
                  <img src="asset/icons/typed-letter.svg" alt="icon" className='flex-none h-19' />
                </div>
                <div className='space-y-4'>
                  <p className='text-main-text text-base font-semibold'>Typed Letter</p>
                  <p className='text-secondary-text font-medium text-xs'>Write your letter content directly in our editor. Perfect for personal and business mailing.</p>
                </div>
              </div>
            </label>

            <label className={`py-15 pr-30 pl-15 flex items-start gap-11 rounded-10px border ${ContentType === 'pdf' ? ' bg-form-input border-outlines-active' : 'bg-white border-Outlines'}`}>
              <input type="radio" name='email-type' value="pdf" onChange={handleChange} />
              <div className='flex gap-11 items-start text-sm font-medium text-main-text'>
                <div className='w-35 h-35 flex justify-center items-center rounded-md bg-card-sky-blue flex-none'>
                  <img src="asset/icons/green-upload.svg" alt="icon" className='flex-none h-21' />
                </div>
                <div className='space-y-4'>
                  <p className='text-main-text text-base font-semibold'>PDF Upload</p>
                  <p className='text-secondary-text font-medium text-xs'>Upload your own PDF document to be printed and mailed. Great for contracts and invoices.</p>
                </div>
              </div>
            </label>

            <label className={`py-15 pr-30 pl-15 flex items-start gap-11 rounded-10px border ${ContentType === 'postcard' ? ' bg-form-input border-outlines-active' : 'bg-white border-Outlines'}`}>
              <input type="radio" name='email-type' value="postcard" onChange={handleChange} />
              <div className='flex gap-11 items-start text-sm font-medium text-main-text'>
                <div className='w-35 h-35 flex justify-center items-center rounded-md bg-card-light-purple flex-none'>
                  <img src="asset/icons/purple-postcard.svg" alt="icon" className='flex-none h-21' />
                </div>
                <div className='space-y-4'>
                  <p className='text-main-text text-base font-semibold'>Postcard</p>
                  <p className='text-secondary-text font-medium text-xs'>Create a custom postcard with your image and message. Perfect for marketing campaigns.</p>
                </div>
              </div>
            </label>

          </div>

          <hr className='text-Outlines' />

          {/* buttons */}
          <div className='flex justify-end items-center flex-wrap'>
            <button type='submit' className='flex items-center justify-between gap-8 button-icon'>
              <span> Next</span>
              <IoChevronForward className="text-sm transition-transform duration-300 text-white" />
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ContentTypeTab
