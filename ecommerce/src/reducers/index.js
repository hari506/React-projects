
import { combineReducers } from 'redux'
import authReducer from './authReducer';
const mainReducer = (state = {
    items: [],
    totalAmount: 0
}, action) => {
  switch(action.type){
    case 'ADD_ITEM' : {
        let items = [...state.items];
        let index = items.findIndex(item => item.id === action.payload.item.id)
        let totalAmount = state.totalAmount;
        if(index > -1){
            items[index] = {
                ...items[index],
                quantity: items[index].quantity + 1,
            }
        }else{
            items.push({
                ...action.payload.item,
                quantity: 1
            })
        }

        totalAmount = totalAmount + action.payload.item.discountedPrice;
        return {
            ...state,
            items: items,
            totalAmount: totalAmount
        }
    }

    case 'REMOVE_ITEM' : {
        let items = [...state.items];
        let index = items.findIndex(item => item.id === action.payload.id)
        let totalAmount = state.totalAmount;
        if(index > -1){
            totalAmount = totalAmount - items[index].discountedPrice
            if(items[index].quantity === 1){
                items.splice(index, 1)
            }else{
                items[index] = {
                    ...items[index],
                    quantity: items[index].quantity - 1
                }
            }
        }

        return {
            ...state,
            items: items,
            totalAmount: totalAmount
        }
    }

    case 'CLEAR_CART' : {
        return {
            ...state,
            items: [],
            totalAmount: 0
        }
    }

    default: return state
  }
}

export default combineReducers({
    cart: mainReducer,
    auth: authReducer
});