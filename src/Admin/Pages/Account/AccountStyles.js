import styled from "styled-components";
import { colors, fontSize, spacing } from "../../../DefaultValues";

const StyledAccount = styled.div`
  display: grid;
  max-height: 100vh;
  overflow-y: hidden;

  @media screen and (min-width: 1025px) {
    grid-template-columns: ${(props) =>
      props.template ? props.template : "70% 30%"};
  }
`;
export const StyledImageContainer = styled.div`
  .account-image {
    width: 100%;
    height: 100%;
  }
`;
export const StyledFormContainer = styled.div`
  height: 100vh;
  padding: 3rem 2rem;
  overflow-y: scroll;
  .lead {
    font-size: ${fontSize.n};
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    margin: 0rem auto;
    margin-top: 5rem;
  }
  @media screen and (min-width: 1024px) {
    margin-top: unset;
    width: 100%;
  }
`;

export const StyledDivider = styled.div`
  margin: 2rem 0rem;
  display: flex;
  justify-content: center;
  position: relative;
  .divider-text {
    font-size: ${fontSize.n};
    font-weight: 700;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${colors.ash};
    border-radius: 20px;
    background-color: ${colors.white};
    position: relative;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${colors.ash};
    top: 50%;
    z-index: -10px;
  }
`;

export const StyledPending = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;

  .pending-container {
    text-align: center;
    padding: 3rem;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;
export const StyledFileUploader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colors.light};
  padding: 1rem;

  .upload-container {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    padding: ${spacing.l};
    background-color: ${colors.white};
  }
  .input-box {
    width: 100%;
    height: 10rem;
    background-color: ${colors.light};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    border-radius: 30px;
  }
  .form-control {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .lead {
    font-size: ${fontSize.n};
  }
`;

export default StyledAccount;
