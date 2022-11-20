import React from "react";
import PieCustomize from "./../ChartPages/PieCustomize";
import Nav from "../../components/Navbar/Nav";

const label = [
  "Celtic",
  "Barcelona",
  "Real Madrid",
  "Manchester United",
  "Juventus",
  "Santos",
];
const dataset = [150, 91, 91, 60, 30, 10];

const Graph = function () {
  return (
    <PieCustomize xlabel={label} dataset="Movie Types" dataarray={dataset} />
  );
};

function BeginnerPieChart() {
  return (
    <div>
      <Nav />
      <div className="m-5">
        <h1>Pie Charts</h1>
        <hr />
        <br />
        <p className="lead px-3">
          A pie chart (or a circle chart) is a circular statistical graphic,
          which is divided into slices to illustrate numerical proportion. In a
          pie chart, the arc length of each slice (and consequently its central
          angle and area) is proportional to the quantity it represents. While
          it is named for its resemblance to a pie which has been sliced, there
          are variations on the way it can be presented.
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
            <table class="table table-striped border border-secondary">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Soccer Club</th>
                  <th scope="col">Number of Trophies</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Celtic</td>
                  <td>150</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Barcelona</td>
                  <td>91</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Real Madrid</td>
                  <td>91</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Manchester United</td>
                  <td>60</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Juventus</td>
                  <td>30</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Santos</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <br />
        <br />
        <p className="lead">
          &emsp;<u>Pie Graph</u>
        </p>
        <br />
        <br />
        <Graph />
        <br />
        <hr />
        <p className="p-3">
          The table lists the number of trophies won by each soccer club, along
          with the derived percentage of the total that they each make up. The
          angles allocated for each club is obtained by multiplying the fraction
          of the trophies a club has won over the all trophies won by all clubs,
          multiplied by 360°, so that the total angles equal to 360°.
        </p>
        <p className="p-3 pt-0">
          A flaw exhibited by pie charts is that they cannot show more than a
          few values without separating the visual encoding (the “slices”) from
          the data they represent (typically percentages). When slices become
          too small, pie charts have to rely on colors, textures or arrows so
          the reader can understand them. This makes them unsuitable for use
          with larger amounts of data.
        </p>
      </div>
    </div>
  );
}

export default BeginnerPieChart;
