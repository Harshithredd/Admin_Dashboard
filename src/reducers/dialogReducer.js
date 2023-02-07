import { OPEN_DIALOG  } from "../actions";

 const initalState ={
    open : false
 };
const dialogReducer =(state = initalState,action)=>{
        switch(action.type){
             case OPEN_DIALOG : return {
                ...state, open : action.payload
            };
             default : return state;
        }
 }


 export {dialogReducer};