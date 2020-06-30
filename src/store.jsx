import {applyMiddleware, combineReducers, createStore} from "redux";
import TuesdayReducer from "./TuesdayReducer";
import SettingsReducer from "./SettingsReducer";
import WednesdayReducer from "./WednesdayReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    tuesdayPage: TuesdayReducer,
    settingsReducer: SettingsReducer,
    wednesdayPage: WednesdayReducer
})

const store = createStore(reducers, applyMiddleware(thunk));


export default store;