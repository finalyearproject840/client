import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fonts, fontSize } from "../../../DefaultValues";
import { StyleTitle } from "../../../Styles";
import NoficationListItem from "./NoficationListItem";

const NotificationContainer = (props) => {
  console.log(props.show);
  return (
    <StyledNotiContainer className="notification-container" show={props.show}>
      {/* Notification container top */}
      <div className="top">
        <StyleTitle
          size={fontSize.sm}
          className="text-uppercase"
          style={{ letterSpacing: `1px` }}
          color={colors.white}
        >
          Notifications
        </StyleTitle>
      </div>

      {/* Notification list */}
      <div className="notification-list">
        {props.data.map((item) => (
          <Link to="#" key={item.id} onClick={() => props.setShow()}>
            <NoficationListItem {...item} />
          </Link>
        ))}
      </div>
      {/* Notification container bottom */}
      <div className="bottom">
        <Link to="/supplier/notifications" className="all-link">
          Show all(3 new notifications)
        </Link>
      </div>
    </StyledNotiContainer>
  );
};

const StyledNotiContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  height: 400px;
  width: 250px;
  position: absolute;
  top: 45px;
  right: -60px;
  background-color: #fff;
  z-index: 100;
  border-radius: 5px;
  /* check and hide notification container */
  transform: ${(props) => (props.show ? "scale(1)" : "scale(0)")};
  transition: all 0.2s ease-in-out;
  transform-origin: top;
  .top {
    background-color: ${colors.voilet};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 100%;
  }
  .bottom::before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: ${colors.light};
    position: absolute;
    top: 0;
  }
  .all-link {
    font-size: ${fontSize.sm};
    font-family: ${fonts.roboto};
    color: ${colors.voilet};
    letter-spacing: 1px;
  }
  .notification-list {
    padding: 0.5rem;
    overflow-y: scroll;
    max-height: 80%;
  }
  .notification-list::-webkit-scrollbar {
    width: 10px;
    display: none;
  }
`;
export default NotificationContainer;
