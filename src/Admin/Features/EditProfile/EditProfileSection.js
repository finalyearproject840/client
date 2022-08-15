import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "../../Components/TextInputs/TextField";
import Button from "../../../Shared/Components/Button";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../Shared/Components/Loading";
import styled from "styled-components";
import { colors } from "../../../DefaultValues";
import { updateAdminFunc } from "../../../Redux/Admin/AdminActions";

const EditProfileSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const AdminState = useSelector((state) => state.AdminState);
  const { admin } = AdminState;

  //function to redirect to product priview after upload succes
  const handleRedirect = (id) => {
    navigate(`/admin/profile`);
  };
  //form submission function
  const handleSubmit = (form, setSubmitting, resetForm) => {
    console.log(form);
    dispatch(updateAdminFunc(form, setSubmitting, handleRedirect));
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
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <StyledContainer>
            <>
              {/*form with formik  */}
              {admin ? (
                <Formik
                  initialValues={{
                    username: admin.username,
                    email: admin.email,
                    id: admin._id,
                  }}
                  validationSchema={validateSchema}
                  onSubmit={(form, { setSubmitting, resetForm }) =>
                    handleSubmit(form, setSubmitting, resetForm)
                  }
                >
                  {({ isSubmitting, touched, errors }) => (
                    <Form encType="multipart/form-data">
                      <TextField
                        type="text"
                        name="username"
                        label="Change admin username"
                        placeholder="Admin Username"
                      />
                      <TextField
                        type="email"
                        name="email"
                        label="Change admin email"
                        placeholder="Admin Email"
                      />

                      <div className="d-flex justify-content-center">
                        {isSubmitting ? (
                          <div className="d-flex justify-content-center">
                            <Loading />
                          </div>
                        ) : (
                          <Button case="uppercase" type="submit">
                            Update Admin
                          </Button>
                        )}
                      </div>
                    </Form>
                  )}
                </Formik>
              ) : (
                ""
              )}
            </>
          </StyledContainer>
        </div>
      </div>
    </div>
  );
};
const StyledContainer = styled.div`
  background-color: ${colors.white};
  padding: 1rem;
  margin: 3rem 0rem;
`;
export default EditProfileSection;
