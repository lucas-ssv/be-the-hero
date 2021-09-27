import { useContext } from "react";
import { ListCards } from "../components/ListCards";
import { Header } from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/common.scss";

export function List() {
  const { organization } = useContext(AuthContext);

  console.log(organization);

  return (
    <div className="container">
      <Header />
      <h1>Casos cadastrados</h1>

      <ListCards />
    </div>
  );
}
