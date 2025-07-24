import { IoChevronBack, IoChevronDown, IoChevronForward, IoChevronUp } from "react-icons/io5";
import { CgEye } from "react-icons/cg";
import { FaCheck } from "react-icons/fa6";
import { NavLink } from 'react-router';
import { LuCopy } from "react-icons/lu";

const MailCompleteTab = () => {

  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-15 sm:gap-20 h-fit'>

        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>

          <div className="flex items-center justify-center gap-20 flex-col text-center">
            <div className="w-60 h-60 rounded-full bg-success-badge flex items-center justify-center">
              <FaCheck className="text-3xl text-success-text" />
            </div>
            <div className="space-y-4">
              <p className='tab-main-heading'>Mail Created Successfully!</p>
              <p className="text-sm font-medium text-main-text">Your mail has been processed and will be sent today.</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-10 flex-wrap">
            <NavLink to={"/print-mail"} className='flex items-center justify-between gap-8 button-icon'>
              <CgEye className="text-17px text-white flex-none" />
              <span> View Preview</span>
            </NavLink>
            <NavLink to={"#"} className='flex items-center justify-between gap-8 button-border'>
              <img src="asset/icons/download.svg" alt="icon" />
              <span> Download Label</span>
            </NavLink>
          </div>

          <hr className='text-Outlines' />

          <div className="text-center flex justify-center items-center flex-col gap-10">
            <p className="text-sm font-medium text-main-text-shaded">Tracking Number</p>
            <div className="border border-Outlines bg-form-input py-7 pr-7 pl-15 rounded-lg w-fit flex justify-center items-center gap-10 flex-wrap">
              <p className="text-base font-medium text-secondary-text">BZ123456789US</p>

              <div className='flex gap-5 justify-start items-center'>
                {/* copy */}
                <div className="relative group">
                  <div className="small-button-border">
                    <LuCopy className="text-base text-cta-secondary" />
                    <span>Copy</span>
                  </div>
                  <span className="action-tooltip">
                    <span className='tooltip-label'>
                      Copy
                    </span>
                    <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                  </span>
                </div>

                {/* tracking */}
                <div className="relative group">
                  <div className="small-button-border">
                    <img src="/asset/icons/tracking.svg" alt="icon" className="h-20" />
                    <span>Track</span>
                  </div>
                  <span className="action-tooltip">
                    <span className='tooltip-label'>
                      Track
                    </span>
                    <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MailCompleteTab
