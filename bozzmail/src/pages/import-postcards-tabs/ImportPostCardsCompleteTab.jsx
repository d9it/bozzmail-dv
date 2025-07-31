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
import useDropdown from '../../hook/useDropdown';
import TypedLettersBulkImport from '../../components/Mail/TypedLettersBulkImport';
import PdfBulkImport from '../../components/Mail/PdfBulkImport';
import PostCardsBulkImport from '../../components/Mail/PostCardsBulkImport';

const ImportPostCardsCompleteTab = () => {

  const dropdown1 = useDropdown();
  // for track is model open or not
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-15 sm:gap-20 h-fit'>
        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>

          <div className="flex items-center justify-center gap-20 flex-col text-center">
            <div className="w-60 h-60 rounded-full bg-success-badge flex items-center justify-center">
              <FaCheck className="text-3xl text-success-text" />
            </div>
            <div className="space-y-4">
              <p className='tab-main-heading'>Postcards Imported Successfully!</p>
              <p className="text-sm font-medium text-main-text">Your mail has been processed and will be sent today.</p>
            </div>
          </div>

          <div className="flex items-center justify-center form-last-dropdown input-inside-model">
            <div ref={dropdown1.ref} className="relative">
              <div className='flex gap-8 justify-start items-start flex-col'>
                <button className='flex items-center justify-between gap-8 button-border' onClick={dropdown1.toggle} ref={dropdown1.triggerRef}>
                  <TbFileImport className="text-lg text-main-text" />
                  <span>Import Mail</span>
                  <IoChevronDown className={`text-base transition-transform duration-300 text-main-text ${dropdown1.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
              </div>

              {/* Dropdown */}
              {dropdown1.isOpen && (
                <div className={`form-dropdown-only-upward-side ${isModalOpen ? 'high-index' : ''}`}>

                  {/* set a condition like when pop up open !cursor-auto class add otherwise not  */}
                  <div className='table-dropdown-item dropdown-scrollbar !cursor-auto'>
                    <TypedLettersBulkImport onOpenChange={setIsModalOpen}/>
                    <PdfBulkImport onOpenChange={setIsModalOpen}/>
                    <PostCardsBulkImport onOpenChange={setIsModalOpen}/>
                  </div>
                </div>
              )}
            </div>
          </div>
    

        </div>
      </div>
    </>
  )
}

export default ImportPostCardsCompleteTab
