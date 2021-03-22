import { CART_ADD_FAIL, CART_ADD_ITEM, CART_ADD_REQUEST } from "../Constants/cartConstants";

export const cartAddReducer = (state = { loading: true,  cartItems: {}}, action) => {
    switch(action.type) {
        case CART_ADD_REQUEST:
            return {loading: true}
        case CART_ADD_ITEM: 
        return {
            loading: false,
            cartItems: action.payload
        }
        case CART_ADD_FAIL:
            return {
                loading: false, 
                error: action.payload
            }
        default:
            return state;
    }
}