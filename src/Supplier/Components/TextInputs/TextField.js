import React from "react";
import { useField, ErrorMessage } from "formik";
import styled from "styled-components";
import { colors, fonts, fontSize, spacing } from "../../../DefaultValues";

const TextField = (props) => {
  const [field, meta] = useField(props);
  return (
    <StyledContainer>
      <StyledLabel>{props.label}</StyledLabel>
      <StyledInput>
        <input
          type={props.type}
          name={field.name}
          {...props}
         
          {...field}
          className={
            meta.touched && meta.error
              ? "form-control is-invalid"
              : `form-control`
          }
        />
      </StyledInput>
      {/*input error */}
      {meta.touched && meta.error && (
        <StyledErrorText className="text-danger">
          {<ErrorMessage name={field.name} />}
        </StyledErrorText>
      )}
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  margin-bottom: ${spacing.n};
`;
const StyledInput = styled.div`
  margin-top: 0.3rem !important;
  .form-control {
    padding: 0.8rem;
  }
  .form-control:focus {
    box-shadow: ${colors.voilet} 0px 0px 0px 1px inset,
      ${colors.voilet} 0px 0px 0px 1px;
    display: block;
  }
  .form-control::placeholder{
    color:${colors.muted};
    font-size: ${fontSize.sm};
    letter-spacing: 1px;
  }
`;
const StyledLabel = styled.label`
  font-family: ${fonts.barlow};
  font-size: ${fontSize.sm};
  font-weight: 600;
  letter-spacing: 1px;
`;
const StyledErrorText = styled.p`
  font-size: ${fontSize.sm};
  letter-spacing: 1px;
`;
export default TextField;
