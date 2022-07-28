import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { StyleSubtitle } from "../../../Styles";
import { colors, fontSize, spacing } from "../../../DefaultValues";
const NoficationListItem = (props) => {

  return (
    <StyledItemContainer>
      <div className="icon-box">
        <AiFillHeart color={colors.voilet} size={22} />
      </div>
      <div className="notification-content">
        <b className="notification-date">{props.date.toDateString()}</b>
        <StyleSubtitle size={fontSize.sm} color={colors.muted}>
          {props.title}
        </StyleSubtitle>
      </div>
    </StyledItemContainer>
  );
};
const StyledItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;

  .icon-box {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.light};
    margin-right: ${spacing.n};
  }

  .notification-date {
    font-size: 0.6rem;
    color: ${colors.dark};
  }
`;
export default NoficationListItem;
