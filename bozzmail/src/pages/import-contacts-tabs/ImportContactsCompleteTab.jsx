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
import ContactsImport from '../../components/ContactsImport';

const ImportContactsCompleteTab = () => {

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
              <p className='tab-main-heading'>Contacts Created Successfully!</p>
              <p className="text-sm font-medium text-main-text">Your Contacts has been created and is ready to use.</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-10 flex-wrap">
            <ContactsImport label="Import Contacts" labelClassName="block"/>
            <button className='flex items-center justify-between gap-8 button-border'>
              <GrDocumentZip className="text-base text-main-text" />
              <span> Download Contacts</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImportContactsCompleteTab
