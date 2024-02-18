let MainReduce = (state, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ADD_ITEM': {
            let items = [...state.items];
            let index = items.findIndex(item => item.id === payload.item.id);
            if (index > -1) {
                items[index].quantity++;
            } else {
                payload.item.quantity = 1;
                items.push(payload.item);
            }

            return {
                ...state,
                items: [...items]
            }
        }
            break;

        case 'REMOVE_ITEM': {
            let items = [...state.items];
            let index = items.findIndex(item => item.id === payload.id);
            if (index > -1) {
                items[index].quantity--;
                if (items[index].quantity === 0) {
                    items.splice(index, 1)
                }

                return {
                    ...state,
                    items: [...items]
                }
            }

        }

            break;

        case 'CLEAR_CART': {
            return {
                ...state,
                items: []
            }
        }

            break;

        default:
            return {
                ...state
            }
    }
}

export default MainReduce;