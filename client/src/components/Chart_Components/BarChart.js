import React from 'react';
import {Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useCallback, useRef } from 'react';
import {Button} from 'react-bootstrap';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = (props) => {    
    //code for downloading the chart
    const ref = useRef(null);
    //export chart
    const downloadImage = useCallback(()=>{
        const link = document.createElement("a");
        link.download = "bar_chart.png";
        link.href = ref.current.toBase64Image();
        link.click()
    },[]);

    return ( 
        <div> 
            <Bar options={props.config} ref={ref} data={props.data} />
            {<br></br>}
            <Button className="float-right" variant="outline-danger"  onClick={downloadImage}>  Export Chart</Button>{' '}
         
        </div>
     );
     
}
 
export default BarChart;