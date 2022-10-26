import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import $ from "jquery";
import { colors, fonts, fontSize } from "../../../DefaultValues";
import Loading from "../../../Shared/Components/Loading";
//datatables
import "datatables.net-bs5/js/dataTables.bootstrap5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import { Link, useNavigate } from "react-router-dom";
import {
  readNotificationFunc,
} from "../../../Redux/Admin/AdminActions";
import { StyleTitle } from "../../../Styles";
import moment from "moment/moment";

const AdminNotificationSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const appStore = useSelector((state) => state.AdminState);
  const { loading, data } = appStore.notifications;

  //const function to mark notification as read
  const handleMarkAsRead = (id) => {
    dispatch(readNotificationFunc(id));
  };

  useEffect(() => {
    //initialize datatable
    $(document).ready(function () {
      setTimeout(function () {
        $(`#productTable`).DataTable({ retrieve: true, order: [[0, "desc"]] });
      }, 1000);
    });
  }, [data]);

  const notificationLinkTo = (linkInfo, id) => {
    handleMarkAsRead(id);
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
    if (linkInfo.to === "order") {
      return navigate(`/admin/order/${linkInfo.link}`);
    }
  };

  return (
    <StyledTableSection>
      <div className="container">
        <div className="row">
          {/* column one */}
          <div className="col-12">
            {loading ? (
              <div className="d-flex justify-content-center">
                <Loading width={50} />
              </div>
            ) : data.length > 0 ? (
              <StyledTableContainer>
                <StyleTitle
                  font={fonts.barlow}
                  size={fontSize.xxl}
                  color={colors.muted}
                  className="text-center"
                >
                  All Notification
                </StyleTitle>
                <div className="table-responsive">
                  <table
                    id="productTable"
                    className="table table-hover table-bordered"
                  >
                    <thead>
                      <tr className="tr text-dark">
                        <th>View</th>
                        <th>Title</th>
                        <th>Message</th>
                        <th>Read</th>
                        <th>From</th>
                        <th>Received</th>
                      </tr>
                    </thead>
                    <tbody className="lead">
                      {data.map((item) => {
                        return (
                          <tr key={item._id}>
                            <td className="position-relative">
                              <button
                                onClick={() =>
                                  notificationLinkTo(item.links[0], item._id)
                                }
                                to={"#"}
                                className="btn btn-dark"
                              >
                                View
                              </button>
                              {item.read || <span className="dot"></span>}
                            </td>
                            <td>{item.title}</td>
                            <td className="text-justify">{item.message}</td>
                            <td className="td" width={100}>
                              {item.read ? (
                                <span>Read</span>
                              ) : (
                                <button
                                  className="btn btn-light"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  data-backdrop="false"
                                  onClick={() => handleMarkAsRead(item._id)}
                                  style={{ width: "150px" }}
                                >
                                  Mark as read
                                </button>
                              )}
                            </td>
                            <td>{item.entityType}</td>

                            <td className="td">
                              {moment(new Date(item.created_at)).fromNow()}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </StyledTableContainer>
            ) : (
              <div className="alert alert-light  text-center" role="alert">
                <b>No Notification yet</b>
              </div>
            )}
          </div>
        </div>
      </div>
    </StyledTableSection>
  );
};

const StyledTableSection = styled.div`
  margin: 2rem 0rem;
`;

const StyledTableContainer = styled.div`
  background-color: ${colors.white};
  padding: 0.5rem;
  border-radius: 5px;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  .tr {
    color: ${colors.blue};
    font-family: ${fonts.barlow};
    font-size: ${fontSize.sm};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .td {
    font-size: ${fontSize.sm};
    color: ${colors.muted};
    letter-spacing: 1px;
    font-weight: 500;
    font-family: ${fonts.roboto};
  }
  .lead {
    font-size: ${fontSize.n};
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${colors.green};
    position: absolute;
    right: 10px;
    top: 20px;
  }
`;

export default AdminNotificationSection;
