/// <reference types="Cypress" />
const baseUrl = Cypress.env('baseUrl');
import { empToken, companyId } from '../../constants.js'; 

describe("Get active company ", () => {
  it('should be able to get the active company of employer', () => {
    
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/company/generate-new-qr/${companyId}`, 
        headers: {
          'Authorization' : empToken
        },
        
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("New QR successfully generated.");
        cy.request(response.body.data).then((imgResponse) => {
            expect(imgResponse.status).to.eq(200) 
            expect(imgResponse.headers['content-type']).to.include('image/png')
        });
        
      });
    });
  
});
