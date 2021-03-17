import {
  LIST_TRIP_FAIL,
  LIST_TRIP_REQUEST,
  LIST_TRIP_SUCCESS,
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
