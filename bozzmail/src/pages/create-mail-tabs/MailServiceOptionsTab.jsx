import { IoChevronBack, IoChevronDown, IoChevronForward, IoChevronUp } from "react-icons/io5";
import { NavLink } from 'react-router';
import useDropdown from '../../hook/useDropdown';
import { CiCalendar } from "react-icons/ci";

const MailServiceOptionsTab = () => {

  const dropdown1 = useDropdown();

  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-15 sm:gap-20 h-fit'>

        {/* Mail Service Options */}
        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>
          <p className='tab-main-heading'>Mail Service Options</p>

          {/* form */}
          <form action="" className='space-y-20'>

            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="mailing-class" className='label-text'>Mailing Class <span>*</span></label>
              <div ref={dropdown1.ref} className="relative">
                <div className='flex gap-8 justify-start items-start flex-col'>
                  <button onClick={dropdown1.toggle} id='mailing-class' type='button' className="tab-select group">
                      <p className='text-place-holder text-13px font-medium text-left'>First Class (7-10 business days)</p>
                    <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown1.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                </div>

                {/* Dropdown */}
                {dropdown1.isOpen && (
                  <div className="form-dropdown-menu">
                    <div className='w-full relative'>
                      <input type="search" name='search' placeholder='Search' className='table-small-search' />
                      <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                    </div>
                    <ul className='table-dropdown-item dropdown-scrollbar'>
                      <li className='table-dropdown-title'>First Class (7-10 business days)</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className='flex justify-start gap-8 flex-col w-full'>
              <p className='label-text'>Extra Service <span>*</span></p>
              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <input type="checkbox" className='peer peer-checked:border-Outlines' id='material' />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>
                <label htmlFor='material' className='checkbox-text'>Certified (+$3.85)</label>
              </div>

              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <input type="checkbox" className='peer peer-checked:border-Outlines' id='ch2' />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>
                <label htmlFor='ch2' className='checkbox-text'>Certified with return receipt (+$5.85)</label>
              </div>

              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <input type="checkbox" className='peer peer-checked:border-Outlines' id='ch3' />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>
                <label htmlFor='ch3' className='checkbox-text'>Registered  (+$2)</label>
              </div>
            </div>

            {/* dd/mm/yyyy set formate like this */}
            <div className="space-y-11">
              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="date" className='label-text'>Send Date <span>*</span></label>
                <div className="relative">
                  <input type="date" name="" id="date" required className='form-input' />
                  <div className="w-27 h-27 bg-number-input rounded-sm flex justify-center items-center absolute top-1/2 right-10 transform -translate-y-1/2 pointer-events-none">
                    <CiCalendar className="text-secondary-text text-base stroke-1"/>
                  </div>
                </div>
              </div>
              <p className="font-medium text-xs text-secondary-text">Leave blank to send immediately, or schedule for a future date</p>
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

export default MailServiceOptionsTab
