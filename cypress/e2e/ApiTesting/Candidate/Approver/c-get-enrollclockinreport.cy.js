/// <reference types = "Cypress"/>
import { companyId } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to get enroll clock in report ", () => {
    it('should be able to get enroll clock in report   ', () => {
      
 cy.fixture('bearerToken').then((tokenData) => {
  const bearerToken = tokenData.token;
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/candidate/approver/enroll-attendee/clock-in/${companyId}`,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);

      const { attendee_count, absent_count, late_count, leave_count, clock_out_candidates } = response.body.data;

      expect(attendee_count).to.be.a('number');
      expect(absent_count).to.be.a('number');
      expect(late_count).to.be.a('number');
      expect(leave_count).to.be.a('number');
      expect(clock_out_candidates).to.be.an('array');
      });
    });
    });
});
