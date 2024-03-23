/// <reference types="Cypress" />

import { companyId } from "../../../Constantsfile/constants";

const baseUrl = Cypress.env('baseUrl');

describe("candidate unique code ", () => {
  it('candidate unique code', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'GET',
      url: `${baseUrl}/employer/company/candidate-code/${companyId}`,
      headers: {
        'Authorization': `Bearer ${employerToken}`,
               }
               
    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal("Successfully Fetched.");
        expect(response.body).to.have.property('data');
    });
    });
  });
});
