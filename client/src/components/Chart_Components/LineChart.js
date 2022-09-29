import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Line_data from '../graph_data/Line_data';
import LineCustomize from '../Customize/LineCustomize';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = LineCustomize;    
const data = Line_data;

const LineChart = () => {    

    return ( 
        <div> 
            
            <Line options={options} data={data} />        
        </div>
     );
     
}
export default LineChart;