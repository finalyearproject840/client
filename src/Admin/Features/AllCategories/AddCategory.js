import React from "react";
import { Formik, Form } from "formik";
import TextField from "../../Components/TextInputs/TextField";
import Button from "../../../Shared/Components/Button";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uploadProductFunc } from "../../../Redux/Supplier/SupplierActions";
import Loading from "../../../Shared/Components/Loading";
import styled from "styled-components";
import { colors } from "../../../DefaultValues";
import { addCategoryFunc } from "../../../Redux/Admin/AdminActions";

const AddCategoryFormSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //function to redirect to all categories
  const handleRedirect = () => {
    navigate(`/admin/all/categories/`);
  };

  //form submission function
  const handleSubmit = (form, setSubmitting, resetForm) => {
    dispatch(addCategoryFunc(form, setSubmitting, resetForm, handleRedirect));
  };

  //write validation schema using Yup library
  const validateSchema = Yup.object({
    category_name: Yup.string()
      .required("category_name is required")
      .min(1, "category_name should have at least 1 character"),
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <StyledTableContainer>
            {/*form with formik  */}
            <Formik
              initialValues={{
                category_name: "",
              }}
              validationSchema={validateSchema}
              onSubmit={(form, { setSubmitting, resetForm }) =>
                handleSubmit(form, setSubmitting, resetForm)
              }
            >
              {({ isSubmitting }) => (
                <Form encType="multipart/form-data">
                  <TextField
                    type="text"
                    name="category_name"
                    label="Enter category name"
                    placeholder="Category Name"
                  />

                  {isSubmitting ? (
                    <div className="d-flex justify-content-center">
                      <Loading />
                    </div>
                  ) : (
                    <div className="text-center">
                      <Button case="uppercase" type="submit">
                        Add Category
                      </Button>
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </StyledTableContainer>
        </div>
      </div>
    </div>
  );
};
const StyledTableContainer = styled.div`
  background-color: ${colors.white};
  padding: 1rem;
  margin: 3rem 0rem;
`;
export default AddCategoryFormSection;
