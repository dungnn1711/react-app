import {
    REQUEST_GET_CHECKLIST,
    REQUEST_GET_CHECKLIST_SUCCESS,
    REQUEST_GET_CHECKLIST_FAILURE,
} from "./actionTypes";
import { ChecklistActions, ChecklistState } from "./types";

const initialState: ChecklistState = {
    data: [],
};

export default (state = initialState, action: ChecklistActions) => {
    switch (action.type) {
        case REQUEST_GET_CHECKLIST:
            return {
                ...state,
            };
        case REQUEST_GET_CHECKLIST_SUCCESS:
            return {
                ...state,
                data: action.payload.data.data,
            };
        case REQUEST_GET_CHECKLIST_FAILURE:
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