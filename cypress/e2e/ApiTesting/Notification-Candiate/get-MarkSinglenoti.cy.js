/// <reference types="Cypress" />

import { notificationId } from "../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');

describe("Get single notification marked", () => {
  it('should be able to get a single notification marked', () => {
    cy.fixture('bearerToken').then((tokenData) => {
      const bearerToken = tokenData.token;

      cy.request({
        method: 'GET',
        url: `${baseUrl}/notification/mark-single-read/${notificationId}`,
        headers: {
          'Authorization': `Bearer ${bearerToken}`
        },
        failOnStatusCode: false
      }).then(response => {
        if (response.status === 200) {
          expect(response.body.status).to.equal('success');
          expect(response.body.message).to.equal('Successfully Marked As Read');
        } else if (response.status === 404) {
          expect(response.body.status).to.equal('error');
          expect(response.body.message).to.equal('Notification Not Found.');
        } else {
          // Handle other status codes if needed
          throw new Error(`Unexpected status code: ${response.status}`);
        }
      })
      });
    });
  });

