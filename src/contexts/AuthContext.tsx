import { createContext, ReactNode, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

type AuthContextProps = {
  isAuthenticated: boolean;
  signIn: (organizationId: string) => Promise<void>;
  signOut: () => void;
  organization: Organization;
};

type AuthProviderProps = {
  children: ReactNode;
};

type Organization = {
  id: string;
  name: string;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children }: AuthProviderProps) {
  const history = useHistory();
  const [organization, setOrganization] = useState<Organization>(() => {
    const storageOrganization = localStorage.getItem("@bethehero:organization");

    if (!storageOrganization) {
      return {};
    }

    const storageData = JSON.parse(storageOrganization);

    return storageData;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storage = localStorage.getItem("@bethehero:token");
    const storageOrganization = localStorage.getItem("@bethehero:organization");

    if (!storage || !storageOrganization) {
      return false;
    }

    return true;
  });

  async function signIn(organizationId: string) {
    try {
      await fetch("/api/sessions", {
        method: "POST",
        body: JSON.stringify(organizationId),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            toast.error("Organização não encontrada!");
            return;
          }

          const { token, organization } = data;

          localStorage.setItem("@bethehero:token", token);
          localStorage.setItem(
            "@bethehero:organization",
            JSON.stringify({ id: organization.id, name: organization.name })
          );

          setOrganization({ id: organization.id, name: organization.name });
          setIsAuthenticated(true);
        });
    } catch {
      console.log("Ocorreu um erro");
    }
  }

  function signOut() {
    localStorage.removeItem("@bethehero:token");
    localStorage.removeItem("@bethehero:organization");

    setIsAuthenticated(false);
    history.push("/create");
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, signOut, organization }}
    >
      {children}
    </AuthContext.Provider>
  );
}
