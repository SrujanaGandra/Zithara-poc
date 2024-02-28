// Importing React library
import React from 'react';
// Functional component for pagination
const Pagination = ({ customersPerPage, totalPages, paginate }) => {
  // Array to store page numbers
  const pageNumbers = [];
 // Loop to generate page numbers
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
 // JSX to render pagination
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Exporting the Pagination component
export default Pagination;
