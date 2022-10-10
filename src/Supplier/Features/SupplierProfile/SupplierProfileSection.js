import React from "react";
import { Link } from "react-router-dom";
import { baseUrl, fontSize } from "../../../DefaultValues";
import styled from "styled-components";
import Loading from "../../../Shared/Components/Loading";
import No_Image from "../../../Assets/Images/no_image.jpg";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { Formik, Form } from "formik";
import { editBrandLogoFunc } from "../../../Redux/Supplier/SupplierActions";
import { useNavigate } from "react-router-dom";
const SupplierProfileSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SupplierState = useSelector((state) => state.SupplierState);
  const { supplier: data } = SupplierState;

  const handleNavigate = () => {
    navigate("/supplier/profile");
  };
  //function to handle change image
  const handleChangeImage = (form, setSubmitting, resetForm) => {
    console.log(form);
    dispatch(editBrandLogoFunc(form, setSubmitting, resetForm, handleNavigate));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-10">
          <StyledProductPreviewSection>
            {data ? (
              <div className="my-4 bg-light py-3">
                <h3 className="text-center display-6 text-uppercase">
                  {data.organisation}
                </h3>
                {/* Product images */}
                <div className="text-center">
                  <div className="my-4">
                    <img
                      className="w-50 img img-thumbnail"
                      src={
                        data.brand_logo
                          ? `${baseUrl}/${data.brand_logo}`
                          : No_Image
                      }
                      alt="brand logo"
                    />
                  </div>
                </div>
                <div
                  className="my-2
                       bg-light p-3"
                >
                  {/* form to change image */}
                  {/*form with formik  */}
                  <Formik
                    initialValues={{
                      images: "",
                      old_logo: data.brand_logo,
                      supplier_id: data._id,
                    }}
                    onSubmit={(form, { setSubmitting, resetForm }) =>
                      handleChangeImage(form, setSubmitting, resetForm)
                    }
                  >
                    {({ isSubmitting, setFieldValue }) => (
                      <Form encType="multipart/form-data">
                        <div className="d-flex justify-content-center">
                          <input
                            type="file"
                            name="images"
                            className="form-control w-25"
                            placeholder="Product Image"
                            onChange={(e) =>
                              setFieldValue("images", e.currentTarget.files)
                            }
                            required
                          />
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                          {isSubmitting ? (
                            <div className="d-flex justify-content-center">
                              <Loading />
                            </div>
                          ) : (
                            <button className="btn btn-dark" type="submit">
                              <BiEdit /> Change this image
                            </button>
                          )}
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
                <div className="p-3">
                  <p className="lead">
                    <b>Name</b>: {data.username}
                  </p>
                  <p className="lead">
                    <b>Description:</b>
                    <br />
                    {data.description}
                  </p>
                  <p className="lead">
                    <b>Brand Name:</b>
                    <br />
                    {data.organisation}
                  </p>
                  <p className="lead">
                    <b>Email:</b>
                    <br />
                    {data.email}
                  </p>
                  <p className="lead">
                    <b>Country:</b>
                    <br />
                    {data.location.country}
                  </p>
                  <p className="lead">
                    <b>State/Region:</b>
                    <br />
                    {data.location.state}
                  </p>
                  <p className="lead">
                    <b>City:</b>
                    <br />
                    {data.location.city}
                  </p>
                  <p className="lead">
                    <b>Locality:</b>
                    <br />
                    {data.location.locality}
                  </p>
                  <p className="lead">
                    <b>Address:</b>
                    <br />
                    {data.address.join(";")}
                  </p>
                  <p className="lead">
                    <b>Telephone:</b>
                    <br />
                    {data.tel.join(",")}
                  </p>
                  <div className="text-center">
                    <Link
                      to={`/supplier/edit/profile/`}
                      className="btn btn-dark"
                    >
                      Edit Product Information
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div>Not found</div>
            )}
          </StyledProductPreviewSection>
        </div>
      </div>
    </div>
  );
};

const StyledProductPreviewSection = styled.div`
  .lead {
    font-size: ${fontSize.n};
  }
`;
export default SupplierProfileSection;
