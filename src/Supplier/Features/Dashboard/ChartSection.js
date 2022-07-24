import React from "react";
import styled from "styled-components";
import { colors } from "../../../DefaultValues";
import Chart from "../../../Shared/Components/Chart";
const ChartSection = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: "Sales Per Month",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [22, 92, 59, 100, 25, 39, 92],
        borderColor: colors.voilet,
        backgroundColor: colors.blue,
      },
    ],
  };

  //chart 2 data
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: "Sales Per Month",
      },
    },
  };

  const labels2 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data2 = {
    labels2,
    datasets: [
      {
        label: "",
        data: [22, 92, 59, 100, 25, 39, 92],
        borderColor: colors.voilet,
        backgroundColor: colors.blue,
      },
    ],
  };
  return (
    <StyledChartSection>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* Chart 1 */}
            <Chart data={data} options={options} />
            {/* chart 2 */}
          </div>
          <div className="col-lg-4">
            {/* chart 2 */}
           
          </div>
        </div>
      </div>
    </StyledChartSection>
  );
};

const StyledChartSection = styled.div``;

export default ChartSection;
