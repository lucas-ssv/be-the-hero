import { InputHTMLAttributes } from "react";
import "../styles/input.scss";

export function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...rest} />;
}
