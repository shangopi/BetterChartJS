import Papa from "papaparse";
import csvFile from "./test.csv"
import './ShowData.css'
import React, { useState,useRef } from "react";


const ShowData=()=>{
    const [ text, setText ] = useState([]);
    const [tableData,setTableData] = useState([]);
    const[xVariable,setXVariable]=useState('X');
    const[yVariable,setYVariable]=useState('Y');
    const [dragging,setDragging]=useState(false);
    const dragItem=useRef();
    const dragNode=useRef();
    const [x_axis,setX_axis]=useState([]);
    const [y_axis,setY_axis]=useState([]);
    //const arr=[];
    var count;

    fetch( csvFile )
    .then( response =>  response.text() )
    .then( responseText => {
        // -- parse csv
        var data =Array(Papa.parse(responseText));
        var out=data[0]['data'];
        setText(out[0]);
        setTableData(out.slice(1,out.length-1));
    })
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
    const arrayPush =function ( axis, i ){
        const arr=[];
        if(axis=="x"){
            tableData.map(row=>{
                arr.push(row[i]);
            })
            //setArray(arr);
            setX_axis(arr);
            console.log("ARRAY",arr);
            //console.log("the array is ",x_axis);
        }
        else if (axis =="y"){
            tableData.map(row=>{
                arr.push(row[i]);
            })
            setY_axis(arr);
            console.log("ARRAY",arr);
        }
    };

   

    const handleDragStart = (e,params)=>{
        console.log("drag starting",params);
        dragItem.current= params;
        dragNode.current= e.target;
        dragNode.current.addEventListener('dragend',handleDragEnd);
        setTimeout(()=>{
            setDragging(true);
        },0)
        
    }

    const handleDragEnter= (e,params)=>{
        console.log("Enteringg drag",params);
         const currentItem= dragItem.current;
         if(params==='X'){
            setXVariable(text[currentItem["variNameI"]]);
            console.log("current item is",text[currentItem["variNameI"]]);
            arrayPush('x',currentItem["variNameI"]);
            console.log("Array",x_axis);
         }
         else if(params==='Y'){
            setYVariable(text[currentItem["variNameI"]]);
            console.log("current item is",text[currentItem["variNameI"]]);
            arrayPush('y',currentItem["variNameI"]);
            console.log("Array",y_axis);
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
        <React.Fragment>
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
                <div style={{margin:'50px'}}><h2>Chose Suitable Properties</h2></div>
                <div className="drag-n-drop">
                        <div className="divdivide dnd-group">
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
                        <div className="divdivide">
                            <div className="dnd-group">
                                <div className="group-title">X-Axis</div>
                                <div 
                                    draggable
                                    onDragEnter={dragging?(e)=>{handleDragEnter(e,'X')}:null} 
                                    className="dnd-item">
                                    {xVariable}</div>
                            </div>
                            <div className="dnd-group">
                                <div className="group-title">Y-Axis</div>
                                <div 
                                    draggable
                                    onDragEnter={dragging?(e)=>{handleDragEnter(e,'Y')}:null} 
                                    className="dnd-item">
                                    {yVariable}</div>
                            </div>   
                        </div>
                        
                </div>
                {(xVariable=='X'||yVariable=='Y')&& <div style={{margin:'50px'}}><h3 style={{color:'red'}}>Fill x axis and y axis with variables</h3></div>}
            </div>
        </React.Fragment>
    );
}

export default ShowData;