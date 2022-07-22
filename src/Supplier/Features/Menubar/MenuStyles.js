//styles for the menu bar
import styled from "styled-components";
import { colors } from "../../../DefaultValues";
const StyledMenu = styled.div`
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
    padding: 3rem;
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
    letter-spacing: 1px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`;

export default StyledMenu;