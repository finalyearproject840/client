import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField, {
  StyledErrorText,
  StyledLabel,
} from "../../Components/TextInputs/TextField";
import Button from "../../../Shared/Components/Button";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateSupplierFunc } from "../../../Redux/Supplier/SupplierActions";
import Loading from "../../../Shared/Components/Loading";
import styled from "styled-components";
import { colors } from "../../../DefaultValues";
import { Constituencies, Regions } from "../../../Utils/BigGhana";
import { StyledOption } from "../../Pages/Account/AccountStyles";

const EditProfileSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SupplierState = useSelector((state) => state.SupplierState);

  const [cities, setCities] = useState([]);

  const { supplier } = SupplierState;
  const getCities = (state) => {
    setCities(Constituencies[state]);
  };

  //function to redirect to product preview after upload success
  const handleRedirect = (id) => {
    navigate(`/supplier/profile`);
  };
  //form submission function
  const handleSubmit = (form, setSubmitting, resetForm) => {
    dispatch(updateSupplierFunc(form, setSubmitting, handleRedirect));
  };

  //write validation schema using Yup library
  const validateSchema = Yup.object({
    email: Yup.string()
      .required("Please enter an email before submitting")
      .email("Please enter a valid email"),
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username should have atleast 3 characters")
      .max(30, "Username can't be more than 30 characters"),
    organisation: Yup.string()
      .required("Organisation's name is required")
      .min(3, "Organisation name should be atleast 3 characters")
      .max(50, "Organisation name can't be more than 50 characters"),
    tel: Yup.string(),
    address: Yup.string(),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    locality: Yup.string().required("Locality is required"),
    description: Yup.string().min(
      3,
      "description should be at least 3 character long"
    ),
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <StyledContainer>
          <h3 className="py-3 text-center h3">Edit Only the ones you which to Change</h3>
            <>
              {/*form with formik  */}
              {supplier ? (
                <Formik
                  initialValues={{
                    username: supplier.username,
                    organisation: supplier.organisation,
                    email: supplier.email,
                    tel: supplier.tel.join(","),
                    address: supplier.address.join(";"),
                    id: supplier._id,
                    description: supplier.description,
                    state: supplier.location.state,
                    city: supplier.location.city,
                    country: supplier.location.country,
                    locality: supplier.location.locality,
                  }}
                  validationSchema={validateSchema}
                  onSubmit={(form, { setSubmitting, resetForm }) =>
                    handleSubmit(form, setSubmitting, resetForm)
                  }
                >
                  {({ isSubmitting, touched, errors, setFieldValue }) => (
                    <Form encType="multipart/form-data">
                      <TextField
                        type="text"
                        name="username"
                        label="Change supplier username"
                        placeholder="Supplier Username"
                      />
                      <TextField
                        type="text"
                        name="organisation"
                        label="Change supplier Organisation or Brand Name"
                        placeholder="Supplier Organisation"
                      />
                      <TextField
                        type="email"
                        name="email"
                        label="Change supplier email"
                        placeholder="Supplier Email"
                      />
                      <TextField
                        type="text"
                        name="tel"
                        label="Change Telephone"
                        placeholder="eg. 05322032349, 023492342"
                      />
                      <TextField
                        type="address"
                        name="address"
                        label="Change supplier address"
                        placeholder="eg. SNNIT Block 555, floor 3, Adabraka, Accra; GPS-203-392934"
                      />
                      {/*Country */}
                      <div className="my-3">
                        <div>
                          <StyledLabel htmlFor="Country" className="lead mb-2">
                            Select Country
                          </StyledLabel>
                        </div>
                        <Field
                          as="select"
                          className="form-control"
                          name="country"
                          disabled={true}
                          onChange={(e) => {
                            setFieldValue("country", e.currentTarget.value);
                          }}
                        >
                          <StyledOption value="Ghana">Ghana</StyledOption>
                        </Field>
                      </div>
                      {/*state */}
                      <div className="my-3">
                        <div>
                          <StyledLabel htmlFor="State" className="lead mb-2">
                            Select State/Region
                          </StyledLabel>
                        </div>
                        <Field
                          as="select"
                          className="form-control"
                          name="state"
                          onChange={(e) => {
                            getCities(e.currentTarget.value);
                            setFieldValue("state", e.currentTarget.value);
                          }}
                        >
                          {Regions.map((item) => (
                            <StyledOption key={item.name} value={item.name}>
                              {item.name}
                            </StyledOption>
                          ))}
                        </Field>
                        {errors.state && (
                          <StyledErrorText className="text-danger">
                            <ErrorMessage name="state" />
                          </StyledErrorText>
                        )}
                      </div>
                      {/*cities */}
                      <div className="my-3">
                        <div>
                          <StyledLabel htmlFor="City" className="lead mb-2">
                            Select City/District
                          </StyledLabel>
                        </div>
                        <Field as="select" className="form-control" name="city">
                          {cities.length > 0 ? (
                            cities.map((item) => (
                              <StyledOption key={item.name} value={item.name}>
                                {item.name}
                              </StyledOption>
                            ))
                          ) : (
                            <StyledOption value="no-city">City</StyledOption>
                          )}
                        </Field>
                        {errors.city && (
                          <StyledErrorText className="text-danger">
                            <ErrorMessage name="city" />
                          </StyledErrorText>
                        )}
                      </div>
                      {/*Locality */}
                      <div className="my-3">
                        <div>
                          <StyledLabel htmlFor="City" className="lead mb-2">
                            Enter locality
                          </StyledLabel>
                        </div>
                        <TextField
                          type="text"
                          name="locality"
                          placeholder="locality"
                        />
                      </div>
                      <div className="my-3">
                        <StyledLabel htmlFor="category">
                          Change Supplier description
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
                      <div className="d-flex justify-content-center">
                        {isSubmitting ? (
                          <div className="d-flex justify-content-center">
                            <Loading />
                          </div>
                        ) : (
                          <Button case="uppercase" type="submit">
                            Update Supplier
                          </Button>
                        )}
                      </div>
                    </Form>
                  )}
                </Formik>
              ) : (
                ""
              )}
            </>
          </StyledContainer>
        </div>
      </div>
    </div>
  );
};
const StyledContainer = styled.div`
  background-color: ${colors.white};
  padding: 1rem;
  margin: 3rem 0rem;
`;
export default EditProfileSection;
