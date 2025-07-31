import React,{ useEffect, useState } from 'react';
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";
import { NavLink } from 'react-router';
import useDropdown from '../../hook/useDropdown';
import { PiWarningCircle } from "react-icons/pi";
import { useShipping } from '../../hook/useShipping';
import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { Country, State, City } from 'country-state-city';
import { regex } from '../../utils/regex';

const AddressTab = ({ onShipmentTypeChange, onNext, onPrevious, values, setFieldValue, errors, touched }) => {
  const dropdown1 = useDropdown();
  const dropdown2 = useDropdown();
  const dropdown3 = useDropdown();
  const dropdown4 = useDropdown();
  const dropdown5 = useDropdown();

  const { addresses, loading, error, loadAddresses } = useShipping();
  // console.log('addresses in address tab page: ',addresses);
  const [selectedSender, setSelectedSender] = useState(null);
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  // const countries = Country.getAllCountries(); 

  //sender
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  //receiver
  const [rcountryList, setrCountryList] = useState([]);
  const [rstateList, setrStateList] = useState([]);
  const [rcityList, setrCityList] = useState([]);

  //sender
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  //receiver
  const [rselectedCountry, setrSelectedCountry] = useState(null);
  const [rselectedState, setrSelectedState] = useState(null);
  const [rselectedCity, setrSelectedCity] = useState(null);

  //sender
  const [countrySearch, setCountrySearch] = useState('');
  const [stateSearch, setStateSearch] = useState('');
  const [citySearch, setCitySearch] = useState('');
  //receiver
  const [rcountrySearch, setrCountrySearch] = useState('');
  const [rstateSearch, setrStateSearch] = useState('');
  const [rcitySearch, setrCitySearch] = useState('');

  //sender
  const filteredCountries = countryList.filter((c) =>
  c.name.toLowerCase().includes(countrySearch.toLowerCase())
);

  const filteredStates = stateList.filter((s) =>
    s.name.toLowerCase().includes(stateSearch.toLowerCase())
  );

  const filteredCities = cityList.filter((city) =>
    city.name.toLowerCase().includes(citySearch.toLowerCase())
  );

  //receiver
  const rfilteredCountries = rcountryList.filter((c) =>
    c.name.toLowerCase().includes(rcountrySearch.toLowerCase())
  );

  const rfilteredStates = rstateList.filter((s) =>
    s.name.toLowerCase().includes(rstateSearch.toLowerCase())
  );

  const rfilteredCities = rcityList.filter((city) =>
    city.name.toLowerCase().includes(rcitySearch.toLowerCase())
  );



  const dropdown6 = useDropdown();
  const dropdown7 = useDropdown();
  const dropdown8 = useDropdown();
  const dropdown9 = useDropdown();
  const dropdown10 = useDropdown();

  useEffect(() => {
    loadAddresses();
  }, [loadAddresses]);

  useEffect(() => {
  //sender
  const allCountries = Country.getAllCountries();
  setCountryList(allCountries);
  //receiver
  const allrCountries = Country.getAllCountries();
  setrCountryList(allrCountries);
}, []);

  const handleSenderSelect = (address, setFieldValue) => {
    setSelectedSender(address);
    setFieldValue('senderContact', address.name || '');
    setFieldValue('senderName', address.name || '');
    setFieldValue('senderCompany', address.company || '');
    setFieldValue('senderJobTitle', address.senderJobTitle || '');
    setFieldValue('senderEmail', address.email || '');
    setFieldValue('senderPhone', address.phone || '');
    setFieldValue('senderAddress1', address.address1 || '');
    setFieldValue('senderAddress2', address.address2 || '');
    setFieldValue('senderCity', address.city || '');
    setFieldValue('senderState', address.state || '');
    setFieldValue('senderCountry', address.country || '');
    setFieldValue('senderZipCode', address.zipCode || '');
    dropdown1.toggle();
  };

  const handleRecipientSelect = (address, setFieldValue) => {
    setSelectedRecipient(address);
    setFieldValue('recipientContact', address.name || '');
    setFieldValue('recipientName', address.name || '');
    setFieldValue('recipientCompany', address.company || '');
    setFieldValue('recipientJob', address.recipientJobTitle || '');
    setFieldValue('recipientEmail', address.email || '');
    setFieldValue('recipientPhone', address.phone || '');
    setFieldValue('recipientAddress1', address.address1 || '');
    setFieldValue('recipientAddress2', address.address2 || '');
    setFieldValue('recipientCity', address.city || '');
    setFieldValue('recipientState', address.state || '');
    setFieldValue('recipientCountry', address.country || '');
    setFieldValue('recipientZipCode', address.zipCode || '');
    dropdown6.toggle();
  };




  return (
  <React.Fragment>
    <div className='space-y-20'>
      {(() => {
        const isInternational =
          values.senderCountry &&
          values.recipientCountry &&
          values.senderCountry !== values.recipientCountry;

        // Call the callback when international status changes
        React.useEffect(() => {
          if (onShipmentTypeChange) {
            onShipmentTypeChange(isInternational);
          }
        }, [isInternational, onShipmentTypeChange]);

        return (
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-15 sm:gap-20 h-fit'>

        {/* Sender Information */}

          {/* form */}
        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>
          <p className='tab-main-heading'>Sender Information</p>
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
                      <input type="search" name='search' placeholder='Search' className='table-small-search' autoFocus />
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
                      ) : addresses?.data?.length === 0 ? (
                        <li className='table-dropdown-title'>
                          <div className='flex justify-center items-center w-full py-10'>
                            <span className="text-secondary-text">No addresses found</span>
                          </div>
                        </li>
                      ) : (
                        addresses?.data?.map((address, index) => (    
                          <li 
                            key={address._id || index} 
                            className='table-dropdown-title cursor-pointer hover:bg-gray-50'
                            onClick={() => handleSenderSelect(address, setFieldValue)}
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
                <label htmlFor="senderName" className='label-text'>Full Name <span>*</span></label>
                 <Field
                      type="text"
                      name="senderName"
                      id="senderName"
                      placeholder='John Smith'
                      className='form-input'
                    />
                    <ErrorMessage name="senderName" component="div" className="error-message" />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="senderCompany" className='label-text'>Company <span>*</span></label>
                 <Field
                      type="text"
                      name="senderCompany"
                      id="senderCompany"
                      placeholder='Tech Solutions Inc.'
                      className='form-input'
                    />
                    <ErrorMessage name="senderCompany" component="div" className="error-message" />
              </div>
            </div>

            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="senderJobTitle" className='label-text'>Job Title <span>*</span></label>
              <Field
                    type="text"
                    name="senderJobTitle"
                    id="senderJobTitle"
                    placeholder='Not specified'
                    className='form-input'
                  />
                  <ErrorMessage name="senderJobTitle" component="div" className="error-message" />
            </div>
            <hr className='text-Outlines' />

            {/* contact */}
            <p className='tab-heading'>Contacts</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-20'>
              <div className='flex justify-start gap-8 flex-col w-full phone-flag-number '>
                  <label htmlFor="senderPhone" className='label-text'>Phone Number <span>*</span></label>
                  <Field name="senderPhone">
                      {({ field }) => (
                          <PhoneInput
                              country={'us'}
                              value={field.value}
                              onChange={(phone) => {
                                  setFieldValue('senderPhone', phone);
                              }}
                              onBlur={() => {
                                  setFieldTouched('senderPhone', true);
                              }}
                              enableSearch={true}
                              inputProps={{
                                  name: 'senderPhone',
                                  required: true,
                                  autoFocus: false,
                                  placeholder: "(555) 555-0000"
                              }}
                              buttonClass="custom-flag-button"
                              containerClass="w-full"
                              dropdownClass="custom-dropdown"
                          />
                      )}
                  </Field>
                  <ErrorMessage name="senderPhone" component="div" className="error-message" />
              </div>
              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="senderEmail" className='label-text'>Email <span>*</span></label>
                <Field
                      type="email"
                      name="senderEmail"
                      id="senderEmail"
                      placeholder='warehouse@techsolutions.com'
                      className='form-input'
                    />
                    <ErrorMessage name="senderEmail" component="div" className="error-message" />
              </div>
            </div>
            <hr className='text-Outlines' />

            {/* address */}
            <p className='tab-heading'>Address</p>
            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="senderCountry" className='label-text'>Country <span>*</span></label>
              <div ref={dropdown2.ref} className="relative">
                <div className='flex gap-8 justify-start items-start flex-col'>
                  <button ref={dropdown2.triggerRef} onClick={dropdown2.toggle} onBlur={() => setFieldTouched("senderCountry", true)} id='senderCountry' type='button' className='tab-select group'>
                    <p className={`text-13px font-medium ${values.senderCountry ? 'text-main-text' : 'text-place-holder'}`}>
  {values.senderCountry || 'Select Country'}
</p>
                    <IoChevronDown className={`text-base transition-transform duration-300 ${values.senderCountry ? 'text-main-text' : 'text-arrow'} ${dropdown2.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                </div>

                {/* Dropdown */}
                {dropdown2.isOpen && (
                  <div className="form-dropdown-menu">
                    <div className='w-full relative'>
                      <input
                      type="search"
                      name="search"
                      placeholder="Search"
                      className="table-small-search"
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      autoFocus
                    />
                      <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                    </div>
                    {/* Country Dropdown List */}
                    <ul className='table-dropdown-item dropdown-scrollbar'>
                      {filteredCountries.map((c) => (
                        <li
                          key={c.isoCode}
                          className='table-dropdown-title'
                          onClick={() => {
                            setSelectedCountry(c);
                            setStateList(State.getStatesOfCountry(c.isoCode));
                            setFieldValue("senderCountry", c.name);
                            setFieldValue("senderState", ""); 
                            setFieldValue("senderCity", ""); 
                            setCityList([]);
                            // setFieldTouched("senderCountry", true);
                            setFieldTouched("senderCountry", false, false);
                            dropdown2.toggle();
                          }}
                        >
                          {c.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <ErrorMessage name="senderCountry" component="div" className="error-message" />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="senderAddress1" className='label-text'>Address Line 1 <span>*</span></label>
                <Field
                type="text"
                id="senderAddress1"
                name="senderAddress1"
                required
                placeholder="123 Business St"
                className="form-input"
              />
              <ErrorMessage name="senderAddress1" component="div" className="error-message" />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="senderAddress2" className='label-text'>Address Line 2 <span>*</span></label>
                <Field
                type="text"
                id="senderAddress2"
                name="senderAddress2"
                required
                placeholder="Apt, Suite, Unit, etc."
                className="form-input"
              />
              <ErrorMessage name="senderAddress2" component="div" className="error-message" />
              </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-20 h-full'>
              <div className='flex justify-start gap-8 flex-col w-full sm:w-1/2'>
                <label htmlFor="senderCity" className='label-text'>City <span>*</span></label>
                <div ref={dropdown3.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <button ref={dropdown3.triggerRef} onClick={dropdown3.toggle} onBlur={() => setFieldTouched('senderCity', true)} id='senderCity' type='button' className="tab-select group">
                      <p className={`text-13px font-medium text-left ${values.senderCity ? 'text-main-text' : 'text-place-holder'} `}>{values.senderCity || "City"}</p>
                      <IoChevronDown className={`text-base transition-transform duration-300 ${values.senderCity ? 'text-main-text' : 'text-arrow'} ${dropdown3.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown3.isOpen && (
                    <div className="form-dropdown-menu-up">
                    <div className='w-full relative'>
                        <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="table-small-search"
                        value={citySearch}
                        onChange={(e) => setCitySearch(e.target.value)}
                        autoFocus
                      />
                        <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                      </div>
                      {/* City Dropdown */}
                    <ul className='table-dropdown-item dropdown-scrollbar'>
                      {filteredCities.map((city, idx) => (
                        <li
                          key={idx}
                          className='table-dropdown-title'
                          onClick={() => {
                            setSelectedCity(city);
                            setFieldValue("senderCity", city.name); 
                            //  setFieldTouched("senderCity", true);
                            setFieldTouched("senderCity", false, false);
                            dropdown3.toggle();
                          }}
                        >
                          {city.name}
                        </li>
                      ))}
                    </ul>
                    </div>
                  )}
                </div>
                <ErrorMessage name="senderCity" component="div" className="error-message" />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full sm:w-1/2'>
                <label htmlFor="senderState" className='label-text'>State <span>*</span></label>
                <div ref={dropdown4.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <button ref={dropdown4.triggerRef} onClick={dropdown4.toggle} onBlur={() => setFieldTouched('senderState', true)} id='senderState' type='button' className="tab-select group">
                      <p className={` text-13px font-medium ${values.senderState ? 'text-main-text' : 'text-place-holder'}`}>{values.senderState || "State"}</p>
                      <IoChevronDown className={`text-base transition-transform duration-300 ${values.senderState ? 'text-main-text' : 'text-arrow'} ${dropdown4.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown4.isOpen && (
                    <div className="form-dropdown-menu-up">
                      <div className='w-full relative'>
                        <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="table-small-search"
                        value={stateSearch}
                        onChange={(e) => setStateSearch(e.target.value)}
                        autoFocus
                      />
                        <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                      </div>
                      {/* State Dropdown */}
                      <ul className='table-dropdown-item dropdown-scrollbar'>
                        {filteredStates.map((s) => (
                          <li
                            key={s.isoCode}
                            className='table-dropdown-title'
                           onClick={() => {
                              setSelectedState(s);
                              setCityList(City.getCitiesOfState(selectedCountry.isoCode, s.isoCode));
                              setFieldValue("senderState", s.name); 
                              setFieldValue("senderCity", ""); 
                               setFieldTouched("senderState", false, false); 
                              dropdown4.toggle();
                            }}
                          >
                            {s.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <ErrorMessage name="senderState" component="div" className="error-message" />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full sm:w-1/3'>
                <label htmlFor="senderZipCode" className='label-text'>Zip Code <span>*</span></label>
                <Field
                  type="text"
                  name="senderZipCode" 
                  id="senderZipCode"
                  required
                  placeholder="94105"
                  className="form-input"
                />
                <ErrorMessage name="senderZipCode" component="div" className="error-message" />
              </div>

            </div>

        </div>

        {/* Recipient Information */}
        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>
          <p className='tab-main-heading'>Recipient Information</p>

          {/* form */}
            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="rcontact" className='label-text'>Select from saved contacts <span>*</span></label>
              <div ref={dropdown6.ref} className="relative">
                <div className='flex gap-8 justify-start items-start flex-col'>
                  <button ref={dropdown6.triggerRef} onClick={dropdown6.toggle} id='rcontact' type='button' className="tab-select group">
                    <div className='flex items-center justify-start gap-13'>
                      <RiUserLine className='text-secondary-text text-sm' />
                      <div className='text-left'>
                         <p className={`text-sm font-medium ${values.recipientContact ? 'text-main-text' : 'text-place-holder'}`}>
            {selectedRecipient ? selectedRecipient.name : 'Select Receiver'}
          </p>
                      </div>
                    </div>
                    <IoChevronDown className={`text-base transition-transform duration-300 ${
          values.recipientContact ? 'text-main-text' : 'text-arrow'
        } ${dropdown6.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                </div>

                {/* Dropdown */}
                {dropdown6.isOpen && (
                  <div className="form-dropdown-menu">
                    <div className='w-full relative'>
                      <input type="search" name='search' placeholder='Search' className='table-small-search' autoFocus/>
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
                      ) : addresses?.data?.length === 0 ? (
                        <li className='table-dropdown-title'>
                          <div className='flex justify-center items-center w-full py-10'>
                            <span className="text-secondary-text">No addresses found</span>
                          </div>
                        </li>
                      ) : (
                        addresses?.data?.map((address, index) => (    
                          <li 
                            key={address._id || index} 
                            className='table-dropdown-title cursor-pointer hover:bg-gray-50'
                            onClick={() => handleRecipientSelect(address, setFieldValue)}
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
                <label htmlFor="recipientName" className='label-text'>Full Name <span>*</span></label>
                <Field
                      type="text"
                      name="recipientName"
                      id="recipientName"
                      placeholder='John Smith'
                      className='form-input'
                    />
                    <ErrorMessage name="recipientName" component="div" className="error-message" />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="recipientCompany" className='label-text'>Company <span>*</span></label>
                <Field
                      type="text"
                      name="recipientCompany"
                      id="recipientCompany"
                      placeholder='Tech Solutions Inc.'
                      className='form-input'
                    />
                    <ErrorMessage name="recipientCompany" component="div" className="error-message" />
              </div>
            </div>

            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="recipientJobTitle" className='label-text'>Job Title <span>*</span></label>
               <Field
                    type="text"
                    name="recipientJobTitle"
                    id="recipientJobTitle"
                    placeholder='Not specified'
                    className='form-input'
                  />
                  <ErrorMessage name="recipientJobTitle" component="div" className="error-message" />
            </div>
            <hr className='text-Outlines' />

            {/* contacts */}
            <p className='tab-heading'>Contacts</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-20'>
              <div className='flex justify-start gap-8 flex-col w-full phone-flag-number '>
                  <label htmlFor="recipientPhone" className='label-text'>Phone Number <span>*</span></label>
                  <Field name="recipientPhone">
                      {({ field }) => (
                          <PhoneInput
                              country={'us'}
                              value={field.value}
                              onChange={(phone) => {
                                  setFieldValue('recipientPhone', phone);
                              }}
                              onBlur={() => {
                                  setFieldTouched('recipientPhone', true);
                              }}
                              enableSearch={true}
                              inputProps={{
                                  name: 'recipientPhone',
                                  required: true,
                                  autoFocus: false,
                                  placeholder: "(555) 555-0000"
                              }}
                              buttonClass="custom-flag-button"
                              containerClass="w-full"
                              dropdownClass="custom-dropdown"
                          />
                      )}
                  </Field>
                  <ErrorMessage name="recipientPhone" component="div" className="error-message" />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="recipientEmail" className='label-text'>Email <span>*</span></label>
                <Field
                      type="email"
                      name="recipientEmail"
                      id="recipientEmail"
                      placeholder='warehouse@techsolutions.com'
                      className='form-input'
                    />
                    <ErrorMessage name="recipientEmail" component="div" className="error-message" />
              </div>
            </div>
            <hr className='text-Outlines' />

            {/* address */}
            <p className='tab-heading'>Address</p>
            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="recipientCountry" className='label-text'>Country <span>*</span></label>
              <div ref={dropdown8.ref} className="relative">
                <div className='flex gap-8 justify-start items-start flex-col'>
                  <button ref={dropdown8.triggerRef} onClick={dropdown8.toggle} onBlur={() => setFieldTouched("recipientCountry", true)} id='recipientCountry' type='button' className="tab-select group">
                <p className={`text-13px font-medium ${values.recipientCountry ? 'text-main-text' : 'text-place-holder'}`}>
  {values.recipientCountry || 'Select Country'}
</p>
                    <IoChevronDown className={`text-base transition-transform duration-300 ${values.recipientCountry ? 'text-main-text' : 'text-arrow'} ${dropdown8.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                </div>

                {/* Dropdown */}
                {dropdown8.isOpen && (
                  <div className="form-dropdown-menu">
                    <div className='w-full relative'>
                      <input
                      type="search"
                      name="search"
                      placeholder="Search"
                      className="table-small-search"
                      value={rcountrySearch}
                      onChange={(e) => setrCountrySearch(e.target.value)}
                      autoFocus
                    />
                      <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                    </div>
                    {/* Country Dropdown List */}
                    <ul className='table-dropdown-item dropdown-scrollbar'>
                      {rfilteredCountries.map((c) => (
                        <li
                          key={c.isoCode}
                          className='table-dropdown-title'
                          onClick={() => {
                            setrSelectedCountry(c);
                            setrStateList(State.getStatesOfCountry(c.isoCode));
                            setFieldValue("recipientCountry", c.name);
                            setFieldValue("recipientState", ""); 
                            setFieldValue("recipientCity", ""); 
                            setrCityList([]);
                            setFieldTouched("recipientCountry", false, false);
                            dropdown8.toggle();
                          }}
                        >
                          {c.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
               <ErrorMessage name="recipientCountry" component="div" className="error-message" />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="recipientAddress1" className='label-text'>Address Line 1 <span>*</span></label>
                <Field
                type="text"
                id="recipientAddress1"
                name="recipientAddress1"
                required
                placeholder="123 Business St"
                className="form-input"
              />
              <ErrorMessage name="recipientAddress1" component="div" className="error-message" />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="recipientAddress2" className='label-text'>Address Line 2 <span>*</span></label>
                 <Field
                type="text"
                id="recipientAddress2"
                name="recipientAddress2"
                required
                placeholder="Apt, Suite, Unit, etc."
                className="form-input"
              />
              <ErrorMessage name="recipientAddress2" component="div" className="error-message" />
              </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-20 h-full'>
              <div className='flex justify-start gap-8 flex-col w-full sm:w-1/2 form-last-dropdown'>
                <label htmlFor="recipientCity" className='label-text'>City <span>*</span></label>
                <div ref={dropdown9.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <button ref={dropdown9.triggerRef} onClick={dropdown9.toggle} onBlur={() => setFieldTouched('recipientCity', true)} id='recipientCity' type='button' className="tab-select group">
                       <p className={`text-13px font-medium text-left ${values.recipientCity ? 'text-main-text' : 'text-place-holder'} `}>{values.recipientCity || "City"}</p>
                      <IoChevronDown className={`text-base transition-transform duration-300 ${values.recipientCity ? 'text-main-text' : 'text-arrow'} ${dropdown9.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown9.isOpen && (
                    <div className="form-dropdown-menu-up">
                      <div className='w-full relative'>
                      <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="table-small-search"
                        value={rcitySearch}
                        onChange={(e) => setrCitySearch(e.target.value)}
                        autoFocus
                      />
                        <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                      </div>
                      {/* City Dropdown */}
                    <ul className='table-dropdown-item dropdown-scrollbar'>
                      {rfilteredCities.map((city, idx) => (
                        <li
                          key={idx}
                          className='table-dropdown-title'
                          onClick={() => {
                            setrSelectedCity(city);
                            setFieldValue("recipientCity", city.name); 
                            setFieldTouched("recipientCity", false, false);
                            dropdown9.toggle();
                          }}
                        >
                          {city.name}
                        </li>
                      ))}
                    </ul>
                    </div>
                  )}
                </div>
                 <ErrorMessage name="recipientCity" component="div" className="error-message" />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full sm:w-1/2 form-last-dropdown'>
                <label htmlFor="recipientState" className='label-text'>State <span>*</span></label>
                <div ref={dropdown10.ref} className="relative">
                  <div className='flex gap-8 justify-start items-start flex-col'>
                    <button ref={dropdown10.triggerRef} onClick={dropdown10.toggle} onBlur={() => setFieldTouched('recipientState', true)} id='recipientState' type='button' className="tab-select group">
                     <p className={` text-13px font-medium ${values.recipientState ? 'text-main-text' : 'text-place-holder'}`}>{values.recipientState || "State"}</p>
                      <IoChevronDown className={`text-base transition-transform duration-300 ${values.recipientState ? 'text-main-text' : 'text-arrow'} ${dropdown10.isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  {dropdown10.isOpen && (
                    <div className="form-dropdown-menu-up">
                      <div className='w-full relative'>
                         <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="table-small-search"
                        value={rstateSearch}
                        onChange={(e) => setrStateSearch(e.target.value)}
                        autoFocus
                      />
                        <img src="asset/icons/search-input.svg" alt="icon" className='absolute top-11 left-10 h-14' />
                      </div>
                       {/* State Dropdown */}
                      <ul className='table-dropdown-item dropdown-scrollbar'>
                        {rfilteredStates.map((s) => (
                          <li
                            key={s.isoCode}
                            className='table-dropdown-title'
                           onClick={() => {
                              setrSelectedState(s);
                              setrCityList(City.getCitiesOfState(rselectedCountry.isoCode, s.isoCode));
                              setFieldValue("recipientState", s.name); 
                              setFieldValue("recipientCity", ""); 
                               setFieldTouched("recipientState", false, false); 
                              dropdown10.toggle();
                            }}
                          >
                            {s.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <ErrorMessage name="recipientState" component="div" className="error-message" />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full sm:w-1/3'>
                <label htmlFor="recipientZipCode" className='label-text'>Zip Code <span>*</span></label>
                 <Field
                  type="text"
                  name="recipientZipCode" 
                  id="zipcode"
                  required
                  placeholder="94105"
                  className="form-input"
                />
                <ErrorMessage name="recipientZipCode" component="div" className="error-message" />
              </div>

            </div>
            
            {/* for International shipment warning message */}
             {isInternational && (
            <div className="warning-message">
                <PiWarningCircle className='text-secondary-text text-17px stroke-3 flex-none' />
                <div>
                  <p>International shipment detected!</p>
                  <p className='font-medium text-xs'>Additional customs documentation will be required.</p>
                </div>
            </div>
            )}
        
          <hr className='text-Outlines' />

          {/* buttons */}
          <div className='flex justify-end items-center'>
          {/* <div className='flex justify-end sm:justify-between items-center'> */}
            {/* <button onClick={onPrevious} className='sm:flex items-center justify-between gap-8 button-border hidden'>
              <IoChevronBack className="text-sm transition-transform duration-300 text-main-text" />
              <span> Previous</span>
            </button> */}
            <button
              onClick={onNext}
              type="button"
              className='flex items-center justify-between gap-8 button-icon'
            >
              <span> Next</span>
              <IoChevronForward className="text-sm transition-transform duration-300 text-white" />
            </button>
          </div>
        </div>
      </div>
        );
      })()}
    </div>
    </React.Fragment>
  );
}

export default AddressTab
