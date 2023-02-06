export const GET_USERS  ="GET_USERS"

export const fetchUsers =(usersData)=>{
    return {
        type: GET_USERS,
        payload : usersData
    }
}