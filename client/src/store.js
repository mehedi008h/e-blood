import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/authReducers";
import { userReducer } from "./reducers/userReducers";
import {
    newPostReducer,
    postReducer,
    postsReducer,
} from "./reducers/postReducers";

const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,

    // post
    newPost: newPostReducer,
    posts: postsReducer,
    post: postReducer,
});

const middlware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
