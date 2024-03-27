/// <reference types = "Cypress"/>
import { companyId } from './../../Constantsfile/constants';

const baseUrl = Cypress.config('baseUrl');

describe("to delete company of candidate  ", () => {
    it('should be able to delete company of candidate   ', () => {
      cy.fixture('bearerToken').then((tokenData) => {
        const bearerToken = tokenData.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/candidate/delete-company/${companyId}`,
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

