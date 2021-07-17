
import {
    REQUEST_LOGIN,
    REQUEST_LOGIN_FAILURE,
    REQUEST_LOGIN_SUCCESS
} from "./actionTypes";
import {
    LoginRequest,
    LoginRequestSuccessPayload,
    LoginRequestSuccess,
    LoginRequestFailurePayload,
    LoginRequestFailure,
    User
} from "./types";

export const requestLogin = (
    payload?: User
): LoginRequest => ({
    type: REQUEST_LOGIN,
    payload,
});

export const requestLoginSuccess = (
    payload: LoginRequestSuccessPayload
): LoginRequestSuccess => ({
    type: REQUEST_LOGIN_SUCCESS,
    payload,
});

export const requestLoginFailure = (
    payload: LoginRequestFailurePayload
): LoginRequestFailure => ({
    type: REQUEST_LOGIN_FAILURE,
    payload,
});