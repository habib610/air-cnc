import axios from "axios"
import { LIST_TRIP_FAIL, LIST_TRIP_REQUEST, LIST_TRIP_SUCCESS } from "../Constants/tripConstants"

export const listTripActions = () => async(dispatch) => {
    dispatch({type: LIST_TRIP_REQUEST})
    try{
        const {data} = await axios.get('/api/trips')
        dispatch({type: LIST_TRIP_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type: LIST_TRIP_FAIL, 
            payload: error.response && error.response.data.message  ? error.response.data.message : error.message
        })
    }
}