import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";

const ForgotPasswordSetNew = () => {
  const [show, setShow] = useState({ current: false, new: false, confirm: false });
  const navigate = useNavigate();

  const toggleShow = (field: keyof typeof show) =>
    setShow((prev) => ({ ...prev, [field]: !prev[field] }));

  return (
    <div className="min-h-screen flex items-center justify-center p-6 font-['Urbanist',sans-serif]">
      <div className="w-full max-w-[840px] rounded-2xl overflow-hidden flex shadow-2xl">
        {/* Left Panel */}
        <div className="w-[40%] bg-[#EDE9E0] flex items-center justify-center p-10">
          <div className="w-44 h-44 rounded-full border-2 border-gray-800 flex items-center justify-center">
            <span
              className="text-3xl font-bold text-gray-800"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Xchange
            </span>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 bg-white flex items-center justify-center px-10 py-14">
          <div className="w-full max-w-sm">
            <h1 className="text-[26px] font-black text-gray-900 mb-1">
              Set New Password
            </h1>
            <p className="text-gray-400 text-sm mb-8">
              Set a strong password to secure your account
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/signin");
              }}
              className="space-y-5"
            >
              {[
                { label: "Current Password", key: "current", placeholder: "Enter your current password" },
                { label: "New Password", key: "new", placeholder: "Enter new password" },
                { label: "Confirm New Password", key: "confirm", placeholder: "Re-type new password" },
              ].map(({ label, key, placeholder }) => (
                <div key={key}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {label}
                  </label>
                  <div className="relative">
                    <input
                      type={show[key as keyof typeof show] ? "text" : "password"}
                      placeholder={placeholder}
                      className="w-full bg-[#F5F5F0] rounded-xl px-4 py-3 pr-11 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#4A5C45]/30 border border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => toggleShow(key as keyof typeof show)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {show[key as keyof typeof show] ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-[#4A5C45] text-white rounded-full py-3.5 font-semibold text-sm hover:bg-[#3d4e39] transition-colors mt-2"
              >
                Set New Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordSetNew;