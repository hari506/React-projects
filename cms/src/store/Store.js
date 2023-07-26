import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import mainreducer from "./mainReducer";

let store = createStore(
    mainreducer,
    { users: [] },
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;