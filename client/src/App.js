import './App.css';
//importing the necessary  charts
import AreaChartView from './pages/ChartPages/AreaCustomize';
import PieChartView from './pages/ChartPages//PieCustomize';
import PolarAreaChartView from './pages/ChartPages//PolarAreaCustomization';
import RadarChartView from './pages/ChartPages//RadarCustomize';
import ScatterChartView from './pages/ChartPages//ScatterCustomize';
import BubbleChartView from './pages/ChartPages//BubbleCustomize';
import LineChartView from './pages/ChartPages//LineCustomize';
import BarChartView from './pages/ChartPages//BarCustomize';
import ArcChartView from './pages/ChartPages//Arc_Customize';
import ChordChartView from './pages/ChartPages//Chord_Customize';
import SankeyChartView  from './pages/ChartPages/SankeyCustomize';


const App =() => {
  return (
    <div className="App">
      <SankeyChartView/>
      <br></br>
      <hr />
      <ChordChartView/>
      <br></br>
      <hr />   
      <ArcChartView/>
      <br></br>
      <hr />   
      <BarChartView/>
      <br></br>
      <hr />   
      <AreaChartView/> 
      <br></br>
      <hr />    
      <BubbleChartView/>
      
      <br></br>
      <hr />
      <LineChartView/>
      
      <br></br>
      <hr />
      <PieChartView/>
      
      <br></br>
      <hr />
      <PolarAreaChartView/>
      
      <br></br>
      <hr />
      <RadarChartView/>
      
      <br></br>
      <hr />
      <ScatterChartView/>
      
      <br></br>
      <hr />
      
      
    </div>
  );
}

export default App;
