import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { AdminRoutes, baseUrl, fontSize } from "../../../DefaultValues";
import styled from "styled-components";
import Loading from "../../../Shared/Components/Loading";
import No_Image from "../../../Assets/Images/no_image.jpg";
import ConfirmModal from "../../../Shared/Components/ConfirmModal";
import moment from "moment/moment";
import { useDispatch } from "react-redux";
import { VerifySupplierFunc } from "../../../Redux/Admin/AdminActions";

const ViewSupplierSection = () => {
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
      url: `${AdminRoutes.loadSupplier}/${id}`,
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

  useEffect(() => {
    getData(id);
  }, []);

  //const function to verify or unverify supplier
  const handleVerify = (options) => {
    //set the title of the confirmation modal
    setConfirmModalTitle(options.msg);
    //create a verification function to be passed into the confirmation modal
    const verifyFunc = () => {
      dispatch(
        VerifySupplierFunc({
          id: options.id,
          verify: options.type === "verify" ? true : false,
          singlePage: true,
          getSupplier: () => getData(id),
        })
      );
    };
    //parse the verifyFunc to the confirmationModal to call it when admin confirm
    setConfirmModalFunc(() => () => verifyFunc());
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-10">
          <StyledProductPreviewSection>
            {loading ? (
              <div className="d-flex justify-content-center align-items-center my-5">
                <Loading width={100} />
              </div>
            ) : data ? (
              <div className="my-4 bg-light py-3">
                {/* profile image */}
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
                <div className="p-3">
                  <p className="lead">
                    <b>Username</b>: {data.username}
                  </p>
                  <p className="lead">
                    <b>Organisation</b>: {data.organisation}
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
                  <div>
                    <p className="lead">
                      <b>Supplier License</b>
                    </p>
                    {data.supplier_license ? (
                      <a
                        href={`${baseUrl}/${data.supplier_license}`}
                        download={true}
                        className="btn btn-danger"
                      >
                        Download License
                      </a>
                    ) : (
                      "unavailable"
                    )}
                  </div>
                  <div className="mt-3">
                    {data.verified ? (
                      <button
                        className="btn btn-secondary"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-backdrop="false"
                        onClick={() =>
                          handleVerify({
                            type: "unverify",
                            msg: "You  are about to unverify this supplier",
                            id: data._id,
                          })
                        }
                      >
                        Unverify
                      </button>
                    ) : (
                      <button
                        className="btn btn-dark"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-backdrop="false"
                        onClick={() =>
                          handleVerify({
                            type: "verify",
                            msg: "You are about to verify this supplier",
                            id: data._id,
                          })
                        }
                      >
                        Verify
                      </button>
                    )}
                  </div>
                  <div className="d-flex justify-content-center">
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
                <b>Opps! Supplier Not found</b>
              </div>
            )}
            {/* this is a modal to firm various actions that will be perform on suppliers */}
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
export default ViewSupplierSection;
