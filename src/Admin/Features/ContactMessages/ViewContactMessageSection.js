import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../Shared/Components/Loading";
import styled from "styled-components";
import { AdminRoutes, colors } from "../../../DefaultValues";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";
import moment from "moment/moment";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";

const ViewContactMessageSection = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [supplierInfo, setSupplierInfo] = useState(null);

  const id = useParams().id;
  const getData = (id) => {
    setLoading(true);
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${AdminRoutes.contactMessage}/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          setLoading(false);
          setData(response.data.data);
        } else {
          setLoading(false);
        }
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    getData(id);
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <StyledTableContainer>
            {/*form with formik  */}
            {loading ? (
              <div className="d-flex justify-content-center">
                <Loading />
              </div>
            ) : data ? (
              <>
                <h5 className="display-6 text-center text-capitalize">
                  {data.subject}
                </h5>
                <p className="py-5">{data.message}</p>
                <div>
                  By{" "}
                  <Link to={`/admin/supplier/${data.entityID}`}>
                    {data.name}
                  </Link>
                </div>
                <div>
                  Sent{" "}
                  <span className="text-secondary">
                    {moment(new Date(data.date)).fromNow()}
                  </span>
                </div>

                <div className="text-center">
                  <a href={`mailto:${data.email}`} className="ms-3">
                    <button className="btn btn-dark w-25 lead">
                      <MdOutlineMail size={30} color="#fff" />
                    </button>
                  </a>
                </div>
              </>
            ) : (
              <div className="alert alert-light text-center my-4" role="alert">
                <b>Opps! Help not found</b>
              </div>
            )}
          </StyledTableContainer>
        </div>
      </div>
    </div>
  );
};
const StyledTableContainer = styled.div`
  background-color: ${colors.white};
  padding: 1rem;
  margin: 3rem 0rem;
`;
export default ViewContactMessageSection;
