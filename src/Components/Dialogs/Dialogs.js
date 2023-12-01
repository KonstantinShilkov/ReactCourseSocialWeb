import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/Validators/validators';

const maxLength100 = maxLengthCreator(100)

const SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder='Enter your message'
                    name={"newMessageBody"}
                    component={Textarea}
                    validate = {[required,maxLength100]}
                />
            </div>
            <div> <button >Send</button> </div>
        </form>
    )
}

const SendMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(SendMessageForm)

const Dialogs = (props) => {

    const addNewMessage = (formData) => {
        props.sendNewMessage(formData.newMessageBody)
        formData.newMessageBody = ""
        console.log(formData)
    }

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} key={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesElements}>  {messagesElements}
                </div>
                <SendMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

export default Dialogs 