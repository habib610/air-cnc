import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import { cartAddReducer } from './Reducers/cartReducer';
import {  detailTripReducer, tripReducer } from './Reducers/tripReducer';
import { userSingInReducer } from './Reducers/userReducer';

const initialState = {
    userSignIn: {
            userInfo: localStorage.getItem('userInfo')
              ? JSON.parse(localStorage.getItem('userInfo'))
              : null,
          },
    

}
const reducer = combineReducers({
    listTrip: tripReducer,
    singleTrip: detailTripReducer,
    cart: cartAddReducer,
    userSignIn: userSingInReducer
})
const middleWare = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))

export default store