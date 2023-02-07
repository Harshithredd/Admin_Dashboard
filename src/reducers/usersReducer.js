 import { GET_USERS,UPLOAD_USERS,CREATED_USER } from "../actions";

 const initalState ={
    allUsers :[],
 };
 const initialStateUpload ={
    user : {
        firstName : "",
        lastName : "",
        phoneNumber :"",
        age : "",
    },
    createdUser : {
        firstName : "",
        lastName : "",
        phoneNumber :"",
        age : "",
    }
 }
const userReducer = (state = initalState,action)=>{
        switch(action.type){
             case GET_USERS : return {
                ...state, allUsers : action.payload
            };
             default : return state;
        }
 }

 const userUploadReducer = (state = initialStateUpload,action)=>{
    switch(action.type){
        case UPLOAD_USERS : return {
            ...state, user : {...state.user , [action.payload.name] : action.payload.value }
        };
        case CREATED_USER : return{
            ...state, createdUser :{ ...action.payload }
        }
         default : return state;
    }
}



 export {userReducer,userUploadReducer};