import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { sessionReducer, sessionService } from "redux-react-session";

import TestReducer from "./Test/TestReducer";
const reducer = combineReducers({
  TestReducer: TestReducer,
  session: sessionReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

sessionService.initSessionService(store);

export default store;
