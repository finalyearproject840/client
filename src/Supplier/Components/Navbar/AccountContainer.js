import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fonts, fontSize, spacing } from "../../../DefaultValues";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { HiOutlineCog } from "react-icons/hi";
import { AiTwotoneHeart } from "react-icons/ai";
import { MdLiveHelp } from "react-icons/md";

const AccountContainer = (props) => {
  return (
    <StyledAccountContainer className="account-container" show={props.show}>
      <ul className="account-list">
        <li className="account-list-item">
          <Link
            to="#"
            className="account-list-link"
            onClick={() => props.setShow()}
          >
            <CgProfile className="icon" />
            <span className="link-text">Profile</span>
          </Link>
        </li>
        <li className="account-list-item">
          <Link
            to="#"
            className="account-list-link"
            onClick={() => props.setShow()}
          >
            <HiOutlineCog className="icon" />
            <span className="link-text">Settings</span>
          </Link>
        </li>
        <li className="account-list-item">
          <Link
            to="#"
            className="account-list-link"
            onClick={() => props.setShow()}
          >
            <AiTwotoneHeart className="icon" />
            <span className="link-text">Subscribers</span>
          </Link>
        </li>
        <li className="account-list-item">
          <Link
            to="#"
            className="account-list-link"
            onClick={() => props.setShow()}
          >
            <MdLiveHelp className="icon" />
            <span className="link-text">Help</span>
          </Link>
        </li>
        <hr />
        <li className="account-list-item">
          <Link
            to="#"
            className="account-list-link"
            onClick={() => props.setShow()}
          >
            <CgLogOut className="icon" />
            <span className="link-text">Logout</span>
          </Link>
        </li>
      </ul>
    </StyledAccountContainer>
  );
};

const StyledAccountContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  height: 210px;
  width: 150px;
  position: absolute;
  top: 45px;
  right: 10px;
  background-color: #fff;
  z-index: 100;
  border-radius: 5px;
  /* check and hide notification container */
  transform: ${(props) => (props.show ? "scale(1)" : "scale(0)")};
  transition: all 0.2s ease-in-out;
  transform-origin: top;

  .account-list {
    list-style: none;
    padding: ${spacing.n};
    margin: 0;
  }
  .account-list-item {
    margin-bottom: 1rem;
  }
  .account-list-link {
    display: flex;
    align-items: center;
    color: ${colors.muted};
    font-size: ${fontSize.sm};
    letter-spacing: 1px;
    font-family: ${fonts.roboto};
  }
  .account-list-link:hover {
    color: ${colors.voilet};
  }
  .account-list-link span {
    margin-left: 1rem;
  }
  .icon {
    font-size: 1.2rem;
  }
`;
export default AccountContainer;
