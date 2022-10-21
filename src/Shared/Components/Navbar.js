import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fonts, fontSize } from "../../DefaultValues";

const Navbar = () => {
    return (
        <StyledNavbar className="navbar navbar-expand-lg navbar-dark bg-gradient sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="#">
                    Pharmacy
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="#">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                Contact us
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Account
                            </Link>
                            <ul className="dropdown-menu p-0" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/supplier/create">
                                        Become a supplier
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/supplier/login">
                                        Supplier Login
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/admin/login">
                                        Admin Login
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledNavbar>
    );
};

const StyledNavbar = styled.nav`
background-color: ${colors.violet};

.navbar-brand{
    letter-spacing: 2px;
    font-family: ${fonts.righteous};

}
.nav-link, .dropdown-item{
    letter-spacing: 2px;
    font-size: ${fontSize.sm};
    font-family: ${fonts.roboto};
    color:${colors.light}
}
.dropdown-item {
    padding:0.8rem 1rem;
}
.dropdown-item:hover{
    background-color: transparent;
    background-color: ${colors.violet};
}
.dropdown-menu{
    background-color: ${colors.violet};
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;

}
`;

export default Navbar;
