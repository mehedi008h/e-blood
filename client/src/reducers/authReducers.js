import {
    ACTIVE_EMAIL_FAIL,
    ACTIVE_EMAIL_REQUEST,
    ACTIVE_EMAIL_SUCCESS,
    CLEAR_ERRORS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
} from "../constants/authConstants";

export const authReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case ACTIVE_EMAIL_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload.user,
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                success: action.payload.success,
                message: action.payload.message,
            };

        case ACTIVE_EMAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                success: action.payload.success,
                user: action.payload.user,
            };

        case LOGIN_FAIL:
        case ACTIVE_EMAIL_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        case REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                success: action.payload.success,
                message: action.payload.message,
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
