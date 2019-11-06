import React from "react";

const Pagination = ({ itemPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <React.Fragment>
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <button
                                onClick={() => paginate(number)}
                                //href="javascript:void(0)"
                                className="page-link"
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </React.Fragment>
    );
};

export default Pagination;
