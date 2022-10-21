import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import $ from "jquery";
import { baseUrl, colors, fonts, fontSize } from "../../../DefaultValues";
import ConfirmModal from "../../../Shared/Components/ConfirmModal";
import { loadProductFunc } from "../../../Redux/Supplier/SupplierActions";
import Loading from "../../../Shared/Components/Loading";
//datatables
import "datatables.net-bs5/js/dataTables.bootstrap5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import { Link } from "react-router-dom";


const SupplierProductSection = () => {
  const dispatch = useDispatch();
  const [confirmModalTitle, setConfirmModalTitle] = useState("");
  const [confirmModalFunc, setConfirmModalFunc] = useState(
    () => () => console.log("hello")
  );
  

  const appStore = useSelector((state) => state.SupplierState);
  const { supplier } = appStore;
  const { loading, error, data } = appStore.products;

  useEffect(() => {
    if (supplier) {
      dispatch(loadProductFunc(supplier._id));
    }
  }, [supplier]);

 
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
                <div className="table-responsive">
                  <table
                    id="productTable"
                    className="table table-hover table-bordered"
                  >
                    <thead>
                      <tr className="tr">
                        <th>View</th>
                        <th>Offers</th>
                        <th>Image</th>
                        <th>ID</th>
                        <th>name</th>
                        <th>categories</th>
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
                    <tbody>
                      {data.map((item) => {
                        return (
                          <tr key={item._id}>
                            <td className="td"><Link to={`/supplier/product/${item._id}`} className="btn btn-dark">Details</Link></td>
                            <td className="td"><Link to={`/supplier/offers/${item._id}`} className="btn btn-dark">Offers</Link></td>
                            <td className="td">
                              <img
                                src={`${baseUrl}/${item.product_images[0].location}`}
                                alt="product"
                                className="img-fluid"
                              />
                            </td>
                            <td className="td">{item._id}</td>
                            <td className="td">{item.name}</td>
                            <td className="td text-capitalize">{item.category.join(", ")}</td>
                            <td className="td">{item.price}</td>
                            <td className="td">{item.status}</td>
                            <td className="td">{item.verified?"Yes":"No"}</td>
                            <td className="td">{item.quantity}</td>
                            <td className="td">{item.totalRating}</td>
                            <td className="td">{item.totalReviews}</td>
                            <td className="td">{new Date(item.created_at).toDateString()}</td>
                            <td className="td">{new Date(item.expiry_date).toDateString()}</td>
                            <td className="td">{new Date(item.manufactured_date).toDateString()}</td>
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
`;

export default SupplierProductSection;
