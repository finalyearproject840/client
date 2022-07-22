import React from "react";
import { colors, fonts } from "../../../DefaultValues";
import Button from "../../../Shared/Components/Button";
import { StyleTitle } from "../../../Styles";
import { StyledFileUploader } from "./AccountStyles";
import { FaCloudUploadAlt } from "react-icons/fa";

const SupplierLicense = () => {
  //this is the function that handles the form submit action
  const handleSubmit = (e) => {
    //first prevent the page from loading
    e.preventDefault();
    //write submission logic
    console.log(e.target);
  };
  return (
    <StyledFileUploader>
      <div className="upload-container">
        <StyleTitle
          font={fonts.righteous}
          size="2rem"
          color={colors.voilet}
          className="text-center"
        >
          Upload Lincense
        </StyleTitle>
        <p className="lead px-5 text-center">
          As part of the account creation process, you are required to upload
          your pharmaceutical lincense for review
        </p>
        {/* Actual form */}
        <form encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
          <div className="text-center">
            <label htmlFor="lincense" className="text-warning lead">
              Only image or pdf is allowed
            </label>
          </div>
          <div className="input-box my-3">
            <input
              type="file"
              name="lincense"
              className="form-control"
              required
            />
            <FaCloudUploadAlt
              className="upload-icon"
              size={50}
              color={colors.voilet}
            />
          </div>
          <div className="text-center mt-5 mb-2">
            <Button width="150px" type="submit">
              Upload
            </Button>
          </div>
        </form>
      </div>
    </StyledFileUploader>
  );
};

export default SupplierLicense;
