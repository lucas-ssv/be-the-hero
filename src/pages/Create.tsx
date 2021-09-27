import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../components/Input";
import logo from "../assets/logo.svg";
import "../styles/common.scss";
import "../styles/box.scss";
import "../styles/create.scss";
import { Button } from "../components/Button";
import { Textarea } from "../components/Textarea";

export function Create() {
  return (
    <section className="container">
      <main className="content">
        <div className="box">
          <div className="info">
            <img src={logo} alt="bethehero" />
            <p>Cadastrar novo caso</p>
            <span>
              Descreva o caso detalhadamente para encontrar um herói para
              resolver isso.
            </span>
          </div>
          <form>
            <Input type="text" placeholder="Título do caso" />
            <Textarea placeholder="Descrição" rows={6} />
            <Input type="text" placeholder="Valor em reais" />

            <div className="eventButtons">
              <Button type="button">Cancelar</Button>
              <Button type="submit">Cadastrar</Button>
            </div>
          </form>

          <Link to="/list">
            <FiArrowLeft size={25} color="#e02041" />
            Voltar para home
          </Link>
        </div>
      </main>
    </section>
  );
}
