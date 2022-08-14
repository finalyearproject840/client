import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField, {
  StyledErrorText,
} from "../../Components/TextInputs/TextField";
import Button from "../../../Shared/Components/Button";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { supplierHelpFunc } from "../../../Redux/Supplier/SupplierActions";
import Loading from "../../../Shared/Components/Loading";
import styled from "styled-components";
import { colors } from "../../../DefaultValues";

const SupplierHelpSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SupplierState = useSelector((state) => state.SupplierState);
  const { supplier } = SupplierState;

  //function to redirect to supplier dashboard
  const handleRedirect = () => {
    navigate(`/supplier/dashboard`);
  };

  //form submission function
  const handleSubmit = (form, setSubmitting, resetForm) => {
    console.log(form, supplier._id);
    dispatch(
      supplierHelpFunc(form, setSubmitting, resetForm, supplier, handleRedirect)
    );
  };

  //write validation schema using Yup library
  const validateSchema = Yup.object({
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <StyledSectionContainer>
            <h3 className="display-6 text-center text-uppercase">Help Form</h3>

            {/*form with formik  */}
            <Formik
              initialValues={{
                subject: "",
                message: "",
                entityType: "supplier",
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
                    name="subject"
                    label="Enter Subject"
                    placeholder="Enter subject"
                  />
                  <div className="my-3">
                    <div className="my-3">
                      <Field
                        name="message"
                        as="textarea"
                        row="10"
                        className={
                          touched.message && errors.message
                            ? "form-control is-invalid p-3"
                            : `form-control p-3`
                        }
                        placeholder="Message"
                      />
                      {touched.message && errors.message && (
                        <StyledErrorText className="text-danger">
                          <ErrorMessage name="message" />
                        </StyledErrorText>
                      )}
                    </div>
                  </div>

                  {isSubmitting ? (
                    <div className="d-flex justify-content-center">
                      <Loading />
                    </div>
                  ) : (
                    <div className="d-flex justify-content-center">
                      <Button case="uppercase" type="submit" width="25%">
                        SEND
                      </Button>
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </StyledSectionContainer>
        </div>
      </div>
    </div>
  );
};
const StyledSectionContainer = styled.div`
  background-color: ${colors.white};
  padding: 1rem;
  margin: 3rem 0rem;
`;
export default SupplierHelpSection;
