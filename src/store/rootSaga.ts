import { all, fork } from "redux-saga/effects";

import { authWatcher } from "./authentication/sagas";
import { checklistWatcher } from "./checklist/sagas";

export function* rootSaga() {
    yield all([fork(authWatcher)]);
    yield all([fork(checklistWatcher)]);
}