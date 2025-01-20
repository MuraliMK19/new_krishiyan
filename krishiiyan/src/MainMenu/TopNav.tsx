import React, { useState, Suspense, useEffect } from "react";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import { Avatar, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InsightsIcon from "@mui/icons-material/Insights";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import PeopleIcon from "@mui/icons-material/People";
import TaskIcon from "@mui/icons-material/Task";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HelpIcon from "@mui/icons-material/Help";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ProductIcon from "@mui/icons-material/Category";
import SalesStatementIcon from "@mui/icons-material/BarChart";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { GiFertilizerBag } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { TiWeatherPartlySunny } from "react-icons/ti";
import Farmer_registration from "./Sub_components/Farmer Management/Farmer_registration";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';


// Lazy-loaded components
const SaleComponent = React.lazy(() => import("./Sub_components/POI/SaleComponent"));
const InventoryComponent = React.lazy(() => import("./Sub_components/POI/InventoryComponent"));
const ReportComponent = React.lazy(() => import("./Sub_components/POI/ReportComponent"));
const CropLibraryComponent = React.lazy(() => import("./Sub_components/Crop Insights/CropLibraryComponent"));

const TopNav = () => {
    const [activeMenu, setActiveMenu] = useState<"Point of Sale" | "Market Insights" | "Crop Insights" | "Farmer Management" | "FPO Management" | "Enquiry Management">("Point of Sale");
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [userName, setUserName] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const navigate = useNavigate();

    // Menu items for each main menu
    const menuItems: Record<
        "Point of Sale" | "Market Insights" | "Farmer Management" | "Crop Insights" | "FPO Management" | "Enquiry Management",
        { name: string; icon: React.ReactNode }[]
    > = {
        "Point of Sale": [
            { name: "Sale", icon: <ShoppingCartIcon /> },
            { name: "Inventory", icon: <Inventory2OutlinedIcon /> },
            { name: "Report", icon: <AssessmentIcon /> },
            { name: "Product", icon: <ProductIcon /> },
            { name: "Sales Statement", icon: <SalesStatementIcon /> },
            { name: "Help", icon: <HelpIcon /> },
        ],
        "Market Insights": [],
        "Farmer Management": [
            { name: "Dashboard", icon: <DashboardOutlinedIcon /> },
            { name: "Purchase", icon: <LocalOfferOutlinedIcon /> },
            { name: "Cultivation", icon: <LocalFloristIcon /> },
            { name: "Credit", icon: <CreditCardOutlinedIcon /> },
            { name: "Support", icon: <HeadsetMicOutlinedIcon /> },
            { name: "Farmer Registration", icon: <PersonAddOutlinedIcon /> },
        ],
        "Crop Insights": [
            { name: "Crop Library", icon: <LocalFloristIcon /> },
            { name: "Crop Calendar", icon: <CalendarTodayOutlinedIcon /> },
            { name: "Crop Health", icon: <InsightsIcon /> },
            { name: "FertiCal", icon: <GiFertilizerBag /> },
            { name: "Mandi Price", icon: <GoGraph /> }
        ],
        "Enquiry Management": [],
        "FPO Management": [
            { name: "Manage Accounting", icon: <TaskIcon /> },
        ],
    };

    const renderContent = () => {
        switch (activeSubmenu) {
            case "Sale":
                return <SaleComponent />;
            case "Inventory":
                return <InventoryComponent />;
            case "Report":
                return <ReportComponent />;
            case "Crop Library":
                return <CropLibraryComponent />;
            case "Farmer Registration":
                return <Farmer_registration />
            default:
                return <p>Select a submenu to see the content.</p>;
        }
    };
    useEffect(() => {
        setUserEmail(localStorage.getItem("dealerMail"));
        setUserName(localStorage.getItem("dealerName"));
        setUserId(localStorage.getItem("dealerId"));

        console.log(localStorage.getItem("dealerMail"));
        console.log(localStorage.getItem("dealerName"));
        console.log(localStorage.getItem("dealerId"));
    }, []);
    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };


    return (
        <div className="flex flex-col h-screen z-10 ">
            {/* Top Navigation */}
            <div className="flex items-center justify-between bg-white shadow-lg h-20 px-6 z-40">
                {/* Logo Section */}
                <div>
                    <img src="Images/logoname.png" alt="Logo" className="h-12 sm:h-16" />
                </div>

                {/* Top Navigation Links */}
                <div className="">
                    <ul className="flex items-center text-base">
                        {Object.keys(menuItems).map((menu) => (
                            <li
                                key={menu}
                                className={`w-1/3 cursor-pointer px-4 py-1 rounded-sm transition ${activeMenu === menu ? "bg-[#3fc041] text-white" : "hover:bg-gray-200"
                                    }`}
                                onClick={() => {
                                    setActiveMenu(menu as "Point of Sale" | "Market Insights" | "Crop Insights" | "Farmer Management" | "FPO Management" | "Enquiry Management");
                                    setActiveSubmenu(null);
                                }}
                            >
                                {menu}
                            </li>
                        ))}
                    </ul>
                </div>

                {/*Weather, Notifications and Avatar */}
                <div className="flex items-center space-x-5">
                    <div className="space-x-5 "
                        style={{
                            width: 50,
                            height: 50,
                            display: "inline-flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "50%",
                            backgroundColor: "#3fc041",
                            padding: "3px",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            outline: "3px solid #3fc041",
                            border: "2px solid white"
                        }}>
                        <TiWeatherPartlySunny style={{ fontSize: "24px", color: "white" }} />
                    </div>
                    <div
                        style={{
                            display: "inline-flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            backgroundColor: "white",
                            padding: "3px",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            zIndex: "50"
                        }}
                    >
                        <NotificationsIcon sx={{ fontSize: 40, color: "black" }} />
                    </div>

                    <div className="flex items-center space-x-2">
                        <Avatar />
                        <div>
                            <p className="font-semibold text-left">{userName}</p>
                            <p className="text-sm text-gray-500">{userEmail}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Static Side Drawer and Main Content */}
            <div className="flex flex-1 z-40 shadow-lg">
                {/* Static Side Drawer */}
                <div className="w-64 bg-white shadow-lg border-r">
                    <ul className="space-y-3 mt-2">
                        {menuItems[activeMenu]?.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => setActiveSubmenu(item.name)}
                                className={`ml-2 mr-5 transition flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer ${activeSubmenu === item.name
                                    ? "bg-[#f0fdf4] text-[#3fc041] border-l-4 border-[#3fc041]"
                                    : "hover:bg-gray-100 text-gray-800"
                                    }`}
                            >
                                <span
                                    className={`text-xl ${activeSubmenu === item.name ? "text-[#3fc041]" : "text-gray-500"
                                        }`}
                                >
                                    {item.icon}
                                </span>
                                <span className={`${activeSubmenu === item.name ? "font-semibold" : ""}`}>
                                    {item.name}
                                </span>
                            </li>
                        ))}
                        <button className="p-2 hover:cursor-pointer bg-[#3fc041] fixed bottom-10 " onClick={handleLogout}>
                            <LogoutIcon /> Logout
                        </button>
                    </ul>


                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-0 bg-[#f6f6f6]">
                    {/* <h1 className="text-2xl font-semibold">{activeMenu}</h1> */}
                    <Suspense fallback={<p>Loading...</p>}>{renderContent()}</Suspense>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
