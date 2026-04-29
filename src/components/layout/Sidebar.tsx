import React from "react";
import { NavLink } from "react-router";
import { LayoutDashboard, User, Settings, LogOut, X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

interface NavItem {
  to: string;
  icon: React.ComponentType<{ size: number }>;
  label: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onLogout }) => {
  const navItems: NavItem[] = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/users", icon: User, label: "User" },
    { to: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-64 h-full bg-white border-r border-gray-100 flex flex-col overflow-y-auto no-scrollbar fixed left-0 top-0 z-40 shadow-sm transform transition-transform duration-200 ease-in-out  md:translate-x-0`}
    >
      {/* Logo */}
      <div className="px-5 pt-5 pb-6 flex items-center justify-between gap-3">
        <div className="w-11 h-11 rounded-full border-2 border-gray-800 flex items-center justify-center">
          <span className="text-[11px] font-black text-gray-800 font-['Dancing_Script',cursive] leading-none">
            Xchange
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 transition-colors"
        >
          {isOpen ? <X size={22} /> : ""}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-semibold transition-colors ${
                isActive
                  ? "bg-[#4A5C45] text-white"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              }`
            }
          >
            <Icon size={20} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-3 pb-8">
        <button
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-semibold text-red-400 hover:bg-red-50 transition-colors w-full"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
