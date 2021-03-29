import { CART_ADD_ITEM,  } from "../Constants/cartConstants";

export const cartAddReducer = (state = {}, action) => {
    switch(action.type) {
        case CART_ADD_ITEM: 
        return {
            loading: false,
            cartItems: action.payload
        }
        default:
            return state;
    }
}