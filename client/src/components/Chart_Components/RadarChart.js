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
import RadarData from '../graph_data/RadarData';
import RadarCustomize from '../Customize/RadarCustomize';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = RadarData;
const options = RadarCustomize;    

const RadarChart = () => {    

    return ( 
        <div> 
            <Radar options={options} data={data} />
        </div>
     );
     
}

export default RadarChart;



