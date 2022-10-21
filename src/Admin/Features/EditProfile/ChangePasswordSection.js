import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "../../Components/TextInputs/TextField";
import Button from "../../../Shared/Components/Button";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../Shared/Components/Loading";
import styled from "styled-components";
import { colors } from "../../../DefaultValues";
import { changePassword } from "./../../../Redux/Admin/AdminActions";

const ChangePasswordSection = () => {
  const dispatch = useDispatch();
  const AdminState = useSelector((state) => state.AdminState);
  const { admin } = AdminState;

  //form submission function
  const handleSubmit = (form, setSubmitting, resetForm) => {
    console.log(form);
    dispatch(changePassword(form, setSubmitting, resetForm));
  };

  //write validation schema using Yup library
  const validateSchema = Yup.object({
    old_password: Yup.string().required("Old Password is required"),
    new_password: Yup.string()
      .required("New password is required")
      .min(8, "Password should have at least 8 characters")
      .max(16, "Password can't be more than 16 characters"),
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
                    old_password: "",
                    new_password: "",
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
                        type="password"
                        name="old_password"
                        label="Enter Old Password"
                        placeholder="Old Password"
                      />
                      <TextField
                        type="password"
                        name="new_password"
                        label="Enter New Password"
                        placeholder="New Password"
                      />

                      <div className="d-flex justify-content-center">
                        {isSubmitting ? (
                          <div className="d-flex justify-content-center">
                            <Loading />
                          </div>
                        ) : (
                          <Button case="uppercase" type="submit">
                            Update Password
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
export default ChangePasswordSection;
