import axios from "axios"

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
            payload: {
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

export const handlePlaceOrder = (callback) => {
    return async (dispatch, getState) => {
        try {
            let {cart, auth} = getState();
            if(!auth.localId){
                return callback({
                    error: true,
                    data: {
                        error: "user not authorised"
                    }
                })
            }

            const res = await axios.post(`https://react-ecommerce-565a4-default-rtdb.firebaseio.com/orders/${auth.localId}.json?auth=${auth.idToken}`, {
                ...cart
            })
            dispatch({
                type: "CLEAR_CART"
            })

            console.log(res);
            return callback({
                error: false,
                ...res.data
            })
            
        } catch (error) {
            console.log(error)
            return callback({
                error: true,
                ...error.response
            })
        }
    }
}