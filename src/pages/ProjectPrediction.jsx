import { useState } from "react";

export default function PlacementPrediction() {
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    cgpa: "",
    skills: 0,
    internship: "no",
    projects: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const calculateScore = () => {
    let s = 0;

    // CGPA 
    if (form.cgpa >= 9) s += 30;
    else if (form.cgpa >= 8) s += 25;
    else if (form.cgpa >= 7) s += 20;
    else s += 10;

    // Skills
    s += form.skills * 5;

    // Internship
    if (form.internship === "yes") s += 20;

    // Projects
    s += form.projects * 5;

    setScore(s > 100 ? 100 : s);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-purple-400 mb-6">
          Placement Prediction
        </h1>
        {!submitted ? (
          <div className="space-y-6">
            
            <div>
              <label className="block text-gray-300 mb-2">CGPA</label>
              <input
                type="number"
                name="cgpa"
                value={form.cgpa}
                onChange={handleChange}
                step="0.1"
                min="0"
                max="10"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-400"
              />
            </div>

            
            <div>
              <label className="block text-gray-300 mb-2">
                Number of Technical Skills
              </label>
              <input
                type="number"
                name="skills"
                value={form.skills}
                onChange={handleChange}
                min="0"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-400"
              />
            </div>

            
            <div>
              <label className="block text-gray-300 mb-2">
                Internship Completed?
              </label>
              <select
                name="internship"
                value={form.internship}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-400"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            
            <div>
              <label className="block text-gray-300 mb-2">
                Number of Completed Projects
              </label>
              <input
                type="number"
                name="projects"
                value={form.projects}
                onChange={handleChange}
                min="0"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-400"
              />
            </div>

            <button
              onClick={calculateScore}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Predict Placement Chance
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Your Placement Prediction</h2>
            <p className="text-lg mb-6">
              You have a <span className="text-purple-400">{score}%</span> chance of
              getting placed.
            </p>
            <div className="w-full bg-gray-700 rounded-full h-4 mb-6">
              <div
                className="bg-purple-500 h-4 rounded-full"
                style={{ width: `${score}%` }}
              ></div>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
