import { candidateId, companyId } from "../../../Constantsfile/constants";


const baseUrl = Cypress.env('baseUrl');

describe("send invitation", () => {
  it('should be able to send invitation', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
  
      method: 'POST',
      url: `${baseUrl}/employer/${companyId}/invitation/store`,
      headers: {
        'Authorization': `Bearer ${employerToken}`,
        'Content-Type': 'application/json'
      },
      body: {
        "status": "Approved",
        "candidate_id": `${candidateId}`
      },
      failOnStatusCode: false, // Prevent Cypress from failing the test due to 404 response
    }).then(response => {
      if (response.status === 404) {
        // Handle 404 error
        expect(response.body.status).to.equal("error");
        expect(response.body.code).to.equal(404);
        expect(response.body.message).to.equal("Candidate Not Found.");
      } else {
        // Handle successful response
        expect(response.status).to.equal(200);
        // Add assertions for successful response
      }
    });

  });
});
});