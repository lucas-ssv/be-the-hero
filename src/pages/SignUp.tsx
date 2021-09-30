import { Link, useHistory } from "react-router-dom";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../components/Input";
import logo from "../assets/logo.svg";
import "../styles/common.scss";
import "../styles/box.scss";
import { Button } from "../components/Button";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleCreateOng(event: FormEvent) {
    event.preventDefault();

    const organization = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      await fetch("/api/organizations", {
        method: "POST",
        body: JSON.stringify(organization),
      })
        .then((response) => response.json())
        .then(() => {
          toast.success("Organização cadastrada com sucesso");
          history.push("/");
        });
    } catch {
      toast.error("Ocorreu um erro ao cadastrar!");
    }
  }

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
          <form onSubmit={handleCreateOng}>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome da ONG"
              required
            />
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
            />
            <Input
              type="text"
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="WhatsApp"
            />
            <div>
              <Input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Cidade"
                required
              />
              <Input
                type="text"
                name="uf"
                value={uf}
                onChange={(e) => setUf(e.target.value)}
                placeholder="UF"
                required
              />
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
