/// <reference types = "Cypress"/>
import { canToken, companyId } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to get holiday year of company  ", () => {
    it('should be able to get holiday year of company  ', () => {
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/candidate/approver/candidates/${companyId}`,
        headers: {
          'Authorization': canToken 
                 }
                 
      }).then(response => {
        
      });
    });
});
