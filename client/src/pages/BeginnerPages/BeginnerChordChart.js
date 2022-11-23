import React from "react";
import ChordCustomize from "./../ChartPages/Chord_Customize";
import Nav from "../../components/Navbar/Nav";
import { TabTitle } from "../../utils/GeneralFunctions";
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

const dataset = [
  ["mars", "venus", 100],
  ["venus", "mars", 25],
  ["venus", "earth", 299],
  ["earth", "mars", 200],
  ["mars", "jupiter", 500],
  ["jupiter", "venus", 200],
  ["venus", "mercury", 100],
  ["mercury", "venus", 50],
  ["earth", "jupiter", 200],
  ["jupiter", "mercury", 800],
  ["venus", "jupiter", 100],
  ["neptune", "pluto", 200],
  ["pluto", "mars", 800],
  ["saturn", "neptune", 100],
  ["saturn", "venus", 130],
  ["earth", "pluto", 200],
  ["mercury", "earth", 300],
  ["neptune", "venus", 200],
  ["venus", "neptune", 300],
  ["pluto", "neptune", 400],
];

const Graph = function () {
  return <ChordCustomize sourceNode="Starting Planet" targetNode="Destination Planet" data_array={dataset} />;
};

function BeginnerChordChart() {
  TabTitle("Chord Diagram - BetterChartJS");

  return (
    <div>
      <Nav />
      <div className="m-5">
        <Container>
        <h1>Chord Diagrams</h1>
        <hr />
        <br />
        <Alert className="lead px-3" variant="success" >
        A chord diagram is a graphical method of displaying the
          inter-relationships between data in a matrix. The data are arranged
          radially around a circle with the relationships between the data
          points typically drawn as arcs connecting the data.
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
                  <th scope="col">Starting Planet</th>
                  <th scope="col">Destination Planet</th>
                  <th scope="col">Time to Travel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mars</td>
                  <td>Venus</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Venus</td>
                  <td>Mars</td>
                  <td>25</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>venus</td>
                  <td>earth</td>
                  <td>299</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Earth</td>
                  <td>Mars</td>
                  <td>200</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Mars</td>
                  <td>Jupiter</td>
                  <td>500</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Jupiter</td>
                  <td>Venus</td>
                  <td>200</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Venus</td>
                  <td>Mercury</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Mercury</td>
                  <td>Venus</td>
                  <td>50</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Earth</td>
                  <td>Jupiter</td>
                  <td>200</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Jupiter</td>
                  <td>Mercury</td>
                  <td>800</td>
                </tr>
                <tr>
                  <th scope="row">11</th>
                  <td>Venus</td>
                  <td>Jupiter</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">12</th>
                  <td>Neptune</td>
                  <td>Pluto</td>
                  <td>200</td>
                </tr>
                <tr>
                  <th scope="row">13</th>
                  <td>Pluto</td>
                  <td>Mars</td>
                  <td>800</td>
                </tr>
                <tr>
                  <th scope="row">14</th>
                  <td>Saturn</td>
                  <td>Neptune</td>
                  <td>100</td>
                </tr>
                <tr>
                  <th scope="row">15</th>
                  <td>Saturn</td>
                  <td>Venus</td>
                  <td>130</td>
                </tr>
                <tr>
                  <th scope="row">16</th>
                  <td>Earth</td>
                  <td>Pluto</td>
                  <td>200</td>
                </tr>
                <tr>
                  <th scope="row">17</th>
                  <td>Mercury</td>
                  <td>Earth</td>
                  <td>300</td>
                </tr>
                <tr>
                  <th scope="row">18</th>
                  <td>Neptune</td>
                  <td>Venus</td>
                  <td>200</td>
                </tr>
                <tr>
                  <th scope="row">19</th>
                  <td>Venus</td>
                  <td>Neptune</td>
                  <td>300</td>
                </tr>
                <tr>
                  <th scope="row">20</th>
                  <td>Pluto</td>
                  <td>Neptune</td>
                  <td>400</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <br />
        <br />
        <p className="lead">
          &emsp;<u>Chord Diagram</u>
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
        Chord diagrams are useful for showing relationships between entities
          and their relative magnitudes in comparison to alternative arcs. As a
          result, chord diagrams are popular in migration studies, economic
          flows, and genome studies.

          <hr></hr>

          Chord diagrams are eye catching and quite popular in data
          visualization. They allow to visualize weigthed relationships between
          several entities.
        </Alert>
        <br></br>
        <br></br>
        </Container>
       
      </div>
    </div>
  );
}

export default BeginnerChordChart;
