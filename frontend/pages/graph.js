import React, { useState } from "react";
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
import { Bar, Line, Pie, Scatter } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import axios from "axios";

function convert_dict_to_int(dict) {
  const convertedDict = {};
  for (const [key, value] of Object.entries(dict)) {
    const intValue = Number(value);
    if (!Number.isNaN(intValue)) {
      convertedDict[key] = intValue;
    } else {
      convertedDict[key] = value;
    }
  }
  return convertedDict;
}

// Within a particular time frame, what was started then
// What was alive at that point in time
// When was the initial big boom of healthcare startups
// Every inflection point after that
// Look back at the programs and initiatives at that point
// Venture capital?
// Filter by Maybe only biotech, digital health company

// Geographically, look at startup cartography map
// Their data lacking might be the interconnectivity, could look at connections
// to ecosystem
// Startups as the connection between them

// Start with a heat map of sorts
// Then think about interconnectivity

// Check in with Caden to see what data he has
// Also Lawrence?
// MIT 100k, Delta V, etc.

// Size of the node of 100k would be how many startups won at it
// Sandbox would be a bigger node

// Of the successful startups (whether they reach a certain funding round stage), did they go through the same set of programs?

// The timeline one (one with programs/initiatives and one with startups) and the geographic heat map
// When they were born and whetehr they're still alive

function Chart({ data }) {
  data = data.map(convert_dict_to_int);

  data = data.filter((resource) => resource["Founding Year"]);
  data = data.filter((resource) => resource.Label);
  const [chartData, setChartData] = useState({
    datasets: [
      {
        label: "Organizations by Founding Year",
        data: data.map((item) => ({
          x: item["Founding Year"],
          y: item["Node Size"],
          label: item["Label"],
          stage: item["Stage"],
        })),

        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 0.6)",
        pointBackgroundColor: "rgba(255, 99, 132, 0.6)",
        pointBorderColor: "rgba(255, 99, 132, 0.6)",
        pointHoverBackgroundColor: "rgba(255, 99, 132, 0.8)",
        pointHoverBorderColor: "rgba(255, 99, 132, 0.8)",
      },
    ],
  });

  console.log("chartData");
  console.log(chartData);

  return (
    <div>
      <Scatter
        data={chartData}
        options={{
          scales: {
            x: {
              ticks: {
                callback: function (label) {
                  return parseInt(label);
                },
              },
            },
            y: {
              ticks: {
                callback: function (label) {
                  return label;
                },
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (tooltipItem, data) {
                  const item = tooltipItem.raw;
                  // data.datasets[tooltipItem.datasetIndex].data[
                  //   tooltipItem.index
                  // ];
                  return [`${item.label}`, `Founding Year: ${item.x}`];
                },
              },
            },
            legend: { display: false },
            title: {
              display: true,
              text: "Organizations by Founding Year",
              position: "top",
            },
          },
        }}
      />
      <div class="flex justify-center items-center h-screen">
        <div class="text-center">Founding year</div>
      </div>
    </div>
  );
}

Chart.getInitialProps = async () => {
  const res = await axios({
    method: "GET",
    mode: "cors",
    url: "http://127.0.0.1:5000/innovation_graph",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("getting data");
  console.log(res.data);
  const data = res.data;
  return { data };
};

export default Chart;

// import React, { useState, useEffect } from "react";
// import { Scatter } from "react-chartjs-2";

// const Graph = () => {
//   const [chartData, setChartData] = useState({});

//   var filteredData = data.filter((resource) => resource["Founding Year"]);
//   filteredData = filteredData.filter((resource) => resource.Label);
//   //filteredData = data.filter((resource) => resource["Node Size"]);

//   console.log("filteredData");
//   console.log(filteredData);

//   useEffect(() => {
//     setChartData({
//       labels: filteredData.map((item) => item.Label),
//       datasets: [
//         {
//           label: "Organizations",
//           data: filteredData.map((item) => ({
//             x:
//               (function () {
//                 try {
//                   return parseInt(item["Founding Year"]);
//                 } catch (error) {
//                   return 0;
//                 }
//               })() || 0,
//             y:
//               (function () {
//                 try {
//                   return parseInt(item["Node Size"]);
//                 } catch (error) {
//                   return 0;
//                 }
//               })() || 0,
//             label: item.Label,
//             entityType: item["Entity Type"] || "",
//             ecosystemLevel: item["Ecosystem Level"] || "",
//             location: item.Location || "",
//             website: item.Website || "",
//           })),
//           backgroundColor: [
//             "rgba(54, 162, 235, 0.6)",
//             "rgba(255, 99, 132, 0.6)",
//             "rgba(255, 206, 86, 0.6)",
//             "rgba(75, 192, 192, 0.6)",
//             "rgba(153, 102, 255, 0.6)",
//             "rgba(255, 159, 64, 0.6)",
//           ],
//           borderWidth: 1,
//           hoverBackgroundColor: "rgba(255,99,132,0.4)",
//           hoverBorderColor: "rgba(255,99,132,1)",
//         },
//       ],
//     });
//   }, [filteredData]);

//   const options = {
//     tooltips: {
//       callbacks: {
//         label: function (tooltipItem, data) {
//           const label =
//             data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
//           return `
//             Label: ${label.label}
//             Entity Type: ${label.entityType}
//             Ecosystem Level: ${label.ecosystemLevel}
//             Location: ${label.location}
//             Website: ${label.website}
//           `;
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <Scatter data={chartData} options={options} />
//     </div>
//   );
// };

// export default Graph;
