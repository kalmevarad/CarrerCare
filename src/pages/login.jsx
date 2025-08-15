import React, { useEffect, useState } from "react";
import Navbar from "./../components/navbar.jsx";
import { User } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Button from "./../components/button.jsx";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [userpassword, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("userdata") || "null");
    setUser(store);
  }, []);

  const handlelogin = () => {
    if (!username || !userpassword) {
      toast.error("Please fill in username and password");
      return;
    }

    if (!user) {
      toast.error("No registered user found");
      return;
    }

    const { name, password } = user;

    if (username !== name || userpassword !== password) {
      toast.error("Invalid username or password");
      return;
    }

    toast.success("Log in successful");
    window.location.replace("/");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="login-container">
          <div className="side-container">
            <h1>Welcome</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              magnam velit corporis veniam eum ipsum quo excepturi pariatur.
            </h2>
            <Link to="/signin">
              <Button name="Sign In" />
            </Link>
          </div>

          <div className="login-form">
            <h2 className="login-heading">Log In</h2>
            <div className="inputs">
              <User />
              <input
                type="text"
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="inputs">
              <User />
              <input
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button name="Log In" onClick={handlelogin} />
          </div>
        </div>
      </div>
      <Link to="/contact">Contact</Link>
      <Toaster />
    </div>
  );
};

export default Login;
