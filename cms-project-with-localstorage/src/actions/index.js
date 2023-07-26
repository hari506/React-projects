export const addUserAction = (userDetails) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_USER',
            payload: {
                user: userDetails
            }
        })
    }
}

export const editUserAction = (userDetails) => {
    return (dispatch) => {
        dispatch({
            type: 'EDIT_USER',
            payload: {
                user: userDetails
            }
        })
    }
}

export const deleteUserDetails = (userId) => {
    console.log(userId)
    return (dispatch) => {
        dispatch({
            type: 'DELETE_USER',
            payload: {userId: userId}
        })
    }
}

export const setUserDetails = (users) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_USERS',
            payload: users
        })
    }
}