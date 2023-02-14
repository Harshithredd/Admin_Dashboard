import { TextField } from "@mui/material";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ulpoadUsers, ulpoadUsersEmptyFileds, updateUserBeforeEdit } from "../actions";
import { config } from "../App";


export default function UserForm (props){     
    const {enqueueSnackbar} = useSnackbar();
    let userState = useSelector((state)=>{
            return state.userUploadReducer
        }
    );
    let user = userState.user;
    //console.log(userState)
    let dispatch = useDispatch(); 

    let dialogState = useSelector((state)=>{
            return state.dialogReducer
        }
    );
    let userId = dialogState.userId;



    const  handelInputChanges = (e)=>{
        const {name,value} = e.target;
        dispatch(ulpoadUsers({name,value}))
    }
    
    const getUserDetails=async ()=>{
        try{
       //   if(!validateData(user)) return ;
          console.log("updating user Id",userId);
          const res= await axios.get(`${config.endpoint}/user/${userId}`);
          console.log("res",res);
         // enqueueSnackbar("User created successfully", { variant: "success" });
          dispatch(updateUserBeforeEdit(res.data.data));
      }catch(e){
          console.log(e);
          if (e.response) {
              enqueueSnackbar(e.response.data.message, { variant: "error" });
            } else {
              enqueueSnackbar(
                " Check that the backend is running, reachable and returns valid JSON.",
                {
                  variant: "error",
                }
              );
            }
            return null;
      }
      }

      const validateData= (formData)=>{
        const {firstName,lastName,phoneNumber,age} = formData;
        if(firstName === "" || lastName==="" || phoneNumber === "" || age === ""){
            enqueueSnackbar("fields cannot be empty", { variant: "Warning" });
            return false;
        }
        if(phoneNumber.length <10 || phoneNumber.length>10){
            enqueueSnackbar("Enter Vaild Phone Number", { variant: "Warning" });
            return false;
        }
        if(age <1 || age>100){
            enqueueSnackbar("Enter Vaild Age", { variant: "Warning" });
            return false;
        }
        return true;
    }

    useEffect(()=>{
        getUserDetails()
        return ()=>{
            dispatch(ulpoadUsersEmptyFileds())
        }
    },[userId])
   
    return (
            <div className="formWrapper">
                <TextField
                    variant="outlined"
                    label="First Name"
                    name="firstName"
                    value={user.firstName}
                    onChange={handelInputChanges}
                    required
                />
                <TextField 
                    variant="outlined"
                    name="lastName"
                    label="Last Name"
                    value={user.lastName}
                    onChange={handelInputChanges}
                    required
                />
                <TextField
                    variant="outlined"
                    name="phoneNumber"
                    label="Phone Number"
                    type="number"
                    value={user.phoneNumber}
                    onChange={handelInputChanges}
                    required
                /> 
                <TextField
                    variant="outlined"
                    name="age"
                    label="Age"
                    value={user.age}
                    type="number"
                    onChange={handelInputChanges}
                    required
                />               
            </div> 
    )
}