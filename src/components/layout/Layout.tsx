import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-['Urbanist',sans-serif] overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onLogout={() => navigate("/signin")}
      />

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header
          className={`h-[72px] border-b border-gray-100 flex items-center justify-between px-8 transform transition-transform duration-200 ease-in-out  ${sidebarOpen ? "translate-x-64" : "translate-x-0"} fixed top-0 left-0 right-0 z-30 bg-white`}
        >
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            {sidebarOpen ? "" : <Menu size={22} />}
          </button>
          <img
            src="https://i.pravatar.cc/40?img=11"
            alt="Admin"
            className="w-10 h-10 rounded-full object-cover"
          />
        </header>

        {/* Page Content */}
        <main
          className={`mt-20 transform transition-transform duration-200 ease-in-out ${sidebarOpen ? " translate-x-64" : "translate-x-0"} min-h-[calc(100vh-5rem)] container`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
