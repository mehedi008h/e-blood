import {
    ALL_POST_FAIL,
    ALL_POST_REQUEST,
    ALL_POST_SUCCESS,
    CLEAR_ERRORS,
    NEW_POST_FAIL,
    NEW_POST_REQUEST,
    NEW_POST_RESET,
    NEW_POST_SUCCESS,
} from "../constants/postConstants";

export const newPostReducer = (state = { post: {} }, action) => {
    switch (action.type) {
        case NEW_POST_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case NEW_POST_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                post: action.payload.post,
            };

        case NEW_POST_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        case NEW_POST_RESET:
            return {
                ...state,
                success: false,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

export const postsReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case ALL_POST_REQUEST:
            return {
                loading: true,
                posts: [],
            };

        case ALL_POST_SUCCESS:
            return {
                loading: false,
                posts: action.payload.bloodPost,
            };

        case ALL_POST_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};
