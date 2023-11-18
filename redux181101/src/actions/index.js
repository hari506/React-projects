export let addItemToList = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                item: item
            }
        })
    }
}


export let removeItemFromList = (item) => {
    console.log(item)
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: {
                item: item
            }
        })
    }
}