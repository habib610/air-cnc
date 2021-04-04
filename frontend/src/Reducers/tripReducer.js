import { UPLOAD_TRIP_FAIL, UPLOAD_TRIP_REQUEST, UPLOAD_TRIP_SUCCESS } from "../Constants/orderConstant";
import {
  LIST_TRIP_FAIL,
  LIST_TRIP_REQUEST,
  LIST_TRIP_SUCCESS,
  DETAIL_TRIP_FAIL,
  DETAIL_TRIP_REQUEST,
  DETAIL_TRIP_SUCCESS,
  EXPERIENCE_TRIP_REQUEST,
  EXPERIENCE_TRIP_SUCCESS,
  EXPERIENCE_TRIP_FAIL,
  HOMES_TRIP_REQUEST,
  HOMES_TRIP_SUCCESS,
  HOMES_TRIP_FAIL,
} from "../Constants/tripConstants";

export const tripReducer = (
  state = { trips: [], homes: [], experiences: [], loading: true },
  action
) => {
  switch (action.type) {
    case LIST_TRIP_REQUEST:
      return { loading: true };
    case LIST_TRIP_SUCCESS:
      const tempExperience = action.payload.filter(
        (item) => item.category === "experiences"
      );
      const tempHomes = action.payload.filter(
        (item) => item.category === "homes"
      );
      return {
        loading: false,
        trips: action.payload,
        homes: tempHomes,
        experiences: tempExperience,
      };
    case LIST_TRIP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const detailTripReducer = (state = {trip: {}, loading: true}, action) => {
  switch(action.type){
    case DETAIL_TRIP_REQUEST:
      return {loading: true}
    case DETAIL_TRIP_SUCCESS:
      return {loading: false, trip: action.payload}
    case DETAIL_TRIP_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}

export const experienceTripReducer = (state = {loading: true}, action) => {
  switch(action.type){
    case EXPERIENCE_TRIP_REQUEST:
      return {loading: true}
    case EXPERIENCE_TRIP_SUCCESS:
      return {loading: false, experience: action.payload}
    case EXPERIENCE_TRIP_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}

export const homesTripReducer = (state = {loading: true}, action) => {
  switch(action.type){
    case HOMES_TRIP_REQUEST:
      return {loading: true}
    case HOMES_TRIP_SUCCESS:
      return {loading: false, homes: action.payload}
    case HOMES_TRIP_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}

export const uploadTripReducer = (state = {}, action) => {
  switch(action.type) {
    case UPLOAD_TRIP_REQUEST:
      return {loading: true} 
      case UPLOAD_TRIP_SUCCESS:
        return {loading: false, success: true, message: action.payload} 
      case UPLOAD_TRIP_FAIL: 
        return {loading: false, error: action.payload}
    default:
    return state
  }
}