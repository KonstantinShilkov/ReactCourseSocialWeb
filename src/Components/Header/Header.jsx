import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrCXtELPLwJFnq4sdWbvL5F-HAxQspRqwZyA&usqp=CAU' />

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div> 
                    <div>{props.login} </div>
                    <div><button onClick={()=>{props.logout()}}>Logout</button> </div>
                    </div>
                : <NavLink to={"/login"}> Login </NavLink>
            }
        </div>
    </header>
}

export default Header

