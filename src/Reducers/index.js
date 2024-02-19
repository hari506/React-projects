let MainReduce = (state, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ADD_ITEM': {
            let items = [...state.items];
            let index = items.findIndex(item => item.id === payload.item.id);
            let totalAmount = state.totalAmount;
            if (index > -1) {
                items[index].quantity++;
                totalAmount += items[index].discountedPrice
            } else {
                payload.item.quantity = 1;
                totalAmount += payload.item.discountedPrice;
                items.push(payload.item);
            }

            return {
                ...state,
                items: [...items],
                totalAmount: totalAmount
            }
        }

        case 'REMOVE_ITEM': {
            let items = [...state.items];
            let index = items.findIndex(item => item.id === payload.id);
            let totalAmount = state.totalAmount;
            if (index > -1) {
                items[index].quantity--;
                totalAmount -= items[index].discountedPrice;
                if (items[index].quantity === 0) {
                    items.splice(index, 1)
                }
            }

            return {
                ...state,
                items: [...items],
                totalAmount: totalAmount
            }
        }

        case 'CLEAR_CART': {
            return {
                ...state,
                items: [],
                totalAmount: 0
            }
        }

        default:
            return {
                ...state
            }
    }
}

export default MainReduce;