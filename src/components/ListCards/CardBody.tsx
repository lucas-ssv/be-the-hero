import { ReactNode } from "react";
import "../../styles/cardGrid.scss";

interface CardBodyProps {
  children: ReactNode;
}

export function CardBody({ children }: CardBodyProps) {
  return <section className="cardGrid">{children}</section>;
}
