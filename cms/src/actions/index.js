export const addUserAction = (userDetails) => {
    return async (dispatch, getState) => {
        try {
            let { users } = getState();
            userDetails.id = users.length > 0 ? users[users.length - 1].id + 1 : 0;
            await fetch(`https://react-ecommerce-565a4-default-rtdb.firebaseio.com/users/users/${userDetails.id}.json`, {
                method: "put",
                body: JSON.stringify(userDetails)
            })

            dispatch({
                type: 'ADD_USER',
                payload: {
                    user: userDetails
                }
            })
        } catch (error) {
            console.log(error)
        }

    }
}

export const editUserAction = (userDetails) => {
    return async (dispatch) => {

        if (userDetails.id === 0 || userDetails.id) {
            await fetch(`https://react-ecommerce-565a4-default-rtdb.firebaseio.com/users/users/${userDetails.id}.json`, {
                method: "put",
                body: JSON.stringify(userDetails)
            })

            dispatch({
                type: 'EDIT_USER',
                payload: {
                    user: userDetails
                }
            })
        }

    }
}

export const deleteUserDetails = (userId) => {
    return async (dispatch, getState) => {
        let { users } = getState()
        console.log(users)
        console.log(userId)
        let index = users.findIndex(user => user.id === userId)
        if (index === 0 || index) {
            await fetch(`https://react-ecommerce-565a4-default-rtdb.firebaseio.com/users/users/${userId}.json`, {
                method: "delete"
            })

            dispatch({
                type: 'DELETE_USER',
                payload: {
                    id: userId
                }
            })
        }

    }
}

export const setUserDetails = (searchVal, callback) => {
    return async (dispatch) => {

        try {
            const url = 'https://react-ecommerce-565a4-default-rtdb.firebaseio.com/users/users.json';
            let response = await fetch(url, {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            //  
            let usersObj = await response.json();
            usersObj = usersObj ? usersObj : [];
            usersObj = usersObj.filter(user => user !== null)
            if (searchVal && usersObj.length > 1) {
                usersObj = usersObj?.filter(user => user.fname.search(searchVal) !== - 1 ? true : false)
            }

            dispatch({
                type: 'SET_USERS',
                payload: usersObj
            })
            console.log(usersObj)
            return callback({
                error: false
            })
        } catch (error) {
            console.log(error)
            return callback({
                error: true
            })
        }



    }
}