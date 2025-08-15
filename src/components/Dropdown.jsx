import React from 'react';

function Dropdown({ value, onChange }) {
  const domain = [
    { value: "All" },
    { value: "Web Development" },
    { value: "Android Development" },
    { value: "AI" },
    { value: "ML" },
    { value: "IoT" },
    { value: "Data Science" },
    { value: "Java Development" }
  ];

  return (
    <div className="flex items-center justify-center">
      <select
        className="bg-white border border-gray-300 text-gray-900 text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-4"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {domain.map((d, index) => (
          <option key={index} value={d.value}>
            {d.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
