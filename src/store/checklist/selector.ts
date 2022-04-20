import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

// Lay du lieu ra khoi store
const getChecklist = (state: AppState) => state.checklist.data;

export const getChecklistSelector = createSelector(getChecklist, (data) => data);