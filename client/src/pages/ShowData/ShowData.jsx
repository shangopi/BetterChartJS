import Papa from "papaparse";
import csvFile from "./test.csv"
import './ShowData.css'
import React, { useState,useRef } from "react";
import { useEffect } from "react";


const ShowData=()=>{
    const [ text, setText ] = useState([]); //all the labels for x axis
    const [textY,setTextY]=useState([]);//all the lables for Yaxis
    const [tableData,setTableData] = useState([]); //all the data in array format  [[],[],[]]
    const[xVariable,setXVariable]=useState('X'); // Chosen label for Xaxis
    const[sourceNode,setSourceNode]=useState('Source Node');
    const [targetNode,setTargetNode]=useState('Target Node');
    const [weight,setWeight]= useState('Weight (Should be a numerical value)')
    const[yVariable,setYVariable]=useState([]); //Chosen labels in the Yaxis
    const [dragging,setDragging]=useState(false);
    const dragItem=useRef();
    const dragNode=useRef();
    const [x_axis,setX_axis]=useState([]); // [label:[values]]    Data column for the chosen label
    const [y_axis,setY_axis]=useState([]); // [label1:[values1],label2:[values2]]   Data columns for the chosen labels
    const[arcData,setArcData]=useState([]) // [[sourceNode1,TargetNode1,weight1],[sourceNode2,TargetNode2,weight2],[sourceNode3,TargetNode3,weight3]]
    //const arr=[];
    var count;
    var chartType='ChartJs'; // chart types are 'ChartJS' and ArcChart
    const [checkBool,setCheckBool]=useState(false);

    
    useEffect(()=>{

        fetch( csvFile )
        .then( response =>  response.text() )
        .then( responseText => {
            // -- parse csv
            
            var data =Array(Papa.parse(responseText));
            var out=data[0]['data'];
            var label_a=out[0]
            var data_a =out.slice(1,out.length-1);
            var textY_arr=[]
            setText(out[0]);
            setTableData(out.slice(1,out.length-1));
            label_a.map((va,vai)=>{
                var state=true;
                for (var i = 0; i < data_a.length; i++) {
                    if (isNaN(data_a[i][vai])) {
                        state = false;
                        break;
                    }
                }
                if(state==true){
                
                    textY_arr.push(va);
                }
        })
        setTextY(textY_arr);
        console.log(textY);
        })
    },[])
    
    // const load = async function(){
    //     await fetch( csvFile )
    // .then( response =>  response.text() )
    // .then( responseText => {
    //     // -- parse csv
    //     var data =Array(Papa.parse(responseText));
    //     var out=data[0]['data'];
    //     setText(out[0]);
    //     setTableData(out.slice(1,out.length-1));
    //     console.log('data:', (text));
    // })
    // };
    
    //passes "x" or "Y" and column number
    //1st text use state has to be loaded
    const arrayPush =function ( axis ){
        const arr=[];
        var j;
        if(axis=="x"){
            j=text.indexOf(xVariable);
            if(j!=-1){
                const sub_arr=[];
                tableData.map(row=>{
                    sub_arr.push(row[j]);
                })
                arr[xVariable]=sub_arr;
                setX_axis(arr);
                console.log("ARrAY",arr);
            }
            
        }
        else if (axis =="y"){
            yVariable.map(label=>{
                j=text.indexOf(label);
                if(j!==-1){
                    const sub_arr=[];
                    tableData.map(row=>{
                        sub_arr.push(row[j]);
                    })
                    arr[label]=sub_arr;     //labels shud not have the same name.

                }
            })
            
            setY_axis(arr);
            console.log("ARRAY",arr);
        }
        else if(axis='A'){
            var l = text.indexOf(sourceNode);
            var m = text.indexOf(targetNode);
            var n = text.indexOf(weight);
            tableData.map(row=>{
                arr.push([row[l],row[m],row[n]])
            })
            console.log(arr);
            setArcData(arr);
        }
    };

    const load=()=>{

        if(chartType==='ChartJs'){
            arrayPush('x');
            arrayPush('y');
        }
        else if(chartType==="ArcChart"){
            arrayPush('A');
        }
        
    }

   const check=(variable)=>{
        
        var j = text.indexOf(variable);
        var c=0;
        for(var i=0;i<tableData.length;i++){
            if(isNaN(tableData[i][j])){
                setWeight(variable+" (This column contains strings. Enter another)");
                c+=1;
                return false
            }
        }
        
        if(c===0){
            console.log("came here two")
            return true
        }   
   }

   const fullfill=()=>{
    var b= (sourceNode==='Source Node'||targetNode==='Target Node'||weight==='Weight (Should be a numerical value)');
    return b
   }

    const handleDragStart = (e,params)=>{
        console.log("drag starting",params);
        dragItem.current= params;
        dragNode.current= e.target;
        dragNode.current.addEventListener('dragend',handleDragEnd);
        setTimeout(()=>{
            setDragging(true);
        },0)
        
    }

    const handleDragEnter= (e,params,i)=>{
        console.log("Enteringg drag",params);
        const currentItem= dragItem.current;
        const xvariable = text[currentItem["variNameI"]];
        const y_variable =textY[currentItem["variNameI"]]
         if(params==='X'){
            if(i==0){
                setXVariable(xvariable);
            }
            else if(i==1){
                setSourceNode(xvariable);
            }
            else if(i==2){
                setTargetNode(xvariable); 
            }
            else if(i==3){
                setWeight(xvariable);
            }

            if(i===3){
                var bool=check(xvariable);
                console.log("State : ",bool);
                setCheckBool(bool);
            }
         }
         else if(params==='Y' && !(yVariable.includes(y_variable))){
            setYVariable(oldarray=>{
                var newarray=oldarray;
                newarray[i]=y_variable;
                console.log("Checking why axis",newarray);
                return newarray
            })
            //setYVariable(text[currentItem["variNameI"]]);
            // console.log("current item is",text[currentItem["variNameI"]]);
            // arrayPush('y',currentItem["variNameI"]);
            // console.log("Array",y_axis);
         }
        // if(e.target !== dragNode.current){
        //     console.log("Target is not the same");
        //     setList(oldList=>{
        //         let newList = JSON.parse(JSON.stringify(oldList));
        //         newList[params.grpI].items.splice(params.itemI,0,newList[currentItem.grpI].items.splice(currentItem.itemI,1)[0]);
        //         dragItem.current = params;
        //         return newList;
        //     })
        // }
    }

    const handleDragEnd=()=>{
        console.log("Ending Drag");
        setDragging(false);
        dragNode.current.removeEventListener('dragend',handleDragEnd);
        dragItem.current= null;
        dragNode.current= null;
    }

    const getStyles=(params)=>{
        if(dragItem.current.variNameI===params.variNameI){
            return 'current dnd-item'
        }
        return 'dnd-item'
    }

    return (
        <>
            {/* <button onClick={ load }>load</button>
            <h2>text:</h2> */}
            <div style={{margin:'50px'}}><h2>CSV Data Table</h2></div>
            <div style={{overflow: "auto",marginLeft:'50px',marginTop:'50px',marginBottom:'50px'}}>
                <thead className="csvtable">
                    <tr className="csvtr">
                    {(text).map(row=>{
                        return(<th className="csvth">{row}</th>);
                    })}
                    </tr>
                </thead>
                <tbody className="csvtable">
                    {tableData.map(row=>
                        <tr className="csvtr">
                            {row.map(ele=>
                                <td className="csvtd">{ele}</td>
                                )}
                        </tr>
                        )}
                </tbody>
            </div>
            <div>
                <div style={{margin:'50px'}}><h2>Chose a label for X axis</h2></div>
                <div className="drag-n-drop">
                        <div className="dnd-group">
                            <div className="group-title">
                                Item
                            </div>
                            {(text).map((variName,variNameI)=>{
                                return(<div  
                                        draggable 
                                        onDragStart={(e)=>(handleDragStart(e,{variNameI}))}
                                        onDragEnter={dragging?(e)=>{handleDragEnter(e,{variNameI})}:null}
                                        key={variNameI} 
                                        className={dragging?getStyles({variNameI}):"dnd-item"}>
                                        {variName}</div>);
                             })}
                            
                        </div>
                        {chartType== 'ChartJs'&& <div >
                            <div className="dnd-group">
                                <div className="group-title">X-Axis</div>
                                <div 
                                    draggable
                                    onDragEnter={dragging?(e)=>{handleDragEnter(e,'X',0)}:null} 
                                    className="dnd-item">
                                    {xVariable}</div>
                                    
                            
                            </div>  
                        </div>}
                        
                        {chartType=== "ArcChart" && <>
                        <div >
                            <div className="dnd-group">
                                <div className="group-title">Source Node</div>
                                <div 
                                    draggable
                                    onDragEnter={dragging?(e)=>{handleDragEnter(e,'X',1)}:null} 
                                    className="dnd-item">
                                    {sourceNode}</div>
                            </div>  
                        </div>

                        <div >
                            <div className="dnd-group">
                                <div className="group-title">Target Node</div>
                                <div 
                                    draggable
                                    onDragEnter={dragging?(e)=>{handleDragEnter(e,'X',2)}:null} 
                                    className="dnd-item">
                                    {targetNode}</div>
                            </div>  
                        </div>

                        <div >
                            <div className="dnd-group">
                                <div className="group-title">Weight</div>
                                <div 
                                    draggable
                                    onDragEnter={dragging?(e)=>{handleDragEnter(e,'X',3)}:null} 
                                    className="dnd-item">
                                    {weight}</div>
                            </div>  
                        </div>
                        </>}
                        

                        
                </div>
                {chartType==="ChartJs"&& <>
                <div style={{margin:'50px'}}><h2>Chose labels for the Y axis</h2></div>
                <div className="drag-n-drop">
                        <div className="dnd-group grid-col-3">
                            <div className="group-title">
                                Item
                            </div>
                            {(textY).map((variName,variNameI)=>{
                                return(<div  
                                        draggable 
                                        onDragStart={(e)=>(handleDragStart(e,{variNameI}))}
                                        onDragEnter={dragging?(e)=>{handleDragEnter(e,{variNameI})}:null}
                                        key={variNameI} 
                                        className={dragging?getStyles({variNameI}):"dnd-item"}>
                                        {variName}</div>);
                             })}
                            
                        </div>
                        <div>
                            <div className="dnd-group">
                                <div className="group-title">Y-Axis</div>
                                {textY.map((va,vai)=>(
                                     <div 
                                     draggable
                                     onDragEnter={dragging?(e)=>{handleDragEnter(e,'Y',vai)}:null} 
                                     className="dnd-item">
                                     {yVariable[vai]}</div>
                                ))}
                               
                            </div>   
                        </div>
                        
                </div>
                </>}
                

                {chartType==="ChartJs"&&(xVariable=='X'||yVariable.length==0)&& <div style={{margin:'50px'}}><h3 style={{color:'red'}}>Fill x axis and y axis with variables</h3></div>}
                {chartType==="ChartJs"&& !(xVariable=='X'||yVariable.length==0)&& <div style={{margin:'50px'}}><button onClick={ load }>Okay</button></div>}
                {console.log(checkBool)}
                {chartType==='ArcChart'&& (!checkBool || fullfill()) && <div style={{margin:'50px'}}><h3 style={{color:'red'}}>Give a source node, target node and the weight</h3></div> }
                {chartType==='ArcChart'&& checkBool && (!fullfill()) && <div style={{margin:'50px'}}><button onClick={ load }>Okay</button></div>}
            
            </div>
        </>
    );
}

export default ShowData;