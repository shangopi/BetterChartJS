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
import './SavedCharts.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Breadcrumb from 'react-bootstrap/Breadcrumb';




function SavedCharts(){
  TabTitle("Saved Charts - BetterChartJS");

    const [chartArray,setChartarray]=useState([])
    const [title,setTitle]=useState('')
    const  [chartType,setChartType]=useState('')
    const [chartSelect,setChartSelect]=useState(false)
    const [chartData,setChartData]=useState([]);
    const [isEmpty,setisEmpty]=useState(true)
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
                setisEmpty(true)
            }
            else{
              setisEmpty(false)
            setChartarray(data.user.charts)

            }
            
            
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
        <div  >
            
            <div>
            <Nav />
            </div>
            <div>
                <br></br>
                

                <br></br>
              <Container>

              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                
                <Breadcrumb.Item active>Saved Charts</Breadcrumb.Item>
              </Breadcrumb>
              {isEmpty && <br></br> }
              {!isEmpty &&  <h3 className="text-center"> Please Pick a Chart</h3> }
              {isEmpty &&  <Alert className="text-center" variant="danger">
          You have not saved any charts
        </Alert> }
                <Row className="text-center"> 
                  

                  {   chartArray.map((va,vai) => {
                return  <Col xs={6} lg={2} >
                  <Button className="mt-5 " variant="success" size="lg" onClick={() => displayChartDetails(va)}>{va.title}</Button>
                   </Col> ;
            })}
                            
            </Row>
            
            {chartSelect &&  <br></br> }
            {chartSelect &&  <br></br> }
            {chartSelect &&  <br></br> }
            {chartSelect &&  <br></br> }
            {chartSelect && 
          <Row>
            <Col></Col>
            <Col className="text-center" sm={6} lg={4} >
            <Alert variant="success">
              <Alert.Heading> Selected Chart : {title}</Alert.Heading>
              <p>
              Chart Type : {chartType} Chart
              </p>
              <hr />
              <p className="mb-0">
              Date : {createDate}
              </p>
            </Alert>
            </Col>
            <Col></Col>
            </Row>
        } 

            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <br></br>
          
            
              </Container>
              <div>
                {chartSelect && displayChart()}
           </div>
           <Container>
           <div>
              <Button size="lg" onClick={() => gotoHome()} variant="outline-primary">Go Home</Button>
                
           </div>
           <br></br>
           <br></br>
           
           </Container>
            </div>
            
          
          
           
        </div>
    )
}

export default SavedCharts;