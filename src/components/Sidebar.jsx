import { useState } from "react";
import {
  LayoutDashboard,
  Mail,
  User,
  Calendar,
  Search,
  BarChart,
  Folder,
  Settings,
  ChevronLeft,
} from "lucide-react"; 
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", icon: <LayoutDashboard /> },
    { title: "Inbox", icon: <Mail /> },
    { title: "Accounts", icon: <User />, gap: true },
    { title: "Schedule", icon: <Calendar /> },
    { title: "Search", icon: <Search /> },
    { title: "Analytics", icon: <BarChart /> },
    { title: "Files", icon: <Folder />, gap: true },
    { title: "Setting", icon: <Settings /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          open ? "w-56" : "w-20"
        } bg-blue-600 min-h-screen p-5 pt-8 relative duration-300`}
      >
        {/* Toggle Button */}
        <div
          className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-2 border-blue-600 rounded-full flex items-center justify-center z-50 bg-white ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        >
          <ChevronLeft size={16} />
        </div>

        {/* Logo and Title */}
        <div className="flex gap-x-4 items-center">
          <div
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          >
            {/* Replace with your logo */}
            <img src="./src/assets/logo.png" alt="Logo" />
          </div>
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
          POS
          </h1>
        </div>

        {/* Menu Items */}
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex items-center gap-x-4 p-2 rounded cursor-pointer hover:bg-light-white text-gray-300 text-sm ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white"}`}
            >
              {/* Icon */}
              <div>{Menu.icon}</div>

              {/* Title */}
              <Link
                className={`${
                  !open && "hidden"
                } origin-left duration-200`}
              >
                {Menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div> */}
    </div>
  );
};

export default Sidebar;
