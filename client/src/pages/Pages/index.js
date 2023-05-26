import React, { useEffect, useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Card } from "antd";
import { useSiteContext } from "../../context/SiteContext";
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import style from "./index.module.css"
import { deleteSitesByID, getAllSites } from "../../api/request";
import { Helmet } from "react-helmet";

const Pages = () => {
  const[sites,setSites] = useSiteContext();
 const navigate=useNavigate()
  useEffect(()=>{
    getAllSites().then(res=>{
      setSites(res);
    })
  },[setSites])
  function handleDelete(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSitesByID(id);
        setSites(sites.filter((x)=>x._id!==id));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
 function handleClick(){
    navigate(`/detail`)

 }
  return (
    <>
    <Helmet>
      <title>Pages page</title>
    </Helmet>
    <h1 style={{width:"400px",paddingTop:"100px", margin:"0 auto"}}>We care about what we offer</h1>
    <p style={{width:"850px", margin:"10px auto",textAlign:"center"}} >Who are in extremely love with eco friendly system.</p>
   <div style={{width:"80%",margin:"0 auto"}}>
    <div style={{ width: "80%", margin: "50px auto"}}>
      <div style={{display:'flex',alignItems:'baseline'}}>
      <TextField onChange={(e)=>{
        getAllSites(e.target.value).then(res=>{
          setSites(res);
        })
     }} style={{marginBottom:'15px'}} id="outlined-basic" label="Search" variant="outlined" />
      </div>
      <Grid  container spacing={2} style={{marginLeft:"50px"}}>
        {sites && sites.map((site)=>{
          return <Grid key={site._id} item lg={3} md={6} sm={12} >
         <Card
         className={style.grid} 
            hoverable
            cover={
              <img
                style={{
                  height: "50px",
                  objectFit: "contain",
                  objectPosition: "center",
                
                }}
                alt="example"
                src={site.imageURL}
              />
            }
          >
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
            <Typography style={{marginBottom:'7px',textAlign:"center"}}><Link to={`/site/${site._id}`}>
                {site.name}</Link></Typography>
            <Typography style={{marginBottom:'7px',textAlign:"center"}}>{site.paragraf}</Typography>
            </div>
          </div>
          <Button onClick={()=>handleDelete(site._id)} variant="contained" color="error" style={{height:"30px",display:"block",margin:"0 auto"}}>Delete</Button>
          </Card>
        </Grid>
        })}
      </Grid>
    </div>
    </div>
    </>
  );
}
export default Pages;