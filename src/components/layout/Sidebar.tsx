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
      className={`fixed inset-y-0 left-0 z-40 flex h-full w-[min(16rem,85vw)] flex-col overflow-y-auto border-r border-gray-100 bg-white shadow-sm transition-transform duration-200 ease-in-out lg:w-64 lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
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
          className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 lg:hidden"
          aria-label="Close sidebar"
        >
          <X size={22} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onClose}
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
