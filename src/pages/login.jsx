import React, { useEffect, useState } from "react";
import Navbar from "./../components/navbar.jsx";
import { User } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Button from "./../components/button.jsx";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="flex justify-center items-center min-h-[90vh] px-4">
        <div className="bg-gray-800 rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">

          {/* Left Side */}
          <div className="md:w-1/2 bg-gray-900 p-10 flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold text-cyan-400">Welcome</h1>

            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              magnam velit corporis veniam eum ipsum quo excepturi pariatur.
            </p>

            <Link to="/signin">
              <Button name="Sign In" />
            </Link>
          </div>

          {/* Right Side (Login Form) */}
          <div className="md:w-1/2 p-10 bg-gray-800 flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-semibold text-cyan-300 text-center">
              Log In
            </h2>

            {/* Username */}
            <div className="flex items-center gap-3 bg-gray-900 rounded-lg px-4 py-3 ring-1 ring-gray-700 focus-within:ring-2 focus-within:ring-cyan-400">
              <User className="text-cyan-300" />
              <input
                type="text"
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
                className="bg-transparent outline-none text-white w-full"
              />
            </div>

            {/* Password */}
            <div className="flex items-center gap-3 bg-gray-900 rounded-lg px-4 py-3 ring-1 ring-gray-700 focus-within:ring-2 focus-within:ring-cyan-400">
              <User className="text-cyan-300" />
              <input
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent outline-none text-white w-full"
              />
            </div>

            <Button name="Log In" onClick={handlelogin} />

            <div className="text-center text-gray-400 text-sm">
              <Link to="/contact" className="hover:text-cyan-300">Contact Support?</Link>
            </div>
          </div>

        </div>
      </div>

      <Toaster position="top-center" />
    </div>
  );
};

export default Login;
