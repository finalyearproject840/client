import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField, {
  StyledErrorText,
  StyledLabel,
} from "../../Components/TextInputs/TextField";
import Button from "../../../Shared/Components/Button";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProductFunc } from "../../../Redux/Supplier/SupplierActions";
import Loading from "../../../Shared/Components/Loading";
import styled from "styled-components";
import { colors, SupplierRoutes } from "../../../DefaultValues";
import axios from "axios";
import Cookies from "js-cookie";

const EditProductSection = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);

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
        console.log("error", error);
        setCategories([]);
      });
  };

  useEffect(() => {
    getData(id);
    getCategories();
  }, []);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  //function to redirect to product preview after upload success
  const handleRedirect = (id) => {
    navigate(`/supplier/product/${id}`);
  };
  //form submission function
  const handleSubmit = (form, setSubmitting, resetForm) => {
    console.log(form);
    dispatch(
      updateProductFunc(id, form, setSubmitting, resetForm, handleRedirect)
    );
  };

  //write validation schema using Yup library
  const validateSchema = Yup.object({
    name: Yup.string()
      .required("Product name is required")
      .min(3, "Product name should have at least 1 characters")
      .max(30, "Username can't be more than 256 characters"),
    quantity: Yup.number().required("Quantity is required").min(1, "Atleast 1"),
    price: Yup.number().required("Price is required").min(0, "Atleast 0"),
    discount: Yup.number()
      .required("Discount is required")
      .min(0, "Min is 0")
      .max(100, "100% is the maximum discount"),
    tags: Yup.string().required("Please enter atleast one tag"),
    expiry_date: Yup.date().required("Expiry Date is required"),
    manufactured_date: Yup.date().required("Manufactured Date is required"),
    category: Yup.mixed().required("Category at least required"),
    description: Yup.string()
      .required("Please enter product description")
      .min(3, "description should be at least 3 character long"),
  });

  const processDate = (date) => {
    let newDate = new Date(date);

    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
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
                {/*form with formik  */}
                <Formik
                  initialValues={{
                    name: data.name,
                    price: data.price,
                    description: data.description,
                    category: data.category,
                    discount: data.discount,
                    quantity: data.quantity,
                    expiry_date: processDate(data.expiry_date),
                    manufactured_date: processDate(data.manufactured_date),
                    tags: data.tags.join(", "),
                  }}
                  validationSchema={validateSchema}
                  onSubmit={(form, { setSubmitting, resetForm }) =>
                    handleSubmit(form, setSubmitting, resetForm)
                  }
                >
                  {({ isSubmitting, setFieldValue, touched, errors }) => (
                    <Form encType="multipart/form-data">
                      <TextField
                        type="text"
                        name="name"
                        label="Change Product name"
                        placeholder="Product Name"
                      />
                      <TextField
                        type="number"
                        name="price"
                        label="Change Product Price in Ghana cedis"
                        placeholder="Product Price"
                      />
                      <TextField
                        type="number"
                        name="discount"
                        value="0"
                        label="Change discount if any for the product"
                        placeholder="Discount"
                      />
                      <TextField
                        type="number"
                        name="quantity"
                        label="Change product quantity in stock"
                        placeholder="Quantity in stock"
                      />
                      <TextField
                        type="text"
                        name="tags"
                        label="Change tags for Product | Tags enable customers to quickly find your products|eg"
                        placeholder="eg. stomach medicine, for children..."
                      />
                      <TextField
                        type="date"
                        name="manufactured_date"
                        label="Change product manufactured date"
                        placeholder="Proudct manufactured date"
                      />
                      <TextField
                        type="date"
                        name="expiry_date"
                        label="Change product expiry date"
                        placeholder="Proudct expiry date"
                      />
                      <div className="my-3">
                        <StyledLabel htmlFor="category">
                          Select Product category
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
                        <div className="my-3">
                          <StyledLabel htmlFor="category">
                            Change Product description
                          </StyledLabel>
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
                          Update Product
                        </Button>
                      )}
                    </Form>
                  )}
                </Formik>
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
const StyledOption = styled.option`
  text-transform: capitalize;
`;
export default EditProductSection;
