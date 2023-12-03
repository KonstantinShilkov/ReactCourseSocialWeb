import React from 'react';
import s from './ProfileInfo.module.css';
// import Preloader from '../../Common/Preloader/Preloader';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    onEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    offEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.putProfileStatus(this.state.status)
    }

Change = (e) => {
        this.setState({
            status: e.target.value
        })
    }
    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.onEditMode}> {this.props.status || "Enter Your First Status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.offEditMode} value={this.state.status} onChange={this.Change} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus