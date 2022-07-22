/* This has the default styles for almost every component */
import styled from "styled-components";
import { colors, fontSize } from "./DefaultValues";

//styled container
export const StyleContainer = styled.main`
  background-color: ${colors.light};
  display: grid;
  grid-template-columns: 20% 80%;
`;

//styled title
export const StyleTitle = styled.h1`
  font-size: ${(props) => (props.size ? props.size : fontSize.xl)};
  color: ${(props) => (props.color ? props.color : colors.dark)};
  font-family: ${(props) =>
    props.font
      ? props.font
      : "Barlow 'Fira Sans', 'Droid Sans', 'Helvetica Neue',"};
`;

//styled subtitle
export const StyleSubtitle = styled.h1`
  font-size: ${(props) => (props.size ? props.size : fontSize.n)};
  color: ${(props) => (props.color ? props.color : colors.dark)};
  font-family: ${(props) =>
    props.font
      ? props.font
      : "Barlow 'Fira Sans', 'Droid Sans', 'Helvetica Neue',"};
`;
