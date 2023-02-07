export const GET_USERS  ="GET_USERS";
export const OPEN_DIALOG = "OPEN_DIALOG";
export const UPLOAD_USERS = "UPLOAD_USERS";
export const CREATED_USER ="CREATED_USERS";
export const UPDATE_TYPE = "UPDATE_TYPE";
export const UPDATE_USERID = "UPDATE_USERID";
export const fetchUsers =(usersData)=>{
    return {
        type: GET_USERS,
        payload : usersData
    }
}

export const openDialog  =(isOpen)=>{
    return {
        type : OPEN_DIALOG,
        payload : isOpen
    }
}

export const ulpoadUsers = (userData) =>{
    return {
        type : UPLOAD_USERS,
        payload : userData
    }
}
export const createdUser = (userData) =>{
    return {
        type : CREATED_USER,
        payload : userData
    }
}

export const updateType = (updatetype)=>{
    return {
        type : UPDATE_TYPE,
        payload : updatetype,
    }
}
export const updateUserId = (userId)=>{
    return {
        type : UPDATE_USERID,
        payload : userId,
    }
}