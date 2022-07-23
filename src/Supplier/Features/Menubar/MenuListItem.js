import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fonts, fontSize } from "../../../DefaultValues";

const MenuListItem = (props) => {
  return (
    <StyledListItem>
      <Link to="#" className="list-link">
        {props.icon}
        <span className="ms-3">{props.text}</span>
      </Link>
    </StyledListItem>
  );
};
const StyledListItem = styled.li`
  margin: 1rem 0rem;
  display: flex;
  align-items: center;
  font-size: ${(props) => (props.size ? props.size : fontSize.sm)};
  font-family: ${(props) => (props.font ? props.font : fonts.barlow)};
  letter-spacing: 1px;
  position:relative;

  &::after{
    content:"";
    width: 5px;
    height:5px;
    border-radius: 50%;
    display: block;
    background-color: ${colors.voilet};
    position:absolute;
    bottom: 10px;
    right:5px;
  }


  .list-link {
    color: ${colors.muted};
    font-weight: 500;
  }
  .list-link:hover{
    color: ${colors.voilet}
  }
`;
export default MenuListItem;
