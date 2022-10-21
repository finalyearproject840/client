import React from "react";
import CardItem from "../../Components/CardItem/CardItem";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaUsers, FaPrescriptionBottleAlt } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { StyleSubtitle, StyleTitle } from "../../../Styles";
import { colors, fonts, fontSize } from "../../../DefaultValues";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineNotificationsNone } from "react-icons/md";
{
  /* the card section as the first section of the dashboard */
}
const CardSection = () => {
  const appStore = useSelector((state) => state.SupplierState);
  const { products, notifications, subscribers } = appStore;

  return (
    <section className="card-section my-3" id="card-section">
      <div className="container">
        <div className="row">
          {/* Card item */}
          <CardItem className="col-sm-6 col-lg-4">
            <Link to="/supplier/all/subscribers">
              <div className="card-container">
                <div className="icon-box">
                  <FaUsers color={colors.white} size={25} />
                </div>
                <div className="text-container">
                  <StyleTitle size={fontSize.n} color={colors.violet}>
                    {subscribers.data.length}
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
          <CardItem className="col-sm-6 col-lg-4" color={colors.red}>
            <Link to="/supplier/products">
              <div className="card-container">
                <div className="icon-box">
                  <FaPrescriptionBottleAlt color={colors.white} size={25} />
                </div>
                <div className="text-container">
                  <StyleTitle size={fontSize.n} color={colors.red}>
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
            <CardItem className="col-sm-6 col-lg-4" color={colors.gold}>
            <Link to="/supplier/all/notifications">
              <div className="card-container">
                <div className="icon-box">
                  <MdOutlineNotificationsNone color={colors.white} size={25} />
                </div>
                <div className="text-container">
                  <StyleTitle size={fontSize.n} color={colors.gold}>
                    {notifications.data.length}
                  </StyleTitle>
                  <StyleSubtitle
                    size={fontSize.sm}
                    className="text-uppercase"
                    font={fonts.righteous}
                    color={colors.muted}
                  >
                  Notifications
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
