import React, { useState } from 'react';
import { BiHomeAlt } from "react-icons/bi";
import { MdExplore, MdOfflineBolt } from "react-icons/md";
import { GiFigurehead } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';
import Scroll from '../hooks/useScroll';

const navItems = [
    { to: "/dashboard", icon: <BiHomeAlt className="text-2xl" />, label: "Dashboard Home" },
    { to: "/dashboard/manage-users", icon: <FaUsers className="text-2xl" />, label: "Manage Users" },
    { to: "/trending", icon: <MdOfflineBolt className="text-2xl" />, label: "Trending" },
    { to: "/browse", icon: <GiFigurehead className="text-2xl" />, label: "Following" },
];
const lastMenuItems = [
    { to: "/", icon: <BiHomeAlt className="text-2xl" />, label: "Main Home" },
    { to: "/browse", icon: <MdExplore className="text-2xl" />, label: "Browse" },
    { to: "/trending", icon: <MdOfflineBolt className="text-2xl" />, label: "Trending" },
    { to: "/browse", icon: <GiFigurehead className="text-2xl" />, label: "Following" },
];

const DashboardLayout = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex">
            <div
                className={`${open ? "w-72 overflow-y-auto" : "w-[90px] overflow-auto"
                    } bg-dark-purple h-screen p-5 hidden md:block pt-8 relative duration-300`}
            >
                <div className="flex gap-x-4 items-center">
                    <img
                        src='https://i.ibb.co/26dQJcm/musical-note.png'
                        onClick={() => setOpen(!open)}
                        className={`cursor-pointer h-[40px] duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-dark-primary cursor-pointer font-bold origin-left text-xl duration-200 ${!open && "scale-0"
                            }`}
                        onClick={() => setOpen(!open)}
                    >
                        SOUND SAFARI
                    </h1>
                </div>
                {/* Nav links  */}
                <ul className="pt-6">
                    <p className={`ml-3 text-light-gray-4 ${!open && "hidden"}`}><small>MENU</small></p>
                    {navItems.map((menuItem, index) => (
                        <li key={index} className="mb-2">
                            <NavLink
                                to={menuItem.to}
                                className={({ isActive }) =>
                                    `flex ${isActive ? "bg-red-500 text-white " : "text-[#413F44]"
                                    }  duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white  font-bold text-sm items-center gap-x-4  `
                                }
                            >
                                {menuItem.icon}
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {menuItem.label}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <ul className="pt-6">
                    <p className={`ml-3 text-light-gray-4 ${!open && "hidden"}`}><small>MENU</small></p>
                    {navItems.map((menuItem, index) => (
                        <li key={index} className="mb-2">
                            <NavLink
                                to={menuItem.to}
                                className={({ isActive }) =>
                                    `flex ${isActive ? "bg-dark-primary-3 text-dark-primary" : "text-[#413F44]"
                                    }  duration-150 rounded-md p-2 cursor-pointer hover:bg-dark-primary-3  font-bold text-sm items-center gap-x-4  `
                                }
                            >
                                {menuItem.icon}
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {menuItem.label}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <ul className="pt-6">
                    <p className={`ml-3 uppercase text-light-gray-4 ${!open && "hidden"}`}><small>Useful Links</small></p>
                    {lastMenuItems.map((menuItem, index) => (
                        <li key={index} className="mb-2">
                            <NavLink
                                to={menuItem.to}
                                className={({ isActive }) =>
                                    `flex ${isActive ? "bg-dark-primary-3 text-dark-primary" : "text-[#413F44]"
                                    }  duration-150 rounded-md p-2 cursor-pointer hover:bg-dark-primary-3  font-bold text-sm items-center gap-x-4  `
                                }
                            >
                                {menuItem.icon}
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {menuItem.label}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-screen overflow-y-auto px-8 flex-1">
                {/* <NavBar /> */}
                <Scroll />
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;