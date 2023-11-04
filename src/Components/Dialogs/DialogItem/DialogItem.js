import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Igpp7PiR9AMDmdWmBWBp6r5AIxq-fL29OQ&usqp=CAU' />
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}


export default DialogItem