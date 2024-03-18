/// <reference types = "Cypress"/>
import { canToken, companyId, year } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to get holiday calender  ", () => {
    it('should be able to get holiday calender  ', () => {
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/candidate/holiday-calendar/${companyId}/${year}`,
        headers: {
          'Authorization': canToken 
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);

      const holidays = response.body.data.holiday;

      expect(holidays).to.be.an('array').that.is.not.empty;

      holidays.forEach((holiday) => {
        expect(holiday).to.have.property('id').that.is.a('number');
        expect(holiday).to.have.property('holiday_name').that.is.a('string').and.is.not.empty;
        expect(holiday).to.have.property('date').that.is.a('string').and.match(/^\d{4}-\d{2}-\d{2}$/);
      });
        });
      });
    });

