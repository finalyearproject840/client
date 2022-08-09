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

const PreviewSection = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const id = useParams().id;
  const getData = (id) => {
    setLoading(true);
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${SupplierRoutes.loadProduct}/${id}`,
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
          setError(true);
        }
      })
      .catch(function (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      });
  };

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-10">
          <StyledProductPreviewSection>
            {loading ? (
              <div className="d-flex justify-content-center align-items-center my-5">
                <Loading width={100} />
              </div>
            ) : data ? (
              <div className="my-4 bg-light py-3">
                <StyleTitle
                  font={fonts.roboto}
                  size={fontSize.l}
                  className="text-center"
                >
                  {data.name}
                </StyleTitle>
                {/* Product images */}
                <div className="text-center">
                  <StyleSubtitle>Product images</StyleSubtitle>
                  {data.product_images.map((item, index) => (
                    <div key={index} className="my-4">
                      <img
                        className="w-50 img img-thumbnail"
                        src={`${baseUrl}/${item.location}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center">
                    <Link
                      to={`/supplier/edit/product/images/${data._id}`}
                      className="btn btn-dark"
                    >
                      Edit Product Images
                    </Link>
                  </div>
                <div className="p-3">
                  <p className="lead">
                    <b>Name</b>: {data.name}
                  </p>
                  <p className="lead">
                    <b>Price</b>: GHS {data.price}
                  </p>
                  <p className="lead">
                    <b>Quantity in stock:</b> GHS {data.quantity}
                  </p>
                  <p className="lead">
                    <b>Discount:</b> {data.discount}%
                  </p>
                  <p className="lead">
                    <b>Status :</b> {data.status}
                  </p>
                  <p className="lead">
                    <b>Verified :</b> {data.verified ? "Yes" : "No"}
                  </p>
                  <p className="lead">
                    <b>Category :</b> {data.category.join(", ")}
                  </p>
                  <p className="lead">
                    <b>Total Reviews :</b> {data.totalReviews}
                  </p>
                  <p className="lead">
                    <b>Total Ratings :</b> {data.totalRating}
                  </p>
                  <p className="lead">
                    <b>Tags :</b> {data.tags.join(", ")}
                  </p>
                  <p className="lead">
                    <b>Manufactured on :</b>{" "}
                    {new Date(data.manufactured_date).toDateString()}
                  </p>
                  <p className="lead">
                    <b>Expires on :</b>{" "}
                    {new Date(data.expiry_date).toDateString()}
                  </p>
                  <p className="lead">
                    <b>Usage:</b>
                    <br />
                    {data.usage}
                  </p>
                  <p className="lead">
                    <b>Description:</b>
                    <br />
                    {data.description}
                  </p>
                  <div className="text-center">
                    <Link
                      to={`/supplier/edit/product/${data._id}`}
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
export default PreviewSection;
