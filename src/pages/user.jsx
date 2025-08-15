import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./../components/navbar.jsx";
import { Link } from "react-router-dom";
import "./user.css";
import Button from "../components/button.jsx";
import DefaultUser from "../assets/img/user.png";
import { ImageUp } from "lucide-react";

const User = () => {
  const [user, setUser] = useState({});
  const [userImg, setUserImg] = useState("");
  //retriving the data if exist
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userdata"));
    setUser(data);

    const storedImg = localStorage.getItem("userImage");
    if (storedImg) {
      setUserImg(storedImg);
    }
  }, []);
const handleLOgOUt = ()=>
{
 localStorage.removeItem("userdata");
 localStorage.removeItem("userImage");
window.location.replace("/");

}
  const { name } = user || {};

  return (
    <div>
      <Navbar />
      <div className="user-container">
        <div className="userData">
          <div
            className="userImage"
            style={{ backgroundImage: `URL(${userImg || DefaultUser})` }}
          ></div>
          <div className="upladImg">
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    const base64String = reader.result;
                    setUserImg(base64String);
                    localStorage.setItem("userImage", base64String); 
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            <ImageUp size={30} />
          </div>
          <h1>hello , {name}</h1>
        </div>
        <div className="user-Suggessions">
          <Link to="/contact">
            <Button name="Contact" />
          </Link>
          <Link to="/resume">
            <Button name="Resume" />
          </Link>
        </div>
      <button className="log-out" type="button" onClick={handleLOgOUt}>Log Out</button>
      </div>
    </div>
  );
};

export default User;
