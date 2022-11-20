import React from "react";
import BubbleCustomize from "./../ChartPages/BubbleCustomize";
import Nav from "../../components/Navbar/Nav";
import { TabTitle } from "../../utils/GeneralFunctions";

const dataset = [
  [5, 5500, 3],
  [14, 12200, 12],
  [20, 60000, 33],
  [18, 24400, 10],
  [22, 32000, 42],
];

const Graph = function () {
  return <BubbleCustomize dataset="Market Share" dataarray={dataset} />;
};

function BeginnerBubbleChart() {
  TabTitle("Bubble Chart - BetterChartJS");

  return (
    <div>
      <Nav />
      <div className="m-5">
        <h1>Bubble Charts</h1>
        <hr />
        <br />
        <p className="lead px-3">
          A bubble chart is a type of chart that displays three dimensions of
          data. Each entity with its triplet (v1, v2, v3) of associated data is
          plotted as a disk that expresses two of the vi values through the
          disk's xy location and the third through its size. Bubble charts can
          facilitate the understanding of social, economical, medical, and other
          scientific relationships.
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
                  <th scope="col">Number of Products</th>
                  <th scope="col">Sales</th>
                  <th scope="col">Percentage of Market Share</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>5</td>
                  <td>$5,500</td>
                  <td>3%</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>14</td>
                  <td>$12,200</td>
                  <td>12%</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>20</td>
                  <td>$60,00</td>
                  <td>33%</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>18</td>
                  <td>$24,400</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>22</td>
                  <td>$32,000</td>
                  <td>42%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <br />
        <br />
        <p className="lead">
          &emsp;<u>Bubble Graph</u>
        </p>
        <br />
        <br />
        <Graph />
        <br />
        <hr />
        <p className="p-3">
          Bubble charts can be considered a variation of the scatter plot, in
          which the data points are replaced with bubbles.The metaphoric
          representation of data values as disk areas cannot be extended for
          displaying values that are negative or zero.
        </p>
        <p className="p-3 pt-0"></p>
      </div>
    </div>
  );
}

export default BeginnerBubbleChart;
