import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { AdminRoutes, baseUrl, fontSize } from "../../../DefaultValues";
import styled from "styled-components";
import Loading from "../../../Shared/Components/Loading";
import { useDispatch } from "react-redux";
import { deleteUserFunc } from "../../../Redux/Admin/AdminActions";
import No_Image from "../../../Assets/Images/no_image.jpg";
import ConfirmModal from "../../../Shared/Components/ConfirmModal";
import moment from "moment/moment";
const ViewUserSection = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [confirmModalTitle, setConfirmModalTitle] = useState("");
  const [confirmModalFunc, setConfirmModalFunc] = useState(
    () => () => console.log("hello")
  );

  const id = useParams().id;
  const getData = (id) => {
    setLoading(true);
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${AdminRoutes.loadUser}/${id}`,
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
        }
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
      });
  };

  //handle redirect after delete
  const handleRedirect = () => {
    navigate("/admin/all/users");
  };

  //const function to delete user
  const handleDelete = (options) => {
    //set the title of the confirmation modal
    setConfirmModalTitle(options.msg);
    //create a verification function to be passed into the confirmation modal
    const verifyFunc = () => {
      dispatch(dispatch(deleteUserFunc(data, handleRedirect)));
    };
    //parse the verifyFunc to the confirmationModal to call it when admin confirm
    setConfirmModalFunc(() => () => verifyFunc());
  };

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-10">
          <StyledProductPreviewSection>
            {loading ? (
              <div className="d-flex justify-content-center align-items-center my-5">
                <Loading width={50} />
              </div>
            ) : data ? (
              <div className="my-4 bg-light py-3">
                {/* profile image */}
                <div className="text-center">
                  <div className="my-4">
                    <img
                      className="w-50 img img-thumbnail"
                      src={
                        data.profile_image
                          ? `${baseUrl}/${data.profile_image}`
                          : No_Image
                      }
                      alt="brand logo"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <p className="lead text-capitalize">
                    <b>First Name</b>: {data.firstname}
                  </p>
                  <p className="lead text-capitalize">
                    <b>Last Name</b>: {data.lastname}
                  </p>
                  <p className="lead">
                    <b>Email:</b>
                    <br />
                    {data.email}
                  </p>
                  <p className="lead">
                    <b>Verified:</b>
                    <br />
                    {data.verified ? "Yes" : "No"}
                  </p>
                  <p className="lead">
                    <b>Suspended:</b>
                    <br />
                    {data.suspended ? "Yes" : "No"}
                  </p>
                  <p className="lead">
                    <b>Address:</b>
                    <br />
                    {data.address.length > 0 ? data.address.join(";") : "N/A"}
                  </p>
                  <p className="lead">
                    <b>Telephone:</b>
                    <br />
                    {data.tel.length > 0 ? data.tel.join(",") : "N/A"}
                  </p>
                  <p className="lead">
                    <b>Created On:</b>
                    <br />
                    {moment(new Date(data.created_at)).fromNow()}
                  </p>
                  <p className="lead">
                    <b>Country:</b>
                    <br />
                    {data.location.country}
                  </p>
                  <p className="lead">
                    <b>State:</b>
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
                  {/* Delete product button */}
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-danger"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-backdrop="false"
                      onClick={() =>
                        handleDelete({
                          msg: "You  are about to delete this user",
                          id: data._id,
                          profile_image: data.profile_image,
                        })
                      }
                    >
                      Delete User
                    </button>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <button
                      className="btn btn-dark"
                      onClick={() => navigate(-1)}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="alert alert-light text-center my-4" role="alert">
                <b>Opps! User Not found</b>
              </div>
            )}
            {/* this is a modal to firm various actions that will be perform on users */}
            <ConfirmModal
              title={confirmModalTitle}
              confirm={confirmModalFunc}
            />
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
export default ViewUserSection;
