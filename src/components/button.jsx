import React from "react";
const button = ({ name, onClick }) => {
  return (
    <div>
      <button
        className="w-fit min-w-[120px] mx-auto h-[50px] px-[10px] rounded-[50px] text-[16px] border-none text-white font-semibold transition-all duration-300 bg-gradient-to-r from-[rgb(154,73,235)] to-[rgb(237,42,153)] cursor-pointer hover:bg-gradient-to-l hover:text-[18px] hover:shadow-[5px_5px_10px_rgba(0,0,0,0.231)] active:scale-95"
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default button;
