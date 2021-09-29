import { useContext } from "react";
import { ListCards } from "../components/ListCards";
import { Header } from "../components/Header";
import "../styles/common.scss";
import { CaseContext } from "../contexts/CaseContext";

export function List() {
  const { items } = useContext(CaseContext);

  return (
    <div className="container">
      <Header />
      <h1>Casos cadastrados</h1>

      <ListCards items={items} />
    </div>
  );
}
