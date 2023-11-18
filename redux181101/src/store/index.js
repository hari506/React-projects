import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from '../reducers';

let store = createStore(mainReducer, {
    items: [
        {name: 'hari', age: 33},
        {name: 'bhanu', age: 32}
    ],
    itemsCount: 2
}, composeWithDevTools(applyMiddleware(thunk)));


export default store;
