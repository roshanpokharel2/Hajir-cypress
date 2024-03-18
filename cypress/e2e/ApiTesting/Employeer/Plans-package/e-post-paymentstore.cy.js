/// <reference types="Cypress" />
import { empToken, packageId } from '../../Constantsfile/constants';
const baseUrl = Cypress.env('baseUrl');

describe("get payment store", () =>  {
  it('should be able to get payment store', () => {
    cy.fixture('photo.jpg').then((filecontent)=> {
      
    cy.request({
      method: 'POST',
      url: `https://veloxlabs.net/api/v2/employer/package/payment-submit/${packageId}`,
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
      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal('success');
      expect(response.body.message).to.equal('Successfully Send. Please wait for verification.'); 
    });
  });
  });
});
