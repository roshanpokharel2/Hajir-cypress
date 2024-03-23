/// <reference types = "Cypress"/>
import {  companyId, year } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to get holiday calender  ", () => {
    it('should be able to get holiday calender  ', () => {
      cy.fixture('bearerToken').then((tokenData) => {
        const bearerToken = tokenData.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/candidate/holiday-calendar/${companyId}/${year}`,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        const holidays = response.body.data.holiday;
        expect(holidays).to.be.an('array').that.is.not.empty;
        holidays.forEach((holiday) => {
        expect(holiday).to.have.property('id').that.is.a('number');
        expect(holiday).to.have.property('holiday_name').that.is.a('string').and.is.not.empty;
       
      });
    });
        });
      });
    });

