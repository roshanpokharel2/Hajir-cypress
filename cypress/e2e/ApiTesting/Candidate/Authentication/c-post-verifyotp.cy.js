/// <reference types="Cypress" />
const baseUrl = Cypress.env('baseUrl');
import { candidatePhone, otpc } from './../../Constantsfile/constants';

describe("Registration Process", () =>  {
  it('should be able verify otp', () => {
    cy.request({
      method: 'POST',
      url: 'https://veloxlabs.net/api/v2/candidate/verify-opt',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        "phone": candidatePhone,
        "otp": otpc
      }
    }).then(response => {
      expect(response.status).to.equal(200); 
      expect(response.body.status).to.equal("success"); 
      expect(response.body.message).to.equal("Logged in successfully"); 
      expect(response.body.data.token).to.be.a('string');
    });
  });
});
