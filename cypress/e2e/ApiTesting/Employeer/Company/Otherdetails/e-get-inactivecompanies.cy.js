/// <reference types="Cypress" />
const baseUrl = Cypress.env('baseUrl');

describe("Get inactive company ", () => {
  it('should be able to get the inactive company of employer', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/employer/company/inactive`, 
        headers: {
          'Authorization': `Bearer ${employerToken}`
        },
        
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Successfully Fetched.");
        expect(response.body.data.companies.names).to.equal('string');
      });
      });
    });
  
});
