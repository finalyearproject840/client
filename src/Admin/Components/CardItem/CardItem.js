import React from "react";
import styled from "styled-components";
import { colors } from "../../../DefaultValues";

const CardItem = (props) => {
  return (
    <StyledCard className={props.className} {...props}>
      {props.children}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  .card-container {
    background-color: ${(props) =>
      props.background ? props.background : colors.white};
    border-radius: 6px;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    min-height: 200px;
    border-right: 3px solid
      ${(props) => (props.color ? props.color : colors.violet)};
    margin: 1rem 0rem;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-between;
    text-align:center;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  .icon-box {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.color ? props.color : colors.violet)};
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
  .text-container {
    position: relative;
  }
  
  @media screen and (min-width:768px){
    .card-container{
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction:unset;
      min-height: 120px;
      text-align:unset;
    }

    .text-container{
      width:40%;
    }
    .text-container::before {
      content: "";
      position: absolute;
      width: 2px;
      height: 100%;
      background-color: ${(props) => (props.color ? props.color : colors.violet)};
      left: -30px;
    }
    
  }
`;

export default CardItem;
