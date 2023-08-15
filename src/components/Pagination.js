import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination-area text-center">
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className={number === currentPage ? "page-item active" : "page-item"}>
              <button className="page-link" onClick={() => onPageChange(number)}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;