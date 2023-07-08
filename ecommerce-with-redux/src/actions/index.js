export const increamentItemAction = item => {
    return dispatch => {
        dispatch({
            type: "ADD_ITEM",
            payload: {
                item: item
            }
        })
    }
}

export const decreamentItemAction = id => {
    return dispatch => {
        dispatch({
            type: "REMOVE_ITEM",
            payload:{
                id: id
            }
        })
    }
}

export const clearCartAction = () => {
    return dispatch => {
        dispatch({
            type: "CLEAR_CART"
        })
    }
}