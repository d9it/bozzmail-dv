import useDarkMode from '../pages/useDarkMode'
import useDropdown from '../hook/useDropdown';
import { NavLink } from 'react-router';
import { LuSunMedium } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { useAuth } from '../hook/useAuth';
import { useSubscription } from '../hook/useSubscription'
import { useState, useEffect } from 'react';
import moment from 'moment';
import EditProfile from "../components/EditProfile";
import ChangePassword from "../components/ChangePassword";
import NotificationSetting from "../components/NotificationSetting";
import { GoPlus } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { useNotification } from '../hook/useNotification';
import Spinner from '../utils/spinner/Spinner';

const Topbar = () => {

    // for change dark and light mode
    const { mode, darkMode, lightMode, systemMode } = useDarkMode();

    const dropdown1 = useDropdown();
    const dropdown2 = useDropdown();
    const { logout, getCurrentUser } = useAuth();
    const {currentSubscription} = useSubscription();
    const { 
        notifications, 
        loading: notificationLoading, 
        unreadCount, 
        markNotificationAsRead, 
        deleteNotification, 
        clearAllNotifications 
    } = useNotification();
    // console.log('curr sub: ',currentSubscription)
    const user = getCurrentUser();

    // 1. State for current time
    const [currentTime, setCurrentTime] = useState(Date.now());

    // 2. Update time every minute
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000 * 60); // update every minute

        return () => clearInterval(interval);
    }, []);

    return (

        <div className="flex items-center max-lg:justify-between w-full sticky top-0 bg-light-gray dark:bg-gray-200 pb-20 pt-16 z-1000">

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
                    <div className='text-13px font-medium text-secondary-text flex items-center justify-center'>
                        <p>{moment(currentTime).format('MMMM DD, YYYY')}</p>
                        <p className='px-4'>·</p>
                        <p>{moment(currentTime).format('h:mm A')}</p>
                    </div>
                </div>


                {/* right side */}
                <div className='flex gap-11'>

                    {/* wallet */}
                    <div className="bg-white py-8 pl-11 pr-5 rounded-7px hidden lg:flex items-center gap-9 group cursor-pointer border border-transparent hover:border-Outlines focus:border-outlines-active active:border-outlines-active">
                        <img src="/asset/icons/wallet.svg" alt="icon" />
                        <p className='text-cta-secondary text-sm font-medium'>$127.50</p>
                        <div className='bg-icon py-4 px-6 rounded-sm text-cta-secondary'>
                            <GoPlus className='text-cta-secondary text-sm stroke-1' />
                        </div>
                    </div>


                    {/* notification */}
                    <div ref={dropdown1.ref} className="relative">
                        <button onClick={dropdown1.toggle} type="button" className="p-11 rounded-7px bg-white flex justify-center items-center cursor-pointer relative border hover:border-Outlines border-transparent">

                            <img src="/asset/icons/bell.svg" alt="icon" />
                            {unreadCount > 0 && (
                                <div className='absolute -top-10 -right-4 py-4 px-8 rounded-sm text-white bg-cta-complimentary'>
                                    <p className='text-white text-9px font-medium'>{unreadCount}</p>
                                </div>
                            )}
                        </button>


                        {/* Dropdown */}
                        {dropdown1.isOpen && (
                            <div className="dropdown-menu">
                                <div className='flex gap-11 justify-start items-start flex-col w-full sm:min-w-320'>

                                    <p className='font-semibold text-base'>Notifications</p>
                                    <hr className='border-hr w-full' />

                                    {/* notification content */}
                                    <div className='space-y-4 w-full max-h-200 sm:max-h-300 overflow-y-auto dropdown-scrollbar max-sm:pr-5'>
                                        {notificationLoading ? (
                                            <div className='flex justify-center items-center py-20'>
                                                <Spinner />
                                            </div>
                                        ) : notifications.length > 0 ? (
                                            notifications.map((notification) => (
                                                <div 
                                                    key={notification._id} 
                                                    className={`p-10 pl-14 rounded-5px ${notification.is_read ? 'bg-table-header' : 'bg-blue-50'} flex items-start justify-between gap-16 w-full cursor-pointer hover:bg-gray-50`}
                                                    onClick={() => !notification.is_read && markNotificationAsRead(notification._id)}
                                                >
                                                    <div className='flex justify-start items-start gap-8 w-full'>
                                                        <img src="/asset/icons/location1.svg" alt="icon" />
                                                        <div className='w-full'>
                                                            <div className='flex justify-between w-full gap-2 flex-wrap'>
                                                                <p className={`dropdown-title ${!notification.is_read ? 'font-semibold' : ''}`}>
                                                                    {notification.message}
                                                                </p>
                                                                <p className='dropdown-time'>
                                                                    {moment(notification.createdAt).fromNow()}
                                                                </p>
                                                            </div>
                                                            <p className='dropdown-description'>
                                                                {notification.message}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <img 
                                                        src="/asset/icons/cross.svg" 
                                                        alt="icon" 
                                                        className='cursor-pointer hover:opacity-70' 
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            deleteNotification(notification._id);
                                                        }}
                                                    />
                                                </div>
                                            ))
                                        ) : (
                                            <div className='flex justify-center items-center py-20 text-secondary-text'>
                                                <p>No notifications</p>
                                            </div>
                                        )}

                                    </div>

                                    <hr className='border-hr w-full' />

                                    <div className='w-full flex justify-end'>
                                        <button 
                                            className='p-8 flex justify-end items-center gap-6 cursor-pointer hover:opacity-70'
                                            onClick={clearAllNotifications}
                                            disabled={notifications.length === 0 || notificationLoading}
                                        >
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
                        <button onClick={dropdown2.toggle} type='button' className="bg-white py-8 px-11 rounded-7px flex items-center gap-9 group cursor-pointer border hover:border-Outlines border-transparent">
                            <img src="/asset/icons/user.svg" alt="icon" />
                            <p className='text-cta-secondary text-sm font-medium'>{user?.fullName || 'User'}</p>
                            <img src="/asset/icons/down.svg" alt="icon" />
                        </button>

                        {/* Dropdown */}
                        {dropdown2.isOpen && (
                            <div className="dropdown-menu">
                                <div className='flex gap-11 justify-start items-start flex-col min-w-208'>

                                    <div className='flex justify-between w-full'>
                                        <div>
                                            <p className='font-semibold text-base'>{user?.fullName || 'User'}</p>
                                            <p className='dropdown-description'>{user?.email || ''}</p>
                                        </div>
                                        <div className='py-3 px-10 rounded-5px border border-Outlines flex gap-4 justify-center items-center h-fit'>
                                            <img src={currentSubscription?.plan === "starter"
                                                    ? "/asset/icons/Starter.svg"
                                                    : currentSubscription?.plan === "growth"
                                                    ? "/asset/icons/Growth.svg"
                                                    : currentSubscription?.plan === "professional"
                                                    ? "/asset/icons/Professional.svg"
                                                    : "/asset/icons/Starter.svg"
                                                } 
                                                alt="icon" className='flex-none h-13' />
                                            <p className='text-11px font-medium text-cta-secondary capitalize'>{currentSubscription?.plan}</p>
                                        </div>
                                    </div>

                                    <hr className='border-hr w-full' />

                                    {/* notification content */}
                                    <div className='w-full'>

                                        <EditProfile/>

                                        <ChangePassword/>

                                        <NotificationSetting />

                                        <div className='p-8 rounded-md bg-white hover:bg-icon flex items-center justify-start gap-6 w-full cursor-pointer border border-transparent'>
                                            <img src="/asset/icons/paternship.svg" alt="icon" className='cursor-pointer' />
                                            <p className='dropdown-title'>Partner Program</p>
                                        </div>
                                    </div>

                                    <hr className='border-hr w-full' />

                                    <button
                                        onClick={logout}
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
        </div>

    )
}

export default Topbar