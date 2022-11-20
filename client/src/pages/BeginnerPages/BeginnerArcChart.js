import React from "react";
import ArcCustomize from "./../ChartPages/Arc_Customize";
import Nav from "../../components/Navbar/Nav";
import { TabTitle } from "../../utils/GeneralFunctions";

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
  return <ArcCustomize data_array={dataset} />;
};

function BeginnerArcChart() {
  TabTitle("Arc Chart - BetterChartJS");

  return (
    <div>
      <Nav />
      <div className="m-5">
        <h1>Arc Diagrams</h1>
        <hr />
        <br />
        <p className="lead px-3">
          An arc diagram is a style of graph drawing, in which the vertices of a
          graph are placed along a line in the Euclidean plane, with edges being
          drawn as semicircles in one or both of the two halfplanes bounded by
          the line, or as smooth curves formed by sequences of semicircles. In
          some cases, line segments of the line itself are also allowed as
          edges, as long as they connect only vertices that are consecutive
          along the line.
        </p>
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
          &emsp;<u>Arc Diagram</u>
        </p>
        <br />
        <br />
        <Graph />
        <br />
        <hr />
        <p className="p-3">
          A possible variation in arc diagrams consists to make the links wider
          when the connection is stronger. To do so you need a weighted network
          where each connection as a weight.
        </p>
        <p className="p-3 pt-0">
          The order of nodes is the key for arc diagrams.
        </p>
      </div>
    </div>
  );
}

export default BeginnerArcChart;
