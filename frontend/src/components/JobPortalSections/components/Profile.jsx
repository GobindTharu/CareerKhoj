import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutButton } from "../buttons/logoutButton";
import { useSelector } from "react-redux";
import { Settings, User } from "lucide-react";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const user = useSelector((state) => state.user?.user);

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
    <div className="relative flex" ref={dropdownRef}>
      <button
        title="My Profile"
        className="flex justify-center items-center rounded-full bg-gray-300 pr-2"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <img
            src={user?.profile?.profilePhoto || "/profileDefault.jpg"}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-gray-800">{user?.fullName}</p>
          </div>
        </div>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-78   h-100 bg-gray-100 rounded-md shadow-xl border border-gray-300 z-50 p-3 space-y-3">
          {/* Profile Section */}
          <div className="border-b pb-2">
            <div className="flex items-center gap-3">
              <img
                src={user?.profile?.profilePhoto || "/profileDefault.jpg"}
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-800">{user?.fullName}</p>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Main Options */}
          {user && user?.role == "jobseeker" ? (
            <div className="space-y-1 pb-2">
              <button
                onClick={() => navigate("/profile-view")}
                className="flex items-center gap-3 w-full text-left text-sm text-gray-700 hover:bg-gray-200 rounded-md px-2 py-1"
              >
                <User /> View Profile
              </button>
            </div>
          ) : null}

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
            <button className="flex items-center gap-3 w-full text-left text-sm text-gray-700 hover:bg-gray-200 rounded-md px-2 py-1">
              <Settings /> Settings
            </button>
            <button className="w-full text-left text-sm text-gray-700 hover:bg-gray-200 rounded-md px-2 py-1">
              Help & Feedback
            </button>
            <div className="flex items-baseline-last mt-12">
              <LogoutButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
