import userReducer from "./userReducer"

import {combineReducers} from "redux"

const reducer = combineReducers({
    users:userReducer
})
export default reducer