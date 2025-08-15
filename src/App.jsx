// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Login from "./pages/login.jsx"
import Signin from "./pages/signin.jsx"
import About from "./pages/About-us.jsx"
import User from "./pages/user.jsx"
 import Contact from "./pages/Contact.jsx"
 import Resume from "./pages/resume.jsx"
 import Courses from "./pages/Courses.jsx"
import Project from "./pages/project.jsx"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        
        <Route path="*"element={<h1>error 404 page not found</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
