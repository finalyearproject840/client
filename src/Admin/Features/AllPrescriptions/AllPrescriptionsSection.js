import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import $ from "jquery";
import { baseUrl, colors, fonts, fontSize } from "../../../DefaultValues";
import {} from "../../../Redux/Admin/AdminActions";
import { StyleTitle } from "../../../Styles";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import Loading from "../../../Shared/Components/Loading";

const AllPrescriptionsSection = () => {
 
  useEffect(() => {
    //initialize datatable
    $(document).ready(function () {
      setTimeout(function () {
        $(`#data_table`).DataTable({ retrieve: true, order: [[1, "desc"]] });
      }, 1000);
    });
  }, []);

  const appStore = useSelector((state) => state.AdminState);
  const { data, loading } = appStore.prescriptions;

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
                  Prescriptions
                </StyleTitle>

                <div className="table-responsive">
                  <table
                    id="data_table"
                    className="table table-hover table-bordered"
                  >
                    <thead>
                      <tr className="tr text-dark">
                        <th>View</th>
                        <th>Prescription ID</th>
                        <th>User ID</th>
                        <th>Requested At</th>
                        <th>Recommended Drugs</th>
                        <th>Download Prescription</th>
                      </tr>
                    </thead>
                    <tbody className="lead">
                      {data.reverse().map((item) => {
                        return (
                          <tr key={item._id}>
                            <td className="td">
                              <Link
                                to={`/admin/respond/prescription/${item._id}`}
                                className="btn btn-dark"
                              >
                                Respond
                              </Link>
                            </td>
                            <td className="td">{item._id}</td>
                            <td className="td">{item.user_id}</td>
                            <td className="td">
                              {moment(new Date(item.requested_on)).fromNow()}
                            </td>
                            <td className="td">
                              {item.recommendations.join(", ")}
                            </td>
                            <td className="td text-center">
                              <a
                                href={`${baseUrl}/${item.prescription_image}`}
                                download
                                target={"_blank"}
                                className="btn btn-danger"
                              >
                                Download
                              </a>
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
                <b>No Requested Prescription</b>
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

export default AllPrescriptionsSection;
