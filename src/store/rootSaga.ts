import { all, fork } from "redux-saga/effects";

import { authWatcher } from "./authentication/sagas";

export function* rootSaga() {
    yield all([fork(authWatcher)]);
}