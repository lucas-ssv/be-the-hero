import { createServer, Factory, Model, Response } from "miragejs";
import jwt from "jsonwebtoken";
import { authConfig } from "../config/authConfig";

type MakeServerProps = {
  environment: "development" | "production" | "test";
};

type Session = {
  organization: {
    name: string | unknown;
  };
  token: string;
};

type Organization = {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
};

type Case = {
  id: number;
  title: string;
  description: string;
  price: number;
  organization_id: string;
};

export function makeServer({ environment }: MakeServerProps) {
  return createServer({
    environment,

    models: {
      session: Model.extend<Partial<Session>>({}),
      organization: Model.extend<Partial<Organization>>({}),
      case: Model.extend<Partial<Case>>({}),
    },

    factories: {
      organization: Factory.extend<Partial<Organization>>({
        name: "APAD",
        email: "apad@organization.com",
        whatsapp: "(11) 95555-5555",
        city: "São Paulo",
        uf: "SP",
      }),
      case: Factory.extend<Partial<Case>>({
        title: "Gata atropelada",
        description:
          "A Gata Smile foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.",
        price: 150,
      }),
    },

    seeds(server) {
      server.create("organization");
      server.create("case");
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.post("/sessions", (schema, request) => {
        const organizationId = JSON.parse(request.requestBody);
        const organization = schema.find("organization", organizationId);

        if (!organization) {
          return new Response(
            400,
            {},
            { error: true, message: "Organization not found" }
          );
        }

        const token = jwt.sign(
          {
            ...organization.attrs,
          },
          authConfig.secret,
          {
            expiresIn: authConfig.expiresIn,
          }
        );

        return new Response(
          200,
          {},
          {
            organization: {
              ...organization.attrs,
            },
            token,
          }
        );
      });

      this.post("/organizations", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.create("organization", attrs);
      });

      this.get("/cases", (schema, request) => {
        return schema.all("case");
      });

      this.post("/cases", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.create("case", attrs);
      });

      this.delete("/cases", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        let caseData = schema.find("case", attrs.id)?.destroy();

        return { caseData };
      });
    },
  });
}
