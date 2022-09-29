import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import PieCustomize from '../Customize/PieCustomize';
import Pie_data from '../graph_data/Pie_data';

ChartJS.register(ArcElement, Tooltip, Legend);



const options = PieCustomize;    
 const data = Pie_data;

const PieChart = () => {    

    return ( 
        <div> 
            <Pie options={options} data={data} />
        </div>
     );
     
}
 
export default PieChart;