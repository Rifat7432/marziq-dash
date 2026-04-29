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
    <div className="min-h-screen  flex items-center justify-center p-6 font-['Urbanist',sans-serif]">
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
              Verify Your Account
            </h1>
            <p className="text-gray-400 text-sm mb-1">
              Enter the verification code we sent to your email
            </p>
            <p className="text-sm font-bold text-gray-800 mb-8">
              admin@xchange.com
            </p>

            {/* OTP Inputs */}
            <div className="flex gap-3 mb-5">
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
                  className={`w-12 h-12 text-center text-base font-semibold rounded-xl outline-none border transition-colors
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