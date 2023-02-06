import {combineReducers} from "redux"
import { userReducer } from "./usersReducer";
const rootReducer = combineReducers({
    userReducer
});
export default rootReducer;