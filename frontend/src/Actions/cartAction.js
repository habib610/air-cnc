import axios from "axios"
import { CART_ADD_FAIL, CART_ADD_ITEM, CART_ADD_REQUEST } from "../Constants/cartConstants"

export const cartAddAction = (id,startDate, endDate, numOfGuest ) => async(dispatch, getState) => {
    dispatch({type: CART_ADD_REQUEST})
    try{
 const {data }= await axios.get(`/api/trips/${id}`)
    dispatch({type: CART_ADD_ITEM, 
        
        payload: {
                name: data.name,
                image: data.thumbnail,
                numReviews: data.numReviews,
                guestCapacity: data.guestCapacity,
                cleaner: data.cleaner,
                perPerson: data.perPerson,
                rating: data.rating,
                startDate, endDate, numOfGuest
    } })
    } catch(error) {
        dispatch({type: CART_ADD_FAIL, 
            payload: error.response && error.response.data.message  ? error.response.data.message : error.message
        })
    }
   
}