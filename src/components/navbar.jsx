
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import defaultuser from "../assets/img/user.png";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [userImg, setUserImg] = useState("");
  const location = useLocation();

  const data = JSON.parse(localStorage.getItem("userdata") || "null");

  useEffect(() => {
    const storedImg = localStorage.getItem("userImage");
    if (storedImg) setUserImg(storedImg);
  });

  return (
    <div className="navbar">
      <h2 className="logo"><img src={logo} alt="Logo" className="h-14" /></h2>
      <div className="navbar-content">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : "navbar-item"}
        >
          Home
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : "navbar-item"}
        >
          Contact
        </Link>
        <Link
          to="/courses"
          className={
            location.pathname === "/courses" ? "active" : "navbar-item"
          }
        >
          Courses
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : "navbar-item"}
        >
          About
        </Link>
        <Link
          to={data ? "/user" : "/login"}
          className={
            location.pathname === (data ? "/user" : "/login")
              ? "active"
              : "navbar-item"
          }
        >
          <div className="navbar-user-info">
            {(userImg && (
              <img src={userImg} alt=" actual User" className="nav-user-img" />
            )) || <img src={defaultuser} alt="default User" className="nav-user-img" />}
            {data ? data.name : "Login"}
          </div>
        </Link>
      </div>
    </div>
  );
};


export default Navbar;

