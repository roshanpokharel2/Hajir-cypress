/// <reference types="Cypress" />

import { notificationId } from "../Constantsfile/constants";

const baseUrl = Cypress.env('baseUrl');

describe("get all single notification marked ", () =>  {
  it('should be able to get all single notification marked', () => {
    cy.fixture('bearerToken').then((tokenData) => {
      const bearerToken = tokenData.token;
 
    cy.request({
      method: 'GET',
      url: `${baseUrl}/notification/mark-single-read/${notificationId}`,
      headers: {
        'Authorization': `Bearer ${bearerToken}`
               }

    }).then(response => {
        expect(response.status).to.equal(200);
      expect(response.body.status).to.equal('success');
      expect(response.body.message).to.equal('Successfully Marked As Read');
    });   
    });
  });
  });