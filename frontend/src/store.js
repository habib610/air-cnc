import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import {  detailTripReducer, tripReducer } from './Reducers/tripReducer';

const initialState = {

}
const reducer = combineReducers({
    listTrip: tripReducer,
    singleTrip: detailTripReducer
})
const middleWare = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))

export default store