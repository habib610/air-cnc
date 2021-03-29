import {
  CART_ADD_ITEM,
} from "../Constants/cartConstants";

export const cartAddAction = (
  id,  name, thumbnail,  numReviews, guestCapacity, cleaner, perPerson, rating,  startDate, endDate,  numOfGuest, guideThumbnail, superHost
) => (dispatch, getState) => {
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id,  name, thumbnail,  numReviews, guestCapacity, cleaner, perPerson, rating,  startDate, endDate,  numOfGuest, guideThumbnail, superHost
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
