import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { StyledErrorText } from "../../Components/TextInputs/TextField";
import Button from "../../../Shared/Components/Button";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductImageFunc,
  editProductImageFunc,
  uploadProductImagesFunc,
} from "../../../Redux/Supplier/SupplierActions";
import Loading from "../../../Shared/Components/Loading";
import styled from "styled-components";
import { baseUrl, colors, SupplierRoutes } from "../../../DefaultValues";
import axios from "axios";
import Cookies from "js-cookie";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { notifyError } from "../../../Shared/Components/NotificationToast";

const EditProductImageSection = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SupplierState = useSelector((state) => state.SupplierState);
  const { supplier } = SupplierState;

  //get the product id from the url
  const id = useParams().id;

  //a function to fetch product data from the api
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

  //function to handle deletion of images
  const handleDeleteImage = (image_id, location) => {
    dispatch(
      deleteProductImageFunc(
        id,
        { image_id: image_id, location: location },
        getData
      )
    );
  };

  //function to handle change image
  const handleChangeImage = (form, setSubmitting, resetForm) => {
    dispatch(editProductImageFunc(id, form, setSubmitting, resetForm, getData));
  };

  //useEffect hook to get product data when the page loads
  useEffect(() => {
    getData(id);
  }, []);

  //validation schema using Yup library for form validation
  const validateSchema = Yup.object({
    images: Yup.mixed().required("upload atleast one image"),
  });

  //function to redirect to product priview after upload succes
  const handleRedirect = (id) => {
    navigate(`/supplier/product/${id}`);
  };

  //function to handle submission of additional images
  const uploadAdditionalImages = (form, setSubmitting, resetForm) => {
    //check if the images exceed the allowed number of images
    if (form.images.length > form.allowed) {
      notifyError("You are allowed to upload only" + form.allowed + " images");
      setSubmitting(false);
      resetForm({});
    } else {
      dispatch(
        uploadProductImagesFunc(
          form,
          setSubmitting,
          resetForm,
          handleRedirect
        )
      );
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <StyledTableContainer>
            {loading ? (
              <div className="d-flex justify-content-center align-items-center my-5">
                <Loading width={100} />
              </div>
            ) : (
              <>
                {/* Product images */}
                <div className="text-center">
                  {data.product_images.map((item, index) => (
                    <div key={index} className="my-4">
                      <img
                        className="w-50 img img-thumbnail"
                        src={`${baseUrl}/${item.location}`}
                        alt="product"
                      />
                      <div className="my-3">
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            handleDeleteImage(item._id, item.location)
                          }
                        >
                          <BsTrash /> Delete Picture
                        </button>
                      </div>
                      <div
                        className="my-5
                       bg-light p-3"
                      >
                        {/* form to change image */}
                        {/*form with formik  */}
                        <Formik
                          initialValues={{
                            images: "",
                            image_id: item._id,
                            location: item.location,
                            product_id: data._id,
                          }}
                          validationSchema={validateSchema}
                          onSubmit={(form, { setSubmitting, resetForm }) =>
                            handleChangeImage(form, setSubmitting, resetForm)
                          }
                        >
                          {({
                            isSubmitting,
                            setFieldValue,
                            touched,
                            errors,
                          }) => (
                            <Form encType="multipart/form-data">
                              <div className="my-2">
                                <input
                                  type="file"
                                  name="images"
                                  className={
                                    touched.images && errors.images
                                      ? "form-control is-invalid p-3"
                                      : `form-control p-3`
                                  }
                                  placeholder="Product Image"
                                  onChange={(e) =>
                                    setFieldValue(
                                      "images",
                                      e.currentTarget.files
                                    )
                                  }
                                />
                                {touched.images && errors.images && (
                                  <StyledErrorText className="text-danger">
                                    <ErrorMessage name="images" />
                                  </StyledErrorText>
                                )}
                              </div>
                              {isSubmitting ? (
                                <div className="d-flex justify-content-center">
                                  <Loading />
                                </div>
                              ) : (
                                <button className="btn btn-dark" type="submit">
                                  <BiEdit /> Change this image
                                </button>
                              )}
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  ))}
                </div>
                {/*form with for additional images */}
                {data.product_images.length < 3 ? (
                  <div className="card p-1">
                    <p className="lead px-5">
                      You are allowed to upload at most 3 images for every
                      product. You can upload{" "}
                      {`${3 - data.product_images.length}`} more images for this
                      product
                    </p>
                    {/* form for addition images */}
                    {/*form with formik  */}
                    <Formik
                      initialValues={{
                        images: "",
                        allowed: 3 - data.product_images.length,
                        product_id: data._id,
                      }}
                      validationSchema={validateSchema}
                      onSubmit={(form, { setSubmitting, resetForm }) =>
                        uploadAdditionalImages(form, setSubmitting, resetForm)
                      }
                    >
                      {({ isSubmitting, setFieldValue, touched, errors }) => (
                        <Form encType="multipart/form-data">
                          <div className="my-2">
                            <input
                              type="file"
                              name="images"
                              className={
                                touched.images && errors.images
                                  ? "form-control is-invalid p-3"
                                  : `form-control p-3`
                              }
                              placeholder="Product Image"
                              onChange={(e) =>
                                setFieldValue("images", e.currentTarget.files)
                              }
                              multiple
                            />
                            {touched.images && errors.images && (
                              <StyledErrorText className="text-danger">
                                <ErrorMessage name="images" />
                              </StyledErrorText>
                            )}
                          </div>
                          {isSubmitting ? (
                            <div className="d-flex justify-content-center">
                              <Loading />
                            </div>
                          ) : (
                            <Button type="submit">Upload images</Button>
                          )}
                        </Form>
                      )}
                    </Formik>
                  </div>
                ) : (
                  ""
                )}
              </>
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
export default EditProductImageSection;
