import { useEffect, useState } from "react";
import Button from "./../components/button.jsx";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import Navbar from "./../components/navbar.jsx";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });

  const { name, password, confirmPassword } = data;

  // Load saved data if present
  useEffect(() => {
    const saveddata = JSON.parse(localStorage.getItem("userdata") || "null");
    if (saveddata) {
      setData(saveddata);
    }
  }, []);

  // Live conditions
  useEffect(() => {
    console.log("live condition checked");
  }, [data.name, data.password, data.confirmPassword]);

  const saveData = () => {
    if (!data.name) return toast.error("Name cannot be empty");
    if (!data.password) return toast.error("Password cannot be empty");
    if (!data.confirmPassword)
      return toast.error("Confirm password cannot be empty");
    if (data.password !== data.confirmPassword)
      return toast.error("Passwords do not match");

    localStorage.setItem("userdata", JSON.stringify(data));
    toast.success("Account created successfully!");

    setData({ name: "", password: "", confirmPassword: "" });

    window.location.replace("/login");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="flex justify-center items-center min-h-[90vh] px-4">
        <div className="bg-gray-800 rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">

          {/* -------- LEFT PANEL -------- */}
          <div className="md:w-1/2 bg-gray-900 p-10 flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold text-cyan-400">Welcome</h1>

            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              magnam velit corporis veniam eum ipsum quo excepturi pariatur
              cumque saepe.
            </p>

            <Link to="/login">
              <Button name="Log In" />
            </Link>
          </div>

          {/* -------- RIGHT PANEL (FORM) -------- */}
          <div className="md:w-1/2 p-10 bg-gray-800 flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-semibold text-cyan-300 text-center">
              Sign In
            </h2>

            {/* Username */}
            <div className="flex items-center gap-3 bg-gray-900 rounded-lg px-4 py-3 ring-1 ring-gray-700 focus-within:ring-2 focus-within:ring-cyan-400">
              <User className="text-cyan-300" />
              <input
                type="text"
                placeholder="Enter a username"
                value={name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="bg-transparent outline-none text-white w-full"
              />
            </div>

            {/* Password */}
            <div className="flex items-center gap-3 bg-gray-900 rounded-lg px-4 py-3 ring-1 ring-gray-700 focus-within:ring-2 focus-within:ring-cyan-400">
              <User className="text-cyan-300" />
              <input
                type="password"
                placeholder="Enter a password"
                value={password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="bg-transparent outline-none text-white w-full"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex items-center gap-3 bg-gray-900 rounded-lg px-4 py-3 ring-1 ring-gray-700 focus-within:ring-2 focus-within:ring-cyan-400">
              <User className="text-cyan-300" />
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) =>
                  setData({ ...data, confirmPassword: e.target.value })
                }
                className="bg-transparent outline-none text-white w-full"
              />
            </div>

            <Button name="Sign In" onClick={saveData} type="button" />

            <div className="text-center text-gray-400 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-cyan-300 hover:text-white">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Toaster position="top-center" />
    </div>
  );
};

export default SignIn;
