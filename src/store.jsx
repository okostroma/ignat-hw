import {createStore} from "redux";

const initialState = {
    loading: true
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_LOADING':
            return  {
                ...state, loading: action.loading
            }
        default:
            return state;
    }
}

const store = createStore(reducer);


export default store;