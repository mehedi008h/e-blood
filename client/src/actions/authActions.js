import axios from "axios";
import {
    ACTIVE_EMAIL_FAIL,
    ACTIVE_EMAIL_REQUEST,
    ACTIVE_EMAIL_SUCCESS,
    CLEAR_ERRORS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
} from "../constants/authConstants";
// Register user
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post("/api/v1/register", userData, config);

        console.log("User", data);

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Reset password
export const activeEmail = (activation_token) => async (dispatch) => {
    try {
        dispatch({ type: ACTIVE_EMAIL_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const { data } = await axios.post(
            `/api/v1/activation`,
            { activation_token },
            config
        );

        console.log(data);

        dispatch({
            type: ACTIVE_EMAIL_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ACTIVE_EMAIL_FAIL,
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
