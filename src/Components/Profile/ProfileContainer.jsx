import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile } from '..//..//redux/profile-reducer';
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
            userId = 30275
        }
        this.props.getProfile(userId)
    }
    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default compose (
    connect(mapStateToProps, { getProfile }),
    withRouter,
    WithAuthRedirect)(ProfileContainer)

