import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape, label, onClick }) => {
  const buttonStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };
  return (
    <button
      className={`bg-blue-500 text-white ${buttonStyles[size]} ${shape} hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
