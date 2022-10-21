import React from "react";
import { Link } from "react-router-dom";
import { fontSize } from "../../../DefaultValues";
import styled from "styled-components";
import No_Image from "../../../Assets/Images/no_image.jpg";
import { useSelector } from "react-redux";

const AdminProfileSection = () => {
  const AdminState = useSelector((state) => state.AdminState);
  const { admin: data } = AdminState;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-10">
          <StyledProductPreviewSection>
            {data ? (
              <div className="my-4 bg-light py-3">
                <div
                  className="my-2
                       bg-light p-3"
                ></div>
                <div className="p-3">
                  <p className="lead">
                    <b className="display-6">Name</b>
                    <br />
                    <span className="text-uppercase">{data.username}</span>
                  </p>
                  <p className="lead">
                    <b className="display-6">Email</b>
                    <br />
                    {data.email}
                  </p>
                  <div className="text-center">
                    <Link to={`/admin/edit/profile/`} className="btn btn-dark">
                      Edit Admin Info
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
export default AdminProfileSection;
