import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Shared/Components/Button";
import StyledMenu, { StyledList, StyledMenuCloser } from "./MenuStyles";
import { colors } from "../../../DefaultValues";
import MenuListItem from "./MenuListItem";
import { BsPatchPlusFill} from "react-icons/bs";
import { BiCategory, BiHome, BiUserCircle, BiStore } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import {
  IoMdNotificationsOutline,
  IoMdHelpCircle,
  IoMdSettings,
} from "react-icons/io";

import { RiMenuUnfoldLine } from "react-icons/ri";
import { GiMedicines } from "react-icons/gi";
import { FaUsers, FaEdit, FaPrescriptionBottleAlt } from "react-icons/fa";
import {HiViewGridAdd} from "react-icons/hi"

const MenuBar = (props) => {
  const [show, setShow] = useState(true);
  return (
    <StyledMenu show={show}>
      {/* Menu log area */}
      <div className="top-bar">
        <h3 className="site-logo">Pharmacy</h3>
      </div>

      {/* menu container */}
      <div className="menu-container">
        <div>
          {/* drug upload button */}
          <Button display="block" width="100%">
            <Link
              to="#"
              id="upload-drug-link"
              className="d-flex text-light justify-content-between"
            >
              <span>Admin Panel</span>
              <BsPatchPlusFill size={24} />
            </Link>
          </Button>
        </div>
        {/*menu bar list */}
        <div className="menu-list-container">
          <StyledList className="menu-list">
            <MenuListItem
              text="Dashboard"
              Link="/admin/dashboard/"
              icon={<BiHome size={23} />}
              active={
                props.active
                  ? props.active === "dashboard"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Medicine"
              Link="/admin/all/products"
              icon={<GiMedicines size={23} />}
              active={
                props.active
                  ? props.active === "medicine"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Suppliers"
              Link="/admin/all/suppliers"
              icon={<BiStore size={23} />}
              active={
                props.active
                  ? props.active === "suppliers"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
             <MenuListItem
              text="Users"
              Link="/admin/all/users"
              icon={<FaUsers size={23} />}
              active={
                props.active
                  ? props.active === "users"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Notifications"
              Link="/admin/all/notifications/"
              icon={<IoMdNotificationsOutline size={23} />}
              active={
                props.active
                  ? props.active === "notifications"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Prescriptions"
              Link="/admin/all/prescription/"
              icon={<FaPrescriptionBottleAlt size={23} />}
              active={
                props.active
                  ? props.active === "prescriptions"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
             <MenuListItem
              text="Profile"
              Link="/admin/profile"
              icon={<BiUserCircle size={23} />}
              active={
                props.active
                  ? props.active === "profile"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Edit Profile"
              Link="/admin/edit/profile"
              icon={<FaEdit size={23} />}
              active={
                props.active
                  ? props.active === "editprofile"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Category"
              icon={<BiCategory size={23} />}
              Link="/admin/all/categories"
              active={
                props.active
                  ? props.active === "category"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Add Category"
              icon={<HiViewGridAdd size={23} />}
              Link="/admin/add/category"
              active={
                props.active
                  ? props.active === "add-category"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Requested Help"
              Link="/admin/requested/help"
              icon={<IoMdHelpCircle size={23} />}
              active={
                props.active
                  ? props.active === "help"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            <MenuListItem
              text="Settings"
              icon={<IoMdSettings size={23} />}
              active={
                props.active
                  ? props.active === "settings"
                    ? "true"
                    : "false"
                  : "false"
              }
            />
            
          </StyledList>
        </div>
      </div>

      {/* menu hider */}
      <StyledMenuCloser onClick={() => setShow(!show)} show={show}>
        {show ? (
          <AiOutlineClose size={24} color={colors.violet} />
        ) : (
          <RiMenuUnfoldLine size={24} color={colors.white} />
        )}
      </StyledMenuCloser>
    </StyledMenu>
  );
};

export default MenuBar;
