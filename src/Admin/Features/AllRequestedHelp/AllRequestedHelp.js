import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import $ from "jquery";
import { colors, fonts, fontSize } from "../../../DefaultValues";
import ConfirmModal from "../../../Shared/Components/ConfirmModal";
import Loading from "../../../Shared/Components/Loading";
//datatables
import "datatables.net-bs5/js/dataTables.bootstrap5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import { Link } from "react-router-dom";
import { readHelpFunc } from "../../../Redux/Admin/AdminActions";
import { StyleTitle } from "../../../Styles";
import moment from "moment/moment";

const AllRequestedHelp = () => {
  const dispatch = useDispatch();

  const appStore = useSelector((state) => state.AdminState);
  const { loading, data } = appStore.helps;

  //const function to mark notification as read
  const handleMarkAsRead = (id) => {
    dispatch(readHelpFunc(id));
  };

  useEffect(() => {
    //initialize datatable
    $(document).ready(function () {
      setTimeout(function () {
        $(`#requests`).DataTable({ retrieve: true, order: [[0, "desc"]] });
      }, 1000);
    });
  }, []);

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
                  All Helps
                </StyleTitle>
                <div className="table-responsive">
                  <table
                    id="requests"
                    className="table table-hover table-bordered"
                  >
                    <thead>
                      <tr className="tr">
                        <th>View</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Read</th>
                        <th>From</th>
                        <th>Form ID</th>
                        <th>Created At</th>
                      </tr>
                    </thead>
                    <tbody className="lead">
                      {data.map((item) => {
                        return (
                          <tr key={item._id}>
                            <td className="position-relative">
                              <Link to={`/admin/help/${item._id}`}><button className="btn btn-dark">View</button></Link>
                              {item.read || <span className="dot"></span>}
                            </td>
                            <td>{item.subject}</td>
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
                            <td>{item.entityID}</td>
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
                <b>No Requested Help</b>
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

export default AllRequestedHelp;
