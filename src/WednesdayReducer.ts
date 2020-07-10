import {wednesdayAPI} from "./api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import { AppStateType } from "./store";

const CHECK_INPUT = 'CHECK_INPUT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const SET_ANSWER = 'SET_ANSWER'

type initialStateType = {
    checked: boolean,
    isFetching: boolean,
    serverAnswer: string

}

const initialState: initialStateType = {
    checked: false,
    isFetching: false,
    serverAnswer: 'server will answer you here'
}


const WednesdayReducer = (state: initialStateType = initialState, action: appActionsTypes) => {

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
type appActionsTypes = checkInputType | toggleFetchingType | setAnswerType ;

type checkInputType = {
    type: typeof CHECK_INPUT
    checked: boolean
}

type toggleFetchingType = {
    type: typeof TOGGLE_FETCHING
    isFetching: boolean
}
type setAnswerType = {
    type: typeof SET_ANSWER
    serverAnswer: string
}


export const checkInput = (checked: boolean):checkInputType => ({type: CHECK_INPUT, checked})
export const toggleFetching = (isFetching: boolean):toggleFetchingType => ({type: TOGGLE_FETCHING, isFetching})
export const setAnswer = (serverAnswer: string): setAnswerType => ({type: SET_ANSWER, serverAnswer})

type ThunkType  = ThunkAction<void, AppStateType , unknown, appActionsTypes>;

export const postThunk = (checked: boolean):ThunkType => {
    return (dispatch:ThunkDispatch<AppStateType, unknown, appActionsTypes>) => {
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