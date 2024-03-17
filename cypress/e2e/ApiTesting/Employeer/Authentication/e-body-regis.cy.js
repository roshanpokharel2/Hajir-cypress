/// <reference types="Cypress" />
import { employerPhone } from './../../Constants file/constants';
const baseUrl = Cypress.env('baseUrl');

describe("Registration Process", () => {
  it('should be able to register and generate otp', () => {
    cy.request({
      method: 'POST',
      url: 'https://veloxlabs.net/api/v2/employer/register',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        "phone": employerPhone
      }
    }).then(response => {
      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal("success");
      expect(response.body.message).to.equal("Successfully Registered. OTP Sent Successfull");
      expect(response.body.data).to.have.property("otp");
    });
  });
});
