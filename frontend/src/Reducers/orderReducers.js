import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS} from "../Constants/orderConstant";


export const createOrderReducer = (state = {}, action)=> {
    switch(action.type) {
        case CREATE_ORDER_REQUEST:
            return {loading: true} 
        case CREATE_ORDER_SUCCESS:
            return {loading: false, success: true, orderItems: action.payload} 
        case CREATE_ORDER_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state 
    }

}

export const detailsOrderReducer = (state = {loading: true}, action)=> {
    switch(action.type){
        case ORDER_DETAILS_REQUEST:
            return{loading: true}
        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false, order: action.payload
            }
        case ORDER_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
