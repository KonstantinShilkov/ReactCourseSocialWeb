import React, { useState } from 'react';
import s from "./Paginator.module.css";
import cn from 'classnames';

const Paginator = ({ totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 20 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rigthPortionPageNumber = portionNumber * portionSize

    return (<div className={cn(s.paginator)}>
        {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)} > Prev </button>
        }
        <button onClick={() => setPortionNumber(1)} >  first page </button>
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rigthPortionPageNumber)
            .map(p => {
                
                return <span className={cn({[s.selectedPage]:currentPage === p }, s.pageNumber)}
                    key={p}
                    onClick={(e) => {
                        onPageChanged(p);
                    }} >{p}</span>
            })}

        {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)} > Next </button>}


        <button onClick={() => setPortionNumber(portionCount - 1)} >  last page </button>

    </div>
    )
}

export default Paginator
