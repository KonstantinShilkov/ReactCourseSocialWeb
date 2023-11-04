import { addPostActionCreater, onPostChangeActionCreater } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        state : state.profilePage
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        onPostChangeText: (text) => {
            let action = onPostChangeActionCreater(text)
            dispatch(action)},
        addPost:()=> {
            dispatch(addPostActionCreater())}
    }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer