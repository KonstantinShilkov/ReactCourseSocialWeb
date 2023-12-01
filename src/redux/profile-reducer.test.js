import profileReducer, { addPost, deletePost } from "./profile-reducer"

let state = {
    posts: [
        { id: 1, message: "Hi, my name is Kostay", likesCount: 18 },
        { id: 2, message: "It's my second Post", likesCount: 15 },
        { id: 3, message: "One more for test", likesCount: 11 }
    ]
};

it('length of the posts should be incremented', () => {
    //1. test data
    let action = addPost("Test AddPost");
   
    // 2.action
    let newState = profileReducer(state, action)

    // 3. expected answer

expect(newState.posts.length).toBe(4); 

}); 

it(' after deleting length of posts should be decrement ', () => {
    //1. test data
    let action = deletePost(1);
    
    // 2.action
    let newState = profileReducer(state, action)

    // 3. expected answer

expect(newState.posts.length).toBe(2); 

}); 

it(' after deleting length of posts should not be decrement if postId unexisting  ', () => {
    //1. test data
    let action = deletePost(5);
    
    // 2.action
    let newState = profileReducer(state, action)

    // 3. expected answer

expect(newState.posts.length).toBe(3); 

}); 