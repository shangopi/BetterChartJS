import React, {
    useRef,
    useEffect
} from 'react'
import SankeyLogic from './Logic/SankeyLogic';


const Canvas = props => {
    //get the data from props
        const data = props.data;
        //using customization we can adjust width of graph.. 
        //here we consider mobile responsive too
        const width_canvas = window.innerWidth * props.config.width;
        const height_canvas = window.innerHeight * props.config.height;
        const canvasRef = useRef(null);


        const draw = ctx => {
            //all the data parts will be processed by Sankey Logic
            //here we only need to draw proceessed data
            let [source, total_y_value, position] = SankeyLogic(data);
            //we didn't implement spaces... if needed we can put some value
            let space = height_canvas * 0;
            let margin = 0;
            //y section means ... 
            let y_section = (height_canvas - space) / total_y_value;
            //space allocated for one y section
            let section = (width_canvas - margin) / (Object.keys(source).length + 2);
            //for each y section 
            for (var key in source) {
                ctx.beginPath();
                //for each source in ysection
                for (var source_rect in source[key]) {
                    //find the node
                    let node = source[key][source_rect];
                    ctx.lineWidth = "1";
                    ctx.strokeStyle = "red";
                    //we draw rectangle for that souce 
                    ctx.rect(margin + (parseInt((key)) + 1) * section, node.graph_y_value * y_section, 15, source[key][source_rect].total * y_section * 0.9);
                    let color = props.config.color1[source_rect];
                    ctx.fillStyle = color;
                    ctx.fill();
                    ctx.stroke();
                    //adding name for that source 
                    ctx.beginPath();
                    ctx.font = props.config.label_size + " " + props.config.label_font;
                    ctx.fillStyle = "#2ac543";

                    ctx.textAlign = "left";
                    ctx.fillText(source_rect, (parseInt((key)) + 1) * section + height_canvas / 22, node.graph_y_value * y_section + height_canvas / 15);

                    //for each destiantion of that source

                    for (let j in node.destination) {
                        //souce coordinates
                        let source_x = margin + (parseInt((key)) + 1) * section;
                        let source_y = (position[source_rect]["right_y"] * y_section + node.destination[j][1] * y_section * 0.5);
                        // destinatin coordinates
                        let dest_x = margin + (parseInt((position[[node.destination[j][0]]]["index"])) + 1) * section;
                        let dest_y = (position[[node.destination[j][0]]]["left_y"] + node.destination[j][1] * 0.5) * y_section;

                        ctx.beginPath();
                        ctx.strokeStyle = color;
                        ctx.lineWidth = 10 * props.config.arc_strength;
                        //adujusting opacity
                        ctx.globalAlpha = props.config.opacity;
                        //drawing the lines
                        ctx.moveTo(source_x, source_y);
                        ctx.lineTo(dest_x, dest_y)

                        ctx.stroke();
                        //after drawing increasign the y values of sources
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
            canvas.width = width_canvas;
            canvas.height = height_canvas;
            draw(context);
        }, )


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