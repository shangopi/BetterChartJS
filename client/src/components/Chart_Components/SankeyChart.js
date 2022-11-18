import React, { useRef, useEffect, useState } from 'react'
import ArcLogic from './Logic/ArcLogic';
import SankeyLogic from './Logic/SankeyLogic';


const Canvas = props => {
    const data = props.data;
    const width_canvas  = window.innerWidth;
    const height_canvas = window.innerHeight*0.7;
    



    const [radius_max,set_max] = useState(50);
    let [sourceNode,targetNode,weights,allNodeList,allNodesNo] = ArcLogic(data); 
    const canvasRef = useRef(null);
  
  
  const draw = ctx => {
    let [source,total_y_value] = SankeyLogic(data);
    console.log(source);
    let space = height_canvas * 0.1; 
    let margin = 0;
    let y_section = (height_canvas - space )/total_y_value;
    let section = (width_canvas - margin)/ (Object.keys(source).length+2);
    for (var key in source){
        ctx.beginPath();
        for (var source_rect in source[key]){ 
               
        ctx.lineWidth = "1";
        ctx.strokeStyle = "red";
        ctx.rect(margin +  (parseInt((key))+1)*section , source[key][source_rect].graph_y_value*y_section, 15, source[key][source_rect].total*y_section*0.9);
        ctx.fillStyle= '#' + (Math.random().toString(16) + "000000").substring(2, 8);
        ctx.fill();
        ctx.stroke();

    }
      }
      
      

    
   
    

    
  }
  
 

  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //const { width, height } = canvas.getBoundingClientRect()
    canvas.width= width_canvas;
    canvas.height = height_canvas;
    
    
    //Our draw come here
    draw(context);
  },[])
  


   return ( 
       <div>
        
        {props.config.show_heading && <h2 className={'mt-5 text-center '} style={{fontFamily : props.config.title_font, fontSize: props.config.title_size}}> Sample Sankey Chart</h2> }
        <div  style={{
     display: "flex",    justifyContent: "center",
    alignItems: "center"}}><canvas className='{canvas1}'  ref={canvasRef} {...props}/></div>


      </div>
     );
     
}



export default Canvas