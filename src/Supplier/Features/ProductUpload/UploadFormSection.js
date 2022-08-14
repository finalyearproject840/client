import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField, {
  StyledErrorText,
  StyledLabel,
} from "../../Components/TextInputs/TextField";
import Button from "../../../Shared/Components/Button";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uploadProductFunc } from "../../../Redux/Supplier/SupplierActions";
import Loading from "../../../Shared/Components/Loading";
import styled from "styled-components";
import { colors } from "../../../DefaultValues";

const UploadFormSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const supplier = useSelector(state=>state.SupplierState.supplier);

  //function to redirect to product priview after upload succes
  const handleRedirect = (id) => {
    navigate(`/supplier/product/${id}`);
  };
  //form submission function
  const handleSubmit = (form, setSubmitting, resetForm) => {
    dispatch(uploadProductFunc(form, setSubmitting, resetForm, supplier, handleRedirect));
  };

  //write validation schema using Yup library
  const validateSchema = Yup.object({
    name: Yup.string()
      .required("Product name is required")
      .min(1, "Product name should have atleast 1 character")
      .max(30, "Username can't be more than 256 characters"),
    quantity: Yup.number().required("Quantity is required").min(1, "Atleast 1"),
    price: Yup.number().required("Price is required").min(0, "Atleast 0"),
    discount: Yup.number()
      .required("Discount is required")
      .min(0, "Min is 0")
      .max(100, "100% is the maximum discount"),
    tags: Yup.string().required("Please enter atleast one tag"),
    expiry_date: Yup.date().required("should enter a valid date"),
    manufactured_date: Yup.date().required("should enter a valid date"),
    category: Yup.mixed().required("Please Select at least one category"),
    description: Yup.string()
      .required("Please enter product description")
      .min(3, "description should be at least 3 character long"),
    images: Yup.mixed().required("upload atleast one image"),
    usage: Yup.string().required("usage info is required"),
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <StyledTableContainer>
            {/*form with formik  */}
            <Formik
              initialValues={{
                name: "",
                price: "",
                description: "",
                category: "",
                discount: 0,
                quantity: "",
                expiry_date: "",
                manufactured_date: "",
                tags: "",
                images: "",
                usage: "",
              }}
              validationSchema={validateSchema}
              onSubmit={(form, { setSubmitting, resetForm }) =>
                handleSubmit(form, setSubmitting, resetForm)
              }
            >
              {({ isSubmitting, setFieldValue, touched, errors }) => (
                <Form encType="multipart/form-data">
                  <TextField
                    type="text"
                    name="name"
                    label="Enter name for Product"
                    placeholder="Product Name"
                  />
                  <TextField
                    type="number"
                    name="price"
                    label="Product Price in Ghana cedis"
                    placeholder="Product Price"
                  />
                  <TextField
                    type="number"
                    name="discount"
                    value="0"
                    label="Enter discount if any for the product"
                    placeholder="Discount"
                  />
                  <StyledLabel>
                    Upload a maximun of 3 images | the first images will be the
                    main image of the product
                  </StyledLabel>
                  <div className="my-2">
                    <input
                      type="file"
                      name="images"
                      className={
                        touched.images && errors.images
                          ? "form-control is-invalid p-3"
                          : `form-control p-3`
                      }
                      placeholder="Product Image"
                      onChange={(e) =>
                        setFieldValue("images", e.currentTarget.files)
                      }
                      multiple
                    />
                    {touched.images && errors.images && (
                      <StyledErrorText className="text-danger">
                        <ErrorMessage name="images" />
                      </StyledErrorText>
                    )}
                  </div>
                  <TextField
                    type="number"
                    name="quantity"
                    label="Enter quantity of product in stock"
                    placeholder="Quantity in stock"
                  />
                  <TextField
                    type="text"
                    name="tags"
                    label="Enter tags for Product | Tags enable customers to quickly find your products|eg"
                    placeholder="eg. stomach medicine, for children..."
                  />
                  <TextField
                    type="text"
                    name="usage"
                    label="Enter usage information"
                    placeholder="eg. 3x daily"
                  />
                  <TextField
                    type="date"
                    name="manufactured_date"
                    label="Select product manufactured date"
                    placeholder="Proudct manufactured date"
                  />
                  <TextField
                    type="date"
                    name="expiry_date"
                    label="Select product expiry date"
                    placeholder="Proudct expiry date"
                    required
                  />
                  <div className="my-3">
                    <StyledLabel htmlFor="category">
                      Select Product categories | Hold the Ctrl key on your
                      keyboard to select multiple categories
                    </StyledLabel>
                    <Field
                      as="select"
                      className="form-control"
                      name="category"
                      multiple
                    >
                      <option value="pain killer">Pain killer</option>
                      <option value="stomach pains">Stomach Pains</option>
                      <option value="supplements">Supplements</option>
                      <option value="sleep">Sleep</option>
                      <option value="energy">Energy</option>
                      <option value="health">Health</option>
                      <option value="cough">Cough</option>
                      <option value="cold">Cold</option>
                      <option value="flue">Flue</option>
                      <option value="digestive health">Degistive Health</option>
                      <option value="eyecare">Eyecare</option>
                      <option value="family planning">Family Planning</option>
                      <option value="first aid">First Aid</option>
                      <option value="herbal">Herbal</option>
                      <option value="sexual health">Sexual Health</option>
                      <option value="vitamin">Vitamins</option>
                      <option value="asthma">Asthma</option>
                      <option value="anti-acid">anti-acid</option>
                      <option value="rashes">Rashes Treatment</option>
                    </Field>
                    {errors.category && (
                      <StyledErrorText className="text-danger">
                        <ErrorMessage name="category" />
                      </StyledErrorText>
                    )}
                    <div className="my-3">
                      <Field
                        name="description"
                        as="textarea"
                        row="10"
                        className={
                          touched.description && errors.description
                            ? "form-control is-invalid p-3"
                            : `form-control p-3`
                        }
                        placeholder="Description"
                      />
                      {touched.description && errors.description && (
                        <StyledErrorText className="text-danger">
                          <ErrorMessage name="description" />
                        </StyledErrorText>
                      )}
                    </div>
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
export default UploadFormSection;
