/// <reference types="Cypress" />

import { candidateId, companyId } from "../../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');


describe("Get candidate by company id", () => {
  it('should be able to get the candidate by company id', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/employer/candidate/get-candidate/${companyId}/${candidateId}`, 
        headers: {
          'Authorization': `Bearer ${employerToken}`
        },
        
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Successfully Fetched.");
        expect(response.body.data.name).to.be.a('string');
;
      });
      });
    });
  
});