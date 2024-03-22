/// <reference types="Cypress" />

const baseUrl = Cypress.env('baseUrl');
describe("GET profile with Authorization", () => {
  it('should show profile request with authorization header', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'GET',
      url: 'https://veloxlabs.net/api/v2/employer/get-profile',
      headers: {
        'Authorization': `Bearer ${employerToken}`
               }
               
    }).then(response => {
     
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Successfully Fetched");
      expect(response.body).to.have.property('data');
      expect(response.body.data.phone).to.be.a('string');
      expect(response.body.data.name).to.a("string");
      
   
    });
  });
});
});
