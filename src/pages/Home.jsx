import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import { Link } from "react-router"; 
const Home = ()=>
{


    const features = [
  {
    title: "Placement Predictor",
    description:
      "Get a predicted placement chance by answering a short quiz. See your probability and visual data in charts.",
    image:
      "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
  },
  {
    title: "Course Resources",
    description:
      "Choose your preferred domain and get curated learning materials. Filter between free and paid resources.",
    image:
      "https://cdn-icons-png.flaticon.com/512/1087/1087923.png",
  },
  {
    title: "Project Resources",
    description:
      "Find mini and major project ideas with related resources based on your selected domain or skill.",
    image:
      "https://cdn-icons-png.flaticon.com/512/3304/3304566.png",
  },
  {
    title: "Resume Builder",
    description:
      "Generate professional resumes with pre-defined templates tailored for students and job-seekers.",
    image:
      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
];

    return (
      <div className="bg-black text-white font-sans">
      <Navbar />
      {/* Hero */}
      <div
        className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581093588401-4bff6a455c91?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-80 p-10 rounded-xl max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Plan Better. Learn Smarter. Get Placed.
          </h1>
          <p className="text-lg font-light text-gray-300">
            One platform for placements, projects, resources, and resumes — designed for your career growth.
          </p>
        </div>
      </div>

      {/* Skills / Features */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center space-y-4"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-20 h-20 object-contain"
              />
              <h2 className="text-xl font-bold text-white">{feature.title}</h2>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Builder */}
      <section className="bg-[#f9fafb] text-black py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-10 lg:mb-0 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build Your Resume <br /> with AI Assistance
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Create job-ready resumes with smart templates tailored for freshers and experienced professionals.
            </p>
            <Link to="/resume">
              <button className="bg-white border border-purple-600 text-purple-700 hover:bg-purple-50 px-5 py-2 rounded-lg font-semibold shadow-sm">
                Start Building →
              </button>
            </Link>
          </div>
          <div className="relative flex items-center justify-center h-[340px] w-full lg:w-[600px]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
              alt="Resume"
              className="rounded-2xl shadow-md object-contain h-full"
            />
          </div>
        </div>
      </section>

      {/* Course Resources */}
      <section className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Explore Course Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features
              .filter((f) => f.title === "Course Resources" || f.title === "Project Resources")
              .map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-40 object-contain bg-white p-4 rounded-t-xl"
                  />
                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                    <Link to={feature.title === "Course Resources" ? "/courses" : "/project"}>
                      <button className="text-purple-400 hover:underline text-sm">
                        Explore {feature.title}
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Placement Predictor Case Study */}
      <section className="bg-[#f7f7fb] py-16 px-6 md:px-16">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="max-w-xl">
            <h4 className="text-lg text-gray-700 font-medium mb-2">
              Smart Career Tools
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              See Your Placement Possibility with Confidence
            </h2>
            <div className="flex gap-12 mb-6">
              <div>
                <p className="text-3xl font-bold text-gray-900">90%</p>
                <p className="text-gray-600 text-sm mt-1">
                  accurate predictions using ML model
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">5 mins</p>
                <p className="text-gray-600 text-sm mt-1">
                  to complete personalized placement quiz
                </p>
              </div>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2 rounded-lg">
              Try Predictor →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4834/4834559.png"
              alt="Placement Predictor"
              className="w-full h-auto rounded-lg shadow-md"
            />

          </div>
        </div>
        
      </section>
       <Footer/>
    
    </div>
    );
}
export default Home;