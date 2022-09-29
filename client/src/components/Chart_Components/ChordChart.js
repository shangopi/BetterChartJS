import React, { useRef, useEffect } from 'react'


const Canvas = props => {
    const label=['Source','Target','Volume'];
    const data1=[['mars','venus',100],['venus','mars',25],['venus','earth',299],['earth','mars',200],['mars','jupiter',500],['jupiter','venus',200],['venus','mercury',100],['mercury','venus',50],['earth','jupiter',200],['jupiter','mercury',800],['venus','jupiter',100],['neptune','pluto',200],['pluto','mars',800],['satum','neptune',100],['satum','venus',130],['earth','pluto',200],['mercury','earth',300],['neptune','venus',200],['venus','neptune',300],['pluto','neptune',400]];
    const space = 10;
    let total =0;
    var in_out = {};
    var out ={};
     

    for(var i=0;i<data1.length;i++){
        if(data1[i][2]!=''){
            if(!(data1[i][0] in in_out)){
                in_out[data1[i][0]] =0;
            }
            if(!(data1[i][0] in out)){
                out[data1[i][0]] =[0];
            }
            if(!(data1[i][1] in in_out)){
                in_out[data1[i][1]] =0;
            }
            
            in_out[data1[i][0]] += data1[i][2];
            in_out[data1[i][1]] += data1[i][2];
            out[data1[i][0]].push([data1[i][1],data1[i][2]])
            total += data1[i][2] *2
        }
      
    }

    

    const data= props.data
    const sourceNode=[];
    const targetNode=[];
    const weights=[];
    var allNodesNo;
    for(var i=0;i<data.length;i++){
        if(data[i][2]===''){
            weights.push(Number(0));
        }
        else{
            weights.push(Number(data[i][2]));
        }
        
        if(!sourceNode.includes(data[i][0])){
            sourceNode.push(data[i][0]);
        }
    }

    for(let i=0;i<data.length;i++){
        if(!sourceNode.includes(data[i][1]) && !targetNode.includes(data[i][1])){
            targetNode.push(data[i][1]);
        }
    }
    allNodesNo=sourceNode.length+targetNode.length;
    const allNodeList=[...sourceNode,...targetNode];

  const canvasRef = useRef(null);
  
  
  const draw = ctx => {  
    let sum=-Math.PI/2;
    let oldsum=-Math.PI/2;
    let angle = 0;
    let coordinate = [];
    
    for(var key in in_out) {
        
            oldsum = sum;
            sum = oldsum + 2*Math.PI*space/(100*(Object.keys(in_out).length))
            ctx.beginPath();
            ctx.strokeStyle  = "#FFF"  ;
            ctx.arc(550,350,250,oldsum,sum);
            ctx.lineWidth = 80;
            ctx.stroke();
            
            

            
            sum = oldsum + 2*Math.PI*in_out[key]*(100-space)/(100*total);
            angle = (oldsum + sum )/2;
            coordinate = [550+350*Math.sin(angle+Math.PI/2),350-300*Math.cos(angle+Math.PI/2)];
            out[key][0] = oldsum;
            
            ctx.beginPath();
            ctx.strokeStyle  = "#" + ((1<<24)*Math.random() | 0).toString(16) ;
            ctx.arc(550,350,250,oldsum,sum);
            ctx.lineWidth = 80;
            ctx.stroke();

            let dest_list = out[key];
            

            for(var temp in dest_list){
                if(temp!=0){
                console.log("source",key);
                console.log("source angle", dest_list[0]);
                let source_coordinate = [550+250*Math.sin(dest_list[0]+Math.PI/2),350-250*Math.cos(dest_list[0]+Math.PI/2)];
                console.log("soruce coord",source_coordinate);
                let dest=dest_list[temp][0];
                
                console.log("dest",dest);
                console.log("Dest angle", out[dest][0]);
                let dest_coordinate = [550+250*Math.sin(out[dest][0]+Math.PI/2),350-250*Math.cos(out[dest][0]+Math.PI/2)];
                console.log("dest_coord",dest_coordinate);
                console.log("weight",dest_list[temp][1]);

                let cent =[0,0]
                cent[0]= (source_coordinate[0]+dest_coordinate[0])/2;
                cent[1] = (source_coordinate[1]+dest_coordinate[1])/2;
               
                var
                diffX = source_coordinate[0] - dest_coordinate[0],
                diffY = source_coordinate[1] - dest_coordinate[1],
                radius = Math.abs(Math.sqrt(diffX*diffX + diffY*diffY)),
                startAngle = Math.atan2(diffY, diffX),
                endAngle   = Math.atan2(cent[1] - dest_coordinate[1], cent[0] - dest_coordinate[0]);
                ctx.beginPath();
                ctx.lineWidth = 5;

            
            // arc
            ctx.arc(dest_coordinate[0], dest_coordinate[1], radius, startAngle, endAngle, false);
            ctx.stroke();
               
            

                

                    
                }    
            }
            /*
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 5;
            ctx.moveTo(200, 20);
            ctx.arcTo(200,130, 50,20, 40);
            ctx.stroke();
            */


           
            
            ctx.beginPath();
            ctx.font = "5vh Roboto";
            ctx.fillStyle= "#00000";
            ctx.textAlign = "center";
            ctx.fillText(key,coordinate[0],coordinate[1]);
            
           



       
     }
    
  }
  
 

  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //const { width, height } = canvas.getBoundingClientRect()
    canvas.width=1000;
    canvas.height = 700;
   
    if(props.config.orientation !=0){
        canvas.height+=200;
    }
    
    
    
    //Our draw come here
    draw(context)
  })
  


   return ( 
       <div>
        
        {props.config.show_heading && <h2 className={'mt-5 text-center '} style={{fontFamily : props.config.title_font, fontSize: props.config.title_size}}> Sample Arc Chart</h2> }
        <div  style={{
     display: "flex",    justifyContent: "center",
    alignItems: "center"}}><canvas className='{canvas1}'  ref={canvasRef} {...props}/></div>


      </div>
     );
     
}



export default Canvas