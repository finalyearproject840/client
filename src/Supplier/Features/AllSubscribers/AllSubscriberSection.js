import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import $ from "jquery";
import { colors, fonts, fontSize } from "../../../DefaultValues";
import { StyleTitle } from "../../../Styles";
import { Link } from "react-router-dom";
import Loading from "./../../../Shared/Components/Loading";

const AllSubscriberSection = () => {
  useEffect(() => {
    //initialize datatable
    $(document).ready(function () {
      setTimeout(function () {
        $(`#user`).DataTable({ retrieve: true, order: [[2, "desc"]] });
      }, 1000);
    });
  }, []);

  const appStore = useSelector((state) => state.SupplierState);
  const { data, loading } = appStore.subscribers;

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
                  size={fontSize.xl}
                  color={colors.muted}
                  className="text-center"
                >
                  My Subscribers
                </StyleTitle>

                <div className="table-responsive">
                  <table id="user" className="table table-hover table-bordered">
                    <thead>
                      <tr className="tr">
                        <th>View</th>
                        <th>Email</th>
                        <th>first Name</th>
                        <th>Last Name</th>
                        <th>Tel</th>
                      </tr>
                    </thead>
                    <tbody className="lead">
                      {data.reverse().map((item) => {
                        return (
                          <tr key={item._id}>
                            <td className="td">
                              <Link
                                to={`/supplier/subscriber/${item.user.user_id}`}
                                className="btn btn-dark"
                              >
                                Details
                              </Link>
                            </td>
                            <td className="td">
                            <a href={`mailto:${item.user.email}`}>{item.user.email}</a>
                            </td>
                            <td className="td text-capitalize">{item.user.firstname}</td>
                            <td className="td text-capitalize">{item.user.lastname}</td>
                            <td className="td">
                              <a href={`tel:${item.user.tel[0]}`}>{item.user.tel[0]}</a>
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
                <b>No Subscribers</b>
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
`;

export default AllSubscriberSection;
