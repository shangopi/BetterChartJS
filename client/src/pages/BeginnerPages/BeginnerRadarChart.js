import React from "react";
import RadarCustomize from "./../ChartPages/RadarCustomize";
import Nav from "../../components/Navbar/Nav";
import { TabTitle } from "../../utils/GeneralFunctions";
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

const label = ["Comedy", "Romance", "Action", "Drama", "SciFi"];
const dataset = [4, 5, 6, 1, 4];

const Graph = function () {
  return (
    <RadarCustomize xaxis="Film Type" xlabel={label} dataset="Movie Types" dataarray={dataset} />
  );
};

function BeginnerRadarChart() {
  TabTitle("Radar Chart - BetterChartJS");

  return (
    <div>
      <Nav />
      <div className="m-5">
        <Container>
        <h1>Radar Charts</h1>
        <hr />
        <br />
        <Alert className="lead px-3" variant="success" >
        A radar chart is a graphical method of displaying multivariate data in
          the form of a two-dimensional chart of three or more quantitative
          variables represented on axes starting from the same point. The radar
          chart is also known as web chart, spider chart, spider graph, spider
          web chart, star chart, star plot, cobweb chart, irregular polygon,
          polar chart, or Kiviat diagram.
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
            <table class="table table-striped border border-secondary">
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
          &emsp;<u>Radar Graph</u>
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
        The relative position and angle of the axes is typically
          uninformative, but various heuristics, such as algorithms that plot
          data as the maximal total area, can be applied to sort the variables
          (axes) into relative positions that reveal distinct correlations,
          trade-offs, and a multitude of other comparative measures.

          <hr></hr>

          Radar charts can be used in sports to chart players' strengths and
          weaknesses by calculating various statistics related to the player
          that can tracked along the central axis of the chart. Examples include
          a basket players shots made, rebounds, assists, etc., or the batting
          or pitching stats of a baseball player. This creates a centralized
          visualization of the strengths and weaknesses of a player, and if
          overlapped with the statistics of other players or league averages,
          can display where a player excels and where they could improve.
        </Alert>
        <br></br>
        <br></br>
        </Container>
        
      </div>
    </div>
  );
}

export default BeginnerRadarChart;
