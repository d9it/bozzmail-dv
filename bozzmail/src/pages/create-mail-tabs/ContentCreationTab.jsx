import { IoChevronBack, IoChevronDown, IoChevronForward, IoChevronUp } from "react-icons/io5";
import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import { PiWarningCircle } from "react-icons/pi";
import useDropdown from '../../hook/useDropdown';
import { TbTemplate } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { PiExportBold } from "react-icons/pi";
import { GrDocumentCsv } from "react-icons/gr";
import CreateTemplate from "../../components/CreateTemplate";
import { GrDocumentPdf } from "react-icons/gr";
import { BsFiletypeJpg } from "react-icons/bs";

const ContentCreationTab = () => {

  const [checked, setChecked] = useState(false);

  const dropdown1 = useDropdown();
  const dropdown2 = useDropdown();
  const dropdown3 = useDropdown();
  const dropdown4 = useDropdown();

   // for track is model open or not
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-15 sm:gap-20 h-fit'>

        {/* Create Your Content */}
        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>
          <p className='tab-main-heading'>Create Your Content</p>

          {/* form */}
          <form action="" className='space-y-20'>

            {/* note for developer: check figma file for hide and show content accordingly */}
            {/* for pdf */}
            {/* import file */}
            <div className='flex justify-start gap-8 flex-col w-full relative'>
              <label htmlFor="file" className='label-text'>Upload a File<span>*</span></label>

              <label htmlFor="file" className="w-full border border-Outlines border-dashed rounded-lg py-48 sm:px-120 px-40 cursor-pointer flex flex-col gap-12 items-center justify-center text-center">
                <input type="file" name="" id="file" className="hidden" />
                <div className="flex gap-15 items-center justify-center flex-col">
                  <PiExportBold className='text-secondary-text text-2xl stroke-0 flex-none' />
                  <div className="small-button-border focus:!border-outlines-active flex gap-5 items-center">
                    <img src="/asset/icons/black-pdf.svg" alt="icon" className="h-13 flex-none" />
                    <p>Choose a PDF File</p>
                  </div>
                </div>
                <p className="font-medium text-secondary-text text-13px">PDF files only, up to 20 pages, max 10MB</p>
              </label>
            </div>
            {/* uploaded file name and action btn */}
            <div className="border border-upload-green-border bg-upload-green p-20 rounded-lg flex justify-between items-center flex-wrap gap-8">
              <div className="flex gap-11 items-center justify-start">
                <div className="p-8 rounded-md bg-card-light-green flex-none">
                  <img src="/asset/icons/green-pdf.svg" alt="icon" className="h-18 flex-none" />
                </div>
                <div className="font-medium">
                  <p className="text-sm text-main-text">Demonstracao Liquidacao_309810698.pdf</p>
                  <p className="text-secondary-text text-xs">5 pages</p>
                </div>
              </div>
              <div className='flex gap-10 justify-end items-center'>
                {/* eye */}
                <div className="relative group">
                  <div className="action-btn">
                    <img src="/asset/icons/eye.svg" alt="icon" className="h-15" />
                  </div>
                  <span className="action-tooltip">
                    <span className='tooltip-label'>
                      View Pdf
                    </span>
                    <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                  </span>
                </div>

                {/* delete */}
                <div className="relative group">
                  <div className="action-btn">
                    <img src="/asset/icons/red-delete.svg" alt="icon" className="h-19" />
                  </div>
                  <span className="action-tooltip">
                    <span className='tooltip-label'>
                      delete
                    </span>
                    <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                  </span>
                </div>
              </div>
            </div>

            {/* for postcard */}
            {/* import file */}
            <div className='flex justify-start gap-8 flex-col w-full relative'>
              <label htmlFor="file" className='label-text'>Upload a File<span>*</span></label>

              <label htmlFor="file" className="w-full border border-Outlines border-dashed rounded-lg py-48 sm:px-120 px-40 cursor-pointer flex flex-col gap-12 items-center justify-center text-center">
                <input type="file" name="" id="file" className="hidden" />
                <div className="flex gap-15 items-center justify-center flex-col">
                  <PiExportBold className='text-secondary-text text-2xl stroke-0 flex-none' />
                  <div className="small-button-border focus:!border-outlines-active flex gap-5 items-center">
                    <img src="/asset/icons/black-jpg.svg" alt="icon" className="h-13 flex-none" />
                    <p>Choose a File</p>
                  </div>
                </div>
                <p className="font-medium text-secondary-text text-13px">JPG, PNG, or GIF • Recommended: 1050×675px max 10MB</p>
              </label>
            </div>
            {/* uploaded file name and action btn */}
            <div className="border border-upload-purple-border bg-upload-purple p-20 rounded-lg flex justify-between items-center flex-wrap gap-8">
              <div className="flex gap-11 items-center justify-start">
                <div className="p-8 rounded-md bg-card-light-purple flex-none">
                  <img src="/asset/icons/purple-jpg.svg" alt="icon" className="h-18 flex-none" />

                  {/* for png and gif */}
                  {/* <img src="/asset/icons/purple-png.svg" alt="icon" className="h-18 flex-none" />
                  <img src="/asset/icons/purple-gif.svg" alt="icon" className="h-18 flex-none" /> */}
                  
                </div>
                <div className="font-medium">
                  <p className="text-sm text-main-text">Postcard 12225.jpg</p>
                  <p className="text-secondary-text text-xs">5 pages</p>
                </div>
              </div>
              <div className='flex gap-10 justify-end items-center'>
                {/* eye */}
                <div className="relative group">
                  <div className="action-btn">
                    <img src="/asset/icons/eye.svg" alt="icon" className="h-15" />
                  </div>
                  <span className="action-tooltip">
                    <span className='tooltip-label'>
                      View Image
                    </span>
                    <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                  </span>
                </div>

                {/* delete */}
                <div className="relative group">
                  <div className="action-btn">
                    <img src="/asset/icons/red-delete.svg" alt="icon" className="h-19" />
                  </div>
                  <span className="action-tooltip">
                    <span className='tooltip-label'>
                      delete
                    </span>
                    <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                  </span>
                </div>
              </div>
            </div>

            <div className='flex justify-start gap-8 flex-col w-full input-inside-model'>
              <label htmlFor="ltemplate" className='label-text'>Letter Template <span>*</span></label>
              <div ref={dropdown1.ref} className="relative">
                <div className='flex gap-8 justify-start items-start flex-col'>
                  <button onClick={dropdown1.toggle} ref={dropdown1.triggerRef} id='ltemplate' type='button' className="tab-select group">
                    <div className="flex gap-8">
                      <TbTemplate className="text-main-text text-lg" />
                      <p className='text-place-holder text-13px font-medium'>Hello Letter</p>
                    </div>
                    <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown1.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                </div>

                {/* Dropdown */}
                {dropdown1.isOpen && (
                  <div className={`form-dropdown-menu ${isModalOpen ? 'high-index' : ''}`}>
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
                    <CreateTemplate onOpenChange={setIsModalOpen}/>
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
                  <button onClick={dropdown2.toggle} ref={dropdown2.triggerRef} id='psize' type='button' className="tab-select group">
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
                  <button onClick={dropdown3.toggle} ref={dropdown3.triggerRef} id='envelope' type='button' className="tab-select group">
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
                  <button onClick={dropdown4.toggle} ref={dropdown4.triggerRef} id='renvelope' type='button' className="tab-select group">
                    <p className='text-place-holder text-13px font-medium'>Standard</p>
                    <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown4.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                </div>

                {/* Dropdown */}
                {dropdown4.isOpen && (
                  <div className="form-dropdown-only-upward-side">
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
