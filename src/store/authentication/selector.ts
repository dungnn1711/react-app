import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

// Lay du lieu ra khoi store
const getAuthStatus = (state: AppState) => state.auth.isAuthenticated;

export const getAuthSelector = createSelector(getAuthStatus, (isAuthenticated) => isAuthenticated);