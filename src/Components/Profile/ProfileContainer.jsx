import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile } from '..//..//redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';

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


let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

})


let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { getProfile })(withUrlDataContainerComponent)

