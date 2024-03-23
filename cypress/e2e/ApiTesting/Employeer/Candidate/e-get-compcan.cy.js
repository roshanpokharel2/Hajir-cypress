/// <reference types="Cypress" />

import { companyId } from "../../Constantsfile/constants";


const baseUrl = Cypress.env('baseUrl');

describe("get company candidate ", () => {
  it('should be able to get company candidates', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'GET',
      url: `${baseUrl}/employer/candidate/get-candidates/${companyId}`,
      headers: {
        'Authorization': `Bearer ${employerToken}`

               }
               
    }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.status).to.eq('success');
        expect(response.body.message).to.eq('Successfully Fetched.');
        expect(response.body).to.have.property('data');

        // Verify active candidates
        expect(response.body.data).to.have.property('active_candidates').to.be.an('array');
        const activeCandidates = response.body.data.active_candidates;
        activeCandidates.forEach(candidate => {
          expect(candidate).to.have.property('id');
          expect(candidate).to.have.property('company_id');
          expect(candidate).to.have.property('candidate_id');
          expect(candidate).to.have.property('name');
                });
        // Verify inactive candidates
        expect(response.body.data).to.have.property('inactive_candidates').to.be.an('array');
        const inactiveCandidates = response.body.data.inactive_candidates;
        inactiveCandidates.forEach(candidate => {
          expect(candidate).to.have.property('id');
          expect(candidate).to.have.property('company_id');
          expect(candidate).to.have.property('candidate_id');
          expect(candidate).to.have.property('name');
        });
      });
    });
  });
});
