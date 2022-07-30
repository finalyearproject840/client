import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { AdminReducer } from "./Admin/AdminReducer";
import { SupplierReducer } from "./Supplier/SupplierReducer";
const reducer = combineReducers({
  AdminState: AdminReducer,
  SupplierState: SupplierReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
