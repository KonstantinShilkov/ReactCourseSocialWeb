import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import defaultAvatar from "../../../assets/images/defaultAvatar.jpeg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import ProfileDataReduxForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, putProfileStatus, isOwner, savePhoto, saveProfile }) => {

    const [editMode, setEditMode] = useState(false)

    const activeEditMode = () => {
        setEditMode(true)
    }


    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || defaultAvatar} className={s.largeAvatar} />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

                {editMode ? <ProfileDataReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile} />
                    : <ProfileData isOwner={isOwner} profile={profile} activeEditMode={activeEditMode} />
                }
                <ProfileStatusWithHooks status={status} putProfileStatus={putProfileStatus} />
            </div>
        </div>

    )
}


const ProfileData = ({ profile, isOwner, activeEditMode }) => {
    return (
        <div>
            {isOwner && <div>  < button onClick={activeEditMode}> edit </button> </div>}
            <div className={s.fullName}>
                <b>Full Name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a Job </b>: {profile.lookingForAJob ? "defenetly" : "depend from the Salary"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My Proff Skils</b> : {profile.lookingForAJobDescription}
                </div>
            }
            <div className={s.aboutMe}>
                <b>About Me </b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}


export const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.constacts}> <b>{contactTitle}</b> : {contactValue} </div>
}

export default ProfileInfo

