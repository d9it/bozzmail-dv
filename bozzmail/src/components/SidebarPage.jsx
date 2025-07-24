import { NavLink } from "react-router"
import { useState } from "react"
import FooterPage from '../components/FooterPage'
import useDarkMode from '../pages/useDarkMode'
import { GoPlus } from "react-icons/go";


const SidebarPage = () => {

    const [isMobileMenu, setIsMobileMenu] = useState(false);

    const handleChangeToggle = (event) => {
        setIsMobileMenu(event.target.checked)
    }

    // for change dark and light mode
    const { mode, darkMode, lightMode, systemMode } = useDarkMode();

    return (
        <div>
            {/* sidebar */}
            <div className='w-250 fixed top-76 left-24 overflow-y-auto custom-scrollbar hidden lg:block' style={{ height: 'calc(100vh - 80px)' }}>
                <div className='bg-white p-20 rounded-20px flex justify-start gap-14 flex-col'>
                    <NavLink to="/dashboard">
                        {({ isActive }) => (
                            <div className={`w-168 py-8 px-11 rounded-7px gap-10 flex justify-start items-center ${isActive ? 'navlink-item-active' : ''}`}>
                                <img src="/asset/icons/dashboard.svg" alt="icon" />
                                <p className='sidebar-title'>Dashboard</p>
                            </div>
                        )}
                    </NavLink>

                    {/* shipment */}
                    <div className='flex gap-10 flex-col'>
                        <p className='text-10px font-medium text-sidebar-menu uppercase'>Shipments</p>
                        <div className='flex flex-col gap-2'>
                            <NavLink to={"/shipping-labels"} className='navlink'>
                            {({ isActive }) => (
                                <>
                                    <div className={`navlink-item ${isActive ? 'navlink-item-active' : ''}`}>
                                    <img src="/asset/icons/label.svg" alt="icon" />
                                    <p className='sidebar-title'>Shipping Labels</p>
                                    </div>
                                    <GoPlus className='text-cta-secondary text-base stroke-1' />
                                </>
                            )}
                            </NavLink>

                            <NavLink to={"/print-mail"} className='navlink'>
                            {({ isActive }) => (
                                <>
                                    <div className={`navlink-item ${isActive ? 'navlink-item-active' : ''}`}>
                                        <img src="/asset/icons/mail.svg" alt="icon" />
                                        <p className='sidebar-title'>Print and Mail</p>
                                    </div>
                                    <GoPlus className='text-cta-secondary text-base stroke-1' />
                                </>
                            )}
                            </NavLink>

                            <NavLink to={"/mail-template"} className='navlink'>
                            {({ isActive }) => (
                                <>
                                    <div className={`navlink-item ${isActive ? 'navlink-item-active' : ''}`}>
                                        <img src="/asset/icons/tabler_template.svg" alt="icon" />
                                        <p className='sidebar-title'>Mail Templates</p>
                                    </div>
                                    <GoPlus className='text-cta-secondary text-base stroke-1' />
                                </>
                            )}
                            </NavLink>

                            <NavLink to={"/pickup-request"} className='navlink'>
                            {({ isActive }) => (
                                <>
                                    <div className={`navlink-item ${isActive ? 'navlink-item-active' : ''}`}>
                                        <img src="/asset/icons/calendar.svg" alt="icon" />
                                        <p className='sidebar-title'>Pickup Requests</p>
                                    </div>
                                    <GoPlus className='text-cta-secondary text-base stroke-1' />
                                </>
                            )}
                            </NavLink>

                            <NavLink to={"/tracking"} className={({ isActive }) => `navlink-item ${isActive ? "navlink-item-active" : ""}`}>
                               <>
                                 <img src="/asset/icons/tracking.svg" alt="icon" />
                                <p className='sidebar-title'>Tracking</p>
                               </>
                            </NavLink>
                        </div>
                    </div>

                    {/* Management */}
                    <div className='flex gap-10 flex-col'>
                        <p className='text-10px font-medium text-sidebar-menu uppercase'>Management</p>
                        <div className='flex flex-col gap-2'>
                            <NavLink to={"/billing"} className={({ isActive }) => `navlink-item ${isActive ? "navlink-item-active" : ""}`}>
                               <>
                                 <img src="/asset/icons/billing.svg" alt="icon" />
                                <p className='sidebar-title'>Billing</p>
                               </>
                            </NavLink>

                            <NavLink to={"/contacts"} className={({ isActive }) => `navlink-item ${isActive ? "navlink-item-active" : ""}`}>
                              <>
                                  <img src="/asset/icons/contact.svg" alt="icon" />
                                <p className='sidebar-title'>Contacts</p>
                              </>
                            </NavLink>

                            <NavLink to={"/subscription"} className={({ isActive }) => `navlink-item ${isActive ? "navlink-item-active" : ""}`}>
                               <>
                                 <img src="/asset/icons/subscription.svg" alt="icon" />
                                <p className='sidebar-title'>Subscription</p>
                               </>
                            </NavLink>

                            <NavLink to={"/api"} className={({ isActive }) => `navlink-item ${isActive ? "navlink-item-active" : ""}`}>
                                <>
                                    <img src="/asset/icons/api.svg" alt="icon" />
                                <p className='sidebar-title'>API</p>
                                </>
                            </NavLink>
                        </div>
                    </div>

                    {/* Support */}
                    <div className='flex gap-10 flex-col'>
                        <p className='text-10px font-medium text-sidebar-menu uppercase'>Support</p>
                        <div className='flex flex-col gap-2'>
                            <NavLink to={"/help-center"} className={({ isActive }) => `navlink-item ${isActive ? "navlink-item-active" : ""}`}>
                               <>
                                 <img src="/asset/icons/help.svg" alt="icon" />
                                <p className='sidebar-title'>Help Center</p>
                               </>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className='flex justify-start text-left -mt-40'>
                    <FooterPage />
                </div>
            </div>

            {/* Bottom menu */}

            <div className="fixed bottom-0 left-0 w-full flex flex-col items-center z-30000 lg:hidden">
                <div className={`bottom-menu ${isMobileMenu ? 'rounded-3xl py-29' : 'rounded-400px py-10'}`}>
                    <div className='flex justify-between items-center gap-20'>
                        <div className='menu-navlink text-center'>
                            <NavLink to={"/dashboard"} className={({ isActive }) => `menu-icon ${isActive ? "menu-icon-active" : ""}`}>
                                <img src="/asset/icons/white-home.svg" alt="icon" />
                            </NavLink>
                            <p>Home</p>
                        </div>
                        <div className='menu-navlink text-center'>
                            <NavLink to={"/shipping-labels"} className={({ isActive }) => `menu-icon ${isActive ? "menu-icon-active" : ""}`}>
                                <img src="/asset/icons/white-label.svg" alt="icon" />
                            </NavLink>
                            <p>Labels</p>
                        </div>
                        <div className='menu-navlink create-btn text-center'>
                            <NavLink to={"#"} className={({ isActive }) => `menu-icon ${isActive ? "menu-icon-active" : ""}`}>
                                <img src="/asset/icons/white-plus.svg" alt="icon" />
                            </NavLink>
                            <p>create</p>
                        </div>
                        <div className='menu-navlink text-center'>
                            <NavLink to={"/print-mail"} className={({ isActive }) => `menu-icon ${isActive ? "menu-icon-active" : ""}`}>
                                <img src="/asset/icons/white-mail.svg" alt="icon" />
                            </NavLink>
                            <p>Mail</p>
                        </div>
                        <NavLink to={"#"} className='menu-navlink text-center' onChange={handleChangeToggle} onClick={() => setIsMobileMenu(!isMobileMenu)}>
                            <div className='menu-icon'>
                                <img src="/asset/icons/white-down-arrow.svg" alt="icon" className={`transition-transform duration-300 ${isMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                            </div>
                            <p>{isMobileMenu ? 'CLOSE' : 'MORE'}</p>
                        </NavLink>
                    </div>

                    {isMobileMenu &&
                        <div className='flex flex-col gap-22'>
                            <div className='more-menu'>
                                <div className='flex justify-between items-center gap-18'>
                                    <div className='menu-navlink text-center'>
                                        <NavLink to={"#"} className={({ isActive }) => `menu-icon ${isActive ? "menu-icon-active" : ""}`}>
                                            <img src="/asset/icons/white-pickup.svg" alt="icon" />
                                        </NavLink>
                                        <p>Pickups</p>
                                    </div>
                                    <div className='menu-navlink text-center'>
                                        <NavLink to={"#"} className={({ isActive }) => `menu-icon ${isActive ? "menu-icon-active" : ""}`}>
                                            <img src="/asset/icons/white-temp.svg" alt="icon" />
                                        </NavLink>
                                        <p>Temp.</p>
                                    </div>
                                    <div className='menu-navlink text-center'>
                                        <NavLink to={"#"} className={({ isActive }) => `menu-icon ${isActive ? "menu-icon-active" : ""}`}>
                                            <img src="/asset/icons/white-tracking.svg" alt="icon" />
                                        </NavLink>
                                        <p>Tracking</p>
                                    </div>
                                </div>
                            </div>

                            <hr className='border-white/20' />

                            <div className="grid grid-cols-2 gap-2">
                                <NavLink to={"#"} className='bottom-navlink'>
                                    <img src="/asset/icons/white-billing.svg" alt="icon" />
                                    <p>Billing</p>
                                </NavLink>

                                <NavLink to={"#"} className='bottom-navlink'>
                                    <img src="/asset/icons/white-contact.svg" alt="icon" />
                                    <p>Contacts</p>
                                </NavLink>

                                <NavLink to={"/subscription"} className='bottom-navlink'>
                                    <img src="/asset/icons/white-subscription.svg" alt="icon" />
                                    <p>Subscription</p>
                                </NavLink>

                                <NavLink to={"/api"} className='bottom-navlink'>
                                    <img src="/asset/icons/white-api.svg" alt="icon" />
                                    <p>API</p>
                                </NavLink>
                                <NavLink to={"#"} className='bottom-navlink'>
                                    <img src="/asset/icons/white-help.svg" alt="icon" />
                                    <p>Help Center</p>
                                </NavLink>
                            </div>

                            <div className='flex justify-between items-center gap-10'>
                                {/* Light / Dark Toggle */}
                                <div className="bg-white/10 py-8 px-8 rounded-7px flex items-center">
                                    <button onClick={lightMode} className={`header-icon ${mode === 'light' ? 'bg-icon text-cta-secondary' : ' text-secondary-text'}`}>
                                        {mode === 'light' ? (
                                            <img src="/asset/icons/sun.svg" alt="icon" />
                                        ) : (
                                            <img src="/asset/icons/sun-white.svg" alt="icon" />
                                        )}
                                    </button>

                                    <button onClick={darkMode} className={`header-icon  ${mode === 'dark' ? 'bg-icon text-cta-secondary' : ' text-secondary-text'}`}>
                                        {mode === 'dark' ? (
                                            <img src="/asset/icons/moon.svg" alt="icon" />
                                        ) : (
                                            <img src="/asset/icons/moon-white.svg" alt="icon" />
                                        )}
                                    </button>
                                </div>

                                {/* language Toggle */}
                                <div className="bg-white/10 py-8 px-8 rounded-7px flex items-center">
                                    <button className="header-icon bg-white text-secondary-text"><span className='text-11px font-medium'>EN</span></button>
                                    <button className="header-icon text-white border-0"><span className='text-11px font-medium'>PT</span></button>
                                </div>

                                {/* wallet */}
                                <div className="bg-white/10 py-8 pl-8 pr-5 rounded-7px flex items-center gap-9 group cursor-pointer border border-transparent hover:border-Outlines focus:border-outlines-active active:border-outlines-active">
                                    <img src="/asset/icons/white-wallet.svg" alt="icon" />
                                    <p className='text-white text-sm font-medium'>$127.50</p>
                                    <div className='bg-icon py-4 px-6 rounded-sm text-cta-secondary'>
                                        <GoPlus className='text-cta-secondary text-sm stroke-1' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default SidebarPage