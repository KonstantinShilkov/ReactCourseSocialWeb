import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} key={m.id} />)

    let onSendNewMessage = () => {
        props.sendNewMessage()
    }

    let onNewMessageChange = (e) => {
        let messageText = e.target.value
        props.updateNewMessage(messageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesElements}>  {messagesElements}
                </div>
                <div>
                    <div> <textarea placeholder='Enter your message'
                        onChange={onNewMessageChange}
                        value={props.state.newMessageText}></textarea>
                    </div>
                    <div> <button onClick={onSendNewMessage}>Send</button> </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs