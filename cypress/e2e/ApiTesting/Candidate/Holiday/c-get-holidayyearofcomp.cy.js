/// <reference types = "Cypress"/>
import {  companyId } from './../../Constantsfile/constants';

const baseUrl = Cypress.config('baseUrl');

describe("to get holiday year of company  ", () => {
    it('should be able to get holiday year of company  ', () => {
      cy.fixture('bearerToken').then((tokenData) => {
        const bearerToken = tokenData.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/candidate/holiday-years/${companyId}`,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        const years = response.body.data.years;
        years.forEach((year) => {
        expect(year).to.be.a('number');
                });
              });
      });
    });
});
