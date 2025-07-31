import { useState } from "react";
import Modal from "../Modal"
import { NavLink } from "react-router";
import { PiWarningCircle } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import { IoCardOutline } from "react-icons/io5";
import { CgEye } from "react-icons/cg";
import { PiExportBold } from "react-icons/pi";
import { TbFileImport } from "react-icons/tb";
import { GrDocumentCsv } from "react-icons/gr";

const TypedLettersBulkImport = ({ onOpenChange }) => {

    const [isMonthCheck, setIsMonthCheck] = useState(false);

    const handleChangeToggle = (event) => {
        setIsMonthCheck(event.target.checked)
    }

    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
        onOpenChange?.(true); // tell parent modal is open
        document.body.classList.add('overflow-y-hidden');
    }

    const handleModalClose = () => {
        setModalOpen(false);
        onOpenChange?.(false); // tell parent modal is closed
        document.body.classList.remove('overflow-y-hidden');
    }

    return (
        <>
            {/* button for open model */}
            <button className='table-dropdown-title text-left border border-transparent cursor-pointer' onClick={handleModalOpen}>Typed Letters</button>

            {/* model start */}
            <Modal isOpen={modalOpen} onClose={handleModalClose}>

                {/* alert */}
                <div className="fixed max-xl:top-16 max-xl:left-1/2 max-xl:transform max-xl:-translate-x-1/2 xl:bottom-30 xl:right-30 max-xl:px-16 max-xl:w-full max-xl:flex max-xl:justify-center z-500">
                    <div className="bg-white rounded-15px overflow-hidden relative w-fit shadow-box">
                        <div className="flex justify-start items-start gap-14 pt-20 pb-16 pr-50 xl:pr-60 pl-20">
                            <img src="/asset/icons/success.svg" alt="icon" className="h-20 flex-none" />
                            <div className="w-full sm:max-w-md max-h-100 sm:max-h-90 overflow-auto dropdown-scrollbar">
                                <p className="text-main-text font-semibold pb-2">File imported successfully!</p>
                            </div>
                        </div>
                        <div className="h-3 bg-primary"></div>

                        {/* cross alert */}
                        <img src="/asset/icons/cross.svg" alt="icon" className="h-16 flex-none absolute top-12 right-24 cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-col gap-12 sm:gap-20">
                    <div className="space-y-4">
                        <p className="text-xl sm:text-25px font-semibold text-main-text pr-40">Typed Letters Bulk Import</p>
                        <p className="font-medium text-13px sm:text-sm text-secondary-text">Upload a CSV, XLSX, or JSON file with your mail data</p>
                    </div>

                    {/* import file */}
                    <div className='flex justify-start gap-8 flex-col w-full relative'>
                        <label htmlFor="file" className='label-text'>Upload a File<span>*</span></label>

                        <label htmlFor="file" className="w-full border border-Outlines border-dashed rounded-lg py-48 sm:px-120 px-40 cursor-pointer flex flex-col gap-12 items-center justify-center text-center">
                            <input type="file" name="" id="file" className="hidden" />
                            <div className="flex gap-15 items-center justify-center flex-col">
                                <PiExportBold className='text-secondary-text text-2xl stroke-0 flex-none' />
                                <p className="small-button-border focus:!border-outlines-active">Choose a File</p>
                            </div>
                            <p className="font-medium text-secondary-text text-13px">CSV, XLSX, and JSON files, max 10MB</p>
                        </label>
                    </div>

                    {/* uploaded file name and action btn */}
                    <div className="border border-upload-skyblue-border bg-upload-skyblue p-20 rounded-lg flex justify-between items-center flex-wrap gap-8">
                        <div className="flex gap-11 items-center justify-start">
                            <div className="p-8 rounded-md bg-card-sky-blue flex-none">
                                <img src="/asset/icons/blue-csv.svg" alt="icon" className="h-18 flex-none" />

                                {/* for xlsx and json */}
                                {/* <img src="/asset/icons/blue-xlsx.svg" alt="icon" className="h-18 flex-none" />
                                <img src="/asset/icons/blue-json.svg" alt="icon" className="h-18 flex-none" /> */}
                            </div>
                            <div className="font-medium">
                                <p className="text-sm text-main-text">bulk-import-today.csv</p>
                                <p className="text-secondary-text text-xs">5 rows</p>
                            </div>
                        </div>
                        <div className='flex gap-10 justify-end items-center'>
                            {/* eye */}
                            <div className="relative group">
                                <div className="action-btn">
                                    <img src="/asset/icons/eye.svg" alt="icon" className="h-15" />
                                </div>
                                <span className="action-tooltip">
                                    <span className='tooltip-label'>
                                        View
                                    </span>
                                    <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                                </span>
                            </div>

                            {/* delete */}
                            <div className="relative group">
                                <div className="action-btn">
                                    <img src="/asset/icons/red-delete.svg" alt="icon" className="h-19" />
                                </div>
                                <span className="action-tooltip">
                                    <span className='tooltip-label'>
                                        delete
                                    </span>
                                    <img src="/asset/icons/triangle-hover.svg" alt="arrow" className="-mt-2 rotate-180" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* warning message */}
                    <div className="space-y-7">
                        <div className="warning-message">
                            <div className="flex justify-between items-center w-full flex-wrap gap-8">
                                <div className="flex gap-10 items-center justify-start">
                                    <PiWarningCircle className='text-secondary-text text-17px stroke-3 flex-none' />
                                    <div>
                                        <p>Need a template?</p>
                                        <p className="font-medium text-xs text-secondary-text">Download our CSV template to get started. </p>
                                    </div>
                                </div>
                                <button className='flex items-center justify-between gap-5 small-button-border ml-22'>
                                    <img src="asset/icons/download.svg" alt="icon" className="h-19" />
                                    <span> Download Template</span>
                                </button>
                            </div>
                        </div>

                        <div className="warning-message">    
                            <PiWarningCircle className='text-secondary-text text-17px stroke-3 flex-none' />
                            <div>
                                <p>Make sure the template names in your file exactly match those already created in the system</p>
                                <p className="font-medium text-xs text-secondary-text">If left blank, you'll be able to choose or create a template in the next step.</p>
                                <NavLink to={"#"} className="font-medium text-xs text-primary">Manage Templates</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end items-center gap-10 flex-wrap">
                        <button onClick={handleModalClose} className="outline-btn cursor-pointer">Cancel</button>
                        <NavLink to={"/import-mail"} className='flex items-center justify-between gap-8 button-icon'>
                            <CgEye className="text-base text-white flex-none" />
                            <span> Continue to Preview</span>
                        </NavLink>

                        {/* disable button */}
                        {/* <NavLink to={"/import-mail"} className='flex items-center justify-between gap-8 disable-button-icon'>
                            <CgEye className="text-base text-white flex-none" />
                            <span> Continue to Preview</span>
                        </NavLink> */}
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default TypedLettersBulkImport;