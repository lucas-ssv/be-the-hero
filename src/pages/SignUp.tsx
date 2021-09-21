import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../components/Input";
import logo from "../assets/logo.svg";
import "../styles/common.scss";
import "../styles/box.scss";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <section className="container">
      <main className="content">
        <div className="box">
          <div className="info">
            <img src={logo} alt="bethehero" />
            <p>Cadastro</p>
            <span>
              Faça seu cadastro, entre na plataforma e ajude pessoas a
              encontrarem os casos da sua ONG.
            </span>
          </div>
          <form>
            <Input type="text" placeholder="Nome da ONG" />
            <Input type="email" placeholder="E-mail" />
            <Input type="text" placeholder="WhatsApp" />
            <div>
              <Input type="text" placeholder="Cidade" />
              <Input type="text" placeholder="UF" />
            </div>

            <Button type="submit">Cadastrar</Button>
          </form>

          <Link to="/">
            <FiArrowLeft size={25} color="#e02041" />
            Voltar para o logon
          </Link>
        </div>
      </main>
    </section>
  );
}
