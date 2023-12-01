import { addPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        state : state.profilePage.posts
    }
};

// const mapDispatchToProps = (dispatch)=> {
//     return {
//         onPostChangeText: (text) => {
//             let action = onPostChangeActionCreater(text)
//             dispatch(action)},
//         addPost:()=> {
//             dispatch(addPostActionCreater())}
//     }
// }

const MyPostsContainer = connect(mapStateToProps,{addPost})(MyPosts);


export default MyPostsContainer