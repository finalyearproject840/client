import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import $ from "jquery";
import { colors, fonts, fontSize } from "../../../DefaultValues";
import ConfirmModal from "../../../Shared/Components/ConfirmModal";
import {
  suspendSupplierFunc,
  trustSupplierFunc,
  VerifySupplierFunc,
} from "../../../Redux/Admin/AdminActions";
import { StyleTitle } from "../../../Styles";
import { baseUrl } from "../../../DefaultValues";
import { Link } from "react-router-dom";
import moment from "moment/moment";

const AllSupplierSection = () => {
  const dispatch = useDispatch();
  const [confirmModalTitle, setConfirmModalTitle] = useState("");
  const [confirmModalFunc, setConfirmModalFunc] = useState(
    () => () => console.log("hello")
  );
 
  useEffect(() => {
    //initialize datatable
    $(document).ready(function () {
      setTimeout(function () {
        $(`#suppliers`).DataTable({ retrieve: true, order: [[1, "desc"]] });
      }, 1000);
    });
  }, []);

  const appStore = useSelector((state) => state.AdminState);
  const { suppliers } = appStore;

  //const function to verify or unverify supplier
  const handleVerify = (options) => {
    //set the title of the confirmation modal
    setConfirmModalTitle(options.msg);
    //create a verification function to be passed into the confirmation modal
    const verifyFunc = () => {
      dispatch(
        VerifySupplierFunc({
          id: options.id,
          verify: options.type === "verify" ? true : false,
        })
      );
    };
    //parse the verifyFunc to the confirmationModal to call it when admin confirm
    setConfirmModalFunc(() => () => verifyFunc());
  };
  //const function to trust or untrust supplier
  const handleTrust = (options) => {
    //set the title of the confirmation modal
    setConfirmModalTitle(options.msg);
    //create a trust function to be passed into the confirmation modal
    const trustFunc = () => {
      dispatch(
        trustSupplierFunc({
          id: options.id,
          trust: options.type === "trust" ? true : false,
        })
      );
    };
    //parse the trustFunc to the confirmationModal to call it when admin confirm
    setConfirmModalFunc(() => () => trustFunc());
  };

  //const function to suspend or unsuspend supplier
  const handleSuspend = (options) => {
    //set the title of the confirmation modal
    setConfirmModalTitle(options.msg);
    //create a Suspension function to be passed into the confirmation modal
    const suspendFunc = () => {
      dispatch(
        suspendSupplierFunc({
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
            {suppliers.length > 0 ? (
              <StyledTableContainer>
                <StyleTitle
                  font={fonts.barlow}
                  size={fontSize.xxl}
                  color={colors.muted}
                  className="text-center"
                >
                  All Suppliers
                </StyleTitle>

                <div className="table-responsive">
                  <table
                    id="suppliers"
                    className="table table-hover table-bordered"
                  >
                    <thead>
                      <tr className="tr text-dark">
                        <th>View</th>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Organization</th>
                        <th>Status</th>
                        <th>Verified</th>
                        <th>Trusted</th>
                        <th>Suspended</th>
                        <th>License</th>
                        <th>Created At</th>
                        <th>Tel</th>
                      </tr>
                    </thead>
                    <tbody className="lead">
                      {suppliers.reverse().map((item) => {
                        return (
                          <tr key={item._id}>
                            <td className="td">
                              <Link
                                to={`/admin/supplier/${item._id}`}
                                className="btn btn-dark"
                              >
                                Details
                              </Link>
                            </td>
                            <td className="td">{item._id}</td>
                            <td className="td">{item.email}</td>
                            <td className="td">{item.username}</td>
                            <td className="td">{item.organisation}</td>
                            <td className="td">{item.status}</td>
                            <td className="td">
                              {item.verified ? (
                                <button
                                  className="btn btn-danger"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  data-backdrop="false"
                                  onClick={() =>
                                    handleVerify({
                                      type: "unverify",
                                      msg: "You  are about to unverify this supplier",
                                      id: item._id,
                                    })
                                  }
                                >
                                  Unverify
                                </button>
                              ) : (
                                <button
                                  className="btn btn-dark"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  data-backdrop="false"
                                  onClick={() =>
                                    handleVerify({
                                      type: "verify",
                                      msg: "You are about to verify this supplier",
                                      id: item._id,
                                    })
                                  }
                                >
                                  Verify
                                </button>
                              )}
                            </td>
                            <td className="td">
                              {item.trusted ? (
                                <button
                                  className="btn btn-danger"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  data-backdrop="false"
                                  onClick={() =>
                                    handleTrust({
                                      type: "untrust",
                                      msg: "You  are about to set this supplier as untrusted",
                                      id: item._id,
                                    })
                                  }
                                >
                                  Untrusted
                                </button>
                              ) : (
                                <button
                                  className="btn btn-dark"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  data-backdrop="false"
                                  onClick={() =>
                                    handleTrust({
                                      type: "trust",
                                      msg: "You are about to set this supplier as trusted",
                                      id: item._id,
                                    })
                                  }
                                >
                                  Trust
                                </button>
                              )}
                            </td>
                            <td className="td">
                              {item.suspended ? (
                                <button
                                  className="btn btn-danger"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  data-backdrop="false"
                                  onClick={() =>
                                    handleSuspend({
                                      type: "unsuspend",
                                      msg: "You are about to unsuspend this supplier",
                                      id: item._id,
                                    })
                                  }
                                >
                                  Unsuspend
                                </button>
                              ) : (
                                <button
                                  className="btn btn-dark"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  data-backdrop="false"
                                  onClick={() =>
                                    handleSuspend({
                                      type: "suspend",
                                      msg: "You are about to suspend this supplier",
                                      id: item._id,
                                    })
                                  }
                                >
                                  Suspend
                                </button>
                              )}
                            </td>
                            <td className="td w-25">
                              {item.supplier_license ? (
                                <a
                                  href={`${baseUrl}/${item.supplier_license}`}
                                  download={true}
                                  className="btn btn-primary"
                                >
                                  Download
                                </a>
                              ) : (
                                "unavailable"
                              )}
                            </td>
                            <td className="td">
                              {moment(new Date(item.created_at)).fromNow()}
                            </td>
                            <td className="td">
                              <a href={`tel:${item.tel[0]}`}>{item.tel[0]}</a>
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
                <b>No Supplier</b>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* this is a modal to firm various actions that will be perform on suppliers */}
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

export default AllSupplierSection;
