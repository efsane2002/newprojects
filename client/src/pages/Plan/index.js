import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import style from "./index.module.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Plan() {
  return (
    <>
    <div style={{paddingTop:"130px"}}>
        <h3 style={{width:"600px",margin:"0 auto",fontSize:"33px"}}>Top Courses That are open for Students</h3><br></br>
        <p style={{width:"400px",margin:"0 auto"}} >Who are in extremely love with eco friendly system.</p><br></br><br></br><br></br>
    </div>
    <Box sx={{ width: '70%',margin:"0 auto" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4} lg={4} md={6} sm={12}>
          <Item className={style.item2}>
            <img src='https://preview.colorlib.com/theme/gym/img/c1.jpg.webp' style={{width:"100%", height:"220px"}}>
            </img>
            <button style={{width:"160px",height:"40px",border:"none",backgroundColor:"red",position:"absolute", left:"20px",bottom:"140px",color:"white"}}>Course Avaible</button>
            <h3 style={{textAlign:"start",marginTop:'20px'}}>Running Classes</h3><span style={{color:"red",fontSize:"20px",position:"relative",left:"160px",bottom:"25px"}}>$200</span>
          </Item>
        </Grid>
        <Grid item xs={4} lg={4} md={6}sm={12} >
          <Item className={style.item2}>
            <img src='https://preview.colorlib.com/theme/gym/img/c2.jpg' style={{width:"100%", height:"220px"}}></img>
            <button style={{width:"160px",height:"40px",border:"none",backgroundColor:"red",position:"absolute",left:"20px",bottom:"140px" ,color:"white"}}>Course Avaible</button>
            <h3 style={{textAlign:"start",marginTop:'20px'}}>Weight Lifting Classes</h3><span style={{color:"red",fontSize:"20px",position:"relative",left:"160px",bottom:"25px"}}>$225</span>
          </Item>
        </Grid>
        <Grid item xs={4}lg={4} md={6} sm={12}>
          <Item className={style.item2}>
            <img src='https://preview.colorlib.com/theme/gym/img/c3.jpg.webp'style={{width:"100%", height:"220px"}} ></img>
            <button style={{width:"160px",height:"40px",border:"none",backgroundColor:"red",position:"absolute",left:"20px",bottom:"140px" ,color:"white"}}>Course Avaible</button>
           <h3 style={{textAlign:"start",marginTop:'20px'}}>Body Combat Classes</h3><span style={{color:"red",fontSize:"20px",position:"relative",left:"160px",bottom:"25px"}}>$300</span>
          </Item>
        </Grid>
        <Grid item xs={4} lg={4} md={6} sm={12}>
          <Item className={style.item2}>
            <img src='https://preview.colorlib.com/theme/gym/img/c4.jpg'style={{width:"100%", height:"220px"}} ></img>
            <button style={{width:"160px",height:"40px",border:"none",backgroundColor:"red",position:"absolute",bottom:"140px", left:"20px",color:"white"}}>Course Avaible</button>
          <h3 style={{textAlign:"start",marginTop:'20px'}}>Organic Yoga Classes</h3><span style={{color:"red",fontSize:"20px",position:"relative",left:"160px",bottom:"25px"}}>$500</span>
          </Item>
        </Grid>
        <Grid item xs={4} lg={4} md={6} sm={12} >
          <Item className={style.item2}>
            <img src='https://preview.colorlib.com/theme/gym/img/c5.jpg' style={{width:"100%", height:"220px"}}></img>
            <button style={{width:"160px",height:"40px",border:"none",backgroundColor:"red",position:"absolute",bottom:"140px",left:"20px",color:"white"}}>Course Avaible</button>
         <h3 style={{textAlign:"start",marginTop:'20px'}}>Raw Fitness Classes</h3><span style={{color:"red",fontSize:"20px",position:"relative",left:"160px",bottom:"25px"}}>$250</span>
          </Item>
        </Grid>
        <Grid item xs={4} lg={4} md={6} sm={12}>
          <Item className={style.item2}>
            <img src='https://preview.colorlib.com/theme/gym/img/c6.jpg'style={{width:"100%", height:"220px"}}></img>
            <button style={{width:"160px",height:"40px",border:"none",backgroundColor:"red",position:"absolute",bottom:"140px",left:"20px",color:"white"}}>Course Avaible</button>
        <h3 style={{textAlign:"start",marginTop:'20px'}}>Body Building Classes</h3><span style={{color:"red",fontSize:"20px",position:"relative",left:"160px",bottom:"25px"}}>$275</span>
          </Item>
        </Grid>
      </Grid><br></br><br></br>
    </Box>
    </>
  )
}
