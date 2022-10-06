import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import { useCallback, useRef } from 'react';
import {Button} from 'react-bootstrap';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = (props) => { 

   //code for downloading the chart
   const ref = useRef(null);
   const downloadImage = useCallback(()=>{
       const link = document.createElement("a");
       link.download = "bar_chart.png";
       link.href = ref.current.toBase64Image();
       link.click()
   },[]);

    return ( 
        <div> 
           <Bubble options={props.config} ref={ref} data={props.data} />
            {<br></br>}
            <Button className="float-right" variant="outline-danger"  onClick={downloadImage}>  Export Chart</Button>{' '}    
        </div>
     );
     
}
export default BubbleChart;
