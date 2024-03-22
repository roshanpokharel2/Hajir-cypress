/// <reference types = "Cypress"/>
import { canToken, companyId } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to get candidate by company  ", () => {
    it('should be able to get get can by comp  ', () => {
      cy.fixture('bearerToken').then((tokenData) => {
        const bearerToken = tokenData.token;
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/candidate/approver/candidates/${companyId}`,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
      });});
    });
});
