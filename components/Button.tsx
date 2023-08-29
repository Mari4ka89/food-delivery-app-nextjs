"use client";
import { ButtonProps } from "types";

const Button = ({ title, containerStyles, handleClick }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
