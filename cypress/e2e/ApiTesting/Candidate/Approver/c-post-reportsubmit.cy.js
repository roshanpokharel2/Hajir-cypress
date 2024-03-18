/// <reference types = "Cypress"/>
import { canToken, candidateId, companyId, attendanceId } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to submit report ", () => {
    it('should be able to submit report ', () => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/candidate/approver/report-submit/${companyId}/${candidateId}/${attendanceId}`,
        headers: {
          'Authorization': canToken 
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Saved');
      });
    });
});
