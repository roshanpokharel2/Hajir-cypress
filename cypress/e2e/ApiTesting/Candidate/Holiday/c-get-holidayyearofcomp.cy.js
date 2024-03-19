/// <reference types = "Cypress"/>
import { canToken, companyId } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to get holiday year of company  ", () => {
    it('should be able to get holiday year of company  ', () => {
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/candidate/holiday-years/${companyId}`,
        headers: {
          'Authorization': canToken 
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);

      const years = response.body.data.years;
      be.an('array').that.is.not.empty;

      years.forEach((year) => {
        expect(year).to.be.a('number');
        expect(year).to.match(/^\d{4}$/);
        });
      });
    });
});
