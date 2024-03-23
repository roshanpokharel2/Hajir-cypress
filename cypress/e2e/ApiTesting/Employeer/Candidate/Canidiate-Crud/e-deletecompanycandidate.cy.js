/// <reference types="Cypress" />

import { companyId } from "../../../Constantsfile/constants";

const baseUrl = Cypress.env('baseUrl');

describe("delete comany candidate ", () => {
  it('should be able to delete comany candidate ', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'GET',
      url: `${baseUrl}/employer/candidate/destroy/${companyId}/75`,
      headers: {
        'Authorization': `Bearer ${employerToken}`,
               }
               
    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.status).to.equal("success");
        expect(response.message).to.equal("string");
    });
    });
  });
});
