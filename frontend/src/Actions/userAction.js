import {
  ORDER_MINE_FAIL,
  ORDER_MINE_REQUEST,
  ORDER_MINE_SUCCESS,
  USER_MESSAGE,
  USER_REGISTRATION_FAIL,
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESS,
  USER_SIGN_IN_FAIL,
  USER_SIGN_IN_REQUEST,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_OUT,
} from "../Constants/userConstant";
import axios from "axios";


export const userSingInAction = (email, password) => async (
  dispatch
) => {
  dispatch({ type: USER_SIGN_IN_REQUEST });
  try {
    const { data } = await axios.post("/api/users/signin", { email, password });
    dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_SIGN_IN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const userRegistrationAction = (name, email, password) => async(dispatch) => {
  dispatch({type: USER_REGISTRATION_REQUEST})
  try {
    const { data } = await axios.post("/api/users/registration", { name, email, password });
    dispatch({ type: USER_REGISTRATION_SUCCESS, payload: data });
    dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTRATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const userSignOutAction = () => (dispatch, getState)=> {
  dispatch({type: USER_SIGN_OUT})
  localStorage.removeItem('userInfo')
}


export const messageUserAction = (message) => (dispatch, getState) => {
  dispatch({type: USER_MESSAGE, payload: message})
  localStorage.setItem('userMessage', JSON.stringify(getState().messageUser.userMessage))
}


export const getMyOrderList = (id) => async(dispatch, getState)=> {
  dispatch({type: ORDER_MINE_REQUEST})
  try {
    const {
      userSignIn: { userInfo },
    } = getState();
    const {data} = await axios.get(`/api/order/mine/${id}`,
    { 
      headers: {
      Authorization: `Bearer ${userInfo.token}`,
    }
  })
  dispatch({type: ORDER_MINE_SUCCESS, payload: data})
  } catch (error) {
    dispatch({type: ORDER_MINE_FAIL,
      payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}