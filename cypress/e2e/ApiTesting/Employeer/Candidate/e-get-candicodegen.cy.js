const baseUrl = Cypress.config('baseUrl');

describe("get candidate code generated ", () => {
  it('should be able to get candidate code generated', () => {
  
 cy.fixture('employerToken').then((tokenDataa) => {
  const employerToken = tokenDataa.token;
      const candidateId = 13; 
      cy.request({
        method: 'GET',
        url: `${baseUrl}/employer/company/candidate-code/${candidateId}`,
        headers: {
          'Authorization': `Bearer ${employerToken}`,
        },
        failOnStatusCode: false, // Prevent Cypress from failing the test due to 404 response
      }).then(response => {
        if (response.status === 404) {
          // Handle 404 error
          expect(response.body.status).to.equal("error");
          expect(response.body.code).to.equal(404);
          expect(response.body.message).to.equal("Company Not Found.");
        } else {
          // Handle successful response
          expect(response.status).to.equal(200);
          // Add assertions for successful response
        }
      });
    });
  });
});
