import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chooseChart } from "../../redux/csvhandler";
import { useLocation } from "react-router-dom";
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

function ChartSet() {
  const location = useLocation();
  const dispatch = useDispatch();
  console.log("State is: ", location);
  return (
    <div className="container">
      <div className="row">
        <div className="offset-2 col-2 p-1">
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(chooseChart("area"))}
            to="/showdata"
            state={{ file: location.state?.data }}
          >
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={areaImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Area</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-2 p-1">
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(chooseChart("bar"))}
            to="/showdata"
            state={{ file: location.state?.data }}
          >
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={barImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Bar</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-2 p-1">
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(chooseChart("bubble"))}
            to="/showdata"
            state={{ file: location.state?.data }}
          >
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={bubbleImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Bubble</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-2 p-1">
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(chooseChart("line"))}
            to="/showdata"
            state={{ file: location.state?.data }}
          >
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={lineImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Line</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>
      <div className="row mt-2">
        <div className="offset-2 col-2 p-1">
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(chooseChart("pie"))}
            to="/showdata"
            state={{ file: location.state?.data }}
          >
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={pieImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Pie</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-2 p-1">
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(chooseChart("polar"))}
            to="/showdata"
            state={{ file: location.state?.data }}
          >
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={polarImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Polar</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-2 p-1">
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(chooseChart("radar"))}
            to="/showdata"
            state={{ file: location.state?.data }}
          >
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={radarImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Radar</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-2 p-1">
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(chooseChart("scatter"))}
            to="/showdata"
            state={{ file: location.state?.data }}
          >
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={scatterImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Scatter</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>
      <div className="row mt-2 mb-4">
        <div className="offset-3 col-2 p-1">
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(chooseChart("arc"))}
            to="/showdata"
            state={{ file: location.state?.data }}
          >
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={arcImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Arc</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-2 p-1">
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(chooseChart("chord"))}
            to="/showdata"
            state={{ file: location.state?.data }}
          >
            <Card style={{ width: "8rem" }} className="m-0">
              <Card.Img variant="top" src={chordImg} />
              <Card.Body className="p-0 text-center">
                <Card.Title>Chord</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-2 p-1">
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(chooseChart("sankey"))}
            to="/showdata"
            state={{ file: location.state?.data }}
          >
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
