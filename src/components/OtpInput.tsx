import React, { useState, useRef } from "react";

interface OtpInputProps {
  onClose: () => void;
  onVerify: () => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ onClose, onVerify }) => {
  const [otp, setOtp] = useState(["0", "0", "1", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  return (
    <div>
      <h3 className="text-xl font-black text-gray-900 mb-0.5">
        Verify Your Account
      </h3>
      <p className="text-sm text-gray-400 mb-6">
        Enter the verification code we sent to your email
      </p>
      <div className="mb-4 grid grid-cols-6 gap-2 sm:flex sm:gap-2.5">
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={(el) => {
              inputRefs.current[i] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            className="h-11 w-full rounded-xl border border-transparent bg-[#E8EDE7] text-center text-sm font-semibold outline-none focus:ring-2 focus:ring-[#4A5C45]/30 sm:w-11"
          />
        ))}
      </div>
      <p className="text-sm text-gray-400 mb-6">
        Didn't get OTP?{" "}
        <button className="font-bold text-gray-800">Resend</button>
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={onClose}
          className="flex-1 py-3 rounded-full border border-red-300 text-red-400 text-sm font-semibold hover:bg-red-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onVerify}
          className="flex-1 py-3 bg-[#4A5C45] text-white rounded-full text-sm font-semibold hover:bg-[#3d4e39] transition-colors"
        >
          Verify Now
        </button>
      </div>
    </div>
  );
};

export default OtpInput;
