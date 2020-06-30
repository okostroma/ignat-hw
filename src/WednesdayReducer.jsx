import {wednesdayAPI} from "./api/api";
import Swal from "sweetalert2";

const CHECK_INPUT = 'CHECK_INPUT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

const initialState = {
    checked: false,
    isFetching: false
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

        default:
            return state;
    }
}

export const checkInput = (checked) => ({type: CHECK_INPUT, checked})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})

export const postThunk = (checked) => {
    return (dispatch) => {
       dispatch(toggleFetching(true))
        wednesdayAPI.post(checked).then(data => {
            dispatch(toggleFetching(false))
            console.log(data)
            if (checked) {
                return Swal.fire({
                    title: 'success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Yes'
                })
            }


        })
    }
}

export default WednesdayReducer;