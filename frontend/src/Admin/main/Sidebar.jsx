import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiBriefcase, FiUsers, FiBarChart2 } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa"; // Correct building icon

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <FiHome /> },
    { name: "Users", path: "/admin/all-user/list", icon: <FiBriefcase /> },
    // { name: "Companies", path: "/admin/companies", icon: <FaBuilding /> },
    // { name: "Applicants", path: "/admin/applicants", icon: <FiUsers /> },
  ];

  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } bg-white h-screen shadow-r transition-all duration-500 flex flex-col text-end`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="text-2xl p-3 text-gray-600 cursor-pointer text-end"
      >
        ☰
      </button>
      <nav className="flex-1">
        {menuItems.map((item, i) => (
          <NavLink
            to={item.path}
            key={i}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-100 ${
                isActive ? "bg-gray-200 font-bold" : ""
              }`
            }
          >
            {item.icon}
            {open && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
