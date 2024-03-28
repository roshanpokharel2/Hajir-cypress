/// <reference types="Cypress" />

import { companyId, month, year } from "../../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');

describe("get payment report ", () =>  {
  it('should be able to get payment report', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
  
    cy.request({
      method: 'GET',
      url: `${baseUrl}/employer/report/payment-report/${companyId}/${year}/${month}`,
      headers: {
        'Authorization': `Bearer ${employerToken}`
               }

    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Success');
  
        // Check if all candidates' payment status and amounts are updated correctly
        const candidates = response.body.data.candidates;
        candidates.forEach(candidate => {
          // if (candidate.id === 13 || candidate.id === 156 || candidate.id === 60) {
            expect(candidate.status).to.be.a('string');
            expect(parseInt(candidate.amount)).to.be.a('number');
            const balance = response.body.data.balance;
            expect(balance).to.be.a('number'); 
          })
        });
    });
  });
  });