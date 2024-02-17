import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import MainReduce from "../Reducers";

let store = createStore(MainReduce, {
    items: []
}, applyMiddleware(thunk))

export default store;
