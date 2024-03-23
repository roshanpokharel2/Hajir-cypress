/// <reference types="Cypress" />
import { companyId } from './../../../Constantsfile/constants';



const baseUrl = Cypress.env('baseUrl');
const companyId= 1;

describe("Company delete Process", () => {
  it('should be able to delete the company', () => {
    
 cy.fixture('employerToken').then((tokenDataa) => {
  const employerToken = tokenDataa.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/company/delete/${companyId}`, 
        headers: {
          'Authorization': `Bearer ${employerToken}`

        },
        
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Company deleted successfully");
      });
      });
    });
  
});
