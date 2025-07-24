import useDropdown from '../hook/useDropdown';
import { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { TbFileExport } from "react-icons/tb";
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { NavLink } from 'react-router';
import AddressTab from './shipping-label-tabs/AddressTab';
import PackageTab from './shipping-label-tabs/PackageTab';
import CarrierServiceTab from './shipping-label-tabs/CarrierServiceTab';
import ReviewTab from './shipping-label-tabs/ReviewTab';
import PaymentTab from './shipping-label-tabs/PaymentTab';
import CompleteTab from './shipping-label-tabs/CompleteTab';
import CustomTab from './shipping-label-tabs/CustomTab';

const CreateLabelPage = () => {

  const [activeTab, setActiveTab] = useState("addresses");

  return (
    <>
      {/*Create Label*/}
      <div className='py-20 sm:py-30 px-15 sm:px-30 bg-white rounded-15px sm:rounded-20px'>

        <div className='flex justify-between items-center flex-wrap gap-10 w-full'>
          <NavLink to={"/shipping-labels"} className='flex items-center justify-start gap-10'>
            <IoChevronBack className='text-xl text-main-text' />
            <h2 className='font-semibold text-17px sm:text-xl text-main-text'>Create Label</h2>
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
          {/* <button className='tab-btn' onClick={() => setActiveTab("addresses")}>
            <div className="tab-digit complete-tab"><FaCheck className='text-xs text-primary'/></div>
            <p className="tab-text text-main-text">Addresses</p>
          </button> */}

          <button className='tab-btn' onClick={() => setActiveTab("addresses")}>
            <div className={`tab-digit ${activeTab === "addresses" ? "tab-digit-active" : "tab-digit-inactive"}`}>1</div>
            <p className={`tab-text ${activeTab === "addresses" ? "text-sidebar-menu" : "text-secondary-text"}`}>Addresses</p>
          </button>

          <div className='tab-line'></div>

          <button className='tab-btn' onClick={() => setActiveTab("package")}>
            <div className={`tab-digit ${activeTab === "package" ? "tab-digit-active" : "tab-digit-inactive"}`}>2</div>
            <p className={`tab-text ${activeTab === "package" ? "text-sidebar-menu" : "text-secondary-text"}`}>Package</p>
          </button>

          <div className='tab-line'></div>

          {/* this tab will be display on international shipment */}
          <button className='tab-btn' onClick={() => setActiveTab("custom")}>
            <div className={`tab-digit ${activeTab === "custom" ? "tab-digit-active" : "tab-digit-inactive"}`}>3</div>
            <p className={`tab-text ${activeTab === "custom" ? "text-sidebar-menu" : "text-secondary-text"}`}>Customs</p>
          </button>
          <div className='tab-line'></div>

          <button className='tab-btn' onClick={() => setActiveTab("carrier-service")}>
            <div className={`tab-digit ${activeTab === "carrier-service" ? "tab-digit-active" : "tab-digit-inactive"}`}>4</div>
            <p className={`tab-text ${activeTab === "carrier-service" ? "text-sidebar-menu" : "text-secondary-text"}`}>Carrier & Service</p>
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

      {activeTab === "addresses" && <AddressTab />}
      {activeTab === "package" && <PackageTab />}
      {activeTab === "custom" && <CustomTab />}
      {activeTab === "carrier-service" && <CarrierServiceTab />}
      {activeTab === "review" && <ReviewTab />}
      {activeTab === "payment" && <PaymentTab />}
      {activeTab === "complete" && <CompleteTab />}


    </>
  )
}

export default CreateLabelPage
