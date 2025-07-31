import { Outlet } from "react-router";
import Topbar from "../components/Topbar";
import SidebarPage from "../components/SidebarPage";
import Loader from "../components/Loader";

const MainLayout = () => {

    return (        
        <div className="flex flex-col min-h-screen bg-light-gray dark:bg-gray-200 pb-16 px-15 lg:px-24">
            
            {/* <Loader /> */}

            <Topbar />
           
            <div className="flex">

                <SidebarPage />

                <main className="lg:pl-274 flex-1 overflow-y-auto space-y-20 max-lg:pb-80">
                <Outlet/>
                </main>
            </div>
        </div>
    )
}


export default MainLayout;