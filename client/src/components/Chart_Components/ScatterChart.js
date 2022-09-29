import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import ScatterCustomize from '../Customize/ScatterCustomize';
import Scatter_data from '../graph_data/Scatter_data';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = ScatterCustomize;

const data = Scatter_data;
 

const ScatterChart = () => {    

    return ( 
        <div> 
            <Scatter options={options} data={data} />
        </div>
     );
     
}

export default ScatterChart;



