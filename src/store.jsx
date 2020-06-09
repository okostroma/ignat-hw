import {combineReducers, createStore} from "redux";
import TuesdayReducer from "./TuesdayReducer";
import SettingsReducer from "./SettingsReducer";

const reducers = combineReducers({
    tuesdayPage: TuesdayReducer,
    settingsReducer: SettingsReducer
})

const store = createStore(reducers);


export default store;