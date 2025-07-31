import useDarkMode from '../pages/useDarkMode'
import useDropdown from '../hook/useDropdown';
import { NavLink } from 'react-router';
import { LuSunMedium } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { useAuth } from '../hook/useAuth';
import { useState, useEffect } from 'react';
import EditProfile from "../components/EditProfile";
import ChangePassword from "../components/ChangePassword";
import NotificationSetting from "../components/NotificationSetting";
import { GoPlus } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { useSubscription } from "../hook/useSubscription.jsx";
import { MdLockOutline } from "react-icons/md";
import { IoChevronBack, IoChevronDown, IoChevronForward, IoChevronUp } from "react-icons/io5";
import TopbarTimer from './TopbarTimer.jsx';


const Topbar = () => {

    // for change dark and light mode
    const { mode, darkMode, lightMode, systemMode } = useDarkMode();

    const dropdown1 = useDropdown();
    const dropdown2 = useDropdown();
    const { logout, getCurrentUser } = useAuth();
    const { currentSubscription } = useSubscription();
    // console.log('curr sub: ',currentSubscription)
    const user = getCurrentUser();

    const [editModal, setEditModal] = useState(false);
    const [changePasswordModal, setChangePasswordModal] = useState(false);
    const [notificationModal, setNotificationModal] = useState(false);

    const openEditModal = () => {
        setEditModal(true);
        document.body.classList.add('overflow-y-hidden');
        dropdown2.close();
    };

    const openChangePasswordModal = () => {
        setChangePasswordModal(true);
        document.body.classList.add('overflow-y-hidden');
        dropdown2.close();
    };

    const openNotificationModal = () => {
        setNotificationModal(true);
        document.body.classList.add('overflow-y-hidden');
        dropdown2.close();
    };

    const closeModal = () => {
        setEditModal(false);
        setChangePasswordModal(false);
        setNotificationModal(false);
        document.body.classList.remove('overflow-y-hidden');
    };

    return (

        <div className="flex items-center max-lg:justify-between w-full sticky top-0 bg-light-gray dark:bg-gray-200 pb-20 pt-16 z-50">

            {/* Logo */}
            <div className="lg:w-274 flex-none">
                <img src="/asset/images/logo/main-logo.svg" alt="logo" title="Logo" className="h-38 hidden lg:block" />
                <img src="/asset/images/logo/logo-icon.svg" alt="logo" title="Logo" className="h-24 lg:hidden block" />
            </div>


            {/* Right Side Flex */}
            <div className="flex justify-between items-center lg:flex-1">

                {/* left side */}
                <div className='hidden lg:flex gap-20'>
                    {/* Light / Dark Toggle */}
                    <div className='flex gap-10'>
                        <div className="bg-white py-8 px-11 rounded-7px flex items-center">
                            <button onClick={lightMode} className={`header-icon ${mode === 'light' ? 'bg-icon text-cta-secondary' : ' text-secondary-text'}`}>
                                <LuSunMedium className='text-sm' /></button>

                            <button onClick={darkMode} className={`header-icon  ${mode === 'dark' ? 'bg-icon text-cta-secondary' : ' text-secondary-text'}`}><IoMoonOutline className='rotate-240 text-sm' /></button>
                        </div>

                        {/* language Toggle */}
                        <div className="bg-white py-8 px-11 rounded-7px flex items-center">
                            <button className="header-icon bg-icon text-cta-secondary"><span className='text-11px font-medium'>EN</span></button>
                            <button className="header-icon bg-white text-secondary-text"><span className='text-11px font-medium'>PT</span></button>
                        </div>
                    </div>
                    <TopbarTimer />
                </div>


                {/* right side */}
                <div className='flex gap-11'>

                    {/* wallet */}
                    <button className="bg-white py-8 pl-11 pr-5 rounded-7px hidden lg:flex items-center gap-9 cursor-pointer border border-transparent hover:border-Outlines focus:border-outlines-active active:border-outlines-active group">
                        <img src="/asset/icons/wallet.svg" alt="icon" />
                        <p className='text-cta-secondary text-sm font-medium'>$127.50</p>
                        <NavLink to={"/"} className='bg-icon group-hover:bg-icon-active group focus:bg-cta-secondary py-4 px-6 rounded-sm text-cta-secondary focus:border-none focus:text-white'>
                            <GoPlus className='text-sm stroke-1' />
                        </NavLink>
                    </button>


                    {/* notification */}
                    <div ref={dropdown1.ref} className="relative">
                        <button onClick={dropdown1.toggle} ref={dropdown1.triggerRef} type="button" className="p-11 rounded-7px bg-white flex justify-center items-center cursor-pointer relative border hover:border-Outlines border-transparent">

                            <img src="/asset/icons/bell.svg" alt="icon" />
                            <div className='absolute -top-10 -right-4 py-4 px-8 rounded-sm text-white bg-cta-complimentary'>
                                <p className='text-white text-9px font-medium'>3</p>
                            </div>
                        </button>


                        {/* Dropdown */}
                        {dropdown1.isOpen && (
                            <div className="dropdown-menu">
                                <div className='flex gap-11 justify-start items-start flex-col w-full sm:min-w-320'>

                                    <p className='font-semibold text-base'>Notifications</p>
                                    <hr className='border-hr w-full' />

                                    {/* notification content */}
                                    <div className='space-y-4 w-full max-h-200 sm:max-h-300 overflow-y-auto dropdown-scrollbar max-sm:pr-5'>
                                        <div className='p-10 pl-14 rounded-5px bg-table-header flex items-start justify-between gap-16 w-full cursor-pointer'>
                                            <div className='flex justify-start items-start gap-8 w-full'>
                                                <img src="/asset/icons/location1.svg" alt="icon" />
                                                <div className='w-full'>
                                                    <div className='flex justify-between w-full gap-2 flex-wrap'>
                                                        <p className='dropdown-title'>Label delivered</p>
                                                        <p className='dropdown-time'>2 hours ago</p>
                                                    </div>
                                                    <p className='dropdown-description'>Your label #LBL-023 has been delivered.</p>
                                                </div>
                                            </div>
                                            <img src="/asset/icons/cross.svg" alt="icon" className='cursor-pointer' />
                                        </div>

                                        <div className='p-10 pl-14 rounded-5px bg-table-header flex items-start justify-between gap-16 w-full cursor-pointer'>
                                            <div className='flex justify-start items-start gap-8 w-full'>
                                                <img src="/asset/icons/rotate.svg" alt="icon" />
                                                <div className='w-full'>
                                                    <div className='flex justify-between w-full gap-2 flex-wrap'>
                                                        <p className='dropdown-title'>Automatic Top Up Failed</p>
                                                        <p className='dropdown-time'>5 hours ago</p>
                                                    </div>
                                                    <p className='dropdown-description'>Please navigate to Billing to upate your credit card details.</p>
                                                </div>
                                            </div>
                                            <img src="/asset/icons/cross.svg" alt="icon" className='cursor-pointer' />
                                        </div>

                                        <div className='p-10 pl-14 rounded-5px bg-table-header flex items-start justify-between gap-16 w-full cursor-pointer'>
                                            <div className='flex justify-start items-start gap-8 w-full'>
                                                <img src="/asset/icons/delivery.svg" alt="icon" />
                                                <div className='w-full'>
                                                    <div className='flex justify-between w-full gap-2 flex-wrap'>
                                                        <p className='dropdown-title'>Label is in Transit</p>
                                                        <p className='dropdown-time'>8 hours ago</p>
                                                    </div>
                                                    <p className='dropdown-description'>Your label #LBL-003 changed status to ‘In Transit’</p>
                                                </div>
                                            </div>
                                            <img src="/asset/icons/cross.svg" alt="icon" className='cursor-pointer' />
                                        </div>

                                        <div className='p-10 pl-14 rounded-5px bg-table-header flex items-start justify-between gap-16 w-full cursor-pointer'>
                                            <div className='flex justify-start items-start gap-8 w-full'>
                                                <img src="/asset/icons/location1.svg" alt="icon" />
                                                <div className='w-full'>
                                                    <div className='flex justify-between w-full gap-2 flex-wrap'>
                                                        <p className='dropdown-title'>Label delivered</p>
                                                        <p className='dropdown-time'>Yesterday, 4:30 PM</p>
                                                    </div>
                                                    <p className='dropdown-description'>Your label #LBL-019 has been delivered.</p>
                                                </div>
                                            </div>
                                            <img src="/asset/icons/cross.svg" alt="icon" className='cursor-pointer' />
                                        </div>
                                    </div>

                                    <hr className='border-hr w-full' />

                                    <div className='w-full flex justify-end'>
                                        <button className='p-8 flex justify-end items-center gap-6 cursor-pointer focus:border-none'>
                                            <img src="/asset/icons/clear-all.svg" alt="icon" />
                                            <span className='text-13px font-medium text-main-text'>Clear All</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* user profile */}
                    <div ref={dropdown2.ref} className="relative">
                        <button ref={dropdown2.triggerRef} onClick={dropdown2.toggle} type='button' className="bg-white py-8 px-11 rounded-7px flex items-center justify-center gap-9 group cursor-pointer border hover:border-Outlines border-transparent">
                            <img src="/asset/icons/user.svg" alt="icon" />
                            <p className='text-cta-secondary text-sm font-medium capitalize'>{user?.fullName || 'User'}</p>
                            <IoChevronDown className={`text-sm transition-transform duration-300 text-cta-secondary ${dropdown2.isOpen ? 'rotate-180' : 'rotate-0'}`} />

                        </button>

                        {/* Dropdown */}
                        {dropdown2.isOpen && (
                            <div className="dropdown-menu">
                                <div className='flex gap-11 justify-start items-start flex-col min-w-208'>

                                    <div className='flex justify-between w-full'>
                                        <div>
                                            <p className='font-semibold text-base capitalize'>{user?.fullName || 'User'}</p>
                                            <p className='dropdown-description'>{user?.email || ''}</p>
                                        </div>
                                        <NavLink to={'/subscription'} onClick={dropdown2.toggle} className='py-3 px-10 rounded-5px border border-Outlines flex gap-4 justify-center items-center h-fit'>
                                            <img src={currentSubscription?.plan === "starter"
                                                ? "/asset/icons/Starter.svg"
                                                : currentSubscription?.plan === "growth"
                                                    ? "/asset/icons/Growth.svg"
                                                    : currentSubscription?.plan === "professional"
                                                        ? "/asset/icons/Professional.svg"
                                                        : "/asset/icons/Starter.svg"
                                            }
                                                alt="icon" className='flex-none h-13' />
                                            <p className='text-11px font-medium text-cta-secondary capitalize'>{currentSubscription?.plan || 'Starter'}</p>
                                        </NavLink>
                                    </div>

                                    <hr className='border-hr w-full' />

                                    {/* notification content */}
                                    <div className='w-full'>

                                        {/* Edit Profile */}
                                        <button className='p-8 rounded-md bg-white hover:bg-icon flex items-center justify-start gap-6 w-full cursor-pointer border border-transparent'
                                            onClick={openEditModal} >
                                            <img src="/asset/icons/edit.svg" alt="icon" />
                                            <p className='dropdown-title'>Edit Profile</p>
                                        </button>

                                        {/* Change Password */}
                                        <button className='p-8 rounded-md bg-white hover:bg-icon flex items-center justify-start gap-6 w-full cursor-pointer border border-transparent' onClick={openChangePasswordModal}>
                                            <MdLockOutline className="text-xs text-main-text" />
                                            <p className='dropdown-title'>Change Password</p>
                                        </button>

                                        {/* Notification Setting */}
                                        <button className='p-8 rounded-md bg-white hover:bg-icon flex items-center justify-start gap-6 w-full cursor-pointer border border-transparent' onClick={openNotificationModal}>
                                            <img src="/asset/icons/bell.svg" alt="icon" className='cursor-pointer' />
                                            <p className='dropdown-title'>Notifications</p>
                                        </button>

                                        <div onClick={dropdown2.toggle} className='p-8 rounded-md bg-white hover:bg-icon flex items-center justify-start gap-6 w-full cursor-pointer border border-transparent'>
                                            <img src="/asset/icons/paternship.svg" alt="icon" className='cursor-pointer' />
                                            <p className='dropdown-title'>Partner Program</p>
                                        </div>
                                    </div>

                                    <hr className='border-hr w-full' />

                                    <button
                                        type='button'
                                        onClick={() => { logout(); dropdown2.toggle() }}
                                        className='p-8 rounded-md bg-white hover:bg-icon flex items-center justify-start gap-6 w-full cursor-pointer'
                                    >
                                        <img src="/asset/icons/signout.svg" alt="icon" className='cursor-pointer' />
                                        <p className='dropdown-title'>Sign Out</p>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {editModal && <EditProfile modalOpen={editModal} modalClose={closeModal} />}
            {changePasswordModal && <ChangePassword modalOpen={changePasswordModal} modalClose={closeModal} />}
            {notificationModal && <NotificationSetting modalOpen={notificationModal} modalClose={closeModal} />}
        </div>

    )
}

export default Topbar