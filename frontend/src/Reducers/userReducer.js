import {
  ORDER_MINE_FAIL,
  ORDER_MINE_REQUEST,
  ORDER_MINE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_MESSAGE,
  USER_REGISTRATION_FAIL,
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESS,
  USER_SIGN_IN_FAIL,
  USER_SIGN_IN_REQUEST,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_OUT,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_RESET,
} from "../Constants/userConstant";

export const userSingInReducer = (
  state = { userInfo: {}, loading: true },
  action
) => {
  switch (action.type) {
    case USER_SIGN_IN_REQUEST:
      return { loading: true };
    case USER_SIGN_IN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGN_IN_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGN_OUT:
      return { loading: false, userInfo: {} };
    default:
      return state;
  }
};

export const userRegistrationReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_REGISTRATION_REQUEST:
      return { loading: true };
    case USER_REGISTRATION_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTRATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return (state = {});
  }
};

export const userMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_MESSAGE:
      return {
        userMessage: action.payload,
      };
    default:
      return state;
  }
};

export const getMyOrderReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case ORDER_MINE_REQUEST:
      return { loading: true };
    case ORDER_MINE_SUCCESS:
      return { loading: false, orderMine: action.payload };
    case ORDER_MINE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
   
    default:
      return state;
  }
};


export const userUpdateReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case UPDATE_USER_PROFILE_REQUEST:
        return { loading: true };
      case UPDATE_USER_PROFILE_SUCCESS:
        return { loading: false, success: true };
      case UPDATE_USER_PROFILE_FAIL:
        return { loading: false, success: false, error: action.payload };
      case UPDATE_USER_PROFILE_RESET:
        return {};
      default:
        return state;
    }
  };