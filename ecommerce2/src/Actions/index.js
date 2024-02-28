export const IncreaseItemCount = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                item: item
            }
        })
    }
}

export const DecreaseItemCount = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: {
                id: id
            }
        })
    }
}

export const ClearCart = () => {
    return (dispatch) => {
        dispatch({
            type: 'CLEAR_CART'
        })
    }
}