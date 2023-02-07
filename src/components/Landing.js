import Header from "./Header";
import "./Landing.css"
import {Box, Button, CircularProgress, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import { useEffect, useState } from "react";
import { config } from "../App";
import axios from "axios"
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux"
import { fetchUsers } from "../actions";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DialogButton from "./DialogButton";

const columns = [
    { id: 'firstName', label: 'First Name', minWidth: 100 },
    { id: 'lastName', label: 'Last Name', minWidth: 100 },
    { id: 'age', label: 'Age', minWidth: 100 },
    { id: 'phoneNumber', label: 'Phone', minWidth: 100 },
  ];

export default function Landing(){
    const {enqueueSnackbar} = useSnackbar();
    const [isLoading,setIsLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    let usersState = useSelector((state)=>{
            return state.userReducer
        }
     );
     let rows = usersState.allUsers;
     console.log(rows,usersState);
    
    let userUploadState = useSelector((state)=>{
        return state.userUploadReducer
    }
    );
    let userCreated = userUploadState.createdUser;
    console.log(userCreated)

     let dispatch = useDispatch()
     const getUserData= async()=>{
        try{
            setIsLoading(true)
            const res= await axios.get(`${config.endpoint}/users`);
            console.log(res)
            dispatch(fetchUsers(res.data.data));
            setIsLoading(false)
            
        }catch(e){
            setIsLoading(false);
            console.log(e)
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

    let handelDelete = async(e)=>{
        let userId= e.target.dataset.id;
        try{
            const res= await axios.delete(`${config.endpoint}/user/${userId}`);
            console.log(res);
            getUserData();    
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
    useEffect(()=>{
        getUserData();
    },[])
    useEffect(()=>{
        getUserData();
    },[userCreated])
    return(
        <>
            <Header   upload={<DialogButton />}
            ></Header>
            {
                isLoading ? 
                (<Grid className="circular-progress-parent">
                    <CircularProgress className="circular-progress"/>
                    <Typography variant="h6" sx={{color:"#AEBDCA"}}> loading User Data </Typography>
                </Grid>) 
                :   (<Box>
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                        sx={{color:"#678983",fontSize:"1rem",fontWeight:"500"}}
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        >
                                        {column.label}
                                        </TableCell>
                                    ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    { rows && rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                                </TableCell>
                                            );
                                            })}
                                             <Button variant="outlined" 

                                             style={{
                                                    borderRadius: 15,
                                                    backgroundColor: "#678983",
                                                    color :"black",
                                                    marginRight :"10px" 
                                                }}>UPDATE</Button>
                                             <Button variant="outlined"
                                             data-id={row._id} 
                                             onClick={(e)=>handelDelete(e)}
                                             style={{
                                                    borderRadius: 15,
                                                    backgroundColor: "#181d31",
                                                    color :"#678983"  
                                                }}>Delete</Button>
                                        </TableRow>
                                        );
                                    })}
                                </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={rows.length || 0}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                            </Paper>
                    </Box>) 
            }
            
           
        </>
    );
}