/// <reference types="Cypress" />
const baseUrl = Cypress.env('baseUrl');
import { empToken } from '../../constants.js'; 

describe("Get company by employer id", () => {
  it('should be able to get the company by employer id', () => {
    
      cy.request({
        method: 'GET',
        url: 'https://veloxlabs.net/api/v2/employer/company/employercompanies', 
        headers: {
          'Authorization' : empToken
        },
        
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Successfully Fetched.");
        expect(response.body.active_companies.name).to.equal('string');
        
      });
    });
  
});
