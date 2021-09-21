import { AulaService as  MockAulaService } from "@services/aula.mock.service";
import { AulaService } from "@services/aula.service";

export const environment = {
  production: true,
  oauthUrl: 'https://www.perueduca.pe/',
  providers:[
    {provide: MockAulaService, useClass:AulaService}
  ]
};
