import React from "react";
import styled from "styled-components";
import { spacing, colors, fontSize } from "../../DefaultValues";

const Button = (props) => {
  return <StyledButton {...props} type="submit">{props.children}</StyledButton>;
};
const StyledButton = styled.button`
  border: ${(props) => (props.border ? props.border : "none")};
  color: ${(props) => (props.color ? props.color : colors.white)};
  background-color: ${(props) =>
    props.background ? props.background : colors.violet};
  font-size: ${(props) => (props.size ? props.size : fontSize.sm)};
  padding: ${(props) => (props.padding ? props.padding : spacing.n)};
  text-transform: ${(props) => (props.case ? props.case : "unset")};
  display: ${(props) => (props.display ? props.display : "unset")};
  width: ${(props) => (props.width ? props.width : "unset")};
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.shadow
      ? props.shadow
      : "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"};
`;

export default Button;
