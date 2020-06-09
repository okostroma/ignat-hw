import light from '././components/Wednesday/LightWednesday.module.css'
import dark from '././components/Wednesday/DarkWednesday.module.css'
import purple from '././components/Wednesday/PurlpeWednesday.module.css'

const SET_THEME = 'SET_THEME';

const initialState = {
    themes: [
        {id: 1, name: 'light', picked: true},
        {id: 2, name: 'dark', picked: false},
        {id: 3, name: 'purple', picked: false}
    ],
    style: light
}


const SettingsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_THEME: {
            return {
                ...state, themes: state.themes.map(t =>{
                    if(t.id === action.id) {
                        return {...t, picked: action.picked}
                    } else {
                        return {...t, picked: false}
                    }
            }) , style: action.style === 1 ? light : action.style === 2 ? dark : purple
            }
        }

        default:
            return state;
    }
}

export const setThemeActionCreator = (id, picked, style) => ({type:SET_THEME, id, picked, style })



export default SettingsReducer;