import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { AdminRoutes, baseUrl, fonts, fontSize } from "../../../DefaultValues";
import styled from "styled-components";
import Loading from "../../../Shared/Components/Loading";
import { StyleSubtitle, StyleTitle } from "../../../Styles";
import { useDispatch } from "react-redux";
import {
  deleteProductFunc,
  VerifyProductFunc,
} from "../../../Redux/Admin/AdminActions";
import moment from "moment/moment";
import ConfirmModal from "../../../Shared/Components/ConfirmModal";

const PreviewSection = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = useParams().id;
  const getData = (id) => {
    setLoading(true);
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${AdminRoutes.loadProduct}/${id}`,
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

  //handle redirect after delete
  const handleRedirect = () => {
    navigate("/admin/all/products");
  };

  //handle delete product
  const handleDelete = () => {
    dispatch(deleteProductFunc(data, handleRedirect));
  };

  const [confirmModalTitle, setConfirmModalTitle] = useState("");
  const [confirmModalFunc, setConfirmModalFunc] = useState(
    () => () => console.log("hello")
  );

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
          singlePage: true,
          getProduct: () => getData(id),
        })
      );
    };
    //parse the verifyFunc to the confirmationModal to call it when admin confirm
    setConfirmModalFunc(() => () => verifyFunc());
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
                  {data.product_images.map((item, index) => (
                    <div key={index} className="my-4">
                      <img
                        className="w-50 img img-thumbnail"
                        src={`${baseUrl}/${item.location}`}
                        alt="product"
                      />
                    </div>
                  ))}
                </div>
                <div className="p-3">
                  <p className="lead">
                    <b>Name</b>: {data.name}
                  </p>
                  <p className="lead">
                    <b>Price</b>: GHS {data.price}
                  </p>
                  <p className="lead">
                    <b>Price After Discount</b>: GHS {data.priceAfterDiscount}
                  </p>
                  <p className="lead">
                    <b>Quantity in stock:</b> {data.quantity}
                  </p>
                  <p className="lead">
                    <b>Discount:</b> {data.discount}%
                  </p>
                  <p className="lead">
                    <b>Verified :</b> {data.verified ? "Yes" : "No"}
                  </p>
                  <p className="lead">
                    <b>Category :</b> {data.category.join(", ")}
                  </p>
                  <p className="lead">
                    <b>Total Reviews : </b> {data.totalReviews}
                  </p>
                  <p className="lead">
                    <b>Tags : </b> {data.tags.join(", ")}
                  </p>
                  <p className="lead">
                    <b>Manufactured on : </b>
                    {moment(new Date(data.manufactured_date)).fromNow()}
                  </p>
                  <p className="lead">
                    <b>Expires in : </b>
                    {moment(new Date(data.expiry_date)).fromNow()}
                  </p>
                  <p className="lead">
                    <b>Uploaded by : </b>
                    {data.supplier_name}
                  </p>
                  <p className="lead">
                    <b>Uploaded on : </b>
                    {moment(new Date(data.created_at)).fromNow()}
                  </p>
                  <p className="lead">
                    <b>Description: </b>
                    <br />
                    {data.description}
                  </p>
                  <div className="mb-3 text-center">
                    {data.verified ? (
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
                            id: data._id,
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
                            id: data._id,
                          })
                        }
                      >
                        Verify
                      </button>
                    )}
                  </div>
                  {/* Delete product button */}
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete()}
                    >
                      Delete Product
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="alert alert-light text-center my-4" role="alert">
                <b>Opps! product not found</b>
              </div>
            )}
            {/* this is a modal to firm various actions that will be perform on suppliers */}
            <ConfirmModal
              title={confirmModalTitle}
              confirm={confirmModalFunc}
            />
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
