import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import $ from "jquery";
import { baseUrl, colors, fonts, fontSize } from "../../../DefaultValues";
import ConfirmModal from "../../../Shared/Components/ConfirmModal";
import Loading from "../../../Shared/Components/Loading";

import { Link } from "react-router-dom";
import {
  changeProductAttribute,
  VerifyProductFunc,
} from "../../../Redux/Admin/AdminActions";
import { StyleTitle } from "../../../Styles";
import moment from "moment";

const AdminProductSection = () => {
  const dispatch = useDispatch();

  const [confirmModalTitle, setConfirmModalTitle] = useState("");
  const [confirmModalFunc, setConfirmModalFunc] = useState(
    () => () => console.log("hello")
  );

  const appStore = useSelector((state) => state.AdminState);
  const { loading, data } = appStore.products;

  //const function to verify or Un-verify supplier
  const handleVerify = (options) => {
    //set the title of the confirmation modal
    setConfirmModalTitle(options.msg);
    //create a verification function to be passed into the confirmation modal
    const verifyFunc = () => {
      dispatch(
        VerifyProductFunc({
          id: options.id,
          verify: options.type === "verify" ? true : false,
        })
      );
    };
    //parse the verifyFunc to the confirmationModal to call it when admin confirm
    setConfirmModalFunc(() => () => verifyFunc());
  };

  //const change product attribute
  const handleSetAttribute = (options) => {
    //set the title of the confirmation modal
    setConfirmModalTitle(options.msg);
    //create a verification function to be passed into the confirmation modal
    const verifyFunc = () => {
      dispatch(changeProductAttribute(options));
    };
    //parse the verifyFunc to the confirmationModal to call it when admin confirm
    setConfirmModalFunc(() => () => verifyFunc());
  };
 
  useEffect(() => {
    //initialize datatable
    $(document).ready(function () {
      setTimeout(function () {
        $(`#productTable`).DataTable({ retrieve: true, order: [[2, "desc"]] });
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
                  All Medicines
                </StyleTitle>
                <div className="table-responsive">
                  <table
                    id="productTable"
                    className="table table-hover table-bordered"
                  >
                    <thead>
                      <tr className="tr text-dark">
                        <th>View</th>
                        <th>image</th>
                        <th>Product ID</th>
                        <th>Supplier</th>
                        <th>name</th>
                        <th>Special Attributes</th>
                        <th>categories</th>
                        <th>Price</th>
                        <th>Verified</th>
                        <th>Created At</th>
                        <th>Expiry Date</th>
                        <th>Manufactured Date</th>
                      </tr>
                    </thead>
                    <tbody className="lead">
                      {data.reverse().map((item) => {
                        return (
                          <tr key={item._id}>
                            <td className="td">
                              <Link
                                to={`/admin/product/${item._id}`}
                                className="btn btn-dark"
                              >
                                Details
                              </Link>
                            </td>
                            <td className="td">
                              <img
                                src={`${baseUrl}/${item.product_images[0].location}`}
                                alt="product"
                                className="img-fluid"
                              />
                            </td>
                            <td className="td">{item._id}</td>
                            <td className="td">{item.supplier_name}</td>
                            <td className="td">{item.name}</td>
                            <td className="td ">
                              <div className="d-flex special-width">
                                <button
                                  className="btn btn-dark"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  data-backdrop="false"
                                  disabled={item.special_attributes === "none"}
                                  onClick={() =>
                                    handleSetAttribute({
                                      msg: "Change product's attribute to none",
                                      id: item._id,
                                      special_attributes: "none",
                                    })
                                  }
                                >
                                  mark as none
                                </button>
                                <button
                                  className="btn btn-dark mx-2"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  data-backdrop="false"
                                  disabled={
                                    item.special_attributes === "popular"
                                  }
                                  onClick={() =>
                                    handleSetAttribute({
                                      msg: "Change product's attribute to popular",
                                      id: item._id,
                                      special_attributes: "popular",
                                    })
                                  }
                                >
                                  mark as popular
                                </button>
                                <button
                                  className="btn btn-dark"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  data-backdrop="false"
                                  disabled={
                                    item.special_attributes === "latest"
                                  }
                                  onClick={() =>
                                    handleSetAttribute({
                                      msg: "Change product's attribute to latest",
                                      id: item._id,
                                      special_attributes: "latest",
                                    })
                                  }
                                >
                                  mark as latest
                                </button>
                              </div>
                            </td>
                            <td className="td text-capitalize">
                              {item.category.join(", ")}
                            </td>
                            <td className="td">{item.price}</td>
                            <td className="td">
                              {item.verified ? (
                                <button
                                  className="btn btn-secondary"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  data-backdrop="false"
                                  onClick={() =>
                                    handleVerify({
                                      type: "unverify",
                                      msg: "You  are about to unverify this product",
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
                                      msg: "You are about to verify this product",
                                      id: item._id,
                                    })
                                  }
                                >
                                  Verify
                                </button>
                              )}
                            </td>
                            <td className="td">
                              {moment(new Date(item.created_at)).fromNow()}
                            </td>
                            <td className="td">
                              {moment(new Date(item.expiry_date)).fromNow()}
                            </td>
                            <td className="td">
                              {moment(
                                new Date(item.manufactured_date)
                              ).fromNow()}
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
                <b>No Products yet</b>
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
    font-size: ${fontSize.sm};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .td {
    font-size: ${fontSize.sm};
    color: ${colors.muted};
    font-weight: 400;
  }
  .special-width {
    width: 400px;
  }
  .special-width .btn {
    font-size: 0.8rem;
  }
`;

export default AdminProductSection;
