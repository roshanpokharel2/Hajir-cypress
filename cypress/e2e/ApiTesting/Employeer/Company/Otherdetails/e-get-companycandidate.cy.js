/// <reference types="Cypress" />
const baseUrl = Cypress.env('baseUrl');
import { empToken,companyId, candidateId } from '../../constants.js'; 

describe("Get candidate by company id", () => {
  it('should be able to get the candidate by company id', () => {
    
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/employer/candidate/get-candidates/${companyId}/${candidateId}`, 
        headers: {
          'Authorization' : empToken
        },
        
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Successfully Fetched.");
        expect(response.body.data.active_candidates.names).to.equal('string');
        
      });
    });
  
});
