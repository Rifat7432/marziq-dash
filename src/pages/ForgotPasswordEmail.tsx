import { useState } from "react";
import { useNavigate } from "react-router";

const ForgotPasswordEmail = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/forgot-password/verify-otp");
  };

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
              Forgot Your Password?
            </h1>
            <p className="text-gray-400 text-sm mb-8">
              Click on the "Get OTP" button to verify yourself
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@xchange.com"
                  className="w-full bg-[#F5F5F0] rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#4A5C45]/30 border border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#4A5C45] text-white rounded-full py-3.5 font-semibold text-sm hover:bg-[#3d4e39] transition-colors"
              >
                Get OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordEmail;