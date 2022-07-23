//styles for the menu bar
import styled from "styled-components";
import { colors } from "../../../DefaultValues";
const StyledMenu = styled.div`
  position: absolute;
  z-index: 10;
  width: 80%;
  height: 100%;
  /* show or hide menu */
  transition: all 0.2s ease-in-out;
  transform: ${(props) => (props.show ? "unset" : "translateX(-100%)")};

  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  height: 100vh;
  background-color: #fff;
  .top-bar {
    height: 4rem;
    background-color: ${colors.voilet};
    text-align: center;
    color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  .site-logo {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .menu-container {
    padding: 1rem;
  }

  .upload-link {
    background-color: #8338ec;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.8rem;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
  @media screen and (min-width: 768px) {
    position: unset;
    width: unset;
  }
  @media screen and (min-width: 1024px) {
    .menu-container {
      padding: 2rem;
    }
  }
`;

export const StyledMenuCloser = styled.button`
  position: absolute;
  right: -48px;
  bottom: 40%;
  background-color: ${(props) => (props.show ? "#fff" : `${colors.voilet}`)};
  height: 50px;
  width: 50px;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border: none;
  z-index: 1000;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default StyledMenu;
