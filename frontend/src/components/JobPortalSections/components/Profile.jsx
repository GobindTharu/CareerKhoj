import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutButton } from "../buttons/logoutButton";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        title="My Profile"
        className="flex justify-center items-center rounded-full bg-gradient-to-r  from-indigo-400 to-purple-500 pr-2"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <img
            src="/profile.avif"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-gray-800">BalGobind Chaudhary </p>
          </div>
        </div>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-gray-100 rounded-md shadow-xl border border-gray-300 z-50 p-3 space-y-3">
          {/* Profile Section */}
          <div className="border-b pb-2">
            <div className="flex items-center gap-3">
              <img
                src="/profile.avif"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-800">Gobind Tharu</p>
                <p className="text-sm text-gray-500">gobind@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Main Options */}
          <div className="space-y-1 pb-2">
            <button
              onClick={() => navigate("/profile-view")}
              className="w-full text-left text-sm text-gray-700 hover:bg-gray-200 rounded-md px-2 py-1"
            >
              View Profile
            </button>
          </div>

          {/* Preferences */}
          <div className="space-y-1  pb-2">
            <div className="flex items-center justify-between px-2 py-1 text-sm text-gray-700">
              <span>Theme</span>
              <select
                className="text-sm px-2 py-0.5 rounded-md border border-gray-300"
                id="theme"
                name="theme"
              >
                <option>System</option>
                <option>Dark</option>
                <option>Light</option>
              </select>
            </div>
          </div>

          {/* Help & Logout */}
          <div className="space-y-1">
            <button className="w-full text-left text-sm text-gray-700 hover:bg-gray-200 rounded-md px-2 py-1">
              Settings
            </button>
            <button className="w-full text-left text-sm text-gray-700 hover:bg-gray-200 rounded-md px-2 py-1">
              Help & Feedback
            </button>
            <LogoutButton />
          </div>
        </div>
      )}
    </div>
  );
}
