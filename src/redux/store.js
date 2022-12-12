import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from './reducers'
const middlewear = [thunk]
export default createStore(reducers, applyMiddleware(...middlewear))
