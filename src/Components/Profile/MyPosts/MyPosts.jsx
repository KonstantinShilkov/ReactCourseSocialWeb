import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/Validators/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder='eneter new post'
                    name={"newPostBody"} component={Textarea}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button > Add post </button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({ form: "profileAddPostForm" })(AddNewPostForm)

const MyPosts  = (props) => {

console.log("render")
console.log(props)
    let postsElements = props.state.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} key={p.id} />)

    let addNewPost = (formData) => {
        props.addPost(formData.newPostBody)
        formData.newPostBody = ""
    }
    return (
        <div className={s.postsBlock}>
            <h3>New Post</h3>
            <AddNewPostReduxForm onSubmit={addNewPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
 )
}

export default MyPosts  