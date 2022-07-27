import React, { useState } from "react";
import StyledAccount, {
  StyledDivider,
  StyledFormContainer,
  StyledImageContainer,
} from "./AccountStyles";
import { StyleTitle } from "../../../Styles";
import Image from "../../../Assets/Images/Design/background/admin_account_background.jpg";
import { colors, fonts } from "../../../DefaultValues";
import { Formik, Form } from "formik";
import TextField from "../../Components/TextInputs/TextField";

import Button from "../../../Shared/Components/Button";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { sessionService } from "redux-react-session";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Components/Loading";

const AdminSignup = () => {
  //usestates to handle various changes
  const [submissionError, setSubmissionError] = useState({
    error: false,
    msg: "",
  });
  const navigate = useNavigate();

  //console.log(process.env);
  //form submission function
  const handleSubmit = (form, setSubmitting) => {
    let config = {
      method: "post",
      url: "http://localhost:5000/api/pharmacy/admin/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: form,
    };
    axios(config)
      .then(function (response) {
        //code to perform when the signup is successful
        if (response.data.success) {
          setSubmissionError({ error: false, msg: "successful" });
          setSubmitting(false);

          //save userdata in the session
          const { data, token } = response.data;
          sessionService
            .saveSession(data._id)
            .then(() => {
              sessionService
                .saveUser(data)
                .then(() => {
                  //store token and data inside cookies for future autorizations
                  document.cookie = `token=${token}`;
                  document.cookie = `admin=${JSON.stringify(data)}`;
                  //redirect supplier to the pending page
                  navigate("/admin/dashboard");
                })
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        } else {
          setSubmitting(false);
          setSubmissionError({ error: true, msg: response.data.msg });
        }
      })
      .catch(function (error) {
        console.log(error);
        setSubmitting(false);
        setSubmissionError({ error: true, msg: "Signup Error" });
      });
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
    password: Yup.string()
      .required("Please enter password before submitting")
      .min(8, "Password should be atleast 8 characters")
      .max(16, "Password can't be more than 8 characters"),
    confirm: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });

  return (
    <StyledAccount template="30% 70%">
      {" "}
      {/*form container*/}{" "}
      <StyledFormContainer className="form-container">
        <StyleTitle
          className="text-center mb-4"
          color={colors.voilet}
          size="1.5rem"
          font={fonts.righteous}
        >
          Administrator{" "}
        </StyleTitle>{" "}
        <StyleTitle
          className="text-center mb-4"
          color={colors.muted}
          size="1.2rem"
          font={fonts.roboto}
        >
          Create new account
          {/* display form submission error */}
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
        </StyleTitle>
        {/*form with formik  */}
        <Formik
          initialValues={{
            password: "",
            email: "",
            username: "",
            confirm: "",
          }}
          validationSchema={validateSchema}
          onSubmit={(form, { setSubmitting }) =>
            handleSubmit(form, setSubmitting)
          }
        >
          {({ isSubmitting }) => (
            <Form encType="multipart/form-data">
              <TextField
                type="text"
                name="username"
                label="Username"
                placeholder="Username"
              />
              <TextField
                type="email"
                name="email"
                label="Email Address"
                placeholder="Email Address"
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
              />
              <TextField
                type="password"
                name="confirm"
                label="Confirm Password"
                placeholder="Confirm Password"
              />
              <StyledDivider>
                <div className="divider-text">
                  <span> & </span>{" "}
                </div>{" "}
              </StyledDivider>{" "}
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
                  Register
                </Button>
              )}
            </Form>
          )}
        </Formik>
        {/*alternate link*/}{" "}
        <div className="my-3">
          <p className="lead">
            I have an account already ? <Link to="/admin/login"> Login </Link>{" "}
          </p>{" "}
        </div>{" "}
      </StyledFormContainer>{" "}
      {/* Image container */}{" "}
      <StyledImageContainer className="img-container d-none d-md-block">
        <img src={Image} alt="account" className="account-image" />
      </StyledImageContainer>{" "}
    </StyledAccount>
  );
};

export default AdminSignup;
