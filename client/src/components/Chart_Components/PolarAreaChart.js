import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import Polar_data from '../graph_data/Polar_data';
import PolarAreaCustomize from '../Customize/PolarAreaCustomization';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
const options = PolarAreaCustomize;
const data = Polar_data;

const PolarAreaChart = () => { 

    return ( 
        <div> 
           <PolarArea options={options} data={data} />      
        </div>
     );
     
}
export default PolarAreaChart;