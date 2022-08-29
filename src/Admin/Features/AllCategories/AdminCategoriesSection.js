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
import { deleteCategoryFunc } from "../../../Redux/Admin/AdminActions";
import { StyleTitle } from "../../../Styles";
import { Link } from "react-router-dom";

const AdminCategoriesSection = () => {
  const dispatch = useDispatch();
  const [confirmModalTitle, setConfirmModalTitle] = useState("");
  const [confirmModalFunc, setConfirmModalFunc] = useState(
    () => () => console.log("hello")
  );

  const appStore = useSelector((state) => state.AdminState);
  const { loading, data } = appStore.categories;

  //function to delete category
  const handleDelete = (options) => {
    //set the title of the confirmation modal
    setConfirmModalTitle(options.msg);
    //create a deletion function to be passed into the confirmation modal
    const deleteFunc = () => {
      dispatch(deleteCategoryFunc({ id: options.id }));
    };
    //parse the deleteFunc to the confirmationModal to call it when admin confirm
    setConfirmModalFunc(() => () => deleteFunc());
  };

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
                <div className="d-flex justify-content-end mt-3 me-5">
                  <Link to="/admin/add/category" className="btn btn-primary">
                    Add Category
                  </Link>
                </div>
                <StyleTitle
                  font={fonts.barlow}
                  size={fontSize.xxl}
                  color={colors.muted}
                  className="text-center"
                >
                  All Categories
                </StyleTitle>

                <div className="table-responsive">
                  <table
                    id="productTable"
                    className="table table-hover table-bordered"
                  >
                    <thead>
                      <tr className="tr">
                        <th>ID</th>
                        <th>Category Name</th>
                        <th>Delete</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody className="lead">
                      {data.map((item) => {
                        return (
                          <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.category_name}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                data-backdrop="false"
                                onClick={() =>
                                  handleDelete({
                                    id: item._id,
                                    msg: "You are about to delete this category",
                                  })
                                }
                              >
                                Delete
                              </button>
                            </td>
                            <td>
                              <Link
                                className="btn btn-dark"
                                to={`/admin/edit/category/${item._id}`}
                              >
                                Edit
                              </Link>
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
    letter-spacing: 1px;
    font-weight: 500;
  }
`;

export default AdminCategoriesSection;
