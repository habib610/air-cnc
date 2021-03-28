import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import { cartAddReducer } from './Reducers/cartReducer';
import { createOrderReducer, detailsOrderReducer, orderPayReducer } from './Reducers/orderReducers';
import {  detailTripReducer, experienceTripReducer, tripReducer } from './Reducers/tripReducer';
import { userMessageReducer, userRegistrationReducer, userSingInReducer } from './Reducers/userReducer';

const initialState = {
    userSignIn: {
            userInfo: localStorage.getItem('userInfo')
              ? JSON.parse(localStorage.getItem('userInfo'))
              : null,
          },
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : {}
    },
    messageUser: {
        userMessage: localStorage.getItem('userMessage') ? JSON.parse(localStorage.getItem('userMessage')) : ''

    }
    

}
const reducer = combineReducers({
    listTrip: tripReducer,
    singleTrip: detailTripReducer,
    cart: cartAddReducer,
    userSignIn: userSingInReducer,
    userRegistration: userRegistrationReducer,
    messageUser: userMessageReducer,
    createdOrder: createOrderReducer,
    orderDetails: detailsOrderReducer,
    orderPay: orderPayReducer,
    experienceTrip: experienceTripReducer
})
const middleWare = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))

export default store