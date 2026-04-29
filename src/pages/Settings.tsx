import React, { useState } from "react";
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
    <div className="p-8 bg-[#F8FAFC] min-h-full font-['Urbanist',sans-serif]">
      <h2 className="text-2xl font-black text-gray-900 mb-6">Settings</h2>

      <div className="flex gap-6 items-start">
        {/* Sidebar */}
        <div className="w-60 flex-shrink-0 bg-white rounded-2xl border border-gray-100 p-3">
          {settingsSidebar.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
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
        <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-7">
          {activeTab === "account" && <AccountInfo />}
          {activeTab === "password" && <ChangePassword />}
          {activeTab === "pages" && <PageSettings />}
        </div>
      </div>
    </div>
  );
};

export default Settings;
