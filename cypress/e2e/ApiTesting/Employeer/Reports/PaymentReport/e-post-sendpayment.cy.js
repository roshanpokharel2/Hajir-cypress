/// <reference types = "Cypress"/>

import { candidateId, companyId } from "../../../Constantsfile/constants";


const baseUrl = Cypress.env('baseUrl');

describe("To send payment ", () => {
    it('should be able to send payment ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
  
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/report/payment-submit/${companyId}/${candidateId}`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 },
        body: {
            "salary_amount": 25000,
            "bonus": 2000,
            "tax_deduction" : 150,
            "penalty_deduction" : 1000,
            "paid_amount" : 25850, 
            "status" : "paid", 
            "payment_for_month" : "2024-03-01"
        }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched.');
      });
        });
      });
    });

