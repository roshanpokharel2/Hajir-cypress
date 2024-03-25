/// <reference types="Cypress" />
const baseUrl = Cypress.config('baseUrl');

describe("Get company by employer id", () => {
  it('should be able to get the company by employer id', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/employer/company/employercompanies`, 
        headers: {
          'Authorization': `Bearer ${employerToken}`
        },
        
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Successfully Fetched.");
        expect(response.body.active_companies.name).to.equal('string');
      });
      });
    });
  
});
