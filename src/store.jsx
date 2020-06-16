import {combineReducers, createStore} from "redux";
import TuesdayReducer from "./TuesdayReducer";
import SettingsReducer from "./SettingsReducer";
import WednesdayReducer from "./WednesdayReducer";

const reducers = combineReducers({
    tuesdayPage: TuesdayReducer,
    settingsReducer: SettingsReducer,
    wednesdayPage: WednesdayReducer
})

const store = createStore(reducers);


export default store;