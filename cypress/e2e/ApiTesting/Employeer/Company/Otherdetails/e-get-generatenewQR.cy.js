/// <reference types="Cypress" />

import { companyId } from "../../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');

describe("Get active company ", () => {
  it('should be able to get the active company of employer', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/employer/company/generate-new-qr/${companyId}`, 
        headers: {
          'Authorization': `Bearer ${employerToken}`
        },
        
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("New QR successfully generated.");
       expect(response.body).to.have.property('data');
        });
      });
      });
    });
  
