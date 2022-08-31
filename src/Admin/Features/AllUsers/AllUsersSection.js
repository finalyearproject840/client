import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import $ from "jquery";
import { colors, fonts, fontSize } from "../../../DefaultValues";
import ConfirmModal from "../../../Shared/Components/ConfirmModal";
import {
  suspendUserFunc,
  verifyUserFunc,
} from "../../../Redux/Admin/AdminActions";
import { StyleTitle } from "../../../Styles";
import { baseUrl } from "../../../DefaultValues";
import { Link } from 'react-router-dom';

const AllUsersSection = () => {
  const dispatch = useDispatch();
  const [confirmModalTitle, setConfirmModalTitle] = useState("");
  const [confirmModalFunc, setConfirmModalFunc] = useState(
    () => () => console.log("hello")
  );
  //get suppliers keys for table columns
  useEffect(() => {
    //initialize datatable
    $(document).ready(function () {
      setTimeout(function () {
        $(`#usertable`).DataTable();
      }, 1000);
    });
  }, []);

  const appStore = useSelector((state) => state.AdminState);
  const { users } = appStore;
  console.log(users);

  //const function to verify or unverify user
  const handleVerify = (options) => {
    //set the title of the confirmation modal
    setConfirmModalTitle(options.msg);
    //create a verification function to be passed into the confirmation modal
    const verifyFunc = () => {
      dispatch(
        verifyUserFunc({
          id: options.id,
          verify: options.type === "verify" ? true : false,
        })
      );
    };
    //parse the verifyFunc to the confirmationModal to call it when admin confirm
    setConfirmModalFunc(() => () => verifyFunc());
  };

  //const function to suspend or unsuspend user
  const handleSuspend = (options) => {
    //set the title of the confirmation modal
    setConfirmModalTitle(options.msg);
    //create a Suspension function to be passed into the confirmation modal
    const suspendFunc = () => {
      dispatch(
        suspendUserFunc({
          id: options.id,
          suspend: options.type === "suspend" ? true : false,
        })
      );
    };
    //parse the suspendFun to the confirmationModal to call it when admin confirm
    setConfirmModalFunc(() => () => suspendFunc());
  };

  return (
    <StyledTableSection>
      <div className="container">
        <div className="row">
          {/* column one */}
          <div className="col-12">
            {users.length > 0 ? (
              <StyledTableContainer>
                <StyleTitle
                  font={fonts.barlow}
                  size={fontSize.xxl}
                  color={colors.muted}
                  className="text-center"
                >
                  All Users
                </StyleTitle>

                <div className="table-responsive">
                  <table
                    id="usertable"
                    className="table table-hover table-bordered"
                  >
                    <thead>
                      <tr className="tr">
                        <th>View</th>
                        <th>ID</th>
                        <th>Email</th>
                        <th>first Name</th>
                        <th>Last Name</th>
                        <th>Verified</th>
                        <th>Suspended</th>
                        <th>Created At</th>
                        <th>Address</th>
                        <th>Tel</th>
                      </tr>
                    </thead>
                    <tbody className="lead">
                      {users.map((item) => {
                        return (
                          <tr key={item._id}>
                            <td className="td">
                              <Link
                                to={`/admin/user/${item._id}`}
                                className="btn btn-dark"
                              >
                                Details
                              </Link>
                            </td>
                            <td className="td">{item._id}</td>
                            <td className="td">{item.email}</td>
                            <td className="td">{item.firstname}</td>
                            <td className="td">{item.lastname}</td>
                            <td className="td">
                              {item.verified ? (
                                <button
                                  className="btn btn-secondary btn"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  data-backdrop="false"
                                  onClick={() =>
                                    handleVerify({
                                      type: "unverify",
                                      msg: "You  are about to unverify this user",
                                      id: item._id,
                                    })
                                  }
                                >
                                  Unverify
                                </button>
                              ) : (
                                <button
                                  className="btn btn-secondary btn"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  data-backdrop="false"
                                  onClick={() =>
                                    handleVerify({
                                      type: "verify",
                                      msg: "You are about to verify this user",
                                      id: item._id,
                                    })
                                  }
                                >
                                  Verify
                                </button>
                              )}
                            </td>
                            <td className="td">
                              {item.suspended ? (
                                <button
                                  className="btn btn-secondary btn"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  data-backdrop="false"
                                  onClick={() =>
                                    handleSuspend({
                                      type: "unsuspend",
                                      msg: "You are about to unsuspend this user",
                                      id: item._id,
                                    })
                                  }
                                >
                                  Unsuspend
                                </button>
                              ) : (
                                <button
                                  className="btn btn-secondary btn"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  data-backdrop="false"
                                  onClick={() =>
                                    handleSuspend({
                                      type: "suspend",
                                      msg: "You are about to suspend this user",
                                      id: item._id,
                                    })
                                  }
                                >
                                  Suspend
                                </button>
                              )}
                            </td>
                            <td className="td">
                              {new Date(item.created_at).toDateString()}
                            </td>
                            <td className="td">{item.address.join(",")}</td>
                            <td className="td">{item.tel.join(",")}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </StyledTableContainer>
            ) : (
              <div className="alert alert-light  text-center" role="alert">
                <b>No User</b>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* this is a modal to firm various actions that will be perform on users */}
      <ConfirmModal title={confirmModalTitle} confirm={confirmModalFunc} />
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
`;

export default AllUsersSection;
