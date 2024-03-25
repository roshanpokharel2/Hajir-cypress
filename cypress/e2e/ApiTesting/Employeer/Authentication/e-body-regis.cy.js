/// <reference types="Cypress" />
import { employerPhone } from './../../Constantsfile/constants';

const baseUrl = Cypress.config('baseUrl');

describe("Registration Process", () => {
  it('should be able to register and generate otp', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/employer/register`,
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

      const generatedOTPE = response.body.data.otp;

      // Write the OTP to a fixture file
      cy.writeFile('cypress/fixtures/generatedOTPE.json', { otp: generatedOTPE })
        .then(() => {
          console.log('Successfully wrote OTP to fixture');
        });
    });
  });

  it('should be able to verify otp and save bearer token', () => {
    cy.fixture('generatedOTPE').then((otpData) => {
      const generatedOTPE = otpData.otp;

      cy.request({
        method: 'POST',
        url:  `${baseUrl}/employer/verify-opt`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          "phone": employerPhone,
          "otp": generatedOTPE
        }
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Logged in successfully");
        expect(response.body.data.token).to.be.a('string');

        // Extract the bearer token from the response
        const employerToken = response.body.data.token;

        // Save the token to fixture using the custom command
        cy.writeFile('cypress/fixtures/employerToken.json', { token: employerToken })
          .then(() => {
            console.log('Successfully wrote token to fixture');
          });

        // Store the token in environment variable for later use
        Cypress.env('emptoken', employerToken);
      });
    });
  });
});
