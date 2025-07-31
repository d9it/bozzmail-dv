import { NavLink } from 'react-router';
import useDropdown from '../hook/useDropdown';
import { HiUpload } from "react-icons/hi";


const ApiPage = () => {

  const dropdown3 = useDropdown();
  const dropdown4 = useDropdown();
  const dropdown5 = useDropdown();
  const dropdown6 = useDropdown();
  const dropdown7 = useDropdown();
  const dropdown8 = useDropdown();

  return (
    <>

      {/* dashboard cards */}
      <div className='py-20 sm:py-30 pr-15 sm:pr-30 bg-white rounded-15px sm:rounded-20px'>

        <div className='flex gap-15 sm:gap-25 items-center justify-start'>
          <div className='w-5 h-40 bg-cta-secondary rounded-tr-10px rounded-br-10px'></div>
          <div className='flex gap-5 sm:gap-10'>
            <h1 className='font-semibold text-22px sm:text-25px text-main-text'>API Keys</h1>
          </div>
        </div>

        <p className='pr-15 sm:pl-30 text-17px font-medium text-secondary-text hidden sm:block'>Manage your API keys for integrating with BozzMail's shipping and mailing services.</p>

      </div>

      <div className='py-20 sm:py-30 px-15 sm:px-30 bg-white rounded-15px sm:rounded-20px'>
        <div className='flex justify-between items-center flex-wrap gap-10'>
          <div className='flex justify-start items-center gap-10 sm:gap-20 flex-wrap'>
            <p className='text-xl font-semibold text-main-text'>API Keys</p>

            {/* card */}
            <div className='py-5 px-7 rounded-7px border border-lime-border bg-lime flex gap-7 justify-start items-center flex-wrap'>
              <img src="/asset/icons/Starter.svg" alt="icon" className='h-29' />
              <div>
                <p className='text-11px font-medium text-cta-secondary'>Starter Plan</p>
                <p className='text-xs font-semibold text-main-text'>Access to the API restricted</p>
              </div>

              <button className='py-3 px-6 border border-Outlines focus:border-outlines-active active:border-outlines-active rounded-5px text-11px font-medium text-cta-secondary flex items-center gap-3 bg-white sm:ml-30 cursor-pointer'> 
                <HiUpload className='text-xs text-cta-secondary'/>
                Upgrade
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-10 h-fit">
            <NavLink to={"#"} className='flex justify-between gap-8 button-border'>
              <img src="asset/icons/doc.svg" alt="icon" className='h-18'/>
              <span className='sm:block hidden'> API Documentation</span>
              <img src="asset/icons/visit.svg" alt="icon" className='h-18'/>
            </NavLink>
            <NavLink to={"#"} className='flex justify-between gap-8 disable-button-icon'>
              <img src="asset/icons/white-plus.svg" alt="icon" className='h-17'/>
              <span className='sm:block hidden'> Generate New Key</span>
            </NavLink>
          </div>
        </div>
      </div>

    </>
  )
}

export default ApiPage
