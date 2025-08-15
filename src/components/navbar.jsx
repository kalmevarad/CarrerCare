import React from 'react'
import { Link, useLocation } from "react-router-dom"
import "./navbar.css"

const navbar = () => {
  const location = useLocation();

  //retriving the data from local stroage if exist
  const data = JSON.parse(localStorage.getItem("userdata") || "null");

  return (
    <div style={{
      backgroundColor: "#000", 
      padding: "10px 20px",
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between",
      color: "#fff",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      boxShadow: "0 2px 5px rgba(255,255,255,0.1)"
    }}>
      {/* <h2 style={{ margin: 0, fontWeight: "700", fontSize: "1.8rem" }}> */}
       
      {/* </h2> */}
       <img src="/public/logo.png" className='h-20'></img>
      <div style={{ display: "flex", gap: "25px" }}>
        <Link 
          to="/" 
          className={location.pathname === "/" ? "active" : "navbar-item"}
          style={{
            color: location.pathname === "/" ? "#fff" : "#bbb",
            textDecoration: "none",
            fontWeight: location.pathname === "/" ? "700" : "500",
            borderBottom: location.pathname === "/" ? "2px solid #fff" : "none",
            paddingBottom: "4px",
            transition: "color 0.3s ease"
          }}
        >Home</Link>

        <Link 
          to="/ProjectCards" 
          className={location.pathname === "/carre" ? "active" : "navbar-item"}
          style={{
            color: location.pathname === "/carre" ? "#fff" : "#bbb",
            textDecoration: "none",
            fontWeight: location.pathname === "/carre" ? "700" : "500",
            borderBottom: location.pathname === "/carre" ? "2px solid #fff" : "none",
            paddingBottom: "4px",
            transition: "color 0.3s ease"
          }}
        >Carrer</Link>

        <Link 
          to="/courses" 
          className={location.pathname === "/courses" ? "active" : "navbar-item"}
          style={{
            color: location.pathname === "/courses" ? "#fff" : "#bbb",
            textDecoration: "none",
            fontWeight: location.pathname === "/courses" ? "700" : "500",
            borderBottom: location.pathname === "/courses" ? "2px solid #fff" : "none",
            paddingBottom: "4px",
            transition: "color 0.3s ease"
          }}
        >courses</Link>

        <Link 
          to="/about" 
          className={location.pathname === "/about" ? "active" : "navbar-item"}
          style={{
            color: location.pathname === "/about" ? "#fff" : "#bbb",
            textDecoration: "none",
            fontWeight: location.pathname === "/about" ? "700" : "500",
            borderBottom: location.pathname === "/about" ? "2px solid #fff" : "none",
            paddingBottom: "4px",
            transition: "color 0.3s ease"
          }}
        >about</Link>

        <Link 
          to={data ? "/user" : "/login"} 
          className={location.pathname === "/login" ? "active" : "navbar-item"}
          style={{
            color: location.pathname === "/login" ? "#fff" : "#bbb",
            textDecoration: "none",
            fontWeight: location.pathname === "/login" ? "700" : "500",
            borderBottom: location.pathname === "/login" ? "2px solid #fff" : "none",
            paddingBottom: "4px",
            transition: "color 0.3s ease"
          }}
        >
          {data ? data.name : "Login"}
        </Link>
      </div>
    </div>
  )
}

export default navbar
