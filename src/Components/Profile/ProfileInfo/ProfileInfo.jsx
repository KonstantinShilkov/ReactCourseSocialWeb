import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import defaultAvatar from "../../../assets/images/defaultAvatar.jpeg"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=' className={s.mainImg} />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : defaultAvatar} className={s.largeAvatar} />
                <div className={s.fullName}>{props.profile.fullName}</div>
                <div className={s.aboutMe} >
                    About Me : {props.profile.aboutMe}
                </div>
                <div className={s.constacts} >
                    Contacts:
                    <div className={s.contactsList}>
                        <span >"facebook": {props.profile.contacts.facebook === null ? "-" : props.profile.contacts.facebook}</span>
                        <span>"website": {props.profile.contacts.website === null ? "-" : props.profile.contacts.website}</span>
                        <span>"vk": {props.profile.contacts.vk === null ? "-" : props.profile.contacts.vk}</span>
                        <span>"twitter": {props.profile.contacts.twitter === null ? "-" : props.profile.contacts.twitte}</span>
                        <span>"instagram": {props.profile.contacts.instagram === null ? "-" : props.profile.contacts.instagram}</span>
                        <span>"youtube": {props.profile.contacts.youtube === null ? "-" : props.profile.contacts.youtube}</span>
                        <span>"github": {props.profile.contacts.github === null ? "-" : props.profile.contacts.github}</span>
                        <span>"mainLink": {props.profile.contacts.mainLink === null ? "-" : props.profile.contacts.mainLink}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo