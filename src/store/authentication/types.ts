import {
    REQUEST_LOGIN,
    REQUEST_LOGIN_SUCCESS,
    REQUEST_LOGIN_FAILURE,
} from "./actionTypes";

export interface User {
    username: string;
    password: string;
}

export type UserState = {
    readonly data?: User;
    readonly isAuthenticated: boolean;
};

export interface LoginRequestSuccessPayload {
    data: UserState;
}

export interface LoginRequestFailurePayload {
    error: string;
}

export interface LoginRequest {
    type: typeof REQUEST_LOGIN;
    payload?: User;
}

export type LoginRequestSuccess = {
    type: typeof REQUEST_LOGIN_SUCCESS;
    payload: LoginRequestSuccessPayload;
};

export type LoginRequestFailure = {
    type: typeof REQUEST_LOGIN_FAILURE;
    payload: LoginRequestFailurePayload;
};

export type AuthActions =
    | LoginRequest
    | LoginRequestSuccess
    | LoginRequestFailure;