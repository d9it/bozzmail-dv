import { IoChevronBack, IoChevronDown, IoChevronForward, IoChevronUp } from "react-icons/io5";
import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import { PiWarningCircle } from "react-icons/pi";
import { Field, ErrorMessage } from 'formik';

const PackageTab = ({ values, setFieldValue, errors, touched, onNext, onPrevious }) => {

  const handleNumberChange = (fieldName, value, direction) => {
    const currentValue = parseFloat(values[fieldName]) || 0;
    const newValue = direction === 'up' ? currentValue + 1 : currentValue - 1;
    if (newValue >= 0) {
      setFieldValue(fieldName, newValue.toString());
    }
  };

  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-15 sm:gap-20 h-fit'>

        {/* Package Information */}
        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>
          <p className='tab-main-heading'>Package Information</p>

          {/* form */}
          <div className='space-y-20'>

            {/* general */}
            <p className='tab-heading'>General</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
              <div className='flex justify-start gap-8 flex-col w-full relative'>
                <label htmlFor="weight" className='label-text'>Weight (lbs)<span>*</span></label>
                <Field
                  type="number"
                  name="weight"
                  id="weight"
                  required
                  placeholder='2.5'
                  className={`form-input ${errors.weight && touched.weight ? 'border-red-500' : ''}`}
                />
                <ErrorMessage name="weight" component="div" className="error-message" />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="declaredValue" className='label-text'>Declared Value ($) <span>*</span></label>
                <Field
                  type="number"
                  name="declaredValue"
                  id="declaredValue"
                  required
                  placeholder='100.00'
                  className={`form-input ${errors.declaredValue && touched.declaredValue ? 'border-red-500' : ''}`}
                />
                <ErrorMessage name="declaredValue" component="div" className="error-message" />
              </div>
            </div>
            <hr className='text-Outlines' />

            {/* Dimensions */}
            <p className='tab-heading'>Dimensions</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="length" className='label-text'>Length (in.)<span>*</span></label>
                <div className='relative'>
                  <Field
                    type="number"
                    name="length"
                    id="length"
                    required
                    placeholder='12'
                    className={`form-input ${errors.length && touched.length ? 'border-red-500' : ''}`}
                  />
                  <div className='absolute top-6 right-8 flex flex-col gap-2'>
                    <div className='number-arrow-btn' onClick={() => handleNumberChange('length', values.length, 'up')}>
                      <IoChevronUp />
                    </div>
                    <div className='number-arrow-btn' onClick={() => handleNumberChange('length', values.length, 'down')}>
                      <IoChevronDown />
                    </div>
                  </div>
                </div>
                <ErrorMessage name="length" component="div" className="error-message" />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="width" className='label-text'>Width (in.)<span>*</span></label>
                <div className='relative'>
                  <Field
                    type="number"
                    name="width"
                    id="width"
                    required
                    placeholder='8'
                    className={`form-input ${errors.width && touched.width ? 'border-red-500' : ''}`}
                  />
                  <div className='absolute top-6 right-8 flex flex-col gap-2'>
                    <div className='number-arrow-btn' onClick={() => handleNumberChange('width', values.width, 'up')}>
                      <IoChevronUp />
                    </div>
                    <div className='number-arrow-btn' onClick={() => handleNumberChange('width', values.width, 'down')}>
                      <IoChevronDown />
                    </div>
                  </div>
                </div>
                <ErrorMessage name="width" component="div" className="error-message" />
              </div>

              <div className='flex justify-start gap-8 flex-col w-full'>
                <label htmlFor="height" className='label-text'>Height (in.)<span>*</span></label>
                <div className='relative'>
                  <Field
                    type="number"
                    name="height"
                    id="height"
                    required
                    placeholder='4'
                    className={`form-input ${errors.height && touched.height ? 'border-red-500' : ''}`}
                  />
                  <div className='absolute top-6 right-8 flex flex-col gap-2'>
                    <div className='number-arrow-btn' onClick={() => handleNumberChange('height', values.height, 'up')}>
                      <IoChevronUp />
                    </div>
                    <div className='number-arrow-btn' onClick={() => handleNumberChange('height', values.height, 'down')}>
                      <IoChevronDown />
                    </div>
                  </div>
                </div>
                <ErrorMessage name="height" component="div" className="error-message" />
              </div>
            </div>
            <hr className='text-Outlines' />

            {/* Return label */}
            <p className='tab-heading'>Return label</p>
            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="returnLabel" className='label-text'>Add a Return Label</label>
              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <Field
                    type="checkbox"
                    name="returnLabel"
                    id="returnLabel"
                    className='peer peer-checked:border-Outlines'
                  />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>

                <label htmlFor='returnLabel' className='checkbox-text'>Yes (+$5.60)</label>
              </div>
            </div>

            <div className="warning-message">
              <PiWarningCircle className='text-secondary-text text-17px stroke-3 flex-none'/>
              <p>Return label will use the same address, weight, and dimensions.</p>
            </div>
            <hr className='text-Outlines' />

            {/* Insurance */}
            <p className='tab-heading'>Insurance</p>
            <div className='flex justify-start gap-8 flex-col w-full'>
              <label htmlFor="insurance" className='label-text'>Add Shipment Insurance</label>
              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <Field
                    type="checkbox"
                    name="insurance"
                    id="insurance"
                    className='peer peer-checked:border-Outlines'
                  />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>
                <label htmlFor='insurance' className='checkbox-text'>Yes</label>
              </div>
            </div>

            {values.insurance && (
              <>
                <div className='flex justify-start gap-8 flex-col w-full relative sm:w-1/2'>
                  <label htmlFor="insuredValue" className='label-text'>Insured Value ($)<span>*</span></label>
                  <Field
                    type="number"
                    name="insuredValue"
                    id="insuredValue"
                    required
                    placeholder='50.00'
                    className={`form-input ${errors.insuredValue && touched.insuredValue ? 'border-red-500' : ''}`}
                  />
                  <ErrorMessage name="insuredValue" component="div" className="error-message" />
                </div>

                <div className="warning-message">
                  <PiWarningCircle className='text-secondary-text text-17px stroke-3 flex-none'/>
                  <p>Insurance fee is 1.5% of the insured value. Minimum: $1, Maximum: $20.</p>
                </div>
              </>
            )}

          </div>
        </div>

        {/* Recipient Information */}
        <div className='bg-white rounded-15px sm:rounded-20px py-20 px-15 sm:p-30 space-y-10 sm:space-y-20 h-fit'>
          <p className='tab-main-heading'>Recipient Information</p>

          {/* form */}
          <div className='space-y-20'>

            <div className='flex justify-start gap-8 flex-col w-full relative'>
              <label htmlFor="description" className='label-text'>Description<span>*</span></label>
              <Field
                as="textarea"
                name="description"
                id="description"
                className={`form-input resize-none ${errors.description && touched.description ? 'border-red-500' : ''}`}
                placeholder='Not specified'
                rows={4}
              />
              <ErrorMessage name="description" component="div" className="error-message" />
            </div>

            <div className='flex justify-start gap-8 flex-col w-full'>
              <p className='label-text'>Hazardous Materials <span>*</span></p>
              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <Field
                    type="checkbox"
                    name="containsAlcohol"
                    id="containsAlcohol"
                    className='peer peer-checked:border-Outlines'
                  />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>
                <label htmlFor='containsAlcohol' className='checkbox-text'>Shipment contains alcohol</label>
              </div>

              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <Field
                    type="checkbox"
                    name="containsDryIce"
                    id="containsDryIce"
                    className='peer peer-checked:border-Outlines'
                  />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>
                <label htmlFor='containsDryIce' className='checkbox-text'>Shipment contains dry ice</label>
              </div>

              <div className='flex items-center justify-start gap-7'>
                <label className="flex items-center cursor-pointer relative w-20 h-20">
                  <Field
                    type="checkbox"
                    name="containsLithiumBatteries"
                    id="containsLithiumBatteries"
                    className='peer peer-checked:border-Outlines'
                  />
                  <span className='absolute opacity-0 bottom-3 -right-2 peer-checked:opacity-100 w-full'>
                    <img src="/asset/icons/check.svg" alt="" className='h-19' />
                  </span>
                </label>
                <label htmlFor='containsLithiumBatteries' className='checkbox-text'>Shipment contains lithium batteries (hazardous material)</label>
              </div>
            </div>

          </div>
          <hr className='text-Outlines' />

          {/* buttons */}
          <div className='flex justify-between items-center flex-wrap'>
            <button
              type="button"
              onClick={onPrevious}
              className='flex items-center justify-between gap-8 button-border'
            >
              <IoChevronBack className="text-sm transition-transform duration-300 text-main-text" />
              <span> Previous</span>
            </button>
            <button
              type="button"
              onClick={onNext}
              className='flex items-center justify-between gap-8 button-icon'
            >
              <span> Next</span>
              <IoChevronForward className="text-sm transition-transform duration-300 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PackageTab
