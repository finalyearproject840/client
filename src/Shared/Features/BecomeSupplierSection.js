import React from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import BackgroundImage from "../../Assets/Images/Design/background/home_banner.jpg";
import { colors } from "../../DefaultValues";
import { Link } from "react-router-dom";
const BecomeSupplierSection = () => {
  return (
    <StyledBannerSection className="become-supplier">
      <div className="container">
        <div className="text-center">
          <h3 className="title">Join the Community as a supplier Now!</h3>
          <Link to="/supplier/create">
            <Button>BECOME A SUPPLIER</Button>
          </Link>
        </div>
      </div>
    </StyledBannerSection>
  );
};

const StyledBannerSection = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  padding: 3rem 0rem;
  display: flex;
  align-items: center;

  .title {
    font-size: 1.8rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 900;
    color: ${colors.white};
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
      0px 18px 23px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  }
`;
export default BecomeSupplierSection;
