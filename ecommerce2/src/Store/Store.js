import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import MainReducer from "../Reducers";
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(MainReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store;
