import React from "react";
import styled from "styled-components";
import { AiOutlineNotification } from "react-icons/ai";
import { StyleSubtitle } from "../../../Styles";
import { colors, fontSize, spacing } from "../../../DefaultValues";
import moment from "moment/moment";
const NoficationListItem = (props) => {
  
  return (
    <StyledItemContainer>
      <div className="icon-box">
        <AiOutlineNotification color={colors.light} size={22} />
        {props.read || <span className="dot"></span>}
      </div>
      <div className="notification-content">
        <b className="notification-date">
          {moment(props.date).fromNow()}
        </b>
        <StyleSubtitle
          className="text-capitalize"
          size={fontSize.sm}
          color={colors.muted}
        >
          {props.title}
        </StyleSubtitle>
      </div>
      
    </StyledItemContainer>
  );
};
const StyledItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0rem;

  .icon-box {
    position:relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.violet};
    margin-right: ${spacing.n};
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  .notification-date {
    font-size: 0.6rem;
    color: ${colors.dark};
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${colors.gold};
    position: absolute;
    right: 20px;
    bottom: -5px;
  }
`;
export default NoficationListItem;
