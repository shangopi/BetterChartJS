import React, { useRef, useEffect, useState } from 'react'
import ArcLogic from './Logic/ArcLogic';


const Canvas = props => {
    const data = props.data;
    const [radius_max,set_max] = useState(50);
    let [sourceNode,targetNode,weights,allNodeList,allNodesNo] = ArcLogic(data); 
    const canvasRef = useRef(null);
  
  
  const draw = ctx => {
    const x1= 70; //diagram staring position
    const x2 =props.config.width; //diagram ending position
    const l = (x2-x1)/(allNodesNo-1);
    const highest_weight=Math.max(...weights);


  
    for(let i = 0;i< allNodeList.length;i++){
        ctx.beginPath();

        ctx.fillStyle="#000000"
        ctx.arc(x1+i*l, radius_max , props.config.circle_size , 0, 2*Math.PI,true);
        ctx.fill();

        
        
        ctx.beginPath();
        ctx.font = props.config.label_size + " "+ props.config.label_font;
        ctx.fillStyle= "#000000";
        ctx.textAlign = "center";
        if(props.config.orientation == 0){
            ctx.fillText(allNodeList[i],x1+i*l,radius_max + 30)
        }
        else{
            ctx.save();
            ctx.translate(x1+i*l - 6,radius_max + 30);
            ctx.rotate(0.5*Math.PI);

            var rText = allNodeList[i];
            ctx.textAlign = "left";
            ctx.fillText(rText , 0, 0);
            ctx.restore();
        }   
        
        

        ctx.beginPath();
        ctx.moveTo(x1,radius_max );
        ctx.lineTo(x2,radius_max );
        ctx.stroke();
    }

    
    for(let i=0;i<data.length;i++){
       
        var source_position = allNodeList.indexOf(data[i][0]);
        var target_position = allNodeList.indexOf(data[i][1]);
        var x=x1 + source_position*l;
        var num= ((Number(data[i][2]))/highest_weight)*props.config.arc_strength;
        var radius = ((target_position-source_position)*l/2);
        if(Math.abs(radius)>radius_max){
            set_max(Math.abs(radius)+40);
            
        }
        
        ctx.beginPath();
        ctx.lineWidth=num;
        ctx.strokeStyle=props.config.color1;
        if (radius<0){
            ctx.strokeStyle=props.config.color2;
            ctx.arc(x+radius, radius_max , -radius, 0, Math.PI,true);
        }
        else{
            ctx.arc(x+radius, radius_max , radius, 0, Math.PI,true);
        }
        ctx.stroke();
    }
    
  }
  
 

  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //const { width, height } = canvas.getBoundingClientRect()
    canvas.width=1000;
    if(props.config.orientation ==0){
        canvas.height=radius_max + 40;
    }
    else{
        canvas.height=radius_max + 150;
    }
    
    
    //Our draw come here
    draw(context)
  })
  


   return ( 
       <div>
        
        {props.config.show_heading && <h2 className={'mt-5 text-center '} style={{fontFamily : props.config.title_font, fontSize: props.config.title_size}}> {props.heading}</h2> }
        <div  style={{
     display: "flex",    justifyContent: "center",
    alignItems: "center"}}><canvas className='{canvas1}'  ref={canvasRef} {...props}/></div>


      </div>
     );
     
}



export default Canvas