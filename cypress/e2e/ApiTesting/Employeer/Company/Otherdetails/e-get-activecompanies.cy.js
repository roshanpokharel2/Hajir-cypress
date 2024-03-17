/// <reference types="Cypress" />
const baseUrl = Cypress.env('baseUrl');
import { empToken } from '../../constants.js'; 

describe("Get active company ", () => {
  it('should be able to get the active company of employer', () => {
    
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/employer/company/active`, 
        headers: {
          'Authorization' : empToken
        },
        
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Successfully Fetched.");
        expect(response.body.data.companies.names).to.equal('string');
        
      });
    });
  
});
