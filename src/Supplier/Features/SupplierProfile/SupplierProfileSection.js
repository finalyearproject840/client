import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import {
  baseUrl,
  fonts,
  fontSize,
  SupplierRoutes,
} from "../../../DefaultValues";
import styled from "styled-components";
import Loading from "../../../Shared/Components/Loading";
import { StyleSubtitle, StyleTitle } from "../../../Styles";
import { useSelector } from "react-redux";

const SupplierProfileSection = () => {
  const SupplierState = useSelector((state) => state.SupplierState);
  const { supplier: data } = SupplierState;
  console.log(data);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-10">
          <StyledProductPreviewSection>
            {data ? (
              <div className="my-4 bg-light py-3">
                <StyleTitle
                  font={fonts.roboto}
                  size={fontSize.l}
                  className="text-center"
                >
                  {data.username}
                </StyleTitle>
                {/* Product images */}
                <div className="text-center">
                  <StyleSubtitle>Product images</StyleSubtitle>
                  <div className="my-4">
                    <img
                      className="w-50 img img-thumbnail"
                      src={`${baseUrl}/${data.brand_logo}`}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <Link
                    to={`/supplier/edit/product/images/${data._id}`}
                    className="btn btn-dark"
                  >
                    Change Brand Logo
                  </Link>
                </div>
                <div className="p-3">
                  <p className="lead">
                    <b>Name</b>: {data.username}
                  </p>
                  <p className="lead">
                    <b>Description:</b>
                    <br />
                    {data.description}
                  </p>
                  <p className="lead">
                    <b>Brand Name:</b>
                    <br />
                    {data.organisation}
                  </p>
                  <p className="lead">
                    <b>Email:</b>
                    <br />
                    {data.email}
                  </p>
                  <p className="lead">
                    <b>Address:</b>
                    <br />
                    {data.address.join(";")}
                  </p>
                  <p className="lead">
                    <b>Telephone:</b>
                    <br />
                    {data.tel.join(",")}
                  </p>
                  <div className="text-center">
                    <Link
                      to={`/supplier/edit/profile/`}
                      className="btn btn-dark"
                    >
                      Edit Product Information
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div>Not found</div>
            )}
          </StyledProductPreviewSection>
        </div>
      </div>
    </div>
  );
};

const StyledProductPreviewSection = styled.div`
  .lead {
    font-size: ${fontSize.n};
  }
`;
export default SupplierProfileSection;
