import { BASE_URL } from "./base_URL";
import axios from "axios";

//get all
export const getAllSites = async(name)=>{
    let sites;
    let URL;
    if (!name) {
        URL = BASE_URL+'/site';
    }
    else{
        URL = BASE_URL+`/site/?name=${name}`
    }
    await axios.get(URL)
    .then(res =>{
        sites = res.data;
    })

    return sites
}
//get by id
export const getSitesByID = async(id)=>{
    let site;
    await axios.get(`${BASE_URL}/site/${id}`)
    .then(res =>{
        site = res.data;
    })

    return site
}
//delete
export const deleteSitesByID = async(id)=>{
    let message;
    await axios.delete(`${BASE_URL}/site/${id}`).then(res=>{
        message = res.data
    })
    return message
}
//post
export const postSites = (payload)=>{
    axios.post(`${BASE_URL}/site`,payload)
}
//edit
export const editSitesByID = (id,payload)=>{
    axios.put(`${BASE_URL}/site/${id}`,payload)
}