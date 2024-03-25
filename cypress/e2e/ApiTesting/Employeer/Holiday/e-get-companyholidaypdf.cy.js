/// <reference types="Cypress" />

import { companyId } from "../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');

describe("get companyholidaypdf ", () => {
  it('should be able to get companyholidaypdf ', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'GET',
      url: `${baseUrl}/employer/company/get-holidays-pdf/${companyId}`,
      headers: {
        'Authorization': `Bearer ${employerToken}`
               }
               
    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.headers['content-type']).to.equal('application/pdf'); 
    });  
    });
  });
});
