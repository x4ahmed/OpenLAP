import { useState } from "react";
import { Box } from "@mui/material";
import Chart from "react-apexcharts";

const BoxPlot = () => {
  const [options, setOptions] = useState({
    options: {
      title: {
        text: "Basic BoxPlot Chart",
        align: "left",
      },
      plotOptions: {
        boxPlot: {
          colors: {
            upper: "#5C4742",
            lower: "#A5978B",
          },
        },
      },
    },
    series: [
      {
        // type: "boxPlot",
        data: [
          {
            x: "Jan 2015",
            y: [54, 66, 69, 75, 88],
          },
          {
            x: "Jan 2016",
            y: [43, 65, 69, 76, 81],
          },
          {
            x: "Jan 2017",
            y: [31, 39, 45, 51, 59],
          },
          {
            x: "Jan 2018",
            y: [39, 46, 55, 65, 71],
          },
          {
            x: "Jan 2019",
            y: [29, 31, 35, 39, 44],
          },
          {
            x: "Jan 2020",
            y: [41, 49, 58, 61, 67],
          },
          {
            x: "Jan 2021",
            y: [54, 59, 66, 71, 88],
          },
        ],
      },
    ],
  });

  return (
    <Box sx={{ px: 1.5, height: "57vh" }}>
      <Chart
        options={options.options}
        series={options.series}
        type="boxPlot"
        height={"100%"}
      />
    </Box>
  );
};

export default BoxPlot;
