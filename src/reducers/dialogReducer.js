import { Update } from "@mui/icons-material";
import { OPEN_DIALOG, UPDATE_TYPE, UPDATE_USERID  } from "../actions";

 const initalState ={
    open : false,
    updateType : "",
    userId:"",
 };
const dialogReducer =(state = initalState,action)=>{
        switch(action.type){
             case OPEN_DIALOG : return {
                ...state, open : action.payload
            };
            case UPDATE_TYPE : return{
                ...state, updateType: action.payload
            }
            case UPDATE_USERID  : return{
                ...state, userId: action.payload
            }
             default : return state;
        }
 }


 export {dialogReducer};