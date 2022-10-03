import React, { useState } from "react";
import StyledAccount, {
  StyledDivider,
  StyledFormContainer,
  StyledImageContainer,
} from "./AccountStyles";
import { StyleSubtitle, StyleTitle } from "../../../Styles";
import Image from "../../../Assets/Images/Design/background/Account_background.jpg";
import {
  colors,
  fonts,
  fontSize,
  SupplierRoutes,
} from "../../../DefaultValues";
import { Formik, Form } from "formik";
import TextField from "../../Components/TextInputs/TextField";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Button from "../../../Shared/Components/Button";
import { Link, Navigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Components/Loading";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import {
  googleLoginFunc,
  loadSupplierFunc,
} from "../../../Redux/Supplier/SupplierActions";
import { useGoogleLogin } from "@react-oauth/google";

const SupplierLogin = () => {
  //use state to handle various changes
  const [submissionError, setSubmissionError] = useState({
    error: false,
    msg: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form submission function
  const handleSubmit = (form, setSubmitting) => {
    let config = {
      method: "post",
      url: SupplierRoutes.supplierLogin,
      headers: {
        "Content-Type": "application/json",
      },
      data: form,
    };
    axios(config)
      .then(function (response) {
        //code to perform when the sign is successful
        if (response.data.success) {
          setSubmissionError({ error: false, msg: "successful" });
          setSubmitting(false);

          //save userdata in the session
          const { data, token } = response.data;

          //store token and data inside cookies for future autorizations
          Cookies.set("token", token);
          Cookies.set("supplier", JSON.stringify(data));
          //store supplier state in redux
          dispatch(loadSupplierFunc());
          //redirect supplier to the pending page
          navigate("/supplier/dashboard");
        } else {
          console.log(response);
          setSubmitting(false);
          setSubmissionError({ error: true, msg: response.data.msg });
        }
      })
      .catch(function (error) {
        console.log(error);
        setSubmitting(false);
        setSubmissionError({ error: true, msg: "Authentication error" });
      });
  };

  //handle login with google
  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;
    dispatch(
      googleLoginFunc({ googleAccessToken: accessToken }, () =>
        navigate("/supplier/dashboard")
      )
    );
  }

  const signUpWithGoogle = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
  });

  //write validation schema using Yup library
  const validateSchema = Yup.object({
    email: Yup.string()
      .required("Please enter an email before submitting")
      .email("Please enter a valid email"),
    password: Yup.string().required("Please enter password before submitting"),
  });

  //redirect from login when the user has already logged
  if (Cookies.get("supplier")) {
    return <Navigate to="/supplier/dashboard" />;
  }

  //render content of the supplier page
  return (
    <StyledAccount template="70% 30%">
      {/* Image container */}
      <StyledImageContainer className="img-container d-none d-md-block">
        <img src={Image} alt="account" className="account-image" />
      </StyledImageContainer>
      {/*form container*/}
      <StyledFormContainer className="form-container">
        <StyleTitle
          className="text-center mb-4"
          color={colors.violet}
          size="1.5rem"
          font={fonts.righteous}
        >
          Login in to your account
        </StyleTitle>
        {/* display authentication error */}
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
        {/*form with formik  */}
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          validationSchema={validateSchema}
          onSubmit={(form, { setSubmitting }) =>
            handleSubmit(form, setSubmitting)
          }
        >
          {({ isSubmitting }) => (
            <Form encType="multipart/form-data">
              <TextField
                type="email"
                name="email"
                label="Email Address"
                placeholder="Email Address"
                icon={<AiOutlineMail size={24} color={colors.violet} />}
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
                icon={<AiOutlineMail size={24} color={colors.violet} />}
              />
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
                  Login
                </Button>
              )}
            </Form>
          )}
        </Formik>
        {/* Sign in with google or other services */}
        <div className="otherservice">
          <StyledDivider>
            <div className="divider-text">
              <span> or </span>
            </div>
          </StyledDivider>
          <StyleSubtitle className="text-center" size={fontSize.sm}>
            Sign in with
          </StyleSubtitle>
          <Link to="#" className="d-flex align-items-center mt-4">
            <Button
              background={colors.white}
              display="block"
              shadow="none"
              border={`2px solid ${colors.muted}`}
              width="100%"
              onClick={signUpWithGoogle}
            >
              <FcGoogle size={26} />
              <span className="text-muted ms-2"> Google </span>
            </Button>
          </Link>
        </div>
        {/*alternate link*/}
        <div className="my-3">
          <p className="lead">
            don 't have an account yet?
            <Link to="/supplier/create"> Register </Link>
          </p>
        </div>
      </StyledFormContainer>
    </StyledAccount>
  );
};

export default SupplierLogin;
