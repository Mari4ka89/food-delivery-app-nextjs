import { ButtonHTMLAttributes } from "react";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button type="button" className="custom-btn" {...props} />
);

export default Button;
