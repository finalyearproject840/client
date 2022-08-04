import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../Shared/Components/Button";
import StyledMenu, { StyledList, StyledMenuCloser } from "./MenuStyles";
import { colors, } from "../../../DefaultValues";
import MenuListItem from "./MenuListItem";
import { BsPatchPlusFill, BsTruck, BsBasket } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import {
  IoMdNotificationsOutline,
  IoMdHelpCircle,
  IoMdSettings,
} from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { GiMedicines } from "react-icons/gi";
import { FaUsers, FaEdit } from "react-icons/fa";
import {useDispatch} from "react-redux";
import { logoutAdminFunc } from "../../../Redux/Admin/AdminActions";

const MenuBar = () => {

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleLogout = (e) => {
    dispatch(logoutAdminFunc());
    Navigate("/admin/login");
  };

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
              to="/admin/dashboard/"
              id="upload-drug-link"
              className="d-flex text-light justify-content-between"
            >
              <span>Dashboard</span>
              <BsPatchPlusFill size={24} />
            </Link>
          </Button>
        </div>
        {/*menu bar list */}
        <div className="menu-list-container">
          <StyledList className="menu-list">
            <MenuListItem text="Medicines" Link="/admin/all/products" icon={<GiMedicines size={23} />} />
            <MenuListItem text="Suppliers" Link="/admin/all/suppliers" icon={<FaUsers size={23} />} />
            <MenuListItem text="Users" icon={<FaUsers size={23} />} />
            <MenuListItem text="Manage Orders" icon={<BsBasket size={23} />} />
            <MenuListItem text="Delieveries" icon={<BsTruck size={23} />} />
            <MenuListItem
              Link="/admin/all/notifications"
              text="Notifications"
              icon={<IoMdNotificationsOutline size={23} />}
            />
            <MenuListItem text="Edit Profile" icon={<FaEdit size={23} />} />
            <MenuListItem
              text="Requesteds Help"
              icon={<IoMdHelpCircle size={23} />}
            />
            <MenuListItem text="Settings" icon={<IoMdSettings size={23} />} />
            <MenuListItem text="Logout" onClick={handleLogout} icon={<IoLogOutOutline size={23} />} />
          </StyledList>
        </div>
      </div>

      {/* menu hider */}
      <StyledMenuCloser onClick={() => setShow(!show)} show={show}>
        {show ? (
          <AiOutlineClose size={24} color={colors.voilet} />
        ) : (
          <RiMenuUnfoldLine size={24} color={colors.white} />
        )}
      </StyledMenuCloser>
    </StyledMenu>
  );
};

export default MenuBar;
