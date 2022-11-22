import React from "react";
import PolarAreaCustomize from "./../ChartPages/PolarAreaCustomization";
import Nav from "../../components/Navbar/Nav";
import { TabTitle } from "../../utils/GeneralFunctions";
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

const label = ["Comedy", "Romance", "Action", "Drama", "SciFi"];
const dataset = [4, 5, 6, 1, 4];

const Graph = function () {
  return (
    <PolarAreaCustomize
      xaxis="Film Type"
      xlabel={label}
      dataset="Movie Types"
      dataarray={dataset}
    />
  );
};

function BeginnerPolarAreaChart() {
  TabTitle("Polar Area Chart - BetterChartJS");

  return (
    <div>
      <Nav />
      
      <div className="m-5">
      <Container>
        <h1>Polar Area Charts</h1>
        <hr />
        <br />
        <Alert className="lead px-3" variant="success" >
          Polar area charts are similar to pie charts, but each segment has the
          same angle - the radius of the segment differs depending on the value.
          This type of chart is often useful when we want to show a comparison
          data similar to a pie chart, but also show a scale of values for
          context.
        </Alert>
        
        <br />
        <h3>Example</h3>
        <br />
        <br />
        <p className="lead">
          &emsp;<u>CSV file</u>
        </p>
        <br />
        <div className="row">
          <div className="col-9 offset-1">
            <table className="table table-striped border border-secondary">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Film Type</th>
                  <th scope="col">Vote</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Comedy</td>
                  <td>4</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Romance</td>
                  <td>6</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Drama</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>SciFi</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <br />
        <br />
        <p className="lead">
          &emsp;<u>Polar Area Graph</u>
        </p>
        <br />
        <br />
        </Container>
        <Graph />
        
        <br />
        <hr />
        <Container>
        <br></br>
        <Alert className="p-3" variant="success" >
        The polar area diagram is used to plot cyclic phenomena (e.g., counts
          of deaths by month). For example, if the counts of deaths in each
          month for a year are to be plotted then there will be 12 sectors (one
          per month) all with the same angle of 30 degrees each. The radius of
          each sector would be proportional to the square root of the death rate
          for the month, so the area of a sector represents the rate of deaths
          in a month. If the death rate in each month is subdivided by cause of
          death, it is possible to make multiple comparisons on one diagram.

          <hr></hr>

          The polar area diagram is used to plot cyclic phenomena (e.g., counts
          of deaths by month). For example, if the counts of deaths in each
          month for a year are to be plotted then there will be 12 sectors (one
          per month) all with the same angle of 30 degrees each. The radius of
          each sector would be proportional to the square root of the death rate
          for the month, so the area of a sector represents the rate of deaths
          in a month. If the death rate in each month is subdivided by cause of
          death, it is possible to make multiple comparisons on one diagram.
        </Alert>
        <br></br>
        <br></br>
        </Container>
        
      </div>
    </div>
  );
}

export default BeginnerPolarAreaChart;
