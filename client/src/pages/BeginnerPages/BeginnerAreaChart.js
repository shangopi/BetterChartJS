import React from "react";
import AreaCustomize from "../ChartPages/AreaCustomize";
import Nav from "../../components/Navbar/Nav";
import { TabTitle } from "../../utils/GeneralFunctions";
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';


const label = ["Comedy", "Romance", "Action", "Drama", "SciFi"];
const dataset = [4, 5, 6, 1, 4];

const Graph = function () {
  return (
    <AreaCustomize xaxis="Vote"  xlabel={label} dataset="Movie Types" dataarray={dataset} />
  );
};

function BeginnerAreaChart() {
  TabTitle("Area Chart - BetterChartJS");

  return (
    <div>
      <Nav />
      <div className="m-5">
        <Container>
        <h1>Area Charts</h1>
        <hr />
        <br />
        <Alert className="lead px-3" variant="success" >
          An area chart or area graph displays graphically quantitative data. It
          is based on the line chart. The area between axis and line are
          commonly emphasized with colors, textures and hatchings. Commonly one
          compares two or more quantities with an area chart.
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
                  <th scope="row">4</th>
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
          &emsp;<u>Area Graph</u>
        </p>
        
        <br />
        <br />
        </Container>
        <Graph />
        <Container>
        <br />
        <hr />
        <br></br>
        <Alert className="p-3" variant="success" >
        Area charts are used to represent cumulated totals using numbers or
          percentages (stacked area charts in this case) over time. Use the area
          chart for showing trends over time among related attributes. The area
          chart is like the plot chart except that the area below the plotted
          line is filled in with color to indicate volume. When multiple
          attributes are included, the first attribute is plotted as a line with
          color fill followed by the second attribute, and so on.

          <hr></hr>

          Area charts, when used in the correct way, provide instantly visible
          information. The viewer can see a range of values that change over
          time. They look great, with big blocks of color that make them
          attractive and easy to interpret. The colors visually represent
          volume, making a correctly used area chart highly understandable.
        </Alert>
        <br></br>
        <br></br>
        </Container>
        
      </div>
    </div>
  );
}

export default BeginnerAreaChart;
