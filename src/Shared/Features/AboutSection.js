import React from "react";
import styled from "styled-components";
import { colors, fonts, fontSize } from "../../DefaultValues";
import { StyleSubtitle, StyleTitle } from "../../Styles";
import AboutImage from "../../Assets/Images/Design/about.jpg"
import Button from "../Components/Button";
const AboutSection = () => {
  return (
    <StyledAboutSection id="" className="">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6" />
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
                <div>
                    <img src={AboutImage} className="img-fluid img-thumbnail" alt="" />
                </div>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <div>
                <StyleTitle className="title">About Us</StyleTitle>
                <StyleSubtitle color={colors.muted} font={fonts.roboto} size={fontSize.l} className="text-uppercase mt-1 mb-4">Online Pharmacy Platform</StyleSubtitle>
                <p className="lead">
                  Chuck swine jowl ham frankfurter. Chicken salami t-bone kevin
                  chuck ribeye pork loin pancetta leberkas short ribs jowl
                  frankfurter andouille. Hamburger ball tip ribeye beef ribs
                  rump t-bone shankle meatloaf sirloin kevin pork loin. Alcatra
                  chicken sausage pork loin. Tail corned beef cupim ball tip.
                  Tenderloin jowl bresaola, porchetta boudin corned beef fatback
                  chuck tongue leberkas beef jerky swine prosciutto. Landjaeger
                  jerky tri-tip pastrami porchetta doner rump cow sirloin
                  brisket capicola kielbasa frankfurter tenderloin venison
                </p>
                <div>
                    <Button>Read more</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledAboutSection>
  );
};
const StyledAboutSection = styled.div`
padding:7rem 0rem;
background-color: ${colors.light};
.title{
    font-size: 3rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 900;
    color:${colors.violet};
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.241), 0px 8px 13px rgba(0, 0, 0, 0.1),
      0px 18px 23px rgba(0, 0, 0, 0.1);
}
.lead{
    text-align: justify;
    font-size:1rem;
}
`;
export default AboutSection;
