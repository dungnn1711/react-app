
import {
    REQUEST_GET_CHECKLIST,
    REQUEST_GET_CHECKLIST_SUCCESS,
    REQUEST_GET_CHECKLIST_FAILURE
} from "./actionTypes";
import {
    GetChecklistSuccessPayload,
    GetChecklistFailurePayload,
    GetChecklistRequest,
    GetChecklistSuccess,
    GetChecklistFailure,
} from "./types";

export const requestGetChecklist = (): GetChecklistRequest => ({
    type: REQUEST_GET_CHECKLIST,
});

export const requestGetChecklistSuccess = (
    payload: GetChecklistSuccessPayload
): GetChecklistSuccess => ({
    type: REQUEST_GET_CHECKLIST_SUCCESS,
    payload,
});

export const requestGetChecklistFailure = (
    payload: GetChecklistFailurePayload
): GetChecklistFailure => ({
    type: REQUEST_GET_CHECKLIST_FAILURE,
    payload,
});