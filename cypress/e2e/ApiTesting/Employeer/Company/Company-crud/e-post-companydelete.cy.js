/// <reference types="Cypress" />
const baseUrl = Cypress.env('baseUrl');
import { empToken } from '../../constants.js'; 

describe("Company delete Process", () => {
  it('should be able to delete the company', () => {
    
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/employer/company/delete/${companyId}`, 
        headers: {
          'Authorization' : empToken
        },
        
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Company created successfully");
        
      });
    });
  
});
