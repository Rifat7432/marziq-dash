import { useState } from "react";
import AccountInfo from "../components/AccountInfo";
import ChangePassword from "../components/ChangePassword";
import PageSettings from "../components/PageSettings";

// ─── Settings Sidebar Data ────────────────────────────────────────────────────
type SettingsTab = "account" | "password" | "pages";

const settingsSidebar = [
  { key: "account" as SettingsTab, label: "Account Info" },
  { key: "password" as SettingsTab, label: "Change Password" },
  { key: "pages" as SettingsTab, label: "Page Settings" },
];

// ─── Main Settings Component ───────────────────────────────────────────────────
const Settings = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>("account");

  return (
    <div className="min-h-full min-w-0 bg-[#F8FAFC] font-['Urbanist',sans-serif]">
      <h2 className="mb-6 text-xl font-black text-gray-900 sm:text-2xl">Settings</h2>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
        {/* Sidebar */}
        <div className="flex w-full flex-shrink-0 gap-2 overflow-x-auto rounded-xl border border-gray-100 bg-white p-2 sm:rounded-2xl sm:p-3 lg:w-60 lg:flex-col lg:overflow-visible">
          {settingsSidebar.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`shrink-0 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors sm:px-4 sm:py-3 lg:w-full ${
                activeTab === key
                  ? "bg-[#4A5C45] text-white"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 rounded-xl border border-gray-100 bg-white p-3 sm:rounded-2xl sm:p-6 lg:p-7">
          {activeTab === "account" && <AccountInfo />}
          {activeTab === "password" && <ChangePassword />}
          {activeTab === "pages" && <PageSettings />}
        </div>
      </div>
    </div>
  );
};

export default Settings;
