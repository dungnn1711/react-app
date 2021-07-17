import { all, call, put, takeLatest } from "redux-saga/effects";

import { loginToServer } from "../../api/auth-api";
import { requestLoginFailure, requestLoginSuccess } from "./actions";
import { REQUEST_LOGIN } from "./actionTypes";
import { UserState } from "./types";


function* handleLogin(action: any) {
    try {
        const user = {
            username: action.payload.username,
            password: action.payload.password
        }
        const result: { data: UserState } = yield call(loginToServer, user);
        yield put(requestLoginSuccess({
            data: {
                data: result.data.data,
                isAuthenticated: result.data.isAuthenticated
            }
        }));
    } catch (e) {
        yield put(requestLoginFailure({
            error: e.message
        }));
    }
}

/**
 * Nhung action lien quan den auth se  lang nghe o day
 * Vi du nhu login request, logout reqest...
 */
function* authWatcher() {
    yield all([takeLatest(REQUEST_LOGIN, handleLogin)]);
}

export { authWatcher };