import React from 'react';
import { PAGES } from '../constants';
import { isLastPage } from '../helpers';

const Item = ({ value, isFirst, isLast, hasStarted }) => {
    return <div className={`item-wrapper ${hasStarted ? 'complete' : ''}`}>
        { !isFirst ? <div className="line"/> : null}
        <div className="item">
        {value}
        </div>
        { !isLast ? <div className="line"/> : null}
    </div>
}

const PaginationProgressBar = ({ currentPage }) => {
    return (<div className="progress-bar">
        {
            Object.values(PAGES).map((page, index ) => {
                return <Item key={index} value={page} isFirst={index === 0} isLast={isLastPage(page)} hasStarted={page <= currentPage}/>
            })
        }
    </div>)
}

export default PaginationProgressBar;