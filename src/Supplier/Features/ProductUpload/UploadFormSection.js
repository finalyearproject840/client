import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField, {
  StyledErrorText,
  StyledLabel,
} from "../../Components/TextInputs/TextField";
import Button from "../../../Shared/Components/Button";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uploadProductFunc } from "../../../Redux/Supplier/SupplierActions";
import Loading from "../../../Shared/Components/Loading";
import styled from "styled-components";
import { colors } from "../../../DefaultValues";
import Cookies from "js-cookie";
import axios from "axios";
import { SupplierRoutes } from "../../../DefaultValues";

const UploadFormSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const supplier = useSelector((state) => state.SupplierState.supplier);
  const [categories, setCategories] = useState([]);

  //function to redirect to product preview after upload success
  const handleRedirect = (id) => {
    navigate(`/supplier/product/${id}`);
  };

  //form submission function
  const handleSubmit = (form, setSubmitting, resetForm) => {
    form = {
      ...form,
      country: supplier.location.country,
      city: supplier.location.city,
      state: supplier.location.state,
      locality: supplier.location.locality,
    };
    dispatch(
      uploadProductFunc(
        form,
        setSubmitting,
        resetForm,
        supplier,
        handleRedirect
      )
    );
  };

  //write validation schema using Yup library
  const validateSchema = Yup.object({
    name: Yup.string()
      .required("Product name is required")
      .min(1, "Product name should have at least 1 character")
      .max(30, "Username can't be more than 256 characters"),
    quantity: Yup.number()
      .required("Quantity is required")
      .min(1, "At least 1"),
    price: Yup.number().required("Price is required").min(0, "At least 0"),
    discount: Yup.number()
      .required("Discount is required")
      .min(0, "Min is 0")
      .max(100, "100% is the maximum discount"),
    tags: Yup.string().required("Please enter at least one tag"),
    expiry_date: Yup.date().required("should enter a valid date"),
    manufactured_date: Yup.date().required("should enter a valid date"),
    category: Yup.mixed().required("Please Select at least one category"),
    description: Yup.string()
      .required("Please enter product description")
      .min(3, "description should be at least 3 character long"),
    images: Yup.mixed().required("upload at least one image"),
    usage: Yup.string().required("usage info is required"),
  });

  const getCategories = () => {
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${SupplierRoutes.loadCategories}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          setCategories(response.data.data);
        } else {
          setCategories([]);
        }
      })
      .catch(function (error) {
        console.log(error);
        setCategories([]);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <StyledTableContainer>
            {/*form with formik  */}
            <Formik
              initialValues={{
                name: "",
                price: "",
                description: "",
                category: "",
                discount: 0,
                quantity: "",
                expiry_date: "",
                manufactured_date: "",
                tags: "",
                images: "",
                usage: "",
                deliveryAllowed: "",
                deliveryFee: "",
                deliveryEstimation: "",
              }}
              validationSchema={validateSchema}
              onSubmit={(form, { setSubmitting, resetForm }) =>
                handleSubmit(form, setSubmitting, resetForm)
              }
            >
              {({ isSubmitting, setFieldValue, touched, errors, values }) => (
                <Form encType="multipart/form-data">
                  <TextField
                    type="text"
                    name="name"
                    label="Enter name for Product"
                    placeholder="Product Name"
                  />
                  <TextField
                    type="number"
                    name="price"
                    label="Product Price in Ghana cedis"
                    placeholder="Product Price"
                  />
                  <TextField
                    type="number"
                    name="discount"
                    value="0"
                    label="Enter discount if any for the product"
                    placeholder="Discount"
                  />
                  <StyledLabel>
                    Upload a maximum of 3 images | the first images will be the
                    main image of the product
                  </StyledLabel>
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
                  <TextField
                    type="number"
                    name="quantity"
                    label="Enter quantity of product in stock"
                    placeholder="Quantity in stock"
                  />
                  <TextField
                    type="text"
                    name="tags"
                    label="Enter tags for Product | Tags enable customers to quickly find your products|eg"
                    placeholder="eg. stomach medicine, for children..."
                  />
                  <TextField
                    type="text"
                    name="usage"
                    label="Enter usage information"
                    placeholder="eg. 3x daily"
                  />
                  <TextField
                    type="date"
                    name="manufactured_date"
                    label="Select product manufactured date"
                    placeholder="Product manufactured date"
                  />
                  <TextField
                    type="date"
                    name="expiry_date"
                    label="Select product expiry date"
                    placeholder="Product expiry date"
                    required
                  />
                  <div className="my-3">
                    <StyledLabel htmlFor="category">
                      Select Product categories | Hold the Ctrl key on your
                      keyboard to select multiple categories
                    </StyledLabel>
                    <Field
                      as="select"
                      className="form-control"
                      name="category"
                      multiple
                    >
                      {categories.length > 0 ? (
                        categories.map((item) => (
                          <StyledOption
                            key={item._id}
                            value={item.category_name}
                          >
                            {item.category_name}
                          </StyledOption>
                        ))
                      ) : (
                        <StyledOption value="no-category">
                          No category
                        </StyledOption>
                      )}
                    </Field>
                    {errors.category && (
                      <StyledErrorText className="text-danger">
                        <ErrorMessage name="category" />
                      </StyledErrorText>
                    )}
                  </div>
                  <div className="my-3">
                    <StyledLabel htmlFor="DeliveryAllowed">
                      Do you offer delivery for this product?
                    </StyledLabel>
                    <Field
                      as="select"
                      className="form-control"
                      name="deliveryAllowed"
                    >
                      <StyledOption value={false}>No</StyledOption>
                      <StyledOption value={true}>Yes</StyledOption>
                    </Field>
                    {errors.deliveryAllowed && (
                      <StyledErrorText className="text-danger">
                        <ErrorMessage name="deliveryAllowed" />
                      </StyledErrorText>
                    )}
                    {values.deliveryAllowed && (
                      <>
                        <TextField
                          type="text"
                          name="deliveryFee"
                          label="What fee do you charge for delivery"
                          placeholder="Enter delivery fee"
                        />
                        <TextField
                          type="text"
                          name="deliveryEstimation"
                          label="How long do you take to make delivery"
                          placeholder="Eg. 2 hours"
                        />
                      </>
                    )}

                    <div className="my-3">
                      <StyledLabel>Enter Product Description</StyledLabel>
                      <Field
                        name="description"
                        as="textarea"
                        row="10"
                        className={
                          touched.description && errors.description
                            ? "form-control is-invalid p-3"
                            : `form-control p-3`
                        }
                        placeholder="Description"
                      />
                      {touched.description && errors.description && (
                        <StyledErrorText className="text-danger">
                          <ErrorMessage name="description" />
                        </StyledErrorText>
                      )}
                    </div>
                  </div>
                  {isSubmitting ? (
                    <div className="d-flex justify-content-center">
                      <Loading />
                    </div>
                  ) : (
                    <Button
                      display="block"
                      width="100%"
                      case="uppercase"
                      type="submit"
                    >
                      Upload
                    </Button>
                  )}
                </Form>
              )}
            </Formik>
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
const StyledOption = styled.option`
  text-transform: capitalize;
`;
export default UploadFormSection;
