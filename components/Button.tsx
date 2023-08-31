"use client";
import { ButtonProps } from "types";

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button type="button" className="custom-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
