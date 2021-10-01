import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";

type CaseContextProps = {
  items: CaseList[];
  handleCreateCase: (item: Case) => Promise<void>;
  handleDeleteCase: (caseId: string) => Promise<void>;
};

interface Case {
  title: string;
  description: string;
  price: string;
  organization_id: string;
}

interface CaseList extends Case {
  id: string;
}

type CaseProviderProps = {
  children: ReactNode;
};

export const CaseContext = createContext<CaseContextProps>(
  {} as CaseContextProps
);

export function CaseProvider({ children }: CaseProviderProps) {
  const [items, setItems] = useState<CaseList[]>([]);

  useEffect(() => {
    fetch("/api/cases")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.cases);
      });
  }, []);

  async function handleCreateCase(item: Case) {
    const caseData = {
      title: item.title,
      description: item.description,
      price: item.price,
      organization_id: item.organization_id,
    };

    try {
      await fetch("/api/cases", {
        method: "POST",
        body: JSON.stringify(caseData),
      })
        .then((response) => response.json())
        .then((data) => {
          setItems([...items, data.case]);
          toast.success("Cadastro do caso realizado com sucesso");
        });
    } catch {
      toast.error("Ocorreu um erro no cadastro");
    }
  }

  async function handleDeleteCase(caseId: string) {
    try {
      await fetch("/api/cases", {
        method: "DELETE",
        body: JSON.stringify({
          id: caseId,
        }),
      })
        .then((response) => response.json())
        .then(() => {
          const itemIndex = items.findIndex((item) => item.id === caseId);

          if (itemIndex >= 0) {
            items.splice(itemIndex, 1);
            setItems([...items]);
          }
        });
    } catch {
      toast.error("Ocorreu um erro ao excluir caso");
    }
  }

  return (
    <CaseContext.Provider value={{ items, handleCreateCase, handleDeleteCase }}>
      {children}
    </CaseContext.Provider>
  );
}
