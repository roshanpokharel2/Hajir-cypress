/// <reference types="Cypress" />
import { candidatePhone } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("Registration Process", () => {
  it('should be able to register and generate otp', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/v2/candidate/register`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        "phone": candidatePhone
      }
    }).then(response => {
      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal("success");
      expect(response.body.message).to.equal("Successfully Registered. OTP Sent Successfull");
      expect(response.body.data).to.have.property("otp");

      const generatedOTP = response.body.data.otp;

      // Write the OTP to a fixture file
      cy.writeFile('cypress/fixtures/generatedOTP.json', { otp: generatedOTP })
        .then(() => {
          console.log('Successfully wrote OTP to fixture');
        });
    });
  });

  it('should be able to verify otp and save bearer token', () => {
    cy.fixture('generatedOTP').then((otpData) => {
      const generatedOTP = otpData.otp;

      cy.request({
        method: 'POST',
        url: `${baseUrl}/candidate/verify-opt`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          "phone": candidatePhone,
          "otp": generatedOTP
        }
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Logged in successfully");
        expect(response.body.data.token).to.be.a('string');

        // Extract the bearer token from the response
        const bearerToken = response.body.data.token;

        // Save the token to fixture using the custom command
        cy.writeFile('cypress/fixtures/bearerToken.json', { token: bearerToken })
          .then(() => {
            console.log('Successfully wrote token to fixture');
          });

        // Store the token in environment variable for later use
        Cypress.env('cantoken', bearerToken);
      });
    });
  });
});
