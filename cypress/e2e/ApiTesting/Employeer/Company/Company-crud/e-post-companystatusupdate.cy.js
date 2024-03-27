/// <reference types="Cypress" />

import { companyId } from "../../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');


describe("Company status update Process", () => {
  it('should be able to active/inactive the company', () => {
    
 cy.fixture('employerToken').then((tokenDataa) => {
  const employerToken = tokenDataa.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/company/status/${companyId}`, 
        headers: {
          'Authorization': `Bearer ${employerToken}`
        },
        body: {
          "status": "active"
        }
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        //expect(response.body.message).to.equal("Company is activated successfully.");
      });
      });
    
  });
});
