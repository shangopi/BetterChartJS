import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useCallback, useRef } from 'react';
import {Button} from 'react-bootstrap';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


const RadarChart = (props) => {    
  const ref = useRef(null);
  //exporting charts
  const downloadImage = useCallback(()=>{
      const link = document.createElement("a");
      link.download = "pie_chart.png";
      link.href = ref.current.toBase64Image();
      link.click()
  },[]);  


    return ( 
        <div> 
            <Radar options={props.config} ref={ref} data={props.data} />
            {<br></br>}
            <Button className="float-right" variant="outline-danger"  onClick={downloadImage}>  Export Chart</Button>{' '}    
        </div>
     );
     
}

export default RadarChart;



