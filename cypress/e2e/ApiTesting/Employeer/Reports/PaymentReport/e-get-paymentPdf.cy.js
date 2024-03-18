/// <reference types="Cypress" />
import { empToken, companyId, year, month } from '../../Constantsfile/constants';
const baseUrl = Cypress.env('baseUrl');

describe("get payment pdf", () =>  {
  it('should be able to get payment pdf', () => {
      
    cy.request({
      method: 'GET',
      url: `https://veloxlabs.net/api/v2/employer/package/payment-report-pdf/${companyId}/${year}/${month}`,
      headers: {
        'Authorization': empToken 
               },
      body: {
            "duration": 3,
            "total_amount":"2500.00",
            "payment_method": 1,
            "image": filecontent        
      }

    }).then(response => {
       
        
    });
  });
  });

