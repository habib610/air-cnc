import axios from "axios"
import { UPLOAD_TRIP_FAIL, UPLOAD_TRIP_REQUEST, UPLOAD_TRIP_SUCCESS } from "../Constants/orderConstant"
import { DETAIL_TRIP_FAIL, DETAIL_TRIP_REQUEST, DETAIL_TRIP_SUCCESS, EXPERIENCE_TRIP_FAIL, EXPERIENCE_TRIP_REQUEST, EXPERIENCE_TRIP_SUCCESS, HOMES_TRIP_FAIL, HOMES_TRIP_REQUEST, HOMES_TRIP_SUCCESS, LIST_TRIP_FAIL, LIST_TRIP_REQUEST, LIST_TRIP_SUCCESS } from "../Constants/tripConstants"

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


export const experienceAction = () => async (dispatch) => {
    dispatch({type: EXPERIENCE_TRIP_REQUEST})
    try {
        const {data} = await axios.get('/api/trips/experience');
        dispatch({type: EXPERIENCE_TRIP_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: EXPERIENCE_TRIP_FAIL, payload: error.response && error.response.data.message  ? error.response.data.message : error.message
        
        })
    }
}
export const homesAction = () => async (dispatch) => {
    dispatch({type: HOMES_TRIP_REQUEST})
    try {
        const {data} = await axios.get('/api/trips/homes');
        dispatch({type: HOMES_TRIP_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: HOMES_TRIP_FAIL, payload: error.response && error.response.data.message  ? error.response.data.message : error.message
        
        })
    }
}


export const uploadTripAction = (trip) => async(dispatch, getState)=> {
    console.log(trip)
    dispatch({type: UPLOAD_TRIP_REQUEST})
    try {
        const {
            userSignIn: { userInfo },
          } = getState();
        const {data} = await axios.post('/api/trips', trip, {
            
                headers: {
                  Authorization: `Bearer ${userInfo.token}`,
                },
        })
        dispatch({type: UPLOAD_TRIP_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: UPLOAD_TRIP_FAIL, 
        payload: error.response && error.response.data.message  ? error.response.data.message : error.message
        })
    }
}