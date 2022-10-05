import React from "react";

const Button = (props) => {
  return (
    <button
      {...props}
      className="bg-cyan-600 px-10 py-2 text-gray-200 disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed"
    >
      {props.children}
    </button>
  );
};

export default Button;
