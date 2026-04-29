import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const ChangePassword: React.FC = () => {
  const [show, setShow] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const toggleShow = (k: keyof typeof show) =>
    setShow((p) => ({ ...p, [k]: !p[k] }));

  return (
    <div className="max-w-lg">
      <div className="space-y-5">
        {[
          {
            label: "Current Password",
            key: "current",
            placeholder: "Enter your current password",
          },
          {
            label: "New Password",
            key: "new",
            placeholder: "Enter New password",
          },
          {
            label: "Confirm New Password",
            key: "confirm",
            placeholder: "Re-type new password",
          },
        ].map(({ label, key, placeholder }) => (
          <div key={key}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {label}
            </label>
            <div className="relative">
              <input
                type={show[key as keyof typeof show] ? "text" : "password"}
                placeholder={placeholder}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-11 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#4A5C45]/20"
              />
              <button
                type="button"
                onClick={() => toggleShow(key as keyof typeof show)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {show[key as keyof typeof show] ? (
                  <EyeOff size={17} />
                ) : (
                  <Eye size={17} />
                )}
              </button>
            </div>
          </div>
        ))}
        <button className="w-full bg-[#4A5C45] text-white rounded-full py-3.5 font-semibold text-sm hover:bg-[#3d4e39] transition-colors mt-2">
          Set New Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
