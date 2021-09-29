import { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../components/Input";
import logo from "../assets/logo.svg";
import "../styles/common.scss";
import "../styles/box.scss";
import "../styles/create.scss";
import { Button } from "../components/Button";
import { Textarea } from "../components/Textarea";
import { AuthContext } from "../contexts/AuthContext";
import { CaseContext } from "../contexts/CaseContext";

export function Create() {
  const { organization } = useContext(AuthContext);
  const { handleCreateCase } = useContext(CaseContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function handleCreate(event: FormEvent) {
    event.preventDefault();

    const caseData = {
      title,
      description,
      price,
      organization_id: organization.id,
    };

    await handleCreateCase(caseData);

    setTitle("");
    setDescription("");
    setPrice("");
  }

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
          <form onSubmit={handleCreate}>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título do caso"
            />
            <Textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descrição"
              rows={6}
            />
            <Input
              type="text"
              name="value"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Valor em reais"
            />

            <div className="eventButtons">
              <button type="button">Cancelar</button>
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
