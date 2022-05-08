import axios from "axios";
import {
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
        console.log("Data: ", data);

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

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};
