import React from "react";
import CardItem from "../../Components/CardItem/CardItem";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { StyleSubtitle, StyleTitle } from "../../../Styles";
import { colors, fonts, fontSize } from "../../../DefaultValues";
import { Link } from "react-router-dom";

{
  /* the card section as the first section of the dashboard */
}
const CardSection = () => {
  return (
    <section className="card-section my-3" id="card-section">
      <div className="container">
        <div className="row">
          {/* Card item */}
          <CardItem className="col-sm-6 col-lg-3">
            <Link to="#">
              <div className="card-container">
                <div className="icon-box">
                  <FaUsers color={colors.white} size={25} />
                </div>
                <div className="text-container">
                  <StyleTitle size={fontSize.n} color={colors.voilet}>
                    45,399
                  </StyleTitle>
                  <StyleSubtitle
                    size={fontSize.sm}
                    className="text-uppercase"
                    font={fonts.righteous}
                    color={colors.muted}
                  >
                    Subscribers
                  </StyleSubtitle>
                </div>
              </div>
            </Link>
          </CardItem>
          {/* Card item */}
          <CardItem className="col-sm-6 col-lg-3" color={colors.blue}>
            <Link to="#">
              <div className="card-container">
                <div className="icon-box">
                  <AiFillMedicineBox color={colors.white} size={25} />
                </div>
                <div className="text-container">
                  <StyleTitle size={fontSize.n} color={colors.blue}>
                    45,399
                  </StyleTitle>
                  <StyleSubtitle
                    size={fontSize.sm}
                    className="text-uppercase"
                    font={fonts.righteous}
                    color={colors.muted}
                  >
                    Medicines
                  </StyleSubtitle>
                </div>
              </div>
            </Link>
          </CardItem>
          {/* Card item */}
          <CardItem className="col-sm-6 col-lg-3" color={colors.gold}>
            <Link to="#">
              <div className="card-container">
                <div className="icon-box">
                  <MdDeliveryDining color={colors.white} size={25} />
                </div>
                <div className="text-container">
                  <StyleTitle size={fontSize.n} color={colors.gold}>
                    67
                  </StyleTitle>
                  <StyleSubtitle
                    size={fontSize.sm}
                    className="text-uppercase"
                    font={fonts.righteous}
                    color={colors.muted}
                  >
                    New Orders
                  </StyleSubtitle>
                </div>
              </div>
            </Link>
          </CardItem>
          {/* Card item */}
          <CardItem className="col-sm-6 col-lg-3" color={colors.red}>
            <Link to="#">
              <div className="card-container">
                <div className="icon-box">
                  <AiFillMedicineBox color={colors.white} size={25} />
                </div>
                <div className="text-container">
                  <StyleTitle size={fontSize.n} color={colors.red}>
                    67
                  </StyleTitle>
                  <StyleSubtitle
                    size={fontSize.sm}
                    className="text-uppercase"
                    font={fonts.righteous}
                    color={colors.muted}
                  >
                    Sold
                  </StyleSubtitle>
                </div>
              </div>
            </Link>
          </CardItem>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
