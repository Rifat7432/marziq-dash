import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen min-w-0 bg-[#F8FAFC] font-['Urbanist',sans-serif] lg:flex">
      <div
        className={`fixed inset-0 z-30 bg-gray-900/30 transition-opacity lg:hidden ${
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setSidebarOpen(false)}
      />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onLogout={() => navigate("/signin")}
      />

      <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
        <header
          className="fixed left-0 right-0 top-0 z-20 flex h-16 items-center justify-between border-b border-gray-100 bg-white px-4 sm:h-[72px] sm:px-6 lg:left-64 lg:px-8"
        >
          <button
            onClick={() => setSidebarOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu size={22} />
          </button>
          <img
            src="https://i.pravatar.cc/40?img=11"
            alt="Admin"
            className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
          />
        </header>

        <main className="mx-auto mt-16 min-h-[calc(100vh-64px)] w-full max-w-7xl min-w-0 px-3 py-4 sm:mt-[72px] sm:min-h-[calc(100vh-72px)] sm:px-6 sm:py-5 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
