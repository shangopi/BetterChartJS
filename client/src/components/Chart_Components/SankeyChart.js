import React, {
    useRef,
    useEffect
} from 'react'
import SankeyLogic from './Logic/SankeyLogic';


const Canvas = props => {
        const data = props.data;
        const width_canvas = window.innerWidth * props.config.width;
        const height_canvas = window.innerHeight * props.config.height;
        const canvasRef = useRef(null);


        const draw = ctx => {
            let [source, total_y_value, position] = SankeyLogic(data);
            let space = height_canvas * 0;
            let margin = 0;
            let y_section = (height_canvas - space) / total_y_value;
            let section = (width_canvas - margin) / (Object.keys(source).length + 2);
            for (var key in source) {
                ctx.beginPath();
                for (var source_rect in source[key]) {
                    let node = source[key][source_rect];
                    ctx.lineWidth = "1";
                    ctx.strokeStyle = "red";
                    ctx.rect(margin + (parseInt((key)) + 1) * section, node.graph_y_value * y_section, 15, source[key][source_rect].total * y_section * 0.9);
                    let color = props.config.color1[source_rect];
                    ctx.fillStyle = color;
                    ctx.fill();
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.font = props.config.label_size + " " + props.config.label_font;
                    ctx.fillStyle = "#2ac543";

                    ctx.textAlign = "left";
                    ctx.fillText(source_rect, (parseInt((key)) + 1) * section + height_canvas / 22, node.graph_y_value * y_section + height_canvas / 15);



                    for (let j in node.destination) {
                        let source_x = margin + (parseInt((key)) + 1) * section;
                        let source_y = (position[source_rect]["right_y"] * y_section + node.destination[j][1] * y_section * 0.5);

                        let dest_x = margin + (parseInt((position[[node.destination[j][0]]]["index"])) + 1) * section;
                        let dest_y = (position[[node.destination[j][0]]]["left_y"] + node.destination[j][1] * 0.5) * y_section;


                        //    // ctx.rect(width_canvas-2*section, node.graph_y_value*y_section, 15, node.total*y_section*0.9);
                        // }

                        ctx.beginPath();
                        ctx.strokeStyle = color;
                        ctx.lineWidth = 10 * props.config.arc_strength;
                        ctx.globalAlpha = props.config.opacity;

                        ctx.moveTo(source_x, source_y);
                        ctx.lineTo(dest_x, dest_y)

                        //ctx.bezierCurveTo(source_x+(dest_x-source_x)/4,source_y+(dest_y-source_y)/4,source_x+3*(dest_x-source_x)/4,source_y+(dest_y-source_y)/4,dest_x,dest_y);
                        ctx.stroke();
                        position[source_rect]["right_y"] += node.destination[j][1];
                        position[[node.destination[j][0]]]["left_y"] += node.destination[j][1];
                        ctx.globalAlpha = 1;

                    }
                }
            }








        }




        useEffect(() => {

            const canvas = canvasRef.current
            const context = canvas.getContext('2d')
            //const { width, height } = canvas.getBoundingClientRect()
            canvas.width = width_canvas;
            canvas.height = height_canvas;


            //Our draw come here
            draw(context);
        }, )


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