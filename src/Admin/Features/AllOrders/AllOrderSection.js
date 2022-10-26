import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import $ from "jquery";
import { colors, fonts, fontSize } from "../../../DefaultValues";
import ConfirmModal from "../../../Shared/Components/ConfirmModal";
import {
  setDeliveryStatusFunc,
  suspendSupplierFunc,
  VerifySupplierFunc,
} from "../../../Redux/Admin/AdminActions";
import { StyleTitle } from "../../../Styles";
import { Link } from "react-router-dom";
import moment from "moment/moment";

const AllOrderSection = () => {
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
  const { orders } = appStore;

  const handleChangeDelivery = (id) => {
    dispatch(setDeliveryStatusFunc(id));
  };

  return (
    <StyledTableSection>
      <div className="container">
        <div className="row">
          {/* column one */}
          <div className="col-12">
            {orders.data.length > 0 ? (
              <StyledTableContainer>
                <StyleTitle
                  font={fonts.barlow}
                  size={fontSize.xxl}
                  color={colors.muted}
                  className="text-center"
                >
                  All Orders
                </StyleTitle>

                <div className="table-responsive">
                  <table
                    id="suppliers"
                    className="table table-hover table-bordered"
                  >
                    <thead>
                      <tr className="tr text-dark">
                        <th>View</th>
                        <th>Order ID</th>
                        <th>Products</th>
                        <th>Suppliers</th>
                        <th>Amount</th>
                        <th>Time</th>
                        <th>Customer</th>
                        <th>DeliveryStatus</th>
                      </tr>
                    </thead>
                    <tbody className="lead">
                      {orders.data.reverse().map((item) => {
                        return (
                          <tr key={item._id}>
                            <td className="td">
                              <Link
                                to={`/admin/order/${item._id}`}
                                className="btn btn-dark"
                              >
                                Details
                              </Link>
                            </td>
                            <td className="td">{item._id}</td>
                            <td className="td">
                              {item.items.map((product) => (
                                <Link
                                  key={product._id}
                                  to={`/admin/product/${product._id}`}
                                  className="d-block"
                                >
                                  {product.name}
                                </Link>
                              ))}
                            </td>
                            <td className="td">
                              {item.suppliers.map((supplier) => (
                                <Link
                                  key={supplier.supplier_id}
                                  to={`/admin/supplier/${supplier.supplier_id}`}
                                  className="d-block"
                                >
                                  {supplier.supplier_name}
                                </Link>
                              ))}
                            </td>
                            <td className="td">
                              GHS{" "}
                              {item.items.reduce(
                                (acc, curr) =>
                                  parseFloat(acc) + parseFloat(curr.subTotal),
                                [0]
                              )}
                            </td>
                            <td className="td">
                              {moment(new Date(item.orderDate)).fromNow()}
                            </td>
                            <td className="td">
                              <Link to={`/admin/user/${item.user._id}`}>
                                {item.user.firstname + " " + item.user.lastname}
                              </Link>
                            </td>
                            <td className="td">
                              {item.deliveryStatus}
                              {item.deliveryStatus === "awaiting" && (
                                <button
                                  className="btn btn-dark"
                                  onClick={() => handleChangeDelivery(item._id)}
                                >
                                  Change to delivered
                                </button>
                              )}
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
                <b>No Orders</b>
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

export default AllOrderSection;
