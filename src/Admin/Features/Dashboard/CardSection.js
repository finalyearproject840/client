import React from "react";
import CardItem from "../../Components/CardItem/CardItem";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaUsers, FaPrescriptionBottleAlt } from "react-icons/fa";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { StyleSubtitle, StyleTitle } from "../../../Styles";
import { colors, fonts, fontSize } from "../../../DefaultValues";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {BsGift} from "react-icons/bs"
const CardSection = () => {
  const appStore = useSelector((state) => state.AdminState);
  const { suppliers, products, users, prescriptions, notifications, orders } =
    appStore;
  return (
    <section className="card-section my-3" id="card-section">
      <div className="container">
        <div className="row">
          {/* Card item */}
          {/* Card item */}
          <CardItem className="col-sm-6 col-lg-3" color={colors.ligthBlue}>
            <Link to="/admin/all/orders">
              <div className="card-container">
                <div className="icon-box">
                  <BsGift color={colors.white} size={25} />
                </div>
                <div className="text-container">
                  <StyleTitle size={fontSize.n} color={colors.ligthBlue}>
                    {orders.data.length}
                  </StyleTitle>
                  <StyleSubtitle
                    size={fontSize.sm}
                    className="text-uppercase"
                    font={fonts.righteous}
                    color={colors.muted}
                  >
                    Orders
                  </StyleSubtitle>
                </div>
              </div>
            </Link>
          </CardItem>
          <CardItem className="col-sm-6 col-lg-3">
            <Link to="/admin/all/suppliers">
              <div className="card-container">
                <div className="icon-box">
                  <FaUsers color={colors.white} size={25} />
                </div>
                <div className="text-container">
                  <StyleTitle size={fontSize.n} color={colors.violet}>
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
                    {users.length}
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
          <CardItem className="col-sm-6 col-lg-3" color={colors.red}>
            <Link to="/admin/all/prescription">
              <div className="card-container">
                <div className="icon-box">
                  <FaPrescriptionBottleAlt color={colors.white} size={25} />
                </div>
                <div className="text-container">
                  <StyleTitle size={fontSize.n} color={colors.red}>
                    {prescriptions.data.length}
                  </StyleTitle>
                  <StyleSubtitle
                    size={fontSize.sm}
                    className="text-uppercase"
                    font={fonts.righteous}
                    color={colors.muted}
                  >
                    Prescriptions
                  </StyleSubtitle>
                </div>
              </div>
            </Link>
          </CardItem>
          {/* Card item */}
          <CardItem className="col-sm-6 col-lg-3" color={colors.gold}>
            <Link to="/admin/all/notifications">
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
