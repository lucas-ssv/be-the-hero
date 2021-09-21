import { InputHTMLAttributes } from "react";
import "../styles/input.scss";

export function Input({
  type,
  name,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input type={type} name={name} {...rest} />;
}
