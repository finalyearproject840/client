import React from "react";
import StyledAccount, {
  StyledDivider,
  StyledFormContainer,
  StyledImageContainer,
} from "./AccountStyles";
import { StyleSubtitle, StyleTitle } from "../../../Styles";
import Image from "../../../Assets/Images/Design/background/Account_background.jpg";
import { colors, fonts, fontSize } from "../../../DefaultValues";
import { Formik, Form } from "formik";
import TextField from "../../Components/TextInputs/TextField";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Button from "../../../Shared/Components/Button";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const SupplierSignup = () => {
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
      {/*form container*/}
      <StyledFormContainer className="form-container">
        <StyleTitle
          className="text-center mb-4"
          color={colors.voilet}
          size="1.5rem"
          font={fonts.righteous}
        >
          Login in to your account
        </StyleTitle>

        {/*form with formik  */}
        <Formik
          initialValues={{
            password: "",
            email: "",
            username: "",
            confirm: "",
            organisation: "",
          }}
          validationSchema={validateSchema}
          onSubmit={(form) => console.log(form)}
        >
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
              type="text"
              name="organisation"
              label="Your organisation name"
              placeholder="Organisation name"
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
            <Button display="block" width="100%" case="uppercase" type="submit">
              Register
            </Button>
          </Form>
        </Formik>

        {/* Sign in with goole or other services */}
        <div className="otherservice">
          <StyledDivider>
            <div className="divider-text">
              <span>or</span>
            </div>
          </StyledDivider>
          <StyleSubtitle className="text-center" size={fontSize.sm}>
            Signup in with
          </StyleSubtitle>
          <Link to="#" className="d-flex align-items-center mt-4">
            <Button
              background={colors.white}
              display="block"
              shadow="none"
              border={`2px solid ${colors.muted}`}
              width="100%"
            >
              <FcGoogle size={26} />
              <span className="text-muted ms-2">Google</span>
            </Button>
          </Link>
          <Link to="#" className="d-flex align-items-center my-4">
            <Button
              background={colors.blue}
              display="block"
              shadow="none"
              width="100%"
            >
              <BsFacebook size={26} />
              <span className="ms-2">Facebook</span>
            </Button>
          </Link>
        </div>
        {/*alternate link*/}
        <div className="my-3">
          <p className="lead">
            I have an account already? <Link to="/supplier/login">Login</Link>
          </p>
        </div>
      </StyledFormContainer>
      {/* Image container */}
      <StyledImageContainer className="img-container d-none d-md-block">
        <img src={Image} alt="account" className="account-image" />
      </StyledImageContainer>
    </StyledAccount>
  );
};

export default SupplierSignup;
