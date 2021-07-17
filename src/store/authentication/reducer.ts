import {
    REQUEST_LOGIN,
    REQUEST_LOGIN_SUCCESS,
    REQUEST_LOGIN_FAILURE,
} from "./actionTypes";

import { AuthActions, UserState } from "./types";

const initialState: UserState = {
    data: {
        username: '',
        password: '',
    },
    isAuthenticated: false,
};

export default (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {
                ...state,
                isAuthenticated: false,
            };
        case REQUEST_LOGIN_SUCCESS:
            return {
                ...state,
                data: action.payload.data.data,
                isAuthenticated: action.payload.data.isAuthenticated
            };
        case REQUEST_LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            };
        default:
            return {
                ...state,
            };
    }
};