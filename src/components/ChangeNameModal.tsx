import React from "react";

interface ChangeNameModalProps {
  onClose: () => void;
}

const ChangeNameModal: React.FC<ChangeNameModalProps> = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/30 p-3 backdrop-blur-sm sm:p-4">
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-5 shadow-xl sm:p-8">
      <h2 className="text-xl font-black text-gray-900 mb-4">Change Name</h2>
      <hr className="border-gray-100 mb-6" />
      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <label className="text-sm font-semibold text-gray-700 block mb-2">
            First Name
          </label>
          <input
            type="text"
            defaultValue="Alex"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#4A5C45]/20"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm font-semibold text-gray-700 block mb-2">
            Last Name
          </label>
          <input
            type="text"
            defaultValue="Smith"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#4A5C45]/20"
          />
        </div>
      </div>
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
          Update Name
        </button>
      </div>
    </div>
  </div>
);

export default ChangeNameModal;
