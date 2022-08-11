import React, { useState } from "react";
import { colors, fonts } from "../../../DefaultValues";
import Button from "../../../Shared/Components/Button";
import { StyleTitle } from "../../../Styles";
import { StyledFileUploader } from "./AccountStyles";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Components/Loading";

import { supplierUploadLicenseFunc } from "../../../Redux/Supplier/SupplierActions";
const SupplierLicense = () => {
  const [submissionError, setSubmissionError] = useState({
    error: false,
    msg: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SupplierState = useSelector((state) => state.SupplierState);
  const { supplier } = SupplierState;

  //validation schema using Yup library for form validation
  const validateSchema = Yup.object({
    license: Yup.mixed().required("license is required"),
  });

  //a function to navigate supplier to pending page after successfully submitting license
  const handleNavigate = () => {
    return navigate("/supplier/pending");
  };

  //this is the function that handles the form submit action
  const handleSubmit = (form, setSubmitting, resetForm) => {
    dispatch(
      supplierUploadLicenseFunc(
        form,
        setSubmitting,
        resetForm,
        setSubmissionError,
        handleNavigate
      )
    );
  };
  return (
    <StyledFileUploader>
      <div className="upload-container">
        <StyleTitle
          font={fonts.righteous}
          size="2rem"
          color={colors.voilet}
          className="text-center"
        >
          Upload Lincense
        </StyleTitle>
        <p className="lead px-5 text-center">
          As part of the account creation process, you are required to upload
          your pharmaceutical lincense for review
        </p>
        {/* display submission error */}
        {submissionError.error ? (
          <div
            className="alert alert-danger text-center text-capitalize"
            role="alert"
          >
            <b> {submissionError.msg}</b>
          </div>
        ) : (
          ""
        )}
        {/* Forms with formik */}
        <Formik
          initialValues={{
            license: "",
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
          {({ isSubmitting, setFieldValue, touched, errors }) => (
            <Form encType="multipart/form-data">
              <div className="text-center">
                <label htmlFor="lincense" className="text-warning lead">
                  Only pdf is allowed
                </label>
              </div>
              <div className="input-box my-3">
                <input
                  type="file"
                  name="license"
                  className="form-control p-3"
                  placeholder="license"
                  onChange={(e) =>
                    setFieldValue("license", e.currentTarget.files)
                  }
                  required
                />
                <FaCloudUploadAlt
                  className="upload-icon"
                  size={50}
                  color={colors.voilet}
                />
              </div>

              {isSubmitting ? (
                <div className="d-flex justify-content-center">
                  <Loading />
                </div>
              ) : (
                <div className="text-center mt-5 mb-2">
                  <Button width="150px" type="submit">
                    Upload
                  </Button>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </StyledFileUploader>
  );
};

export default SupplierLicense;
