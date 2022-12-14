import React, {
    useRef,
    useEffect
} from 'react'


function drawArc(c1, c2, x1, y1, x2, y2) {
    //c1 c2 are coordinates of centre of the given circle
    //x1,y1 are coordinates of point 1
    //y1,y2 are coordinates of point 2 
    //new arc will be perpendicular to p1 and p2 
    let x3 = (y2 - y1 + x2 * (c1 - x2) / (c2 - y2) - x1 * (c1 - x1) / (c2 - y1)) / ((c1 - x2) / (c2 - y2) - (c1 - x1) / (c2 - y1));
    let y3 = (x2 - x1 + y2 * (c2 - y2) / (c1 - x2) - y1 * (c2 - y1) / (c1 - x1)) / ((c2 - y2) / (c1 - x2) - (c2 - y1) / (c1 - x1));
    let r = ((x3 - x1) ** 2 + (y3 - y1) ** 2) ** 0.5
    return [x3, y3, r]
}


function findAngle(c1, c2, r, x1, y1) {
    //we need to fidn the coordinates of points x1 and x2 which are in the circle centered at c1 and c2 and having radius r
    //finding thetta using sin inverse
    let thetta = Math.asin(Math.abs((x1 - c1) / r))
    //if first quarter  cycle
    if (x1 > c1 && y1 < c2) {
        return thetta;

    }
    //if second quarter  cycle
    if (x1 > c1 && y1 > c2) {
        return Math.PI - thetta;

    }
    //if third quarter  cycle
    if (x1 < c1 && y1 > c2) {
        return Math.PI + thetta;

    }
    //if fourth quarter  cycle
    if (x1 < c1 && y1 < c2) {
        return 2 * Math.PI - thetta;

    }
}

const Canvas = props => {
        //data will be given from chartSet.jsx
        let data1 = props.data;
        
        const space = props.config.width;
        let total = 0;
        var in_out = {};
        let out = {};
        //in_out list will consist the all the data between in and out data
        // out will contain only consist all the data which goes out of the node    
        for (var i = 0; i < data1.length; i++) {
            if (data1[i][2] != '') {
                //if weight is empty skip it
                if (!(data1[i][0] in in_out)) {
                    //if already in the list no initialization
                    in_out[data1[i][0]] = 0;
                }
                if (!(data1[i][0] in out)) {
                    //not in out , intiialize
                    out[data1[i][0]] = [0];
                }
                if (!(data1[i][1] in out)) {
                    //not in out , intiialize
                    out[data1[i][1]] = [0];
                }
                if (!(data1[i][1] in in_out)) {
                    in_out[data1[i][1]] = 0;
                }
                //if already intialized then increment the weights
                in_out[data1[i][0]] += data1[i][2]*1;
                in_out[data1[i][1]] += data1[i][2]*1;
                out[data1[i][0]].push([data1[i][1], data1[i][2]])
                total += data1[i][2] * 2;
            }

        }


        const canvasRef = useRef(null);


        const draw = ctx => {
            //to enable customization features... 
            //customization data will be sent using props
            //here we are intailizign them
            let radius = props.config.radius;
            let lineWidth = props.config.lineWidth;
            //since canvas starts counting anle in -pi/2 .. so we also do it
            let sum = -Math.PI / 2;
            let oldsum = -Math.PI / 2;
            //angle is average of sum and oldsum.. labels of nodes will be placed here
            let angle = 0;
            let coordinate = [];
            //here we iterate the keys
            for (var key in in_out) {
               
                //to use sum's previous data we declare oldsum
                oldsum = sum;
                //implementing spaces
                sum = oldsum + 2 * Math.PI * space / (100 * (Object.keys(in_out).length))
                //drawing spaces
                ctx.beginPath();
                ctx.strokeStyle = "#FFF";
                //drawing the space arc part
                ctx.arc(550, 350, radius, oldsum, sum);
                ctx.lineWidth = lineWidth;
                ctx.stroke();

                //implementing nodes
                oldsum = sum;
                //adding space for space
                sum = oldsum + 2 * Math.PI * in_out[key] * (100 - space) / (100 * total);

                //implementing title
                angle = (oldsum + sum) / 2;
                //finding the coordinates of the  labels for nodes using sines and cosines
                coordinate = [550 + 350 * Math.sin(angle + Math.PI / 2), 350 - 320 * Math.cos(angle + Math.PI / 2)];
                
                if (out[key]) {
                    out[key][0] = oldsum;
                }
                ctx.beginPath();
                //we get color from config
                let color1 = props.config.color1[key] ;
                

              
                ctx.strokeStyle = color1;
                //we draw the circle part for 
                ctx.arc(550, 350, radius, oldsum, sum);
                ///will be gooten from props
                ctx.lineWidth = lineWidth;
                ctx.stroke();
                //dest_list contain all the destination details for each source
                let dest_list = [...out[key]];
                
                for (var temp in dest_list) {
                      //if selected destiantion is non empty                  
                    if (temp != 0) {
                        //since we already initalized the sum and old sum as -pi/2 .. we need to add pi/2 for all calculation
                        // finding  start and end angles for souce and destination
                        let source_initial_angle = out[key][0] + Math.PI / 2;                        
                        let source_final_angle = source_initial_angle + 2 * Math.PI * dest_list[temp][1] * (100 - space) / (100 * total);
                        let dest_initial_angle = out[dest_list[temp][0]][0] + Math.PI / 2;
                        let dest_final_angle = dest_initial_angle + 2 * Math.PI * dest_list[temp][1] * (100 - space) / (100 * total);
                        //we get average angle 
                        let source_angle = (source_initial_angle + source_final_angle) / 2;
                        let dest_angle = (dest_initial_angle + dest_final_angle) / 2;
                        //to get tangent
                        //we find  coordinates using sines and cosines
                        let source_coordinate = [550 + (radius-lineWidth/2) * Math.sin(source_angle), 350 - (radius-lineWidth/2) * Math.cos(source_angle)];
                        let dest_coordinate = [550 + (radius-lineWidth/2) * Math.sin(dest_angle), 350 - (radius-lineWidth/2) * Math.cos(dest_angle)];
                        //we get coordinates of perpendicualr circle details
                        let output = drawArc(550, 350, source_coordinate[0], source_coordinate[1], dest_coordinate[0], dest_coordinate[1]);
                        //we find angle using coordinates
                        let arc_start_angle = findAngle(output[0], output[1], output[2], source_coordinate[0], source_coordinate[1]);

                        let dest_start_angle = findAngle(output[0], output[1], output[2], dest_coordinate[0], dest_coordinate[1]);

                        ctx.beginPath();
                        ctx.strokeStyle = color1;
                        //we need to find the minimum arc .. 
                        if (arc_start_angle <= dest_start_angle) {
                            //if less than pi..then keep the same angles
                            if (dest_start_angle - arc_start_angle <= Math.PI) {
                                ctx.arc(output[0], output[1], output[2], arc_start_angle - Math.PI / 2, dest_start_angle - Math.PI / 2);
                            } else {
                                ctx.arc(output[0], output[1], output[2], dest_start_angle - Math.PI / 2, arc_start_angle - Math.PI / 2);
                            }

                        } else {
                            //if not then swap  the angles
                            if (2 * Math.PI + dest_start_angle - arc_start_angle <= Math.PI) {
                                ctx.arc(output[0], output[1], output[2], arc_start_angle - Math.PI / 2, dest_start_angle - Math.PI / 2);
                            } else {
                                ctx.arc(output[0], output[1], output[2], dest_start_angle - Math.PI / 2, arc_start_angle - Math.PI / 2);
                            }

                        }
                        ctx.lineWidth = props.config.arc_strength * 2 * Math.PI * dest_list[temp][1] * (100 - space) / (100 * total);
                        ctx.globalAlpha = props.config.opacity;

                        ctx.stroke();
                        ctx.globalAlpha = 1;                       
                        out[key][0] = source_final_angle - Math.PI / 2;
                        out[dest_list[temp][0]][0] = dest_final_angle - Math.PI / 2;
                       


                    }
                    
                }

                ctx.beginPath();
                ctx.font = props.config.label_size + " "+ props.config.label_font;
                ctx.fillStyle = "#00000";
                ctx.textAlign = "center";
                ctx.fillText(key, coordinate[0], coordinate[1]);
            }

        }

        useEffect(() => {
            const canvas = canvasRef.current;

            let context = canvas.getContext('2d');
            //const { width, height } = canvas.getBoundingClientRect()
            canvas.width = 1000;
            canvas.height = 700;          

            //Our draw come here

            draw(context);

             context = canvas.getContext('2d');
            //const { width, height } = canvas.getBoundingClientRect()
            canvas.width = 1000;
            canvas.height = 700;          

            //Our draw come here

            draw(context);
        })



        return ( 
            <div>
             {props.config.show_heading && <h2 className={'mt-5 text-center '} style={{fontFamily : props.config.title_font, fontSize: props.config.title_size}}> {props.heading}</h2> }
            
             <br></br>
             <div  style={{ display: "flex",    justifyContent: "center", alignItems: "center"}}>

            <canvas className='{canvas1}'  ref={canvasRef} {...props}/>
            
            </div>
     
     
           </div>
          );
          

        }



        export default Canvas