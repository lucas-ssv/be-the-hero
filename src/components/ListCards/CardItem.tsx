import { useContext, useMemo } from "react";
import { FiTrash2 } from "react-icons/fi";
import { CaseContext } from "../../contexts/CaseContext";
import "../../styles/cardItem.scss";
import { priceFormat } from "../../utils/priceFormat";

interface CaseProps {
  caseData: {
    id: string;
    title: string;
    description: string;
    price: string;
    organization_id: string;
  };
}

export function CardItem({ caseData }: CaseProps) {
  const { handleDeleteCase } = useContext(CaseContext);

  const priceFormatted = useMemo(() => {
    return priceFormat(caseData.price);
  }, [caseData.price]);

  return (
    <div className="cardItem">
      <strong>CASO:</strong>
      <p>{caseData.title}</p>

      <strong>DESCRIÇÃO:</strong>
      <p>{caseData.description}</p>

      <strong>VALOR:</strong>
      <p>{priceFormatted}</p>

      <button type="button" onClick={() => handleDeleteCase(caseData.id)}>
        <FiTrash2 size={20} color="#A8A8B3" />
      </button>
    </div>
  );
}
