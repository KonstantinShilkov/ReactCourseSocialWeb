import React from 'react';
import s from './../Dialogs.module.css';



const Message = (props) => {
    return (
        <div className={s.message}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Igpp7PiR9AMDmdWmBWBp6r5AIxq-fL29OQ&usqp=CAU' />
            {props.message}
            </div>
    )
}

export default Message