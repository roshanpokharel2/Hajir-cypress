/// <reference types = "Cypress"/>
import { canToken, companyId } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to verify all join request  ", () => {
    it('should be able to verify all join request  ', () => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/candidate/invitation/invitation-update/${companyId}`,
        headers: {
          'Authorization': canToken 
                 }
                 
      }).then(response => {
       
        });
      });
    });

