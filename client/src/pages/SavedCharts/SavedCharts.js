import { useEffect, useState } from "react";
import React from "react";
import jwtdecode from 'jwt-decode'
import {useNavigate} from 'react-router-dom';
import BarCustomize from "../ChartPages/BarCustomize";
import AreaCustomize from "../ChartPages/AreaCustomize";
import BubbleCustomize from "../ChartPages/BubbleCustomize";
import Chord_Customize from "../ChartPages/Chord_Customize";
import LineCustomize from "../ChartPages/LineCustomize";
import PieCustomize from "../ChartPages/PieCustomize";
import PolarAreaCustomization from "../ChartPages/PolarAreaCustomization";
import RadarCustomize from "../ChartPages/RadarCustomize";
import ScatterCustomize from "../ChartPages/ScatterCustomize";
import Arc_Customize from "../ChartPages/Arc_Customize";
import SankeyCustomize from "../ChartPages/SankeyCustomize"


function SavedCharts(){
    const [chartArray,setChartarray]=useState([])
    const [title,setTitle]=useState('')
    const  [chartType,setChartType]=useState('')
    const [chartSelect,setChartSelect]=useState(false)
    const [chartData,setChartData]=useState([])
    const [createDate,setCreateDate]=useState('')
    //var charta;
    async function getCharts(){
        const req=await fetch('http://localhost:4001/api/chart/getCharts',{
            headers:{
                'x-access-token': localStorage.getItem('token'),
            },
        })

        const data = await req.json()
        
        if(data.status ==='ok'){
            console.log("status is",data.user.charts);
            setChartarray(data.user.charts)
            
        }else{
            alert(data.error)}
            console.log(data)
    }

    useEffect(()=>{
        getCharts();
    },[])
    // getCharts()
    //     .then((user)=>{
    //         console.log('Hello')
    //         charta=user.charts})
    
    console.log("My chart is",chartArray);
    function displayChartDetails(user){
        setTitle(user.title)
        setChartType(user.chartType)
        const date = new Date(user.date);
        var day =date.getDate();
        var month = date.getMonth()+1;
        var year =date.getFullYear();
        setCreateDate(day+'-'+month+'-'+year)
        setChartData(user.data)
        if(!chartSelect){
            setChartSelect(true)
        }
        console.log("Came in to the function",user)
    }

    function displayChart(){
        switch (chartType) {
            case "bar":
              return (
                <BarCustomize
                  xlabel={chartData[0]}
                  dataset={chartData[1]}
                  dataarray={chartData[2]}
                />
              );
            case "bubble":
              return <BubbleCustomize dataset={chartData[0]} dataarray={chartData[1]} />;
            case "line":
              return (
                <LineCustomize
                xlabel={chartData[0]}
                dataset={chartData[1]}
                dataarray={chartData[2]}
                />
              );
            case "pie":
              return (
                <PieCustomize
                xlabel={chartData[0]}
                dataset={chartData[1]}
                dataarray={chartData[2]}
                />
              );
            case "ploarArea":
              return (
                <PolarAreaCustomization
                xlabel={chartData[0]}
                dataset={chartData[1]}
                dataarray={chartData[2]}
                />
              );
            case "radar":
              return (
                <RadarCustomize
                xlabel={chartData[0]}
                dataset={chartData[1]}
                dataarray={chartData[2]}
                />
              );
            case "scatter":
              return (
                <ScatterCustomize
                xlabel={chartData[0]}
                dataset={chartData[1]}
                dataarray={chartData[2]}
                />
              );
            case "area":
              return (
                <AreaCustomize
                xlabel={chartData[0]}
                dataset={chartData[1]}
                dataarray={chartData[2]}
                />
              );
            case "arc":
              return <Arc_Customize data_array={chartData} />;
            case "chord":
              return <Chord_Customize data_array={chartData} />;
            case "sankey":
              return <SankeyCustomize data_array={chartData} />;
            
          }
    }

    return(
        <div>
           <h1>Hello</h1>
           <div>
           {
             
             chartArray.map((va,vai) => {
             return <div><button style={{width:"100px"}} onClick={() => displayChartDetails(va)}>{va.title}</button></div>;
           })}
           </div>
           <div>
            {chartSelect && 
            <div>
             <h3>Title : {title}</h3>   
             <h3>Chart Type : {chartType}</h3>
             <h3>Date : {createDate}</h3>    
            </div>}
           </div>
           {chartSelect && displayChart()}
        </div>
    )
}

export default SavedCharts;