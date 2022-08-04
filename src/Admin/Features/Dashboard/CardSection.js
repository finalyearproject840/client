import React from "react";
import CardItem from "../../Components/CardItem/CardItem";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { StyleSubtitle, StyleTitle } from "../../../Styles";
import { colors, fonts, fontSize } from "../../../DefaultValues";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

{
  /* the card section as the first section of the dashboard */
}
const CardSection = () => {
  const appStore = useSelector(state=>state.AdminState);
  const {suppliers, products} = appStore;
  return (
    <section className="card-section my-3" id="card-section">
      <div className="container">
        <div className="row">
          {/* Card item */}
          <CardItem className="col-sm-6 col-lg-3">
            <Link to="/admin/all/suppliers">
              <div className="card-container">
                <div className="icon-box">
                  <FaUsers color={colors.white} size={25} />
                </div>
                <div className="text-container">
                  <StyleTitle size={fontSize.n} color={colors.voilet}>
                    {suppliers.length}
                  </StyleTitle>
                  <StyleSubtitle
                    size={fontSize.sm}
                    className="text-uppercase"
                    font={fonts.righteous}
                    color={colors.muted}
                  >
                    Suppliers
                  </StyleSubtitle>
                </div>
              </div>
            </Link>
          </CardItem>
          {/* Card item */}
          <CardItem className="col-sm-6 col-lg-3" color={colors.blue}>
            <Link to="/admin/all/products">
              <div className="card-container">
                <div className="icon-box">
                  <AiFillMedicineBox color={colors.white} size={25} />
                </div>
                <div className="text-container">
                  <StyleTitle size={fontSize.n} color={colors.blue}>
                    {products.data.length}
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
          <CardItem className="col-sm-6 col-lg-3" color={colors.green}>
            <Link to="#">
              <div className="card-container">
                <div className="icon-box">
                  <FaUsers color={colors.white} size={25} />
                </div>
                <div className="text-container">
                  <StyleTitle size={fontSize.n} color={colors.green}>
                    45,399
                  </StyleTitle>
                  <StyleSubtitle
                    size={fontSize.sm}
                    className="text-uppercase"
                    font={fonts.righteous}
                    color={colors.muted}
                  >
                    Users
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
        </div>
      </div>
    </section>
  );
};

export default CardSection;
