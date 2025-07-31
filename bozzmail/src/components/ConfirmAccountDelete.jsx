import { useState,useEffect } from "react";
import Modal from "./Modal"
import { useNavigate  } from "react-router";
import { PiWarningCircle } from "react-icons/pi";
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";
import useDropdown from '../hook/useDropdown';
import { useUser } from '../hook/useUser';
import Spinner from "../utils/spinner/Spinner";

const ConfirmAccountDelete = () => {

    const dropdown1 = useDropdown();
    const dropdown2 = useDropdown();
    const navigate = useNavigate();
    const { deleteAccount, loading } = useUser();
    const [conDelete, setConDelete] = useState(false);


    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
        document.body.classList.add('overflow-y-hidden');
    }

    const handleModalClose = () => {
        setModalOpen(false)
        document.body.classList.remove('overflow-y-hidden');
    }

        const handleDelete = async () => {
        try {
            await deleteAccount();
            setConDelete(true);
        } catch (error) {
            console.log('error occur while deleting user account...',error);
        }
    };

    useEffect(() => {
      if (conDelete) {
        const timer = setTimeout(() => {
            setConDelete(false);
            setModalOpen(false);
            navigate("/register");
        }, 200);
        return () => clearTimeout(timer);
      }
    }, [conDelete]);

    return (
        <>
            {/* button for open model */}
            <button type="button" onClick={handleModalOpen} className='flex items-center justify-between gap-8 small-button-border !border-border-danger w-fit'>
                <img src="asset/icons/red-delete.svg" alt="icon" className="h-17" />
                <span className='text-negative-warning'>Delete Account</span>
            </button>

            {/* model start */}
            <Modal isOpen={modalOpen} onClose={handleModalClose}>

                {/* alert */}
                {/* this alert will be display on register page after click on yes delete account */}

                <div className="flex flex-col gap-12 sm:gap-20">
                    <div className="space-y-4">
                        <p className="text-xl sm:text-25px font-semibold text-main-text pr-40">Are you sure?</p>
                        <p className="font-medium text-13px sm:text-sm text-secondary-text">You will lose all of the data you have in your account</p>
                    </div>
                    
                    {/* on click of set loader and redirect to register page and alert page set on register page */}
                    <div className="flex justify-end items-center gap-10">
                        <button onClick={handleModalClose} className="outline-btn cursor-pointer">Cancel</button>
                        <button type="button" onClick={handleDelete} className='flex items-center justify-between gap-8 delete-btn'>
                            {/* {
                                loading ? (
                                    <div className="flex justify-center items-center w-full text-center">
                                            <Spinner />
                                        </div>
                                ) : (
                                    <>
                                        <img src="asset/icons/white-delete.svg" alt="icon" className="h-16" />
                                        <span> Yes, Delete Account</span>
                                    </>
                                )
                            } */}

                            {
                            conDelete ? (
                                    <div className="flex justify-center items-center w-full text-center">
                                        <img src="/asset/icons/check-white.svg" alt="Success" className="h-16" />
                                    </div>
                                ):
                                (loading) ? (
                                    <div className="flex justify-center items-center w-full text-center">
                                        <Spinner />
                                    </div>
                                ):(
                                <>
                                    <img src="asset/icons/white-delete.svg" alt="icon" className="h-16" />
                                    <span> Yes, Delete Account</span>
                                </>
                            )
                            }
                        </button>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default ConfirmAccountDelete;