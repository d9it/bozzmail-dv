import useDarkMode from '../pages/useDarkMode'
import useDropdown from '../hook/useDropdown';
import { NavLink } from 'react-router';
import { useAuth } from '../hook/useAuth';

const Topbar = () => {

    // for change dark and light mode
    const { mode, darkMode, lightMode, systemMode } = useDarkMode();
    const { user, logout } = useAuth();

    const dropdown1 = useDropdown();
    const dropdown2 = useDropdown();

    const handleLogout = async () => {
        await logout();
        dropdown2.close();
    };

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
                            <button onClick={lightMode} className={`header-icon ${mode === 'light' ? 'bg-icon text-cta-secondary' : ' text-secondary-text'}`}><span className="material-symbols-outlined">sunny</span></button>

                            <button onClick={darkMode} className={`header-icon  ${mode === 'dark' ? 'bg-icon text-cta-secondary' : ' text-secondary-text'}`}><span className="material-symbols-outlined">brightness_2</span></button>
                        </div>

                        {/* language Toggle */}
                        <div className="bg-white py-8 px-11 rounded-7px flex items-center">
                            <button className="header-icon bg-icon text-cta-secondary"><span className='text-11px font-medium'>EN</span></button>
                            <button className="header-icon bg-white text-secondary-text"><span className='text-11px font-medium'>PT</span></button>
                        </div>
                    </div>
                    <div className='text-13px font-medium text-secondary-text flex items-center justify-center'>
                        <p>June 12, 2025</p>
                        <p className='px-4'>·</p>
                        <p>3:45 PM</p>
                    </div>
                </div>


                {/* right side */}
                <div className='flex gap-11'>

                    {/* wallet */}
                    <div className="bg-white py-8 pl-11 pr-5 rounded-7px hidden lg:flex items-center gap-9 group cursor-pointer border border-transparent hover:border-Outlines focus:border-outlines-active active:border-outlines-active">
                        <img src="/asset/icons/wallet.svg" alt="icon" />
                        <p className='text-cta-secondary text-sm font-medium'>$127.50</p>
                        <div className='bg-icon py-4 px-6 rounded-sm text-cta-secondary'>
                            <img src="/asset/icons/plus.svg" alt="icon" />
                        </div>
                    </div>


                    {/* notification */}
                    <div ref={dropdown1.ref} className="relative">
                        <button onClick={dropdown1.toggle} type="button" className="p-11 rounded-7px bg-white flex justify-center items-center cursor-pointer relative border hover:border-Outlines border-transparent">

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
                                                    <p className='dropdown-description'>Your label #LBL-003 changed status to 'In Transit'</p>
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
                                        <button className='p-8 flex justify-end items-center gap-6 cursor-pointer'>
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
                            <p className='text-cta-secondary text-sm font-medium'>
                                {user?.name || user?.email || 'User'}
                            </p>
                            <img src="/asset/icons/down.svg" alt="icon" />
                        </button>

                        {/* Dropdown */}
                        {dropdown2.isOpen && (
                            <div className="dropdown-menu">
                                <div className='flex gap-11 justify-start items-start flex-col min-w-208'>

                                    <div className='flex justify-between w-full'>
                                        <div>
                                            <p className='font-semibold text-base'>{user?.name || 'User'}</p>
                                            <p className='dropdown-description'>{user?.email || 'user@example.com'}</p>
                                        </div>
                                        <div className='py-3 px-6 rounded-5px border border-Outlines flex gap-4 justify-center items-center h-fit'>
                                            <img src="/asset/icons/Starter.svg" alt="icon" className='flex-none' />
                                            <p className='text-11px font-medium text-cta-secondary'>Starter</p>
                                        </div>
                                    </div>

                                    <hr className='border-hr w-full' />

                                    {/* notification content */}
                                    <div className='w-full'>
                                        <div className='p-8 rounded-md bg-white hover:bg-icon flex items-center justify-start gap-6 w-full cursor-pointer'>
                                            <img src="/asset/icons/edit.svg" alt="icon" className='cursor-pointer' />
                                            <p className='dropdown-title'>Edit Profile</p>
                                        </div>

                                        <div className='p-8 rounded-md bg-white hover:bg-icon flex items-center justify-start gap-6 w-full cursor-pointer'>
                                            <img src="/asset/icons/password.svg" alt="icon" className='cursor-pointer' />
                                            <p className='dropdown-title'>Change Password</p>
                                        </div>

                                        <div className='p-8 rounded-md bg-white hover:bg-icon flex items-center justify-start gap-6 w-full cursor-pointer'>
                                            <img src="/asset/icons/bell.svg" alt="icon" className='cursor-pointer' />
                                            <p className='dropdown-title'>Notifications</p>
                                        </div>

                                        <div className='p-8 rounded-md bg-white hover:bg-icon flex items-center justify-start gap-6 w-full cursor-pointer'>
                                            <img src="/asset/icons/paternship.svg" alt="icon" className='cursor-pointer' />
                                            <p className='dropdown-title'>Partner Program</p>
                                        </div>
                                    </div>

                                    <hr className='border-hr w-full' />

                                    <button 
                                        onClick={handleLogout}
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