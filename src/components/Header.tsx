import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";
import logo from "../assets/logo.svg";
import "../styles/header.scss";
import "../styles/common.scss";

export function Header() {
  return (
    <header>
      <div className="info">
        <img src={logo} alt="bethehero" />
        <span>Bem vindo, Lucas</span>
      </div>
      <div>
        <Link to="/create" className="newCase">
          Cadastrar novo caso
        </Link>
        <button className="power">
          <FiPower size={24} color="#e02041" />
        </button>
      </div>
    </header>
  );
}
