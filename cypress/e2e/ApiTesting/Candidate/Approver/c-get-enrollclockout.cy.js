/// <reference types = "Cypress"/>
import { canToken, companyId } from './../../Constantsfile/constants';

const baseUrl = Cypress.config('baseUrl');

describe("to get enroll clock out report ", () => {
    it('should be able to get enroll clock out report   ', () => {
      cy.fixture('bearerToken').then((tokenData) => {
        const bearerToken = tokenData.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/candidate/approver/enroll-attendee/clock-out/${companyId}`,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);

      const { total_attendee, present, late, absent, candidates } = response.body.data;

      expect(total_attendee).to.be.a('number');
      expect(present).to.be.a('number');
      expect(late).to.be.a('number');
      expect(absent).to.be.a('number');
      expect(candidates).to.be.an('array').that.is.not.empty;
      
      candidates.forEach((candidate) => {
        expect(candidate.id).to.be.a('number');
        expect(candidate.company_id).to.be.a('number');
        expect(candidate.candidate_id).to.be.a('number');
        expect(candidate.candidate_name).to.be.a('string');
        expect(candidate.attendance_id).to.be.a('number');
        expect(candidate.start_time).to.be.a('string');
        expect(candidate.end_time).to.be.a('string');
      });
    });
      });
    });
});