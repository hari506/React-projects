const redux = require("redux")
const thunk = require("redux-thunk").default

let mainReudcer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'INCREAMENT_COUNTER':
            return {
                ...state,
                count: state.count + 1
            }

        case 'DECREAMENT_COUNTER':
            return {
                ...state,
                count: state.count - 1
            }

        case 'INCREAMENT_BY_VALUE':
            return {
                ...state,
                count: state.count + payload.value
            }

        case 'DECREAMENT_BY_VALUE':
            return {
                ...state,
                count: state.count - payload.value
            }

        default:
            return {
                ...state
            }
    }
}

let store = redux.createStore(
    mainReudcer,
    { count: 0 },
    redux.applyMiddleware(thunk)
);

let dispatchedAction = () => {
    console.log(store.getState())
}

const IncreamentCount = (value) => {
    let type = 'INCREAMENT_COUNTER';
    let payload = {};
    if (value) {
        type = 'INCREAMENT_BY_VALUE'
        payload = {
            value: value
        }
    }

    return (dispath) => {
        dispath({
            type: type,
            payload: payload
        })
    }
}


const DecreamentCount = (value) => {
    let type = 'DECREAMENT_COUNTER';
    let payload = {};
    if (value) {
        type = 'DECREAMENT_BY_VALUE';
        payload = {
            value: value
        }
    }

    return (dispatch) => {
        dispatch({
            type: type,
            payload: payload
        })
    }
}

store.subscribe(dispatchedAction)

store.dispatch(IncreamentCount())

store.dispatch(DecreamentCount())

store.dispatch(IncreamentCount(10))

store.dispatch(DecreamentCount(5))

store.dispatch(IncreamentCount(10))

store.dispatch(DecreamentCount(5))
