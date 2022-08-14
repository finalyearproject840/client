import React, { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import $ from "jquery";
import { colors, fonts, fontSize } from "../../../DefaultValues";
import Loading from "../../../Shared/Components/Loading";
//datatables
import "datatables.net-bs5/js/dataTables.bootstrap5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import { Link } from "react-router-dom";
import { StyleTitle } from "../../../Styles";
import { readNotificationFunc } from "../../../Redux/Supplier/SupplierActions";

const SupplierNotificationSection = () => {
  const dispatch = useDispatch();

  const appStore = useSelector((state) => state.SupplierState);
  const { loading, error, data } = appStore.notifications;

  //const function to mark notification as read
  const handleMarkAsRead = (id) => {
    dispatch(readNotificationFunc(id));
  };

  //get suppliers keys for table columns
  useEffect(() => {
    //initialize datatable
    $(document).ready(function () {
      setTimeout(function () {
        $(`#productTable`).DataTable();
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
                <Loading width={100} />
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
                      <tr className="tr">
                        <th>Notification ID</th>
                        <th>Title</th>
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
                          <tr
                            key={item._id}
                            className={item.read ? "" : "bg-secondary text-light bg-gradient"}
                          >
                            <td>{item._id}</td>
                            <td>{item.title}</td>
                            <td className="text-justify">{item.message}</td>
                            <td className="td" width={100}>
                              {item.read ? (
                                <span>Read</span>
                              ) : (
                                <button
                                  className="btn btn-light"
                                  type="button"
                                  onClick={() => handleMarkAsRead(item._id)}
                                  style={{ width:"150px" }}
                                >
                                  Mark as read
                                </button>
                              )}
                            </td>
                            <td>{item.entityType}</td>
                            <td>{item.entityID}</td>
                            <td className="td">
                              {new Date(item.created_at).toDateString()}
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
                <b>No Notifications yet</b>
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
  .lead{
    font-size: ${fontSize.n};
  }
`;

export default SupplierNotificationSection;
