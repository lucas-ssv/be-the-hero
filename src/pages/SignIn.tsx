import { FormEvent, useContext, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "../styles/signIn.module.scss";
import logo from "../assets/logo.svg";
import { Banner } from "../components/Banner";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/common.scss";

export function SignIn() {
  const { signIn } = useContext(AuthContext);
  const [organizationId, setOrganizationId] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await signIn(organizationId);
  }

  return (
    <section className="container">
      <main className={styles.gridWrapper}>
        <div className={styles.logon}>
          <img src={logo} alt="bethehero" />
          <p>Faça seu logon</p>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="userId"
              value={organizationId}
              onChange={(e) => setOrganizationId(e.target.value)}
              placeholder="Sua ID"
            />
            <Button type="submit">Entrar</Button>
          </form>

          <Link to="/signup">
            <FiLogIn size={25} color="#e02041" />
            Não tenho cadastro
          </Link>
        </div>

        <Banner />
      </main>
    </section>
  );
}
