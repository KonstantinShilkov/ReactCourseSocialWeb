import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />)

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChangeText(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>New Post</h3>
            <div>
                <div>
                    <textarea
                        placeholder='eneter new post'
                        onChange={onPostChange}
                        value={props.state.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost} > Add post </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts 