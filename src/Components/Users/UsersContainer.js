import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
       
    }
    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber,this.props.pageSize)

    }
    render() {
        return <>
            {this.props.isFetching ?
                <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    // debugger
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// const mapDispatchToProps = (dispatch) => {
//     // debugger
//     return {

//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, { getUsers,follow, unfollow })(UsersContainer);
