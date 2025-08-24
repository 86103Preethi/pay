import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPages = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-14">
      {/* Prev button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md border ${
          currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-[#42794a] hover:bg-gray-100"
        }`}
      >
        &lt;
      </button>

      {/* Page numbers */}
      {getPages().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2 text-gray-500">...</span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-full border ${
              page === currentPage ? "bg-[#42794a] text-white" : "text-[#42794a] hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md border ${
          currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-[#42794a] hover:bg-gray-100"
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
