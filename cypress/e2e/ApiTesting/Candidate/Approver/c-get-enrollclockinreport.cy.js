/// <reference types = "Cypress"/>
import { canToken, companyId } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to get enroll clock in report ", () => {
    it('should be able to get enroll clock in report   ', () => {
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/candidate/enroll-attendee/clock-in/${companyId}`,
        headers: {
          'Authorization': canToken 
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
