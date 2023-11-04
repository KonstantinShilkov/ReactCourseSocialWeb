import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
const Navbar = (props) => {


    const getClass = ({ isActive }) => {
        return isActive ? s.activeLink : undefined;
    }

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="profile" className={getClass}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="dialogs" className={getClass}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="news" className={getClass} >News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="music" className={getClass}>Music</NavLink>
            </div>
            <div className={s.itemUsers}>
                <NavLink to="users" className={getClass} > Find Users  </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="settings" className={getClass} >Settings</NavLink>
            </div>
        </nav>
    )
}


export default Navbar