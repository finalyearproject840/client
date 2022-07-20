import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import TestReducer from "./Test/TestReducer";
const reducer = combineReducers({ TestReducer: TestReducer });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
