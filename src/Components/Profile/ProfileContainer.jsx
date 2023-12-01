import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getProfileStatus, putProfileStatus } from '..//..//redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params} />
    )
}

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.params.useId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
    }
    render() {
        // console.log("render profile")
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    // console.log(" mapStateToProps profile")

    return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
    })
}

export default compose (
    connect(mapStateToProps, { getProfile, getProfileStatus, putProfileStatus }),
    WithAuthRedirect, withRouter)(ProfileContainer)
