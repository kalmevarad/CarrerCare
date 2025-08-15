import { useEffect, useState } from "react";
import "./signin.css";
import Button from "./../components/button.jsx";
import { Link } from "react-router-dom";
import { TableColumnsSplitIcon, User } from "lucide-react";
import Navbar from "./../components/navbar.jsx";
import toast, { Toaster } from "react-hot-toast";
const signin = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const { name, password, confirmPassword } = data;
  //used for retirving the data if exist in lcoal storage
  useEffect(() => {
    const saveddata = JSON.parse(localStorage.getItem("userdata") || "null");
    if (saveddata) {
      setData(saveddata);
    }
  }, []);
  //for the checking the condition on live
  useEffect(() => {
    console.log("live condition checked");
  }, [data.name, data.password, data.confirmPassword]);

  const saveData = () => {
    if (!data.name) return toast.error("name not be empty");
    if (!data.password) return toast.error("password not be empty");
    if (!data.confirmPassword)
      return toast.error("confirm password not be empty");
    if (data.password !== data.confirmPassword)
      return toast.error("password not match");

    localStorage.setItem("userdata", JSON.stringify(data));
    toast.success("account created");
   setData({ name: "", password: "", confirmPassword: "" });
   window.location.replace("/login");
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
              magnam velit corporis veniam eum ipsum quo excepturi pariatur
              cumque saepe. Quia qui veniam nostrum dignissimos tempore
              molestias, earum cumque ratione.
            </h2>
            <Link to="/login">
              <Button name="Log In" />
            </Link>
          </div>
          <div className="login-form">
            <form>
              <h2 className="login-heading">Sign In</h2>
              <div className="inputs">
                <User />
                <input
                  type="text"
                  placeholder="enter a username"
                  name="username"
                  value={name}
                  onChange={(e) => {
                    setData({ ...data, name: e.target.value });
                  }}
                />
              </div>
              <div className="inputs">
                <User />
                <input
                  type="password"
                  placeholder="enter a password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setData({ ...data, password: e.target.value });
                  }}
                />
              </div>
              <div className="inputs">
                <User />
                <input
                  type="password"
                  placeholder="Confirm Passeowd"
                  name="confirm password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setData({ ...data, confirmPassword: e.target.value });
                  }}
                />
              </div>
            </form>
            <Button name="Sign In" onClick={saveData} type="button" />
          </div>
        </div>
      </div>
     {/* <Link to="/contact">Contact</Link> */}
      <Toaster />
    </div>
  );
};

export default signin;
