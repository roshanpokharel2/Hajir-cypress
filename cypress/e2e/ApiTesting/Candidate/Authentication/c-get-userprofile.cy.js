/// <reference types="Cypress" />


const baseUrl = Cypress.env('baseUrl');
describe("GET profile with Authorization", () => {
  it('should show profile request with authorization header', () => {
    cy.fixture('bearerToken').then((tokenData) => {
      const bearerToken = tokenData.token;
    cy.request({
      method: 'GET',
      url: 'https://veloxlabs.net/api/v2/candidate/get-profile',
      headers: {
        'Authorization': `Bearer ${bearerToken}`
               }
               
    }).then(response => {
           expect(response.status).to.equal(200);
      const candidateData = response.body.data;
      expect(candidateData.id).to.be.a('number');
        expect(candidateData.name).to.be.a('string'); // Adjusted expectation
      expect(parseInt(candidateData.phone)).to.be.a('number');
      expect(candidateData.email).to.be.a('string');
           const dobDate = new Date(candidateData.dob);
expect(dobDate).to.be.a('Date');
        expect(candidateData.type).to.equal('candidate');
    })
    });
  });
});
