let mainReducer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ADD_ITEM': {
            let newItems = [...state.items];
            if(payload.item){
                newItems.push(payload.item)
            }

            return {
                ...state,
                items: [...newItems],
                itemsCount: newItems.lengths
            }
        }

        case 'REMOVE_ITEM': {
            console.log("remove item called");
            let newItems = [...state.items];
            let index = newItems.findIndex(item => item.name === payload.item.name);
            if(index > -1){
                newItems.splice(index, 1);
            }

            return {
                ...state,
                items: [...newItems],
                itemsCount: newItems.length
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default mainReducer;