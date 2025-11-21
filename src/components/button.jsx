import React from "react";
const button = ({ name, onClick }) => {
  return (
    <div>
      <button
        className=" hover:bg-cyan-600 cursor-pointer inline-block bg-gray-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm self-end"
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default button;
