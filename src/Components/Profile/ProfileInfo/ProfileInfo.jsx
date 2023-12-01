import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import defaultAvatar from "../../../assets/images/defaultAvatar.jpeg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

const ProfileInfo = ({profile, status, putProfileStatus}) => {

    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large != null ? profile.photos.large : defaultAvatar} className={s.largeAvatar} />
                <div className={s.fullName}>{profile.fullName}</div>
                <ProfileStatusWithHooks status={status} putProfileStatus={putProfileStatus}/>
                <div className={s.aboutMe} >
                    About Me : {profile.aboutMe}
                </div>
                <div className={s.constacts} >
                    Contacts:
                    <div className={s.contactsList}>
                        <span >"facebook": {profile.contacts.facebook === null ? "-" : profile.contacts.facebook}</span>
                        <span>"website": {profile.contacts.website === null ? "-" : profile.contacts.website}</span>
                        <span>"vk": {profile.contacts.vk === null ? "-" : profile.contacts.vk}</span>
                        <span>"twitter": {profile.contacts.twitter === null ? "-" : profile.contacts.twitte}</span>
                        <span>"instagram": {profile.contacts.instagram === null ? "-" : profile.contacts.instagram}</span>
                        <span>"youtube": {profile.contacts.youtube === null ? "-" : profile.contacts.youtube}</span>
                        <span>"github": {profile.contacts.github === null ? "-" : profile.contacts.github}</span>
                        <span>"mainLink": {profile.contacts.mainLink === null ? "-" : profile.contacts.mainLink}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo