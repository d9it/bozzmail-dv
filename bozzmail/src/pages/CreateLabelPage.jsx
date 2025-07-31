import useDropdown from '../hook/useDropdown';
import { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { TbFileExport } from "react-icons/tb";
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { NavLink } from 'react-router';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { regex } from '../utils/regex';
import AddressTab from './shipping-label-tabs/AddressTab';
import PackageTab from './shipping-label-tabs/PackageTab';
import CarrierServiceTab from './shipping-label-tabs/CarrierServiceTab';
import ReviewTab from './shipping-label-tabs/ReviewTab';
import PaymentTab from './shipping-label-tabs/PaymentTab';
import CompleteTab from './shipping-label-tabs/CompleteTab';
import CustomTab from './shipping-label-tabs/CustomTab';

const CreateLabelPage = () => {
  const [isInternational, setIsInternational] = useState(false);
  const [activeTab, setActiveTab] = useState("addresses");

  const tabs = [
  "addresses",
  "package",
  isInternational ? "custom" : null,
  "carrier-service",
  "review",
  "payment",
  "complete"
].filter(Boolean); 

const currentIndex = tabs.indexOf(activeTab);

const goToNextTab = () => {
  if (currentIndex < tabs.length - 1) {
    setActiveTab(tabs[currentIndex + 1]);
  }
};

const goToPrevTab = () => {
  if (currentIndex > 0) {
    setActiveTab(tabs[currentIndex - 1]);
  }
};

  // Global form initial values
  const initialValues = {
    // Address Tab Fields
    senderContact: '',
    senderName: '',
    senderCompany: '',
    senderJobTitle: '',
    senderPhone: '',
    senderEmail: '',
    senderCountry: '',
    senderAddress1: '',
    senderAddress2: '',
    senderCity: '',
    senderState: '',
    senderZipCode: '',
    recipientContact: '',
    recipientName: '',
    recipientCompany: '',
    recipientJobTitle: '',
    recipientPhone: '',
    recipientEmail: '',
    recipientCountry: '',
    recipientAddress1: '',
    recipientAddress2: '',
    recipientCity: '',
    recipientState: '',
    recipientZipCode: '',

    // Package Tab Fields
    weight: '',
    declaredValue: '',
    length: '',
    width: '',
    height: '',
    returnLabel: false,
    insurance: false,
    insuredValue: '',
    description: '',
    containsAlcohol: false,
    containsDryIce: false,
    containsLithiumBatteries: false,

    // Carrier Service Tab Fields (placeholder for future)
    carrierService: '',
    serviceLevel: '',

    // Custom Tab Fields (placeholder for future)
    customsValue: '',
    customsDescription: '',

    // Payment Tab Fields (placeholder for future)
    paymentMethod: '',

    // Review Tab Fields (placeholder for future)
    reviewConfirmed: false,
  };

  // Global validation schema
  const validationSchema = Yup.object({
    // Address validation
    senderContact: Yup.string().trim().required('Please select a sender contact'),
    senderName: Yup.string().trim().required('Full name is required'),
    senderCompany: Yup.string().trim().required('Company is required'),
    senderJobTitle: Yup.string().trim().required('Job title is required'),
    senderPhone: Yup.string().trim().required('Phone number is required').matches(regex.phoneNumber, 'Please enter a valid phone number'),
    senderEmail: Yup.string().trim().required('Email is required').matches(regex.email, 'Please enter a valid email address'),
    senderCountry: Yup.string().trim().required('Country is required'),
    senderAddress1: Yup.string().trim().required('Address line 1 is required'),
    senderAddress2: Yup.string().trim().required('Address line 2 is required'),
    senderCity: Yup.string().trim().required('City is required'),
    senderState: Yup.string().required('State is required'),
    senderZipCode: Yup.string().trim().required('Zip code is required'),
    recipientContact: Yup.string().trim().required('Please select a recipient contact'),
    recipientName: Yup.string().trim().required('Full name is required'),
    recipientCompany: Yup.string().trim().required('Company is required'),
    recipientJobTitle: Yup.string().trim().required('Job title is required'),
    recipientPhone: Yup.string().trim().required('Phone number is required').matches(regex.phoneNumber, 'Please enter a valid phone number'),
    recipientEmail: Yup.string().trim().required('Email is required').matches(regex.email, 'Please enter a valid email address'),
    recipientCountry: Yup.string().trim().required('Country is required'),
    recipientAddress1: Yup.string().trim().required('Address line 1 is required'),
    recipientAddress2: Yup.string().trim().required('Address line 2 is required'),
    recipientCity: Yup.string().trim().required('City is required'),
    recipientState: Yup.string().required('State is required'),
    recipientZipCode: Yup.string().trim().required('Zip code is required'),

    // Package validation
    weight: Yup.number().positive('Weight must be positive').required('Weight is required'),
    declaredValue: Yup.number().positive('Declared value must be positive').required('Declared value is required'),
    length: Yup.number().positive('Length must be positive').required('Length is required'),
    width: Yup.number().positive('Width must be positive').required('Width is required'),
    height: Yup.number().positive('Height must be positive').required('Height is required'),
    insuredValue: Yup.number().when('insurance', {
      is: true,
      then: (schema) => schema.positive('Insured value must be positive').required('Insured value is required'),
      otherwise: (schema) => schema.optional(),
    }),
    description: Yup.string().trim().required('Description is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form submitted with values:', values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, errors, touched, isValid, dirty }) => (
        <Form>
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
                  {currentIndex === 0 ? '':(<button
                    onClick={goToPrevTab}
                    className={`flex items-center justify-between gap-8 ${currentIndex === 0 ? 'button-border opacity-50 cursor-not-allowed' : 'button-border hover:bg-gray-50'}`}
                  >
                    <IoChevronBack className='text-15px text-main-text' />
                    <span className='sm:block hidden'> Previous</span>
                  </button>)}

                  {currentIndex === tabs.length - 1 ? '' : (<button
                    onClick={goToNextTab}
                    className={`flex items-center justify-between gap-8 ${currentIndex === tabs.length - 1 ? 'button-icon opacity-50 cursor-not-allowed' : 'button-icon hover:bg-primary-dark'}`}
                  >
                    <span className='sm:block hidden'> Next</span>
                    <IoChevronForward className='text-15px text-white' />
                  </button>)}
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

              <button className='tab-btn'
              //  onClick={() => setActiveTab("addresses")}
               >
                <div className={`tab-digit ${activeTab === "addresses" ? "tab-digit-active" : "tab-digit-inactive"}`}>1</div>
                <p className={`tab-text ${activeTab === "addresses" ? "text-sidebar-menu" : "text-secondary-text"}`}>Addresses</p>
              </button>

              <div className='tab-line'></div>

              <button className='tab-btn' 
              // onClick={() => setActiveTab("package")}
              >
                <div className={`tab-digit ${activeTab === "package" ? "tab-digit-active" : "tab-digit-inactive"}`}>2</div>
                <p className={`tab-text ${activeTab === "package" ? "text-sidebar-menu" : "text-secondary-text"}`}>Package</p>
              </button>

              <div className='tab-line'></div>

              {/* this tab will be display on international shipment */}
              {isInternational && (
                <>
                  <button className='tab-btn'
                  //  onClick={() => setActiveTab("custom")}
                   >
                    <div className={`tab-digit ${activeTab === "custom" ? "tab-digit-active" : "tab-digit-inactive"}`}>3</div>
                    <p className={`tab-text ${activeTab === "custom" ? "text-sidebar-menu" : "text-secondary-text"}`}>Customs</p>
                  </button>
                  <div className='tab-line'></div>
                </>
              )}

              <button className='tab-btn' 
              // onClick={() => setActiveTab("carrier-service")}
              >
                <div className={`tab-digit ${activeTab === "carrier-service" ? "tab-digit-active" : "tab-digit-inactive"}`}>{isInternational ? 4 : 3}</div>
                <p className={`tab-text ${activeTab === "carrier-service" ? "text-sidebar-menu" : "text-secondary-text"}`}>Carrier & Service</p>
              </button>

              <div className='tab-line'></div>

              <button className='tab-btn' 
              // onClick={() => setActiveTab("review")}
              >
                <div className={`tab-digit ${activeTab === "review" ? "tab-digit-active" : "tab-digit-inactive"}`}>{isInternational ? 5 : 4}</div>
                <p className={`tab-text ${activeTab === "review" ? "text-sidebar-menu" : "text-secondary-text"}`}>Review</p>
              </button>

              <div className='tab-line'></div>

              <button className='tab-btn' 
              // onClick={() => setActiveTab("payment")}
              >
                <div className={`tab-digit ${activeTab === "payment" ? "tab-digit-active" : "tab-digit-inactive"}`}>{isInternational ? 6 : 5}</div>
                <p className={`tab-text ${activeTab === "payment" ? "text-sidebar-menu" : "text-secondary-text"}`}>Payment</p>
              </button>

              <div className='tab-line'></div>

              <button className='tab-btn' 
              // onClick={() => setActiveTab("complete")}
              >
                <div className={`tab-digit ${activeTab === "complete" ? "tab-digit-active" : "tab-digit-inactive"}`}>{isInternational ? 7 : 6}</div>
                <p className={`tab-text ${activeTab === "complete" ? "text-sidebar-menu" : "text-secondary-text"}`}>Complete</p>
              </button>
            </div>
          </div>

          {/* tab content */}
          {activeTab === "addresses" && (
            <AddressTab
              onShipmentTypeChange={setIsInternational}
              onNext={goToNextTab}
              onPrevious={goToPrevTab}
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
            />
          )}
          {activeTab === "package" && (
            <PackageTab 
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
              onNext={goToNextTab}
              onPrevious={goToPrevTab}
            />
          )}
          {activeTab === "custom" && isInternational && <CustomTab />}
          {activeTab === "carrier-service" && <CarrierServiceTab />}
          {activeTab === "review" && <ReviewTab />}
          {activeTab === "payment" && <PaymentTab />}
          {activeTab === "complete" && <CompleteTab />}

        </Form>
      )}
    </Formik>
  )
}

export default CreateLabelPage
