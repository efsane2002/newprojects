import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import style from "./index.module.css"
import CallIcon from '@mui/icons-material/Call';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"white",position:"fixed",zIndex:"99"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <header>
               <div style={{height:"70px",borderBottom:"1px solid black",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                  <div><h6 style={{color:"black"}}>We believe we helps people<br></br> for happier lives</h6></div>
                  <div>
                    <img src='https://preview.colorlib.com/theme/gym/img/logo.png'></img>
                </div>
                <div style={{display:"flex"}}>
                    <h2 style={{color:"black",fontSize:"17px",paddingTop:"20px"}}>+880 123 12 658 439 </h2>
                    <div style={{height:"70px",width:"70px",backgroundColor:"red",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}><CallIcon style={{color:"white"}}></CallIcon></div>
                </div>
              
               </div>
                  <ul className={style.ul}>
                    <li>
                    <Link to="/" style={{textDecoration:"none",fontSize:"13px",color:"red"}}>HOME</Link>
                    </li>
                    <li>
                    <Link to="/offer"style={{textDecoration:"none",fontSize:"13px",color:"black"}} >WE OFFER</Link>
                    </li>
                    <li>
                    <Link to="/course" style={{textDecoration:"none",fontSize:"13px",color:"black"}}>TOP COURSE</Link>
                    </li>
                    <li>
                    <Link to="/schedule" style={{textDecoration:"none",fontSize:"13px",color:"black"}}>SCHEDULE</Link>
                    </li>
                    <li>
                    <Link to="/trainer"style={{textDecoration:"none",fontSize:"13px",color:"black"}} >TRAINER</Link>
                    </li>
                    <li>
                    <Link to="/plan"style={{textDecoration:"none",fontSize:"13px",color:"black"}} >Plan</Link>
                    </li>
                    <li>
                    <Link to="/pages"style={{textDecoration:"none",fontSize:"13px",color:"black"}} >PAGES</Link>
                    </li>
                    <li>
                    <Link to="/add" style={{textDecoration:"none",fontSize:"13px",color:"black"}}>Add</Link>
                    </li>
                  </ul>
            </header>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}