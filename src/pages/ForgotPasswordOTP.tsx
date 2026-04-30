/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from "react";
import { useNavigate } from "react-router";

const ForgotPasswordOTP = () => {
  const [otp, setOtp] = useState(["0", "0", "1", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
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
              Verify Your Account
            </h1>
            <p className="text-gray-400 text-sm mb-1">
              Enter the verification code we sent to your email
            </p>
            <p className="text-sm font-bold text-gray-800 mb-8">
              admin@xchange.com
            </p>

            {/* OTP Inputs */}
            <div className="mb-5 grid grid-cols-6 gap-2 sm:flex sm:gap-3">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el:any) => (inputRefs.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className={`h-11 w-full rounded-xl border text-center text-base font-semibold outline-none transition-colors sm:h-12 sm:w-12
                    ${digit ? "bg-[#E8EDE7] border-[#4A5C45]/30 text-gray-800" : "bg-[#E8EDE7] border-transparent text-gray-400"}
                    focus:ring-2 focus:ring-[#4A5C45]/30`}
                />
              ))}
            </div>

            <p className="text-sm text-gray-400 mb-6">
              Didn't get OTP?{" "}
              <button className="font-bold text-gray-800 hover:text-[#4A5C45] transition-colors">
                Resend
              </button>
            </p>

            <button
              onClick={() => navigate("/forgot-password/set-new-password")}
              className="w-full bg-[#4A5C45] text-white rounded-full py-3.5 font-semibold text-sm hover:bg-[#3d4e39] transition-colors"
            >
              Verify Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordOTP;
