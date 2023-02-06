import {Box,Typography} from "@mui/material";
import "./Header.css"
import { useHistory } from "react-router-dom";
export default function Header(props){
    const history = useHistory();
    return(
            <Box className="header">
                <div onClick={()=>{history.push("/","from header")}}>
                    <Typography variant="h5" className="title"> <span style={{color:"#181d31"}}>Dashboard</span></Typography>
                </div>
                {props.upload ?
                (<div>
                    {props.upload}
                </div>)
                : null 
                }
                

            </Box>
        
    )
    
}
