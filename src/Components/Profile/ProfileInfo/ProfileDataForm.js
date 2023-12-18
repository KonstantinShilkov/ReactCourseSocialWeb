import React from 'react';
import { Input, Textarea, createField } from '../../Common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css';
import { reduxForm } from 'redux-form';
import formStyle from './/../../Common/FormsControls/FormsControls.module.css'


const ProfileDataForm = ({ handleSubmit, profile, error }) => {

console.log(error)
    return (
        <form onSubmit={handleSubmit}>

            {<div>  < button  > save </button> </div>}
            {error && <div className={formStyle.formSummaryError}>
                {error}
            </div>
            }
            <div className={s.fullName}>
                <b>Full Name</b>:
                {createField("Full Name", "fullName", null, Input)}
            </div>
            <div>
                <b>Looking for a Job </b>:
                {createField("", "lookingForAJob", null, Input, { type: "checkbox" })}
            </div>

            <div>
                <b>My Proff Skils</b> :
                {createField("Put Your Special Skills", "lookingForAJobDescription", null, Textarea)}
            </div>

            <div className={s.aboutMe}>
                <b>About Me </b>:
                {createField("About me", "aboutMe", null, Textarea)}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div className={s.contact} key={key}>
                        <b>{key} :  {createField(key, "contacts."+ key, null, Input)} </b> 
                         </div> 
                })}
            </div>
            

        </form>
    )
}

const ProfileDataReduxForm = reduxForm({ form:"edit-profile" })(ProfileDataForm)


export default ProfileDataReduxForm


