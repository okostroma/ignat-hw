import {wednesdayAPI} from "./api/api";
import Swal from "sweetalert2";

const CHECK_INPUT = 'CHECK_INPUT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const SET_ANSWER = 'SET_ANSWER'

const initialState = {
    checked: false,
    isFetching: false,
    serverAnswer: 'server will answer you here'
}


const WednesdayReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHECK_INPUT: {

            return {
                ...state, checked: action.checked

            }
        }
        case TOGGLE_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case SET_ANSWER: {
            return {
                ...state, serverAnswer: action.serverAnswer
            }

        }

        default:
            return state;
    }
}

export const checkInput = (checked) => ({type: CHECK_INPUT, checked})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const setAnswer = (serverAnswer) => ({type: SET_ANSWER, serverAnswer})

export const postThunk = (checked) => {
    return (dispatch) => {
       dispatch(toggleFetching(true))
        wednesdayAPI.post(checked).then(data => {
            dispatch(toggleFetching(false))
            console.log(data)
            dispatch(setAnswer('OK:-)'))
        }).catch(e => {
            dispatch(setAnswer('ERROR!!!'))
            console.log(e)
            dispatch(toggleFetching(false))
        })
    }
}

export default WednesdayReducer;