import { useState } from "react";
import projects from "./projects"; 
import Dropdown from "./Dropdown"; 
import Navbar from "./../components/navbar.jsx";
import Button from "./Button";

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Navbar />
      <div className="p-6">
        
        <Dropdown value={selectedCategory} onChange={setSelectedCategory} />

           {/* Project Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition duration-300 flex flex-col"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {project.projectName}
            </h2>
            <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full self-start mb-3">
              {project.category}
            </span>
            <p className="text-gray-600 flex-grow">{project.description}</p>
            <div className="mt-4 space-y-2">
              {project.resources.map((link, linkIndex) => (
                <Button
                  key={linkIndex}
                  name={`Resource ${linkIndex + 1}`}
                  onClick={() => window.open(link, "_blank")}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
    </>
  );
};

export default Project;
