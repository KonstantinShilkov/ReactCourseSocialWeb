import React, { useEffect, useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activeEditMode = () => {
        setEditMode(true)
    }

    const deActiveEditMode = () => {
        setEditMode(false)
        props.putProfileStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activeEditMode}> {props.status || "Enter Your Status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deActiveEditMode} onChange={onStatusChange} value={status} />
                </div>
            }
        </div>
    )
}




export default ProfileStatusWithHooks