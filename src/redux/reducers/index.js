import { combineReducers } from "redux";

import general from "./general";


import initialState from "./initialState";

const rootReducer = combineReducers({

    general

});

export { rootReducer, initialState };
