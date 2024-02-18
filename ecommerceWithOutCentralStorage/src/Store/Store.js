import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import MainReduce from "../Reducers";
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(MainReduce, {
    items: []
}, composeWithDevTools(applyMiddleware(thunk)))

export default store;
