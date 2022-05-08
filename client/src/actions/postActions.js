import axios from "axios";
import {
    ALL_POST_FAIL,
    ALL_POST_REQUEST,
    ALL_POST_SUCCESS,
    CLEAR_ERRORS,
    NEW_POST_FAIL,
    NEW_POST_REQUEST,
    NEW_POST_SUCCESS,
} from "../constants/postConstants";

export const newPost = (postData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_POST_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(`/api/v1/post/new`, postData, config);

        dispatch({
            type: NEW_POST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_POST_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const getAllPosts = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_POST_REQUEST });

        const { data } = await axios.get(`/api/v1/post`);
        console.log("Data: ", data);

        dispatch({
            type: ALL_POST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_POST_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};
