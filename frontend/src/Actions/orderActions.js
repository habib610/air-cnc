import axios from "axios"
import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, } from "../Constants/orderConstant"

export const createOrder = (order) => async (dispatch, getState) => {
    dispatch({type: CREATE_ORDER_REQUEST})
    try {
        const {userSignIn: {userInfo}} = getState()
        const {data} = await axios.post('/api/order/', order, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        dispatch({type: CREATE_ORDER_SUCCESS, payload: data})
        localStorage.removeItem("cartItems")
        localStorage.removeItem("userMessage")
    } catch (error) {
        dispatch({type: CREATE_ORDER_FAIL,
            payload: error.response && error.response.data.message  ? error.response.data.message : error.message
        })
    }
}

export const detailsOrderAction = (id)=> async(dispatch, getState)=> {
    dispatch({type: ORDER_DETAILS_REQUEST})
    try{
        const {userSignIn: {userInfo}} = getState()
        const {data} = await axios.get(`/api/order/${id}`,{
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        })
            dispatch({type: ORDER_DETAILS_SUCCESS, payload: data})
    } catch(error){
        dispatch({type: ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.message  ? error.response.data.message : error.message
        })
    }
}