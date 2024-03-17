/// <reference types = "Cypress"/>
import { empToken } from './../../Constants file/constants';
import { companyId, candidateId } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("To send payment ", () => {
    it('should be able to send payment ', () => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/employer/report/payment-submit/${companyId}/${candidateId}`,
        headers: {
          'Authorization': empToken 
                 },
        body: {
            "salary_amount": 15000,
            "bonus": 2000,
            "tax_deduction" : 150,
            "penalty_deduction" : 1000,
            "paid_amount" : 1000, 
            "status" : "Unpaid", 
            "payment_for_month" : "2024-03-01"
        }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched.');
        
        });
      });
    });

