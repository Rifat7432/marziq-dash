import React, { useState } from "react";
import { RichTextEditor } from "./RichTextEditor/RichTextEditor";
import { pageTabs } from "../constants/pageTabsData";

const PageSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  const currentTabContent =
    pageTabs.find((t) => t.key === activeTab)?.content || "";

  const handleContentChange = (newContent: string) => {
    // For now, just log the changes. In a real app, you'd save to state or backend
    console.log(`Content changed for ${activeTab}:`, newContent);
  };

  const handleSave = () => {
    // Here you would typically save the content to a backend
    console.log(`Saving ${activeTab} content`);
    alert(`${activeTab} content saved successfully!`);
  };

  return (
    <div>
      {/* Tabs */}
      <div className="mb-6 flex gap-5 overflow-x-auto border-b border-gray-200">
        {pageTabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`relative shrink-0 pb-3 text-sm font-semibold transition-colors ${
              activeTab === t.key
                ? "text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Rich Text Editor */}
      <div className="mb-6">
        <RichTextEditor
          content={currentTabContent}
          onChange={handleContentChange}
          onBlur={handleContentChange}
          placeholder={`Write ${pageTabs.find((t) => t.key === activeTab)?.label} content here...`}
        />
      </div>

      <div className="mt-5 flex justify-stretch sm:justify-end">
        <button
          onClick={handleSave}
          className="w-full rounded-full bg-[#4A5C45] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3d4e39] sm:w-auto"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PageSettings;
