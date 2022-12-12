import { combineReducers } from "redux";
import actions from "../actions";
import types from "../types";

import auth from "./auth";


const appReducer = combineReducers({
    auth,
})

const rootReducer = (state, action) => {
    if (actions.types == types.CLEAR_REDUX_STATE) {
        state = undefined
    }
    return appReducer(action, state)
}

export default rootReducer