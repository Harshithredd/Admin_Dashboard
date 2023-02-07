import {combineReducers} from "redux"
import { userReducer,userUploadReducer } from "./usersReducer";
import {dialogReducer} from "./dialogReducer"
const rootReducer = combineReducers({
    userReducer,
    dialogReducer,
    userUploadReducer
});
export default rootReducer;