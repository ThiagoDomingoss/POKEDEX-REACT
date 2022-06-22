import React from "react";

const Pagination = (props) => {
    const {page, totalPages, onPrevClick, onNextClick} = props
    return(
        <div className="pagination-container">
            <button onClick={onPrevClick}>Prev</button>
            <div>{page} of {totalPages}</div>
            <button onClick={onNextClick}>Next</button>
        </div>
    )
}

export default Pagination