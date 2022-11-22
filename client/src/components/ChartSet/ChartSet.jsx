import React from "react";
import Card from "react-bootstrap/Card";
import areaImg from "../../assets/graphImages/area.PNG";
import barImg from "../../assets/graphImages/bar.PNG";
import bubbleImg from "../../assets/graphImages/bubble.PNG";
import lineImg from "../../assets/graphImages/line.PNG";
import pieImg from "../../assets/graphImages/pie.PNG";
import polarImg from "../../assets/graphImages/polar.PNG";
import radarImg from "../../assets/graphImages/radar.PNG";
import scatterImg from "../../assets/graphImages/scatter.PNG";
import arcImg from "../../assets/graphImages/arc.PNG";
import sankeyImg from "../../assets/graphImages/sankey.png";
import chordImg from "../../assets/graphImages/chord.PNG";
import { Link } from "react-router-dom";

function ChartSet() {
  return (
    <div className="container border p-3">
      <div className="row m-auto">
        <div className="col-xs-6 col-md-6 col-lg-4 col-xl-3 p-1">
          <Link style={{ textDecoration: "none" }} to="/areachart">
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={areaImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Area</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-xs-6 col-md-6 col-lg-4 col-xl-3 p-1">
          <Link style={{ textDecoration: "none" }} to="/barchart">
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={barImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Bar</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-xs-6 col-md-6 col-lg-4 col-xl-3 p-1">
          <Link style={{ textDecoration: "none" }} to="/bubblechart">
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={bubbleImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Bubble</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-xs-6 col-md-6 col-lg-4 col-xl-3 p-1">
          <Link style={{ textDecoration: "none" }} to="/linechart">
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={lineImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Line</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
      
        <div className="col-xs-6 col-md-6 col-lg-4 col-xl-3 p-1">
          <Link style={{ textDecoration: "none" }} to="/piechart">
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={pieImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Pie</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-xs-6 col-md-6 col-lg-4 col-xl-3 p-1">
          <Link style={{ textDecoration: "none" }} to="/polarareachart">
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={polarImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Polar</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-xs-6 col-md-6 col-lg-4 col-xl-3 p-1">
          <Link style={{ textDecoration: "none" }} to="/radarchart">
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={radarImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Radar</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-xs-6 col-md-6 col-lg-4 col-xl-3 p-1">
          <Link style={{ textDecoration: "none" }} to="/scatterchart">
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={scatterImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Scatter</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
      
        <div className="col-xs-6 col-md-6 col-lg-4 col-xl-3 p-1">
          <Link style={{ textDecoration: "none" }} to="/arcchart">
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={arcImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Arc</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-xs-6 col-md-6 col-lg-4 col-xl-3 p-1">
          <Link style={{ textDecoration: "none" }} to="/chordchart">
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={chordImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Chord</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-xs-6 col-md-6 col-lg-4 col-xl-3 p-1">
          <Link style={{ textDecoration: "none" }} to="/sankeychart">
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={sankeyImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Sankey</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChartSet;
