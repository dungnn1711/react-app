import { all, call, put, takeLatest } from "redux-saga/effects";

import { getChecklistAPI } from "../../api/checklist-api";
import { CheckListItemModel } from "../../model";
import { requestGetChecklistFailure, requestGetChecklistSuccess } from "./actions";
import { REQUEST_GET_CHECKLIST } from "./actionTypes";


function* handleChecklistFetching() {
    try {
        const result: Array<CheckListItemModel> = yield call(getChecklistAPI);
        yield put(requestGetChecklistSuccess({
            data: {
                data: result,
            }
        }));
    } catch (e: any) {
        yield put(requestGetChecklistFailure({
            error: e.message
        }));
    }
}

function* checklistWatcher() {
    yield all([takeLatest(REQUEST_GET_CHECKLIST, handleChecklistFetching)]);
}

export { checklistWatcher };