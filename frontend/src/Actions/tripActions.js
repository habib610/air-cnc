import axios from "axios"
import { DETAIL_TRIP_FAIL, DETAIL_TRIP_REQUEST, DETAIL_TRIP_SUCCESS, LIST_TRIP_FAIL, LIST_TRIP_REQUEST, LIST_TRIP_SUCCESS } from "../Constants/tripConstants"

export const listTripActions = (keyword = '') => async(dispatch) => {
    dispatch({type: LIST_TRIP_REQUEST})
    try{
        const {data} = await axios.get(`/api/trips?keyword=${keyword}`)
        dispatch({type: LIST_TRIP_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type: LIST_TRIP_FAIL, 
            payload: error.response && error.response.data.message  ? error.response.data.message : error.message
        })
    }
}


export const detailTripAction = (id) => async (dispatch) => {
    dispatch({type: DETAIL_TRIP_REQUEST})
    try {
        const {data} = await axios.get(`/api/trips/${id}`)
        dispatch({type: DETAIL_TRIP_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({type: DETAIL_TRIP_FAIL, 
            payload: error.response && error.response.data.message  ? error.response.data.message : error.message})
    }
}