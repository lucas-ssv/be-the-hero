import { CardBody } from "./CardBody";
import { CardItem } from "./CardItem";
import "../../styles/list.scss";

interface ListCardsProps {
  items: Case[];
}

interface Case {
  id: string;
  title: string;
  description: string;
  price: string;
  organization_id: string;
}

export function ListCards({ items }: ListCardsProps) {
  return (
    <CardBody>
      {items?.map((item) => (
        <CardItem key={item.id} caseData={item} />
      ))}
    </CardBody>
  );
}
