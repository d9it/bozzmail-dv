import { useEffect, useState } from 'react';
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";
import { NavLink } from 'react-router';
import useDropdown from '../../hook/useDropdown';
import { PiWarningCircle } from "react-icons/pi";
import { useShipping } from '../../hook/useShipping';

const AddressTab = () => {
  const dropdown1 = useDropdown();
  const dropdown2 = useDropdown();
  const dropdown3 = useDropdown();
  const dropdown4 = useDropdown();
  const dropdown5 = useDropdown();

  const { addresses, loading, error, loadAddresses } = useShipping();
  const [selectedSender, setSelectedSender] = useState(null);
  const [selectedRecipient, setSelectedRecipient] = useState(null);


  const dropdown6 = useDropdown();
  const dropdown7 = useDropdown();
  const dropdown8 = useDropdown();
  const dropdown9 = useDropdown();
  const dropdown10 = useDropdown();

  useEffect(() => {
    loadAddresses();
  }, [loadAddresses]);

  const handleSenderSelect = (address) => {
    setSelectedSender(address);
    dropdown1.toggle();
  };

  const handleRecipientSelect = (address) => {
    setSelectedRecipient(address);
    dropdown2.toggle();
  };

  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-15 sm:gap-20 h-fit'>

        {/* Sender Information */}
        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>
          <p className='tab-main-heading'>Sender Information</p>

          {/* form */}
          <form action="" className='space-y-20'>

            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="contact" className='label-text'>Select from saved contacts <span>*</span></label>
              <div ref={dropdown1.ref} className="relative">
                <div className='flex gap-8 justify-start items-start flex-col'>
                  <button onClick={dropdown1.toggle} id='contact' type='button' className="tab-select group !py-4">
                    <div className='flex items-center justify-start gap-13'>
                      <img src="/asset/icons/building.svg" alt="icon" />
                      <div className='text-left'>

                        {/* 
                          Note for Developer:
                          For every dropdown — when a value is selected, the <p> tag text color should change to 'text-main-text' 
                          instead of 'text-secondary-text or text-place-holder' (which is used for the placeholder).

                          For every dropdown <IoChevronDown> tag in this arrow color is 'text-arrow' color and it should change to 'text-main-text' color when value is selected.
                          
                          In short:
                          - Placeholder text uses 'text-secondary-text' or 'text-place-holder' color
                          - Selected value should use 'text-main-text' color
                          - selected value for arrow icon color should be 'text-main-text'

                          Make sure to apply this rule consistently for all dropdowns wherever they appear.
                        */}

                        <p className={`text-sm font-medium ${selectedSender ? 'text-main-text' : 'text-place-holder'}`}>
                          {selectedSender ? selectedSender.name : 'Select sender'}
                        </p>
                        <p className='text-secondary-text text-xs font-medium'>
                          {selectedSender ? selectedSender.company || '-' : 'Company (optional)'}
                        </p>
                      </div>
                    </div>
                    <IoChevronDown className={`text-base transition-transform duration-300 ${selectedSender ? 'text-main-text' : 'text-arrow'} ${dropdown1.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                </div>

                {/* Dropdown */}
                {dropdown1.isOpen && (
                  <div className="form-dropdown-menu">
                    <div className='w-full relative'>
                      <input type="search" name='search' placeholder='Search' className='table-small-search' />
                      <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                    </div>
                    <ul className='table-dropdown-item dropdown-scrollbar w-full'>
                      {loading ? (
                        <li className='table-dropdown-title'>
                          <div className='flex justify-center items-center w-full py-10'>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                            <span className="ml-10 text-secondary-text">Loading addresses...</span>
                          </div>
                        </li>
                      ) : addresses.length === 0 ? (
                        <li className='table-dropdown-title'>
                          <div className='flex justify-center items-center w-full py-10'>
                            <span className="text-secondary-text">No addresses found</span>
                          </div>
                        </li>
                      ) : (
                        addresses.map((address, index) => (
                          <li 
                            key={address._id || index} 
                            className='table-dropdown-title cursor-pointer hover:bg-gray-50'
                            onClick={() => handleSenderSelect(address)}
                          >
                            <div className='flex justify-start items-center w-full'>
                              <div className='flex justify-start items-center gap-9 w-1/2'>
                                {address.company ? (
                                  <img src="/asset/icons/building.svg" alt="icon" />
                                ) : (
                                  <RiUserLine className='text-secondary-text text-sm' />
                                )}
                                {address.name}
                              </div>
                              <p className='text-secondary-text w-1/2'>{address.company || '-'}</p>
                            </div>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* general */}
            <p className='tab-heading'>General</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="name" className='label-text'>Full Name <span>*</span></label>
                <input type="text" name="" id="name" required placeholder='John Smith' className='form-input' />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="company" className='label-text'>Company <span>*</span></label>
                <input type="text" name="" id="company" required placeholder='Tech Solutions Inc.' className='form-input' />
              </div>
            </div>

            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="title" className='label-text'>Job Title <span>*</span></label>
              <input type="text" name="" id="title" required placeholder='Not specified' className='form-input' />
            </div>
            <hr className='text-Outlines' />

            {/* contact */}
            <p className='tab-heading'>Contacts</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-20'>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="pno" className='label-text'>Phone Number <span>*</span></label>
                <div ref={dropdown5.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <button onClick={dropdown5.toggle} id='pno' type='button' className="tab-select group !py-10">
                      <div className='flex items-center justify-start gap-13'>
                        <div className='flex gap-5 items-center'>
                          <img src="/asset/icons/flag.svg" alt="icon" />
                          <IoChevronDown className={`text-sm transition-transform duration-300 text-arrow ${dropdown5.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                        </div>

                        <div className='text-left'>
                          <span className='text-secondary-text text-xs font-medium pr-6'>+1</span>
                          <span className='text-place-holder text-sm font-medium'>(555) 555-0000</span>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown5.isOpen && (
                    <div className="form-dropdown-menu">
                      <div className='w-full relative'>
                        <input type="search" name='search' placeholder='Search' className='table-small-search' />
                        <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                      </div>
                      <ul className='table-dropdown-item dropdown-scrollbar w-full'>
                        <li className='table-dropdown-title'>
                          <div className='flex justify-start items-center gap-20'>
                            <div className='flex justify-start items-center gap-9 flex-none'>
                              <img src="/asset/icons/flag.svg" alt="icon" />
                              +255
                            </div>
                            <p className='text-main-text'>United Republic of Tanzania</p>
                          </div>
                        </li>
                        <li className='table-dropdown-title'>
                          <div className='flex justify-start items-center gap-20'>
                            <div className='flex justify-start items-center gap-9 flex-none'>
                              <img src="/asset/icons/flag.svg" alt="icon" />
                              +255
                            </div>
                            <p className='text-main-text'>Uruguay</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="email" className='label-text'>Email <span>*</span></label>
                <input type="email" name="" id="email" required placeholder='warehouse@techsolutions .com' className='form-input' />
              </div>
            </div>
            <hr className='text-Outlines' />

            {/* address */}
            <p className='tab-heading'>Address</p>
            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="country" className='label-text'>Country <span>*</span></label>
              <div ref={dropdown2.ref} className="relative">
                <div className='flex gap-8 justify-start items-start flex-col'>
                  <button onClick={dropdown2.toggle} id='country' type='button' className="tab-select group">
                    <p className='text-place-holder text-13px font-medium'>United States</p>
                    <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown2.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                </div>

                {/* Dropdown */}
                {dropdown2.isOpen && (
                  <div className="form-dropdown-menu">
                    <div className='w-full relative'>
                      <input type="search" name='search' placeholder='Search' className='table-small-search' />
                      <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                    </div>
                    <ul className='table-dropdown-item dropdown-scrollbar'>
                      <li className='table-dropdown-title'>United Republic of Tanzania</li>
                      <li className='table-dropdown-title'>United Kingdom</li>
                      <li className='table-dropdown-title'>United Arab Emirates</li>
                      <li className='table-dropdown-title'>United States</li>
                      <li className='table-dropdown-title'>Uruguay</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="add1" className='label-text'>Address Line 1 <span>*</span></label>
                <input type="text" name="" id="add1" required placeholder='123 Business St' className='form-input' />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="add2" className='label-text'>Address Line 2 <span>*</span></label>
                <input type="text" name="" id="add2" required placeholder='Apt, Suite, Unit, etc.' className='form-input' />
              </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-20 h-full'>
              <div className='flex justify-start gap-8 flex-col w-full sm:w-1/2'>
                <label htmlFor="city" className='label-text'>City <span>*</span></label>
                <div ref={dropdown3.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <button onClick={dropdown3.toggle} id='city' type='button' className="tab-select group">
                      <p className='text-place-holder text-13px font-medium text-left'>Lompoc</p>
                      <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown3.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown3.isOpen && (
                    <div className="form-dropdown-menu-up">
                      <div className='w-full relative'>
                        <input type="search" name='search' placeholder='Search' className='table-small-search' />
                        <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                      </div>
                      <ul className='table-dropdown-item dropdown-scrollbar'>
                        <li className='table-dropdown-title'>Lodi</li>
                        <li className='table-dropdown-title'>Lompoc</li>
                        <li className='table-dropdown-title'>Long Beach</li>
                        <li className='table-dropdown-title'>Los Angeles</li>
                        <li className='table-dropdown-title'>Los Banos</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className='flex justify-start gap-8 flex-col w-full sm:w-1/2'>
                <label htmlFor="state" className='label-text'>State <span>*</span></label>

                <div ref={dropdown4.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <button onClick={dropdown4.toggle} id='state' type='button' className="tab-select group">
                      <p className='text-place-holder text-13px font-medium'>California</p>
                      <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown4.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown4.isOpen && (
                    <div className="form-dropdown-menu-up">
                      <div className='w-full relative'>
                        <input type="search" name='search' placeholder='Search' className='table-small-search' />
                        <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                      </div>
                      <ul className='table-dropdown-item dropdown-scrollbar'>
                        <li className='table-dropdown-title'>Arkansas</li>
                        <li className='table-dropdown-title'>Arizona</li>
                        <li className='table-dropdown-title'>Alaska</li>
                        <li className='table-dropdown-title'>Colorado</li>
                        <li className='table-dropdown-title'>California</li>
                      </ul>
                    </div>
                  )}
                </div>

              </div>

              <div className='flex justify-start gap-8 flex-col w-full sm:w-1/3'>
                <label htmlFor="zipcode" className='label-text'>Zip Code <span>*</span></label>
                <input type="text" name="" id="zipcode" required placeholder='94105' className='form-input' />
              </div>

            </div>

          </form>
        </div>

        {/* Recipient Information */}
        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>
          <p className='tab-main-heading'>Recipient Information</p>

          {/* form */}
          <form action="" className='space-y-20'>

            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="rcontact" className='label-text'>Select from saved contacts <span>*</span></label>
              <div ref={dropdown6.ref} className="relative">
                <div className='flex gap-8 justify-start items-start flex-col'>
                  <button onClick={dropdown6.toggle} id='rcontact' type='button' className="tab-select group">
                    <div className='flex items-center justify-start gap-13'>
                      <RiUserLine className='text-secondary-text text-sm' />
                      <div className='text-left'>
                        <p className='text-place-holder text-sm font-medium'>Sarah Johnson</p>
                      </div>
                    </div>
                    <IoChevronDown className={`text-base transition-transform duration-300 text-arrow ${dropdown6.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                </div>

                {/* Dropdown */}
                {dropdown6.isOpen && (
                  <div className="form-dropdown-menu">
                    <div className='w-full relative'>
                      <input type="search" name='search' placeholder='Search' className='table-small-search' />
                      <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                    </div>
                    <ul className='table-dropdown-item dropdown-scrollbar w-full'>
                      <li className='table-dropdown-title'>
                        <div className='flex justify-start items-center w-full'>
                          <div className='flex justify-start items-center gap-9 w-1/2'>
                            <img src="/asset/icons/building.svg" alt="icon" />
                            John Smith
                          </div>
                          <p className='text-secondary-text w-1/2'>Tech Solutions Inc.</p>
                        </div>
                      </li>
                      <li className='table-dropdown-title'>
                        <div className='flex justify-start items-center w-full'>
                          <div className='flex justify-start items-center gap-9 w-1/2'>
                            <RiUserLine className='text-secondary-text text-sm' />
                            Sarah Johnson
                          </div>
                          <p className='text-secondary-text w-1/2'>-</p>
                        </div>
                      </li>
                      <li className='table-dropdown-title'>
                        <div className='flex justify-start items-center w-full'>
                          <div className='flex justify-start items-center gap-9 w-1/2'>
                            <img src="/asset/icons/building.svg" alt="icon" />
                            Emily Carter
                          </div>
                          <p className='text-secondary-text w-1/2'>Bright Path Ltd.</p>
                        </div>
                      </li>
                      <li className='table-dropdown-title'>
                        <div className='flex justify-start items-center w-full'>
                          <div className='flex justify-start items-center gap-9 w-1/2'>
                            <RiUserLine className='text-secondary-text text-sm' />
                            Michael Lee
                          </div>
                          <p className='text-secondary-text w-1/2'>-</p>
                        </div>
                      </li>
                      <li className='table-dropdown-title'>
                        <div className='flex justify-start items-center w-full'>
                          <div className='flex justify-start items-center gap-9 w-1/2'>
                            <img src="/asset/icons/building.svg" alt="icon" />
                            David Nguyen
                          </div>
                          <p className='text-secondary-text w-1/2'>CoreVision Systems</p>
                        </div>
                      </li>
                      <li className='table-dropdown-title'>
                        <div className='flex justify-start items-center w-full'>
                          <div className='flex justify-start items-center gap-9 w-1/2'>
                            <RiUserLine className='text-secondary-text text-sm' />
                            Anna Rodriguez
                          </div>
                          <p className='text-secondary-text w-1/2'>-</p>
                        </div>
                      </li>
                      <li className='table-dropdown-title'>
                        <div className='flex justify-start items-center w-full'>
                          <div className='flex justify-start items-center gap-9 w-1/2'>
                            <RiUserLine className='text-secondary-text text-sm' />
                            Liam Thompson
                          </div>
                          <p className='text-secondary-text w-1/2'>-</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* general */}
            <p className='tab-heading'>General</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="rname" className='label-text'>Full Name <span>*</span></label>
                <input type="text" name="" id="rname" required placeholder='John Smith' className='form-input' />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="rcompany" className='label-text'>Company <span>*</span></label>
                <input type="text" name="" id="rcompany" required placeholder='Tech Solutions Inc.' className='form-input' />
              </div>
            </div>

            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="rtitle" className='label-text'>Job Title <span>*</span></label>
              <input type="text" name="" id="rtitle" required placeholder='Not specified' className='form-input' />
            </div>
            <hr className='text-Outlines' />

            {/* contacts */}
            <p className='tab-heading'>Contacts</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-20'>
              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="rpno" className='label-text'>Phone Number <span>*</span></label>
                <div ref={dropdown7.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <button onClick={dropdown7.toggle} id='rpno' type='button' className="tab-select group !py-10">
                      <div className='flex items-center justify-start gap-13'>
                        <div className='flex gap-5 items-center'>
                          <img src="/asset/icons/flag.svg" alt="icon" />
                          <IoChevronDown className={`text-sm transition-transform duration-300 text-arrow ${dropdown7.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                        </div>

                        <div className='text-left'>
                          <span className='text-secondary-text text-xs font-medium pr-6'>+1</span>
                          <span className='text-place-holder text-sm font-medium'>(555) 555-0000</span>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown7.isOpen && (
                    <div className="form-dropdown-menu">
                      <div className='w-full relative'>
                        <input type="search" name='search' placeholder='Search' className='table-small-search' />
                        <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                      </div>
                      <ul className='table-dropdown-item dropdown-scrollbar w-full'>
                        <li className='table-dropdown-title'>
                          <div className='flex justify-start items-center gap-20'>
                            <div className='flex justify-start items-center gap-9 flex-none'>
                              <img src="/asset/icons/flag.svg" alt="icon" />
                              +255
                            </div>
                            <p className='text-main-text'>United Republic of Tanzania</p>
                          </div>
                        </li>
                        <li className='table-dropdown-title'>
                          <div className='flex justify-start items-center gap-20'>
                            <div className='flex justify-start items-center gap-9 flex-none'>
                              <img src="/asset/icons/flag.svg" alt="icon" />
                              +255
                            </div>
                            <p className='text-main-text'>Uruguay</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="remail" className='label-text'>Email <span>*</span></label>
                <input type="email" name="" id="remail" required placeholder='warehouse@techsolutions .com' className='form-input' />
              </div>
            </div>
            <hr className='text-Outlines' />

            {/* address */}
            <p className='tab-heading'>Address</p>
            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="rcountry" className='label-text'>Country <span>*</span></label>
              <div ref={dropdown8.ref} className="relative">
                <div className='flex gap-8 justify-start items-start flex-col'>
                  <button onClick={dropdown8.toggle} id='rcountry' type='button' className="tab-select group">
                    <p className='text-place-holder text-13px font-medium'>United States</p>
                    <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown8.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                </div>

                {/* Dropdown */}
                {dropdown8.isOpen && (
                  <div className="form-dropdown-menu">
                    <div className='w-full relative'>
                      <input type="search" name='search' placeholder='Search' className='table-small-search' />
                      <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                    </div>
                    <ul className='table-dropdown-item dropdown-scrollbar'>
                      <li className='table-dropdown-title'>United Republic of Tanzania</li>
                      <li className='table-dropdown-title'>United Kingdom</li>
                      <li className='table-dropdown-title'>United Arab Emirates</li>
                      <li className='table-dropdown-title'>United States</li>
                      <li className='table-dropdown-title'>Uruguay</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="radd1" className='label-text'>Address Line 1 <span>*</span></label>
                <input type="text" name="" id="radd1" required placeholder='123 Business St' className='form-input' />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="radd2" className='label-text'>Address Line 2 <span>*</span></label>
                <input type="text" name="" id="radd2" required placeholder='Apt, Suite, Unit, etc.' className='form-input' />
              </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-20 h-full'>
              <div className='flex justify-start gap-8 flex-col w-full sm:w-1/2'>
                <label htmlFor="rcity" className='label-text'>City <span>*</span></label>
                <div ref={dropdown9.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <button onClick={dropdown9.toggle} id='rcity' type='button' className="tab-select group">
                      <p className='text-place-holder text-13px font-medium text-left'>Lompoc</p>
                      <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown9.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown9.isOpen && (
                    <div className="form-dropdown-menu-up sm:!top-auto sm:!bottom-full">
                      <div className='w-full relative'>
                        <input type="search" name='search' placeholder='Search' className='table-small-search' />
                        <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                      </div>
                      <ul className='table-dropdown-item dropdown-scrollbar'>
                        <li className='table-dropdown-title'>Lodi</li>
                        <li className='table-dropdown-title'>Lompoc</li>
                        <li className='table-dropdown-title'>Long Beach</li>
                        <li className='table-dropdown-title'>Los Angeles</li>
                        <li className='table-dropdown-title'>Los Banos</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className='flex justify-start gap-8 flex-col w-full sm:w-1/2'>
                <label htmlFor="rstate" className='label-text'>State <span>*</span></label>
                <div ref={dropdown10.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <button onClick={dropdown10.toggle} id='rstate' type='button' className="tab-select group">
                      <p className='text-place-holder text-13px font-medium'>California</p>
                      <IoChevronDown className={`text-base text-arrow transition-transform duration-300 ${dropdown10.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown10.isOpen && (
                    <div className="form-dropdown-menu-up sm:!top-auto sm:!bottom-full">
                      <div className='w-full relative'>
                        <input type="search" name='search' placeholder='Search' className='table-small-search' />
                        <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                      </div>
                      <ul className='table-dropdown-item dropdown-scrollbar'>
                        <li className='table-dropdown-title'>Arkansas</li>
                        <li className='table-dropdown-title'>Arizona</li>
                        <li className='table-dropdown-title'>Alaska</li>
                        <li className='table-dropdown-title'>Colorado</li>
                        <li className='table-dropdown-title'>California</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className='flex justify-start gap-8 flex-col w-full sm:w-1/3'>
                <label htmlFor="rzipcode" className='label-text'>Zip Code <span>*</span></label>
                <input type="text" name="" id="rzipcode" required placeholder='94105' className='form-input' />
              </div>

            </div>
            
            {/* for International shipment warning message */}
            <div className="warning-message">
                <PiWarningCircle className='text-secondary-text text-17px stroke-3 flex-none' />
                <div>
                  <p>International shipment detected!</p>
                  <p className='font-medium text-xs'>Additional customs documentation will be required.</p>
                </div>
            </div>
          </form>
          <hr className='text-Outlines' />

          {/* buttons */}
          <div className='flex justify-end sm:justify-between items-center'>
            <NavLink to={"#"} className='sm:flex items-center justify-between gap-8 button-border hidden'>
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

export default AddressTab
