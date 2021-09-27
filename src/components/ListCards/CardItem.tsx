import { FiTrash2 } from "react-icons/fi";
import "../../styles/cardItem.scss";

export function CardItem() {
  return (
    <div className="cardItem">
      <strong>CASO:</strong>
      <p>Cadelinha atropelada</p>

      <strong>DESCRIÇÃO:</strong>
      <p>
        A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve
        que passar por uma cirurgia às pressas.
      </p>

      <strong>VALOR:</strong>
      <p>120,00 reais</p>

      <button type="button">
        <FiTrash2 size={20} color="#A8A8B3" />
      </button>
    </div>
  );
}
