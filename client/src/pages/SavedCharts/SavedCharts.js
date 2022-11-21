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
import { TabTitle } from "../../utils/GeneralFunctions";
import Nav from "../../components/Navbar/Nav";
import './SavedCharts.css'

function SavedCharts(){
  TabTitle("Saved Charts - BetterChartJS");

    const [chartArray,setChartarray]=useState([])
    const [title,setTitle]=useState('')
    const  [chartType,setChartType]=useState('')
    const [chartSelect,setChartSelect]=useState(false)
    const [chartData,setChartData]=useState([])
    const [createDate,setCreateDate]=useState('')
    var checkLength=true;
    //var charta;
    const navigate=useNavigate();
    async function getCharts(){
        const req=await fetch('http://localhost:4001/api/chart/getCharts',{
            headers:{
                'x-access-token': localStorage.getItem('token'),
            },
        })

        const data = await req.json()
        
        if(data.status ==='ok'){
            console.log("status is",data.user.charts);
            if(data.user.charts.length===0){
                checkLength=false;
                alert("You have no saved charts for now");
                navigate('/')
            }
            setChartarray(data.user.charts)
            
        }else{
            alert(data.error)}
            console.log(data)
    }

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            navigate('/');
        }
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
                  xaxis={chartData[3]}
                />
              );
            case "bubble":
              return <BubbleCustomize dataset={chartData[0]} dataarray={chartData[1]} xaxis={chartData[2]} raxis={chartData[3]}/>;
            case "line":
              return (
                <LineCustomize
                xlabel={chartData[0]}
                dataset={chartData[1]}
                dataarray={chartData[2]}
                xaxis={chartData[3]}
                />
              );
            case "pie":
              return (
                <PieCustomize
                xlabel={chartData[0]}
                dataset={chartData[1]}
                dataarray={chartData[2]}
                xaxis={chartData[3]}
                />
              );
            case "ploarArea":
              return (
                <PolarAreaCustomization
                xlabel={chartData[0]}
                dataset={chartData[1]}
                dataarray={chartData[2]}
                xaxis={chartData[3]}
                />
              );
            case "radar":
              return (
                <RadarCustomize
                xlabel={chartData[0]}
                dataset={chartData[1]}
                dataarray={chartData[2]}
                xaxis={chartData[3]}
                />
              );
            case "scatter":
              return (
                <ScatterCustomize
                xlabel={chartData[0]}
                dataset={chartData[1]}
                dataarray={chartData[2]}
                xaxis={chartData[3]}
                />
              );
            case "area":
              return (
                <AreaCustomize
                xlabel={chartData[0]}
                dataset={chartData[1]}
                dataarray={chartData[2]}
                xaxis={chartData[3]}
                />
              );
            case "arc":
              return <Arc_Customize data_array={chartData[0]}  sourceNode={chartData[1]} targetNode={chartData[2]} weighht={chartData[3]}/>;
            case "chord":
              return <Chord_Customize data_array={chartData[0]}  sourceNode={chartData[1]} targetNode={chartData[2]} weighht={chartData[3]}/>;
            case "sankey":
              return <SankeyCustomize data_array={chartData[0]}  sourceNode={chartData[1]} targetNode={chartData[2]} weighht={chartData[3]}/>;
            
          }
    }

    function gotoHome(){
        navigate('/')
    }

    return(
        <div style={{height:'1000px'}}>
            
            <div>
            <Nav />
            </div>
            
          <div style={{height:"500px",margin:"10%"}}>
            <div style={{ float: "left", width: "30%"}}>
                <div className="Savescrollable">
                {   chartArray.map((va,vai) => {
                return <div ><button style={{backgroundColor: "#bbcff0", 
                color: "black",
                textAlign: "center",
                fontSize: "15px",
                marginLeft:" 7%",
                cursor: "pointer",
                borderRadius: "5px",
                width:"200px"}} onClick={() => displayChartDetails(va)}>{va.title}</button></div>;
            })}
                </div>
            
            </div>
            <div style={{
                marginTop:"100px",
                float: "right",
                width: "50%",
                marginRight:"100px",
                backgroundColor:"#bbcff0",
                border:"10px solid rgb(177, 188, 213)",
                borderRadius:"5px",
                minHeight:"250px"
              }}>
                {chartSelect && 
                <div style={{paddingLeft:"100px",paddingTop:"50px",paddingBottom:"50px"}}>
                <h4>Title : {title}</h4>   
                <h4 >Chart Type : {chartType}</h4>
                <h4>Date : {createDate}</h4>    
                </div>}
            </div>
          </div>
          
           <div>
                {chartSelect && displayChart()}
           </div>
           <div>
                <button style={{width:"100px"}} onClick={() => gotoHome()}>Home Page</button>
           </div>
        </div>
    )
}

export default SavedCharts;