import axios from "axios";
import {
  ALL_ORDER_FAIL,
  ALL_ORDER_REQUEST,
  ALL_ORDER_SUCCESS,
  CONFIRM_ORDER_FAIL,
  CONFIRM_ORDER_REQUEST,
  CONFIRM_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
} from "../Constants/orderConstant";

export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: CREATE_ORDER_REQUEST });
  try {
    const {
      userSignIn: { userInfo },
    } = getState();
    const { data } = await axios.post("/api/order/", order, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    localStorage.removeItem("cartItems");
    localStorage.removeItem("userMessage");
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detailsOrderAction = (id) => async (dispatch, getState) => {
  dispatch({ type: ORDER_DETAILS_REQUEST });
  try {
    const {
      userSignIn: { userInfo },
    } = getState();
    const { data } = await axios.get(`/api/order/${id}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const orderPayAction = (id, paymentResult) => async (
  dispatch,
  getState
) => {
  dispatch({ type: ORDER_PAY_REQUEST });
  try {
    const {
      userSignIn: { userInfo },
    } = getState();
    const { data } = await axios.put(`/api/order/${id}/pay`, paymentResult, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getListOrderAction = ()=> async(dispatch )=> {
  dispatch({type: ALL_ORDER_REQUEST})
  try {
    const {data} = await axios.get('/api/order')
    dispatch({type: ALL_ORDER_SUCCESS, payload: data})
  } catch (error) {
    dispatch({
      type: ALL_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}


export const confirmOrderAction = (id)  => async(dispatch, getState)=> {

  dispatch({type: CONFIRM_ORDER_REQUEST})
  try {
      const {
          userSignIn: { userInfo }
        } = getState();
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          }
        }

      const {data} = await axios.put(`/api/order/${id}/update`,{}, config )
      dispatch({type: CONFIRM_ORDER_SUCCESS, payload: data})
  } catch (error) {
      dispatch({type: CONFIRM_ORDER_FAIL, 
      payload: error.response && error.response.data.message  ? error.response.data.message : error.message
      })
  }
}