import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  totalPages: number;
  maxVisiblePages?: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  maxVisiblePages = 5,
  currentPage,
  onPageChange,
}) => {
  // Generate page numbers with ellipsis logic
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages + 2) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1); // Always show first page

      let startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
      const endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);

      if (endPage === totalPages - 1) {
        startPage = Math.max(2, endPage - maxVisiblePages + 1);
      }

      if (startPage > 2) pages.push("...");

      for (let i = startPage; i <= endPage; i++) pages.push(i);

      if (endPage < totalPages - 1) pages.push("...");

      pages.push(totalPages); // Always show last page
    }

    return pages;
  };

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers();

  return (
    <div className="mt-6 flex max-w-full items-center justify-start gap-2 overflow-x-auto pb-1 sm:justify-end">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`flex h-10 shrink-0 items-center justify-center rounded-xl px-3 text-sm font-semibold transition-colors sm:px-4 ${
          currentPage === 1
            ? "text-gray-300 cursor-not-allowed bg-[#EFF0F3]"
            : "text-gray-600 hover:bg-[#EFF0F3] bg-white border border-gray-200"
        }`}
      >
        <ChevronLeft size={16} />
      </button>

      {/* Page Buttons */}
      {pageNumbers.map((p, i) =>
        p === "..." ? (
          <span
            key={i}
            className="flex h-10 w-8 shrink-0 items-center justify-center text-sm font-semibold text-gray-400 sm:w-10"
          >
            ...
          </span>
        ) : (
          <button
            key={i}
            onClick={() => handlePageChange(Number(p))}
            className={`h-10 w-10 shrink-0 rounded-xl text-sm font-semibold transition-colors ${
              p === currentPage
                ? "bg-white text-[#333333] border border-[#5E6758]"
                : "bg-[#EFF0F3] text-gray-600 hover:bg-[#E0E8DF]"
            }`}
          >
            {String(p).padStart(2, "0")}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex h-10 shrink-0 items-center justify-center rounded-xl px-3 text-sm font-semibold transition-colors sm:px-4 ${
          currentPage === totalPages
            ? "text-gray-300 cursor-not-allowed bg-[#EFF0F3]"
            : "text-gray-600 hover:bg-[#EFF0F3] bg-white border border-gray-200"
        }`}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
