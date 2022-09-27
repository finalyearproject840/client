import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fonts, fontSize } from "../../../DefaultValues";

const MenuListItem = (props) => {
  return (
    <StyledListItem active={props.active}>
      <Link to={props.Link ? props.Link : "#"} className="list-link">
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
  position: relative;

  &::after {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    display: block;
    background-color: ${colors.violet};
    position: absolute;
    bottom: 10px;
    right: 5px;
  }

  .list-link {
    color: ${(props) =>
      props.active === "true" ? colors.violet : colors.muted};
    font-weight: 500;
  }
  .list-link:hover {
    color: ${colors.violet};
  }
`;
export default MenuListItem;
