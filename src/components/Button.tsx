import { ButtonHTMLAttributes, ReactNode } from "react";
import "../styles/button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}
