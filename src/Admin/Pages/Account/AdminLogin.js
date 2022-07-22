import React from "react";
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
import { AiOutlineMail } from "react-icons/ai";
import Button from "../../../Shared/Components/Button";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const AdminLogin = () => {
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
          Administrator
        </StyleTitle>
        <StyleTitle
          className="text-center mb-4"
          color={colors.muted}
          size="1.2rem"
          font={fonts.barlow}
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
            <StyledDivider>
              <div className="divider-text">
                <span>&</span>
              </div>
            </StyledDivider>
            <Button display="block" width="100%" case="uppercase" type="submit">
              Login
            </Button>
          </Form>
        </Formik>

        {/*alternate link*/}
        <div className="my-3">
          <p className="lead">
            don't have an account yet? <Link to="/admin/create">Register</Link>
          </p>
        </div>
      </StyledFormContainer>
    </StyledAccount>
  );
};

export default AdminLogin;
