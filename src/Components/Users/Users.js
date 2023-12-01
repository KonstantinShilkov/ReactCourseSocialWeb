import React from 'react';
import s from "./Users.module.css";
import Paginator from '../Common/Paginator/Paginator';
import User from './User';

let Users = ({ totalUsersCount, pageSize, onPageChanged,
    currentPage, users, followingInProgress,
    unfollow, follow, ...props }) => {
    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                currentPage={currentPage} />
            <div>
                {
                    users.map(u =>
                        <User key={u.id}
                            user={u}
                            followingInProgress={followingInProgress}
                            unfollow={unfollow}
                            follow={follow} />
                    )
                }
            </div>
        </div>
    )
}

export default Users

