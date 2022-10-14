import React from "react";
import { Formik, Form, Field } from "formik";
import { StyledLabel } from "../../Components/TextInputs/TextField";
import Button from "../../../Shared/Components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../Shared/Components/Loading";
import styled from "styled-components";
import { colors } from "../../../DefaultValues";
import { respondToPrescription } from "../../../Redux/Admin/AdminActions";

const PrescriptionResponseSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useParams().id;

  const appState = useSelector((state) => state.AdminState);
  const {
    products: { data },
  } = appState;

  //function to redirect to all prescription
  const handleRedirect = () => {
    navigate(`/admin/all/prescription`);
  };

  //form submission function
  const handleSubmit = (form, setSubmitting) => {
    form = { ...form, recommendations: form.recommendations.join(",") };
    dispatch(respondToPrescription(form, setSubmitting, handleRedirect));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <StyledTableContainer>
            {/*form with formik  */}
            <Formik
              initialValues={{
                recommendations: "",
                id
              }}
              onSubmit={(form, { setSubmitting, resetForm }) =>
                handleSubmit(form, setSubmitting, resetForm)
              }
            >
              {({ isSubmitting, errors }) => (
                <Form encType="multipart/form-data">
                  <div className="my-3">
                    <StyledLabel htmlFor="recommendations">
                      Select Recommended Medicines for the Prescription | Hold
                      the Ctrl key on your keyboard to select multiple
                      categories
                    </StyledLabel>
                    <Field
                      as="select"
                      className="form-control"
                      name="recommendations"
                      multiple
                    >
                      {data.length > 0 ? (
                        data.map((item) => (
                          <StyledOption key={item._id} value={item._id}>
                            {item._id} | {item.name}
                          </StyledOption>
                        ))
                      ) : (
                        <StyledOption value="no-recommendation">
                          No recommendation
                        </StyledOption>
                      )}
                    </Field>
                  </div>

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
const StyledOption = styled.option`
  text-transform: capitalize;
`;
export default PrescriptionResponseSection;
