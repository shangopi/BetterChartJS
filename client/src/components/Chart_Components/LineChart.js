import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useCallback, useRef } from "react";
import { Button } from "react-bootstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = (props) => {
  //code for downloading the chart
  const ref = useRef(null);
  const downloadImage = useCallback(() => {
    const link = document.createElement("a");
    link.download = "bar_chart.png";
    link.href = ref.current.toBase64Image();
    link.click();
  }, []);

  return (
    <div>
      <Line options={props.config} ref={ref} data={props.data} />
      {<br></br>}
      <Button
        className="float-right"
        variant="outline-danger"
        onClick={downloadImage}
      >
        {" "}
        Export Chart
      </Button>{" "}
    </div>
  );
};
export default LineChart;
