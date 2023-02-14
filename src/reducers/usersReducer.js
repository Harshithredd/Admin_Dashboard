 import { GET_USERS,UPLOAD_USERS,CREATED_USER, UPDATE_TYPE, UPLOAD_EMPTY, EDIT_USER } from "../actions";

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
    },
    updateType : ""
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
        case UPLOAD_EMPTY : return{
            ...state, user: {}
        }
        case EDIT_USER : return {
            ...state, user : action.payload
        }
         default : return state;
    }
}



 export {userReducer,userUploadReducer};