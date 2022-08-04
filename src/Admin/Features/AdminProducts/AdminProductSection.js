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
import {
  loadProductFunc,
  VerifyProductFunc,
} from "../../../Redux/Admin/AdminActions";
import { StyleTitle } from "../../../Styles";

const AdminProductSection = () => {
  const dispatch = useDispatch();

  const [confirmModalTitle, setConfirmModalTitle] = useState("");
  const [confirmModalFunc, setConfirmModalFunc] = useState(
    () => () => console.log("hello")
  );

  const appStore = useSelector((state) => state.AdminState);
  const { loading, error, data } = appStore.products;

  //const function to verfy or unverify supplier
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
                  All Medicines
                </StyleTitle>
                <div className="table-responsive">
                  <table
                    id="productTable"
                    className="table table-hover table-bordered"
                  >
                    <thead>
                      <tr className="tr">
                        <th>View</th>
                        <th>Product ID</th>
                        <th>Supplier ID</th>
                        <th>name</th>
                        <th>category</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Verified</th>
                        <th>Quantity</th>
                        <th>Rating</th>
                        <th>Reviews</th>
                        <th>Created At</th>
                        <th>Expiry Date</th>
                        <th>Manufactured Date</th>
                      </tr>
                    </thead>
                    <tbody className="lead">
                      {data.map((item) => {
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
                            <td className="td">{item._id}</td>
                            <td className="td">{item.supplier.supplier_id}</td>
                            <td className="td">{item.name}</td>
                            <td className="td">{item.category}</td>
                            <td className="td">{item.price}</td>
                            <td className="td">{item.status}</td>
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
                                      msg: "You  are about to unverify this product",
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
                                      msg: "You are about to verify this product",
                                      id: item._id,
                                    })
                                  }
                                >
                                  Verify
                                </button>
                              )}
                            </td>
                            <td className="td">{item.quantity}</td>
                            <td className="td">{item.totalRating}</td>
                            <td className="td">{item.totalReviews}</td>
                            <td className="td">
                              {new Date(item.created_at).toDateString()}
                            </td>
                            <td className="td">
                              {new Date(item.expiry_date).toDateString()}
                            </td>
                            <td className="td">
                              {new Date(item.manufactured_date).toDateString()}
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
                <b>No Products yets</b>
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
    letter-spacing: 1px;
    font-weight: 500;
  }
`;

export default AdminProductSection;
