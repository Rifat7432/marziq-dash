import React, { useState, useRef } from "react";
import { Pencil, Trash2, ImagePlus } from "lucide-react";
import ChangeEmailModal from "./ChangeEmailModal";
import ChangeNameModal from "./ChangeNameModal";

const AccountInfo: React.FC = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("https://i.pravatar.cc/100?img=11");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setProfilePhoto(imageUrl);
        console.log("Photo updated:", file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {showEmailModal && (
        <ChangeEmailModal onClose={() => setShowEmailModal(false)} />
      )}
      {showNameModal && (
        <ChangeNameModal onClose={() => setShowNameModal(false)} />
      )}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        className="hidden"
      />

      <div className="flex flex-col items-start gap-5">
        {/* Avatar */}
        <div className="relative">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#4A5C45] text-white rounded-full text-sm font-semibold hover:bg-[#3d4e39] transition-colors"
          >
            <ImagePlus size={16} />
            Change Profile Photo
          </button>
          <button className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-400 hover:bg-red-100 transition-colors">
            <Trash2 size={16} />
          </button>
        </div>

        {/* Fields */}
        <div className="grid grid-cols-2 gap-4 w-full mt-2">
          <div>
            <p className="text-sm text-gray-400 mb-2">Full Name</p>
            <div className="flex items-center justify-between bg-[#F5F5F0] rounded-xl px-4 py-3">
              <span className="text-sm text-gray-700">Alex Smith</span>
              <button
                onClick={() => setShowNameModal(true)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Pencil size={15} />
              </button>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Email Address</p>
            <div className="flex items-center justify-between bg-[#F5F5F0] rounded-xl px-4 py-3">
              <span className="text-sm text-gray-700">admin@xchange.com</span>
              <button
                onClick={() => setShowEmailModal(true)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Pencil size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
