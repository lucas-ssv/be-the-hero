import { createContext, ReactNode, useState } from "react";

type AuthContextProps = {
  isAuthenticated: boolean;
  signIn: (organizationId: string) => Promise<void>;
  organization: Organization;
};

type AuthProviderProps = {
  children: ReactNode;
};

type Organization = {
  name: string;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children }: AuthProviderProps) {
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

    if (!storage) {
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
            console.log("deu ruim");
            return;
          }

          const { token, organization } = data;

          localStorage.setItem("@bethehero:token", token);
          localStorage.setItem(
            "@bethehero:organization",
            JSON.stringify({ name: organization.name })
          );

          setOrganization({ name: organization.name });
          setIsAuthenticated(true);
        });
    } catch {
      console.log("Ocorreu um erro");
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, organization }}>
      {children}
    </AuthContext.Provider>
  );
}
