import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../Assets/Images/Design/background/home_banner.jpg";
import PhoneImage from "../../Assets/Images/Design/phone_image.png";
import { colors, fonts, fontSize } from "../../DefaultValues";
import Button from "../Components/Button";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AiFillApple } from "react-icons/ai";
import { StyleSubtitle, StyleTitle } from "../../Styles";
import { Link } from "react-router-dom";
const BannerSection = () => {
  return (
    <StyledBannerSection>
      <div className="container">
        <div className="row ">
          <div className="col-sm-8 align-items-center d-flex d-lg-block justify-content-center">
            <div>
              <StyleTitle className="banner-title" color={colors.white}>
                Online <br />
                Pharmacy <br /> Platform
              </StyleTitle>
              <StyleSubtitle className="subtitle">
                More than ten thousand users,
                <br /> Over 500 suppiers in Ghana
              </StyleSubtitle>
              <p className="banner-text">
                Download the pharmacy platform app and experience a hustle free
                shopping of drugs anywhere you found yourself in Ghana
              </p>
              <div className="download-link-box">
                <Link to="#" className="d-flex align-items-center download-btn">
                  <IoLogoGooglePlaystore size={25} />
                  <span className="ms-3">Google Play</span>
                </Link>
                <Link
                  to="#"
                  className="d-flex align-items-center download-btn ms-md-3"
                >
                  <AiFillApple size={25} />
                  <span className="ms-3">App Store</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4 d-flex align-items-center">
            <div className="banner-image-box text-center ">
              <img src={PhoneImage} className="banner-image img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </StyledBannerSection>
  );
};

const StyledBannerSection = styled.div`
  background-image: linear-gradient(#9403aa24, #e640f89d, #8f3f8cc3),
    url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  height: 92vh;
  display: flex;
  align-items: center;
  text-align: center;

  .banner-title {
    font-size: 1.8rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 900;
    letter-spacing: 2px;
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
      0px 18px 23px rgba(0, 0, 0, 0.1);
  }
  .subtitle {
    color: ${colors.white};
    font-size: ${fontSize.sm};
    font-family: ${fonts.roboto};
    letter-spacing: 2px;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    line-height: 1rem;
    margin: 1rem 0rem;
  }
  .banner-text {
    color: ${colors.white};
    font-size: ${fontSize.sm};
    font-family: ${fonts.roboto};
    font-weight: 300 !important;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
    display: none;
  }
  .download-link-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .download-btn {
    font-size: ${fontSize.sm};
    width: 150px;
    background-color: ${colors.violet};
    color: ${colors.white};
    border-radius: 5px;
    padding: 0.5rem 0.5rem;
    font-family: ${fonts.roboto};
    letter-spacing: 1px;
    margin-top: 1rem;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  .banner-image {
    width: 30%;
    display: none;
  }
  @media screen and (min-height: 640px) {
    .banner-image {
      width: 30%;
      display: unset;
      margin-top: 2rem;
    }
  }

  @media screen and (min-width: 600px) {
    text-align: unset;
    .banner-title {
      color: ${colors.white};
      font-size: 2.5rem;
      margin: 1rem 0rem;
    }
    .banner-text {
      color: ${colors.white};
      font-size: ${fontSize.n};
      display: block;
      letter-spacing: 1px;
      width:400px;
    }
    .subtitle {
      color: ${colors.white};
      font-size: ${fontSize.l};
      line-height: 2rem;
      margin: 1rem 0rem;
    }
    .banner-image {
      width: 100%;
      display: unset;
      margin-top: unset;
    }
    .download-link-box {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .download-btn {
      width: 140px;
      margin-right: 1rem;
      margin-top: 3rem;
    }
  }
  @media screen and (min-width: 768px) {
    text-align: unset;
    .banner-title {
      color: ${colors.white};
      font-size: 4rem;
      margin: 1rem 0rem;
    }
    .subtitle {
      color: ${colors.white};
      font-size: ${fontSize.l};
      line-height: 2rem;
      margin: 1rem 0rem;
    }
    .banner-image {
      width: 100%;
      display: unset;
      margin-top: unset;
    }
    .download-link-box {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .download-btn {
      width: 180px;
      margin-right: 1rem;
      padding: 1rem 0.5rem;
    }
  }

  @media screen and (min-width: 1025px) {
    text-align: unset;
    .banner-text {
      font-size: ${fontSize.sm}
    }
    .banner-title {
      color: ${colors.white};
      font-size: 3.5rem;
      margin: 1rem 0rem;
    }
    .subtitle {
      color: ${colors.white};
      font-size: ${fontSize.l};
      line-height: 2rem;
      margin: 1rem 0rem;
    }
    .banner-image {
      width: 60%;
    }
    .download-link-box {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .download-btn {
      width: 180px;
      margin-right: 1rem;
    }
  }
`;
export default BannerSection;
