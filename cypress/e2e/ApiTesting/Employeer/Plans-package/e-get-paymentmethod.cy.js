/// <reference types="Cypress" />
import { empToken } from './../../Constantsfile/constants';
const baseUrl = Cypress.env('baseUrl');

describe("get payment method ", () =>  {
  it('should be able to get payment method ', () => {
    cy.request({
      method: 'GET',
      url: 'https://veloxlabs.net/api/v2/employer/package/get-payment-methods',
      headers: {
        'Authorization': empToken 
               }

               
    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched');
  
        // Assert the structure of the 'data' object
        expect(response.body.data).to.exist;
        expect(response.body.data).to.have.property('paymentMethods').that.is.an('array').and.not.empty;
  
        // Assert properties of each payment method
        const paymentMethods = response.body.data.paymentMethods;
        paymentMethods.forEach(method => {
          expect(method).to.have.property('id').that.is.a('number');
          expect(method).to.have.property('title').that.is.a('string').and.not.empty;
          expect(method).to.have.property('status').that.is.a('string').and.equal('Active');
          expect(method).to.have.property('qr_image').that.is.a('string').and.not.empty; 
     
    });
  });
});
});