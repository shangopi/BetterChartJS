import { useEffect, useState } from "react";
import React from "react";
import jwtdecode from 'jwt-decode'
import {useNavigate} from 'react-router-dom'

function SavedCharts(){
    const [chartArray,setChartarray]=useState([])
    var charta=[]
    async function getCharts(){
        const req=await fetch('http://localhost:4001/api/chart/getCharts',{
            headers:{
                'x-access-token': localStorage.getItem('token'),
            },
        })

        const data = await req.json()
        
        if(data.status ==='ok'){
            console.log("status is",data.user.charts);
            return data.user
            
        }else{
            alert(data.error)}
            console.log(data)
    }
    getCharts()
        .then((user)=>{charta=user.charts})
    console.log(charta);
    return(
        <div>
           <h1>Hello</h1>
           <div>
           {
             
             charta.map((va,vai) => {
             return <div>{va}</div>;
           })}
           </div>
        </div>
    )
}

export default SavedCharts;