import React from "react";
import SankeyCustomize from "./../ChartPages/SankeyCustomize";
import Nav from "../../components/Navbar/Nav";
import { TabTitle } from "../../utils/GeneralFunctions";
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

const dataset = [
  ["Fire", "Machine 1", 5],
  ["Fire", "Machine 2", 7],
  ["Fire", "Machine 3", 6],
  ["Water", "Machine 1", 2],
  ["Water", "Machine 2", 9],
  ["Water", "Machine 3", 4],
];

const Graph = function () {
  return <SankeyCustomize data_array={dataset} />;
};

function BeginnerSankeyChart() {
  TabTitle("Sankey Chart - BetterChartJS");

  return (
    <div>
      <Nav />
      <div className="m-5">
      <Container>
        <h1>Sankey Diagrams</h1>
        <hr />
        <br />
        <Alert className="lead px-3" variant="success" >
        Sankey diagrams are a type of flow diagram in which the width of the
          arrows is proportional to the flow rate. Sankey diagrams can also
          visualize the energy accounts, material flow accounts on a regional or
          national level, and cost breakdowns. The diagrams are often used in
          the visualization of material flow analysis.
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
                  <th scope="col">Element</th>
                  <th scope="col">Machine</th>
                  <th scope="col">Power</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Fire</td>
                  <td>Machine 1</td>
                  <td>5</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Fire</td>
                  <td>Machine 2</td>
                  <td>7</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Fire</td>
                  <td>Machine 3</td>
                  <td>6</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Water</td>
                  <td>Machine 1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Water</td>
                  <td>Machine 2</td>
                  <td>9</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Water</td>
                  <td>Machine 3</td>
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
          &emsp;<u>Sankey Diagram</u>
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
        Sankey diagrams emphasize the major transfers or flows within a
          system. They help locate the most important contributions to a flow.
          They often show conserved quantities within defined system boundaries.
          Therefore, sankey diagrams are often used in fields of science,
          especially physics. They are used to represent energy inputs, useful
          output, and wasted output.
          <hr></hr>

          Sankey diagrams emphasize the major transfers or flows within a
          system. They help locate the most important contributions to a flow.
          They often show conserved quantities within defined system boundaries.
          Therefore, sankey diagrams are often used in fields of science,
          especially physics. They are used to represent energy inputs, useful
          output, and wasted output.
        </Alert>
        <br></br>
        <br></br>
        </Container>
        
      </div>
    </div>
  );
}

export default BeginnerSankeyChart;
