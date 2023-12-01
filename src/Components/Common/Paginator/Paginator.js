import React from 'react';
import s from "./Paginator.module.css";


let Paginator = ({ totalUsersCount, pageSize, onPageChanged, currentPage }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(p => {
                return <span onClick={(e) => { onPageChanged(p); }} className={currentPage === p ? s.selectedPage : undefined} >{p}</span>
            })}
        </div>
    )
}

export default Paginator
