import React, { useState } from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Components/Loading";
import { sessionService } from "redux-react-session";

const SupplierSignup = () => {
  //usestates to handle various changes
  const [submissionError, setSubmissionError] = useState({
    error: false,
    msg: "",
  });
  const [loading, setLoading] = useState(false);
  const [initialform, setInitialForm] = useState({
    password: "",
    email: "",
    username: "",
    confirm: "",
    organisation: "",
  });

  const navigate = useNavigate();
  //console.log(process.env);
  //form submission function
  const handleSubmit = (form, setSubmitting) => {
    setLoading(true);
    let config = {
      method: "post",
      url: "http://localhost:5000/api/pharmacy/supplier/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: form,
    };
    axios(config)
      .then(function (response) {
        //code to perform when the signup is successful
        if (response.data.success) {
          setSubmissionError(false);
          setSubmitting(false);
          //save userdata in the session
          const { data, token } = response.data;
          sessionService
            .saveSession(data.id)
            .then(() => {
              sessionService
                .saveUser(data)
                .then(() => {
                  //store token and data inside cookies for future autorizations
                  document.cookie = `token=${token}`;
                  document.cookie = `supplier=${JSON.stringify(data)}`;
                  //redirect supplier to the pending page
                  navigate("/supplier/pending");
                })
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        } else {
          console.log(response);
          setSubmitting(false);
          setSubmissionError({ error: true, msg: response.data.msg });
        }
      })
      .catch(function (error) {
        console.log(error)
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
          Create an Account
        </StyleTitle>

        {/*form with formik  */}
        <Formik
          initialValues={initialform}
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
