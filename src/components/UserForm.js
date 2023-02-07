import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ulpoadUsers } from "../actions";


export default function UserForm (props){     

    let userState = useSelector((state)=>{
            return state.userUploadReducer
        }
    );
    let user = userState.user;
    //console.log(userState)
    let dispatch = useDispatch(); 
    const  handelInputChanges = (e)=>{
        const {name,value} = e.target;
        dispatch(ulpoadUsers({name,value}))
    }
   
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