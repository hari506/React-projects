const mainreducer = (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case 'ADD_USER': {
            let users = [...state.users];
            users = users ? users : [];
            /* get the last user in the users array to calculate the new user id */
            let lastUser = users[users.length - 1];
            payload.user.userId = lastUser ? lastUser.userId + 1 : 0;
            users.push(payload.user);
            //localStorage.setItem('users', JSON.stringify(users))
            let localUsers = JSON.parse(localStorage.getItem('users') || "[]")
            localUsers.push(payload.user)
            localStorage.setItem('users', JSON.stringify(localUsers));
            return {
                ...state,
                users: users
            };
        }

        case 'EDIT_USER': {
            let users = [...state.users];
            let userIndex = users.findIndex(user => user.userId === payload.user.userId)
            if (userIndex === 0 || userIndex) {
                users[userIndex] = payload.user;
            }

            {
                let localUsers = JSON.parse(localStorage.getItem('users'));
                let locaUserIndex = localUsers.findIndex(user => user.userId === payload.user.userId)
                if (locaUserIndex === 0 || locaUserIndex) {
                    localUsers[locaUserIndex] = payload.user;
                }

                localStorage.setItem('users', JSON.stringify(localUsers))

            }
            return {
                ...state,
                users: users
            }
        }

        case 'SET_USERS': {
            return {
                ...state,
                users: payload
            }
        }

        case 'DELETE_USER': {
            let users = [...state.users];
            console.log(payload.userId)
            let index = users.findIndex(user => user.userId === payload.userId)
            if (index === 0 || index) {
                users.splice(index, 1)
            }

            {
                let localUsers = JSON.parse(localStorage.getItem('users'));
                let localIndex = localUsers.findIndex(user => user.userId === payload.userId)
                if (localIndex === 0 || localIndex) {
                    localUsers.splice(localIndex, 1)
                }
                localStorage.setItem('users', JSON.stringify(localUsers))
            }

            return {
                ...state,
                users: users
            }
        }

        default: return state;
    }
}

export default mainreducer;