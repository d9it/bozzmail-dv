import { useEffect, useState } from 'react';
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { NavLink } from 'react-router';
import ImportPdfReviewTab from './import-pdf-tabs/ImportPdfReviewTab';
import ImportPdfPaymentTab from './import-pdf-tabs/ImportPdfPaymentTab';
import ImportPdfCompleteTab from './import-pdf-tabs/ImportPdfCompleteTab';
import { GoPlus } from "react-icons/go";
import { GrDocumentPdf } from "react-icons/gr";


const ImportPdfPage = () => {

  const [activeTab, setActiveTab] = useState("review");

  return (
    <>
      {/*Import pdf*/}
      <div className='py-20 sm:py-30 px-15 sm:px-30 bg-white rounded-15px sm:rounded-20px'>

        <div className='flex justify-between items-center flex-wrap gap-10 w-full'>
          <NavLink to={"/print-mail"} className='flex items-center justify-start gap-10'>
            <IoChevronBack className='text-xl text-main-text' />
            <h2 className='font-semibold text-17px sm:text-xl text-main-text'>Import PDFs</h2>
          </NavLink>

          <div className="flex justify-end  gap-10 sm:gap-25 flex-wrap">
            {activeTab !== "complete" && (
              <NavLink to={"#"} className='flex items-center justify-between gap-8 button-border'>
                <img src="asset/icons/save.svg" alt="icon" />
                <span className='sm:block hidden'> Save Draft</span>
              </NavLink>
            )}

            <div className='flex items-center justify-end gap-5 sm:gap-10'>

              {activeTab === "complete" && (
                <NavLink to={"/create-mail"} className='flex items-center justify-between gap-8 button-border'>
                  <GoPlus className='text-main-text text-base stroke-1' />
                  <span className='sm:block hidden'> Create New Mail</span>
                </NavLink>
              )}

              {activeTab !== "complete" && (
                <>
                  <NavLink to={"#"} className='flex items-center justify-between gap-8 button-border'>
                    <IoChevronBack className='text-15px text-main-text' />
                    <span className='sm:block hidden'> Previous</span>
                  </NavLink>

                  <NavLink to={"#"} className='flex items-center justify-between gap-8 button-icon'>
                    <span className='sm:block hidden'> Next</span>
                    <IoChevronForward className='text-15px text-white' />
                  </NavLink>
                </>
              )}

              {/* disable btn */}
              {/* <NavLink to={"/"} className='flex items-center justify-between gap-8 disable-button-icon'>
                <span className='sm:block hidden'> Next</span>
                <IoChevronForward className='text-15px text-white' />
              </NavLink> */}
            </div>
          </div>
        </div>
      </div>

      {/* tab section */}
      <div className='py-20 sm:py-30 px-10 sm:px-30 bg-white rounded-15px sm:rounded-20px overflow-hidden'>

        {/* tab */}
        <div className='flex justify-between items-center gap-2 sm:gap-10'>

          <button className='tab-btn' onClick={() => setActiveTab("import")}>
            <div className="tab-digit complete-tab"><FaCheck className='text-xs text-primary' /></div>
            <p className="tab-text text-main-text">Import</p>
          </button>

          <div className='tab-line'></div>

          <button className='tab-btn' onClick={() => setActiveTab("review")}>
            <div className={`tab-digit ${activeTab === "review" ? "tab-digit-active" : "tab-digit-inactive"}`}>2</div>
            <p className={`tab-text ${activeTab === "review" ? "text-sidebar-menu" : "text-secondary-text"}`}>Review</p>
          </button>

          <div className='tab-line'></div>

          <button className='tab-btn' onClick={() => setActiveTab("payment")}>
            <div className={`tab-digit ${activeTab === "payment" ? "tab-digit-active" : "tab-digit-inactive"}`}>3</div>
            <p className={`tab-text ${activeTab === "payment" ? "text-sidebar-menu" : "text-secondary-text"}`}>Payment</p>
          </button>

          <div className='tab-line'></div>

          <button className='tab-btn' onClick={() => setActiveTab("complete")}>
            <div className={`tab-digit ${activeTab === "complete" ? "tab-digit-active" : "tab-digit-inactive"}`}>4</div>
            <p className={`tab-text ${activeTab === "complete" ? "text-sidebar-menu" : "text-secondary-text"}`}>Complete</p>
          </button>
        </div>
      </div>

      {/* tab content */}
      {activeTab === "review" && <ImportPdfReviewTab />}
      {activeTab === "payment" && <ImportPdfPaymentTab />}
      {activeTab === "complete" && <ImportPdfCompleteTab />}


    </>
  )
}

export default ImportPdfPage
