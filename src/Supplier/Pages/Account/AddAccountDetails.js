import React, { useEffect, useState } from "react";
import { colors, fonts } from "../../../DefaultValues";
import Button from "../../../Shared/Components/Button";
import { StyleTitle } from "../../../Styles";
import { StyledAddDetailsContainer, StyledOption } from "./AccountStyles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Components/Loading";
import { addSupplierDetailsFunc } from "../../../Redux/Supplier/SupplierActions";
import Cookies from "js-cookie";
import TextField, {
  StyledErrorText,
} from "../../Components/TextInputs/TextField";
import { StyledLabel } from "./../../../Admin/Components/TextInputs/TextField";
import { Constituencies, Regions } from "../../../Utils/BigGhana";

const AddAccountDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SupplierState = useSelector((state) => state.SupplierState);
  const [cities, setCities] = useState([]);

  const { supplier } = SupplierState;
  const getCities = (state) => {
    setCities(Constituencies[state]);
  };

  //validation schema using Yup library for form validation
  const validateSchema = Yup.object({
    state: Yup.mixed().required("State is required"),
    city: Yup.mixed().required("City is required"),
    locality: Yup.mixed().required("locality is required"),
    tel: Yup.mixed().required("Telephone is required"),
  });

  //a function to navigate supplier to pending page after successfully submitting license
  const handleNavigate = () => {
    return navigate("/supplier/pending");
  };

  //this is the function that handles the form submit action
  const handleSubmit = (form, setSubmitting, resetForm) => {
    console.log(form);
    dispatch(addSupplierDetailsFunc(form, setSubmitting, handleNavigate));
  };

  useEffect(() => {
    getCities("ASHANTI");
  }, []);

  //redirect from to login page
  if (!Cookies.get("supplier")) {
    return <Navigate to="/supplier/login" />;
  }

  if (Cookies.get("supplier")) {
    let cookieSupplier = JSON.parse(Cookies.get("supplier"));
    const progress = cookieSupplier.progress;
    //redirect to supplier dashboard
    if (progress.addedDetails) {
      return <Navigate to="/supplier/dashboard" />;
    }
  }

  //render content of the add details page
  //render content of the license page
  return (
    <StyledAddDetailsContainer>
      <div className="add-container">
        <StyleTitle
          font={fonts.righteous}
          size="2rem"
          color={colors.violet}
          className="text-center"
        >
          Add Additional Details
        </StyleTitle>
        <p className="lead px-5 text-center">
          Add additional details to your account to enable customers around you
          find
        </p>

        {/* Forms with formik */}
        <Formik
          initialValues={{
            country: "Ghana",
            state: "",
            city: "",
            locality: "",
            tel: "",
          }}
          validationSchema={validateSchema}
          onSubmit={(form, { setSubmitting, resetForm }) =>
            handleSubmit(
              { ...form, supplier_id: supplier._id },
              setSubmitting,
              resetForm
            )
          }
        >
          {({ isSubmitting, setFieldValue, errors, touched, values }) => (
            <Form encType="multipart/form-data">
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
                <TextField type="text" name="locality" placeholder="locality" />
              </div>
              {/*Telephone */}
              <div className="my-3">
                <div>
                  <StyledLabel htmlFor="Tel" className="lead mb-2">
                    Enter Phone
                  </StyledLabel>
                </div>
                <TextField type="text" name="tel" placeholder="Telephone" />
              </div>
              {isSubmitting ? (
                <div className="d-flex justify-content-center">
                  <Loading />
                </div>
              ) : (
                <div className="text-center mt-5 mb-2">
                  <Button width="150px" type="submit">
                    Add Details
                  </Button>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </StyledAddDetailsContainer>
  );
};

export default AddAccountDetails;
