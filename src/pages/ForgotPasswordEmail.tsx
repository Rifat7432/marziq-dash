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
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-3 font-['Urbanist',sans-serif] sm:p-6">
      <div className="flex w-full max-w-[840px] flex-col overflow-hidden rounded-2xl bg-white shadow-xl sm:shadow-2xl md:flex-row">
        {/* Left Panel */}
        <div className="flex items-center justify-center bg-[#EDE9E0] p-5 sm:p-6 md:w-[40%] md:p-10">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gray-800 sm:h-36 sm:w-36 md:h-44 md:w-44">
            <span
              className="text-xl font-bold text-gray-800 sm:text-3xl"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Xchange
            </span>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-1 items-center justify-center bg-white px-4 py-7 sm:px-8 md:px-10 md:py-14">
          <div className="w-full max-w-sm">
            <h1 className="mb-1 text-2xl font-black text-gray-900 sm:text-[26px]">
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
