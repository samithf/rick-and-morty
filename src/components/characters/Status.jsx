import React from "react";

const Status = ({ status }) => {
  const getStatus = (status) => {
    switch (status) {
      case "Alive":
        return "bg-green-500";
      case "Dead":
        return "bg-red-500";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <span
      className={`mr-1 h-[10px] w-[10px] rounded-full inline-block ${getStatus(
        status
      )}`}
    ></span>
  );
};

export default Status;
