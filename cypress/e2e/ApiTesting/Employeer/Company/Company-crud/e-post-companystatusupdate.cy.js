/// <reference types="Cypress" />
const baseUrl = Cypress.env('baseUrl');
import { empToken } from '../../constants.js'; 

describe("Company status update Process", () => {
  it('should be able to active/inactive the company', () => {
    
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/employer/company/status/${companyId}`, 
        headers: {
          'Authorization' : empToken
        },
        body: {
          "status": "active"
        }
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Company is activated successfully");
        
      });
    
  });
});
