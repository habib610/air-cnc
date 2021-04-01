import { ALL_ORDER_FAIL, ALL_ORDER_REQUEST, ALL_ORDER_SUCCESS, CONFIRM_ORDER_FAIL, CONFIRM_ORDER_REQUEST, CONFIRM_ORDER_RESET, CONFIRM_ORDER_SUCCESS, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_RESET, ORDER_PAY_SUCCESS} from "../Constants/orderConstant";


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


export const orderPayReducer = (state = {}, action)=> {
    switch(action.type){
        case ORDER_PAY_REQUEST:
         return {loading: true}
        case ORDER_PAY_SUCCESS:
          return {loading: false, success: true} 
        case ORDER_PAY_FAIL:
           return {loading: false, error: action.payload }
        case ORDER_PAY_RESET:
            return {}
        default:
            return state
    }
}

export const getListOrderReducer = (state = { loading: true }, action)=> {
    switch (action.type) {
        case ALL_ORDER_REQUEST:
            return {loading: true}  
        case ALL_ORDER_SUCCESS:
            return { loading: false, allOrder: action.payload }
        case ALL_ORDER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const confirmOrderReducer = (state = {}, action)=> {
    switch (action.type) {
        case CONFIRM_ORDER_REQUEST:
            return {loading: true}
        case CONFIRM_ORDER_SUCCESS:
            return {loading: false, success: true}
        case CONFIRM_ORDER_FAIL:
            return {loading: false, error: action.payload}
        case CONFIRM_ORDER_RESET:
            return {}
        default:
           return state
    }
}