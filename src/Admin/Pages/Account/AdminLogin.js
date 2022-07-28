import React, { useState } from "react";
import StyledAccount, {
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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Components/Loading";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { loadAdminFunc } from "../../../Redux/Admin/AdminActions";
const AdminLogin = () => {
  //usestates to handle various changes
  const [submissionError, setSubmissionError] = useState({
    error: false,
    msg: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //console.log(process.env);
  //form submission function
  const handleSubmit = (form, setSubmitting) => {
    let config = {
      method: "post",
      url: "http://localhost:5000/api/pharmacy/admin/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: form,
    };
    axios(config)
      .then(function (response) {
        //code to perform when the signup is successful
        if (response.data.success) {
          setSubmissionError({
            error: false,
            msg: "successful",
          });
          setSubmitting(false);

          //save userdata in the session
          const { data, token } = response.data;

          //store token and data inside cookies for future autorizations
          Cookies.set("token", token);
          Cookies.set("admin", JSON.stringify(data));
          //store admin state in redux
          dispatch(loadAdminFunc());
          //redirect supplier to the pending page
          navigate("/admin/dashboard");
        } else {
          console.log(response);
          setSubmitting(false);
          setSubmissionError({
            error: true,
            msg: response.data.msg,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        setSubmitting(false);
        setSubmissionError({
          error: true,
          msg: "Authentication error",
        });
      });
  };

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
        {/* display authentication error */}
        {submissionError.error ? (
          <div
            className="alert alert-danger text-center text-capitalize"
            role="alert"
          >
            <b> {submissionError.msg} </b>
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
                icon={<AiOutlineMail size={24} color={colors.voilet} />}
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
                icon={<AiOutlineMail size={24} color={colors.voilet} />}
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
        {/*alternate link*/}
        <div className="my-3">
          <p className="lead">
            don 't have an account yet? <Link to="/admin/create">Register</Link>
          </p>
        </div>
      </StyledFormContainer>
    </StyledAccount>
  );
};

export default AdminLogin;
