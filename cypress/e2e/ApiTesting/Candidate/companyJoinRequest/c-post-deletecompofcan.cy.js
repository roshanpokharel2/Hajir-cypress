/// <reference types = "Cypress"/>
import { canToken, companyId } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to delete company of candidate  ", () => {
    it('should be able to delete company of candidate   ', () => {
      cy.fixture('bearerToken').then((tokenData) => {
        const bearerToken = tokenData.token;
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/candidate/delete-company/${companyId}`,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        const responseData = response.body;
        expect(responseData.status).to.equal('success');
        expect(responseData.message).to.equal('Company Deleted Successfully');
      });
        });
      });
    });

