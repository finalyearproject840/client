import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import TextField from "../../Components/TextInputs/TextField";
import Button from "../../../Shared/Components/Button";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loading from "../../../Shared/Components/Loading";
import styled from "styled-components";
import { colors } from "../../../DefaultValues";
import {
  addCategoryFunc,
  editCategoryFunc,
} from "../../../Redux/Admin/AdminActions";
import axios from "axios";
import Cookies from "js-cookie";
import { AdminRoutes } from "../../../DefaultValues";

const EditCategoryFormSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const id = useParams().id;
  const getData = (id) => {
    setLoading(true);
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${AdminRoutes.loadCategory}/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          setLoading(false);
          setData(response.data.data);
        } else {
          setLoading(false);
          setError(true);
        }
      })
      .catch(function (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      });
  };

  useEffect(() => {
    getData(id);
  }, []);

  //function to redirect to all categories
  const handleRedirect = () => {
    navigate(`/admin/all/categories/`);
  };

  //form submission function
  const handleSubmit = (form, setSubmitting, resetForm) => {
    dispatch(editCategoryFunc(form, setSubmitting, resetForm, handleRedirect));
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
            {loading ? (
              <div>
                <Loading />
              </div>
            ) : (
              <Formik
                initialValues={{
                  category_name: data.category_name,
                  id: data._id,
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
                      <Button
                        display="block"
                        width="100%"
                        case="uppercase"
                        type="submit"
                      >
                        Upload
                      </Button>
                    )}
                  </Form>
                )}
              </Formik>
            )}
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
export default EditCategoryFormSection;
