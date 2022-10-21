import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AdminRoutes, colors, fonts, fontSize } from "../../../DefaultValues";
import { readNotificationFunc } from "../../../Redux/Admin/AdminActions";
import { StyleTitle } from "../../../Styles";
import NoficationListItem from "./NoficationListItem";

const NotificationContainer = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch()
  //const function to mark notification as read
  const handleMarkAsRead = (id) => {
    dispatch(readNotificationFunc(id));
  };

  const getData = () => {
    setLoading(true);
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${AdminRoutes.adminNotification}?limit=10`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          setLoading(false);
          setData(response.data.data);
        } else {
          setLoading(false);
          setError(true);
        }
      })
      .catch(function (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const notificationLinkTo = (linkInfo,id) => {
    handleMarkAsRead(id)
    if (linkInfo.to === "product") {
      return navigate(`/admin/product/${linkInfo.link}`);
    }
    if (linkInfo.to === "supplier") {
      return navigate(`/admin/supplier/${linkInfo.link}`);
    }
    if (linkInfo.to === "user") {
      return navigate(`/admin/user/${linkInfo.link}`);
    }
    if (linkInfo.to === "help") {
      return navigate(`/admin/help/${linkInfo.link}`);
    }
    if (linkInfo.to === "contact message") {
      return navigate(`/admin/contact/message/${linkInfo.link}`);
    }
    if (linkInfo.to === "prescription") {
      return navigate(`/admin/all/prescription`);
    }
  };

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
        {data.length < 0 ? (
          <div>loading....</div>
        ) : (
          data.map((item) => (
            <span
              className="span-link"
              key={item._id}
              onClick={() => notificationLinkTo(item.links[0], item._id)}
            >
              <NoficationListItem
                title={item.title}
                read={item.read}
                id={item._id}
                date={new Date(item.created_at)}
              />
            </span>
          ))
        )}
      </div>
      {/* Notification container bottom */}
      <div className="bottom">
        <Link to="/admin/all/notifications" className="all-link">
          {data.length > 0
            ? `${
                data.filter((item) => item.read === false).length
              } unread messages`
            : "No unread messages"}
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
    background-color: ${colors.violet};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .span-link {
    cursor: pointer;
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
    color: ${colors.violet};
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
