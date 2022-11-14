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
    let thetta = Math.asin(Math.abs((x1 - c1) / r))
    if (x1 > c1 && y1 < c2) {
        return thetta;

    }
    if (x1 > c1 && y1 > c2) {
        return Math.PI - thetta;

    }
    if (x1 < c1 && y1 > c2) {
        return Math.PI + thetta;

    }
    if (x1 < c1 && y1 < c2) {
        return 2 * Math.PI - thetta;

    }
}

const Canvas = props => {

        //labels for the cahrt
        const label = ['Source', 'Target', 'Volume'];
        //data will be given from chartSet.jsx
        let data1 = props.data;
        const space = 10;
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
                if (!(data1[i][1] in in_out)) {
                    in_out[data1[i][1]] = 0;
                }
                //if already intialized then increment the weights
                in_out[data1[i][0]] += data1[i][2];
                in_out[data1[i][1]] += data1[i][2];
                out[data1[i][0]].push([data1[i][1], data1[i][2]])
                total += data1[i][2] * 2
            }

        }


        const canvasRef = useRef(null);


        const draw = ctx => {
           

            let sum = -Math.PI / 2;
            let oldsum = -Math.PI / 2;
            let angle = 0;
            let coordinate = [];
            for (var key in in_out) {
                //to use sum's previous data we declare oldsum
                oldsum = sum;
                //implementing spaces
                sum = oldsum + 2 * Math.PI * space / (100 * (Object.keys(in_out).length))
                //drawing spaces
                ctx.beginPath();
                ctx.strokeStyle = "#FFF";
                ctx.arc(550, 350, 250, oldsum, sum);
                ctx.lineWidth = 80;
                ctx.stroke();

                //implementing nodes
                oldsum = sum
                sum = oldsum + 2 * Math.PI * in_out[key] * (100 - space) / (100 * total);

                //implementing title
                angle = (oldsum + sum) / 2;
                coordinate = [550 + 350 * Math.sin(angle + Math.PI / 2), 350 - 300 * Math.cos(angle + Math.PI / 2)];

                if (out[key]) {
                    out[key][0] = oldsum;
                }
                ctx.beginPath();

                let color1 = '#' + (Math.random().toString(16) + "000000").substring(2, 8)
                ctx.strokeStyle = color1;
                ctx.arc(550, 350, 250, oldsum, sum);
                ctx.lineWidth = 80;
                ctx.stroke();
                let dest_list = [...out[key]];
           
                
                for (var temp in dest_list) {
                                     
                    if (temp != 0) {
                        let source_initial_angle = out[key][0] + Math.PI / 2;                        
                        let source_final_angle = source_initial_angle + 2 * Math.PI * dest_list[temp][1] * (100 - space) / (100 * total);
                        let dest_initial_angle = out[dest_list[temp][0]][0] + Math.PI / 2;
                        let dest_final_angle = dest_initial_angle + 2 * Math.PI * dest_list[temp][1] * (100 - space) / (100 * total);
                        let source_angle = (source_initial_angle + source_final_angle) / 2;
                        let dest_angle = (dest_initial_angle + dest_final_angle) / 2;
                        let source_coordinate = [550 + 210 * Math.sin(source_angle), 350 - 210 * Math.cos(source_angle)];
                        let dest_coordinate = [550 + 210 * Math.sin(dest_angle), 350 - 210 * Math.cos(dest_angle)];
                        let output = drawArc(550, 350, source_coordinate[0], source_coordinate[1], dest_coordinate[0], dest_coordinate[1]);
                      
                        let arc_start_angle = findAngle(output[0], output[1], output[2], source_coordinate[0], source_coordinate[1]);

                        let dest_start_angle = findAngle(output[0], output[1], output[2], dest_coordinate[0], dest_coordinate[1]);

                        ctx.beginPath();
                        ctx.strokeStyle = color1;
                        if (arc_start_angle <= dest_start_angle) {
                            if (dest_start_angle - arc_start_angle <= Math.PI) {
                                ctx.arc(output[0], output[1], output[2], arc_start_angle - Math.PI / 2, dest_start_angle - Math.PI / 2);
                            } else {
                                ctx.arc(output[0], output[1], output[2], dest_start_angle - Math.PI / 2, arc_start_angle - Math.PI / 2);
                            }

                        } else {
                            if (2 * Math.PI + dest_start_angle - arc_start_angle <= Math.PI) {
                                ctx.arc(output[0], output[1], output[2], arc_start_angle - Math.PI / 2, dest_start_angle - Math.PI / 2);
                            } else {
                                ctx.arc(output[0], output[1], output[2], dest_start_angle - Math.PI / 2, arc_start_angle - Math.PI / 2);
                            }

                        }

                        ctx.lineWidth = 204 * 2 * Math.PI * dest_list[temp][1] * (100 - space) / (100 * total);
                        ctx.globalAlpha = 0.5;

                        ctx.stroke();
                        ctx.globalAlpha = 1;
                        if(key=="mercury" ){
                            console.log("venus vefore",out['venus']);
                            
                        }
                       
                        out[key][0] = source_final_angle - Math.PI / 2;
                        out[dest_list[temp][0]][0] = dest_final_angle - Math.PI / 2;
                        if(key=="mercury" ){
                            console.log(dest_list[temp][0]);
                            console.log(dest_final_angle);
                            // console.log("after",out[dest_list[temp][0]][0]);
                            //console.log(out[dest_list[temp][0]]);
                            // console.log(out['venus']);
                            
                        }


                    }
                    if(key=="mercury" ){
                        
                        console.log("venus aftrer" ,out['venus']);
                        
                    }

                    
                }

                ctx.beginPath();
                ctx.font = "5vh Roboto";
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
             
             {props.config.show_heading && <h2 className={'mt-5 text-center '} style={{fontFamily : props.config.title_font, fontSize: props.config.title_size}}> Sample Chord Diagram</h2> }
             <div  style={{ display: "flex",    justifyContent: "center", alignItems: "center"}}>

            <canvas className='{canvas1}'  ref={canvasRef} {...props}/>
            
            </div>
     
     
           </div>
          );
          

        }



        export default Canvas