import React from "react";

const Pagination = (props) => {
  const { page, setPages } = props;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-evenly">
        <li className="page-item">
          <button className="page-link" onClick={() => setPages(page - 1)}>
            Previous
          </button>
        </li>

        <li className="page-item">
          <button className="page-link">{page}</button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => setPages(page + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
