

const CHECK_INPUT = 'CHECK_INPUT';

const initialState = {
    checked: false
}


const WednesdayReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHECK_INPUT: {

            return {
                ...state, checked: action.checked

            }
        }

        default:
            return state;
    }
}

export const checkInputActionCreator = (checked) => ({type:CHECK_INPUT, checked })



export default WednesdayReducer;