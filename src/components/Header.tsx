import { Link } from "react-router-dom";
import { memo, useContext } from "react";
import { FiPower } from "react-icons/fi";
import logo from "../assets/logo.svg";
import "../styles/header.scss";
import "../styles/common.scss";
import { AuthContext } from "../contexts/AuthContext";

function HeaderComponent() {
  const { organization, signOut } = useContext(AuthContext);

  return (
    <header>
      <div className="info">
        <img src={logo} alt="bethehero" />
        <span>Bem vindo, {organization.name}</span>
      </div>
      <div>
        <Link to="/create" className="newCase">
          Cadastrar novo caso
        </Link>
        <button className="power" onClick={signOut}>
          <FiPower size={24} color="#e02041" />
        </button>
      </div>
    </header>
  );
}

export const Header = memo(HeaderComponent);
