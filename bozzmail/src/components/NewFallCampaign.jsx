import { useState } from "react";
import Modal from "./Modal"
import { NavLink } from "react-router";
import { PiWarningCircle } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import { IoCardOutline } from "react-icons/io5";
import useDropdown from '../hook/useDropdown';
import { TbTemplate } from "react-icons/tb";
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";

const NewFallCampaign = () => {

    const dropdown1 = useDropdown();
    const dropdown2 = useDropdown();
    const dropdown3 = useDropdown();

    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
        document.body.classList.add('overflow-y-hidden');
    }

    const handleModalClose = () => {
        setModalOpen(false)
        document.body.classList.remove('overflow-y-hidden');
    }
    return (
        <>
            {/* button for open model */}
            <button className='button-icon' onClick={handleModalOpen}>Proceed</button>

            {/* model start */}
            <Modal isOpen={modalOpen} onClose={handleModalClose} maxWidth="max-w-7xl">

                <div className="flex flex-col gap-12 sm:gap-20">
                    <div className="flex items-center justify-start gap-4">
                        <TbTemplate className="text-main-text text-2xl" />
                        <p className="text-xl sm:text-25px font-semibold text-main-text pr-40">New Fall Campaign</p>
                    </div>

                    <div className="w-full rounded-10px bg-card-sky-blue border border-Outlines min-h-600 flex items-center justify-center">
                        <p className="font-semibold text-sm text-main-text">Editor interface here</p>
                    </div>

                    <div className="flex justify-end items-center gap-10">
                        <button onClick={handleModalClose} className="outline-btn cursor-pointer">Cancel</button>

                        {/* send it to the import mail page */}
                        <NavLink to={"/import-mail"} className='flex items-center justify-between gap-8 button-icon'>
                            <span> Save</span>
                            <img src="asset/icons/white-save.svg" alt="icon" />
                        </NavLink>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default NewFallCampaign;