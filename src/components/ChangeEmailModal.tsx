import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import OtpInput from "./OtpInput";

interface ChangeEmailModalProps {
  onClose: () => void;
}

const ChangeEmailModal: React.FC<ChangeEmailModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<"current" | "new" | "otp">("current");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/30 p-3 backdrop-blur-sm sm:p-4">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-5 shadow-xl sm:p-8">
        <h2 className="text-xl font-black text-gray-900 mb-4">
          Change Email Address
        </h2>
        <hr className="border-gray-100 mb-5" />

        {step !== "otp" && (
          <button
            onClick={() => (step === "new" ? setStep("current") : onClose())}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center mb-4 hover:bg-gray-50"
          >
            <ChevronLeft size={16} />
          </button>
        )}

        {step === "current" && (
          <div>
            <h3 className="text-xl font-black text-gray-900 mb-1">
              Your Current Email
            </h3>
            <p className="text-sm text-gray-400 mb-5">
              By clicking continue you will get an OTP verification code
            </p>
            <input
              type="email"
              defaultValue="admin@xchange.com"
              readOnly
              className="w-full bg-[#F5F5F0] rounded-xl px-4 py-3 text-sm text-gray-600 outline-none mb-6"
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-full border border-red-300 text-red-400 text-sm font-semibold hover:bg-red-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setStep("otp")}
                className="flex-1 py-3 bg-[#4A5C45] text-white rounded-full text-sm font-semibold hover:bg-[#3d4e39] transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === "otp" && (
          <div>
            <button
              onClick={() => setStep("current")}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center mb-4 hover:bg-gray-50"
            >
              <ChevronLeft size={16} />
            </button>
            <OtpInput onClose={onClose} onVerify={() => setStep("new")} />
          </div>
        )}

        {step === "new" && (
          <div>
            <h3 className="text-xl font-black text-gray-900 mb-1">
              Set New Email
            </h3>
            <p className="text-sm text-gray-400 mb-5">
              Enter your new email address
            </p>
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              New Email Address
            </label>
            <input
              type="email"
              placeholder="Enter new email address"
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#4A5C45]/20 mb-6"
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-full border border-red-300 text-red-400 text-sm font-semibold hover:bg-red-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 bg-[#4A5C45] text-white rounded-full text-sm font-semibold hover:bg-[#3d4e39] transition-colors"
              >
                Set New Email
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangeEmailModal;
