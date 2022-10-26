import React from "react";
import styled from "styled-components";
import { colors, fonts, fontSize } from "../../DefaultValues";
import { StyleSubtitle, StyleTitle } from "../../Styles";
import AboutImage from "../../Assets/Images/Design/about.jpg";
const AboutSection = () => {
  return (
    <StyledAboutSection id="about" className="">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6" />
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <img
                  src={AboutImage}
                  className="img-fluid img-thumbnail"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <div>
                <StyleTitle className="title">About Us</StyleTitle>
                <StyleSubtitle
                  color={colors.muted}
                  font={fonts.roboto}
                  size={fontSize.l}
                  className="text-uppercase mt-1 mb-4"
                >
                  Online Pharmacy Platform
                </StyleSubtitle>
                <p className="lead">
                  The Online Pharmacy platform is an online medicine market
                  where customers can find licensed suppliers to purchase
                  medicines from. The platform has over 500 Medicine suppliers
                  all across Ghana. Suppliers who wants to sell their drugs on
                  this platform can do so by creating an account on this web
                  application and going through the required process in order to
                  be approved. Customers can go click on the any of the links
                  above to download the mobile application on to their mobile
                  phones in order to use this platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledAboutSection>
  );
};
const StyledAboutSection = styled.div`
  padding: 7rem 0rem;
  background-color: ${colors.light};
  .title {
    font-size: 3rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 900;
    color: ${colors.violet};
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.241),
      0px 8px 13px rgba(0, 0, 0, 0.1), 0px 18px 23px rgba(0, 0, 0, 0.1);
  }
  .lead {
    text-align: justify;
    font-size: 1rem;
  }
`;
export default AboutSection;
