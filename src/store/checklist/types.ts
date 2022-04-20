import { BasicState } from "../basic/basic-state";
import {
    REQUEST_GET_CHECKLIST,
    REQUEST_GET_CHECKLIST_SUCCESS,
    REQUEST_GET_CHECKLIST_FAILURE,
} from "./actionTypes";

export interface ChecklistState extends BasicState { };

export type GetChecklistSuccessPayload = {
    data: ChecklistState;
}

export type GetChecklistFailurePayload = {
    error: string;
}

export type GetChecklistRequest = {
    type: typeof REQUEST_GET_CHECKLIST;
}

export type GetChecklistSuccess = {
    type: typeof REQUEST_GET_CHECKLIST_SUCCESS;
    payload: GetChecklistSuccessPayload;
};

export type GetChecklistFailure = {
    type: typeof REQUEST_GET_CHECKLIST_FAILURE;
    payload: GetChecklistFailurePayload;
};

export type ChecklistActions =
    | GetChecklistRequest
    | GetChecklistSuccess
    | GetChecklistFailure;