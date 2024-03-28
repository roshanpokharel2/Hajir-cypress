/// <reference types = "Cypress"/>
import { companyId } from './../../Constantsfile/constants';

const baseUrl = Cypress.config('baseUrl');

describe("to verify all join request  ", () => {
    it('should be able to verify all join request  ', () => {
      cy.fixture('bearerToken').then((tokenData) => {
        const bearerToken = tokenData.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/candidate/invitation/invitation-update/${companyId}`,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
                 },
                 failOnStatusCode: false
                 
      }).then(response => {
        if (response.status === 404) {
          // Handle the 404 status appropriately
          expect(response.body.message).to.equal("Join Request Not Found");
        } else {
        expect(response.status).to.equal(200);
        }
      });
        });
      });
    });

