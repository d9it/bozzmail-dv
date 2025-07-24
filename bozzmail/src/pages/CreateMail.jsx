import useDropdown from '../hook/useDropdown';
import { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { TbFileExport } from "react-icons/tb";
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { NavLink } from 'react-router';
import ContentTypeTab from './create-mail-tabs/ContentTypeTab';
import MailAddressTab from './create-mail-tabs/MailAddressTab';
import ContentCreationTab from './create-mail-tabs/ContentCreationTab';
import MailServiceOptionsTab from './create-mail-tabs/MailServiceOptionsTab';
import MailReviewTab from './create-mail-tabs/MailReviewTab';
import MailPaymentTab from './create-mail-tabs/MailPaymentTab';
import MailCompleteTab from './create-mail-tabs/MailCompleteTab';

const CreateMail = () => {

  const [activeTab, setActiveTab] = useState("content-type");

  return (
    <>
      {/*Create Mail*/}
      <div className='py-20 sm:py-30 px-15 sm:px-30 bg-white rounded-15px sm:rounded-20px'>

        <div className='flex justify-between items-center flex-wrap gap-10 w-full'>
          <NavLink to={"/print-mail"} className='flex items-center justify-start gap-10'>
            <IoChevronBack className='text-xl text-main-text' />
            <h2 className='font-semibold text-17px sm:text-xl text-main-text'>Create Mail</h2>
          </NavLink>

          <div className="flex justify-end  gap-10 sm:gap-25 flex-wrap">
            <NavLink to={"#"} className='flex items-center justify-between gap-8 button-border'>
              <img src="asset/icons/save.svg" alt="icon" />
              <span className='sm:block hidden'> Save Draft</span>
            </NavLink>

            <div className='flex items-center justify-end gap-5 sm:gap-10'>
              <NavLink to={"#"} className='flex items-center justify-between gap-8 button-border'>
                <IoChevronBack className='text-15px text-main-text' />
                <span className='sm:block hidden'> Previous</span>
              </NavLink>

              <NavLink to={"#"} className='flex items-center justify-between gap-8 button-icon'>
                <span className='sm:block hidden'> Next</span>
                <IoChevronForward className='text-15px text-white' />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* tab section */}
      <div className='py-20 sm:py-30 px-10 sm:px-30 bg-white rounded-15px sm:rounded-20px overflow-hidden'>

        {/* tab */}
        <div className='flex justify-between items-center gap-2 sm:gap-10'>

          {/* uncomment this button to show a finish state design */}
          {/* <button className='tab-btn' onClick={() => setActiveTab("content-type")}>
            <div className="tab-digit complete-tab"><FaCheck className='text-xs text-primary'/></div>
            <p className="tab-text text-main-text">Content Type</p>
          </button> */}

          <button className='tab-btn' onClick={() => setActiveTab("content-type")}>
            <div className={`tab-digit ${activeTab === "content-type" ? "tab-digit-active" : "tab-digit-inactive"}`}>1</div>
            <p className={`tab-text ${activeTab === "content-type" ? "text-sidebar-menu" : "text-secondary-text"}`}>Content Type</p>
          </button>

          <div className='tab-line'></div>

          <button className='tab-btn' onClick={() => setActiveTab("addresses")}>
            <div className={`tab-digit ${activeTab === "addresses" ? "tab-digit-active" : "tab-digit-inactive"}`}>2</div>
            <p className={`tab-text ${activeTab === "addresses" ? "text-sidebar-menu" : "text-secondary-text"}`}>Addresses</p>
          </button>

          <div className='tab-line'></div>

          <button className='tab-btn' onClick={() => setActiveTab("content-creation")}>
            <div className={`tab-digit ${activeTab === "content-creation" ? "tab-digit-active" : "tab-digit-inactive"}`}>3</div>
            <p className={`tab-text ${activeTab === "content-creation" ? "text-sidebar-menu" : "text-secondary-text"}`}>Content Creation</p>
          </button>

          <div className='tab-line'></div>

          <button className='tab-btn' onClick={() => setActiveTab("mail-service-option")}>
            <div className={`tab-digit ${activeTab === "mail-service-option" ? "tab-digit-active" : "tab-digit-inactive"}`}>4</div>
            <p className={`tab-text ${activeTab === "mail-service-option" ? "text-sidebar-menu" : "text-secondary-text"}`}>Mail Service Options</p>
          </button>

          <div className='tab-line'></div>

          <button className='tab-btn' onClick={() => setActiveTab("review")}>
            <div className={`tab-digit ${activeTab === "review" ? "tab-digit-active" : "tab-digit-inactive"}`}>5</div>
            <p className={`tab-text ${activeTab === "review" ? "text-sidebar-menu" : "text-secondary-text"}`}>Review</p>
          </button>

          <div className='tab-line'></div>

          <button className='tab-btn' onClick={() => setActiveTab("payment")}>
            <div className={`tab-digit ${activeTab === "payment" ? "tab-digit-active" : "tab-digit-inactive"}`}>6</div>
            <p className={`tab-text ${activeTab === "payment" ? "text-sidebar-menu" : "text-secondary-text"}`}>Payment</p>
          </button>

          <div className='tab-line'></div>

          <button className='tab-btn' onClick={() => setActiveTab("complete")}>
            <div className={`tab-digit ${activeTab === "complete" ? "tab-digit-active" : "tab-digit-inactive"}`}>7</div>
            <p className={`tab-text ${activeTab === "complete" ? "text-sidebar-menu" : "text-secondary-text"}`}>Complete</p>
          </button>
        </div>
      </div>

      {/* tab content */}

      {activeTab === "content-type" && <ContentTypeTab />}
      {activeTab === "addresses" && <MailAddressTab />}
      {activeTab === "content-creation" && <ContentCreationTab />}
      {activeTab === "mail-service-option" && <MailServiceOptionsTab />}
      {activeTab === "review" && <MailReviewTab />}
      {activeTab === "payment" && <MailPaymentTab />}
      {activeTab === "complete" && <MailCompleteTab />}


    </>
  )
}

export default CreateMail
