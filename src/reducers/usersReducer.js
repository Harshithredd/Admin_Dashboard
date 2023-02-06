 import { GET_USERS } from "../actions";

 const initalState ={
    allUsers :[]
 };
const userReducer = (state = initalState,action)=>{
        switch(action.type){
             case GET_USERS : return {
                ...state, allUsers : action.payload
            };
            // case DECREMENT : return state-action.count;
             default : return state;
        }
 }

 export {userReducer};