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
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Button from "../../../Shared/Components/Button";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const SupplierLogin = () => {
  //write validation schema using Yup library
  const validateSchema = Yup.object({
    email: Yup.string()
      .required("Please enter an email before submitting")
      .email("Please enter a valid email"),
    password: Yup.string().required("Please enter password before submitting"),
  });

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
          }}
          validationSchema={validateSchema}
          onSubmit={(form) => console.log(form)}
        >
          <Form encType="multipart/form-data">
            <TextField
              type="email"
              name="email"
              label="Email Address"
              placeholder="Email Address"
              icon={<AiOutlineMail size={24} color={colors.voilet} />}
            />
            <TextField
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
              icon={<AiOutlineMail size={24} color={colors.voilet} />}
            />
            <Button display="block" width="100%" case="uppercase" type="submit">
              Login
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
            Sign in with
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
            don't have an account yet?{" "}
            <Link to="/supplier/create">Register</Link>
          </p>
        </div>
      </StyledFormContainer>
    </StyledAccount>
  );
};

export default SupplierLogin;
