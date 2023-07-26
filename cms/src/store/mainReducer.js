const mainreducer = (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case 'ADD_USER': {
            let users = [...state.users];
            users = users ? users : [];
            users.push(payload.user);

            return {
                ...state,
                users: users
            };
        }

        case 'EDIT_USER': {
            let users = [...state.users];
            let userIndex = users.findIndex(user => user.id === payload.user.id)
            if (userIndex === 0 || userIndex) {
                users[userIndex] = payload.user;
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
            let index = users.findIndex(user => user.id === payload.id)
            if (index === 0 || index) {
                users.splice(index, 1)
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