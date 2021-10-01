import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import "../styles/button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function ButtonComponent({ children }: ButtonProps) {
  return <button>{children}</button>;
}

export const Button = memo(ButtonComponent);
