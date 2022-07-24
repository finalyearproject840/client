import React from "react";
import styled from "styled-components";
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
import { colors } from "../../DefaultValues";

const Chart = (props) => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );



  return (
    <StyledContainer>
      <Line options={props.options} data={props.data} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
background-color: ${colors.white};
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;

export default Chart;
