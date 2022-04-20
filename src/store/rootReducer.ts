import { combineReducers } from "redux";

import authReducer from "./authentication/reducer";
import checklistReducer from "./checklist/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    checklist: checklistReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;