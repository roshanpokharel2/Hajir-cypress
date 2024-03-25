/// <reference types = "Cypress"/>
import {  candidateId, companyId} from './../../Constantsfile/constants';

const baseUrl = Cypress.config('baseUrl');

describe("to submit report ", () => {
    it('should be able to submit report ', () => {
      cy.fixture('bearerToken').then((tokenData) => {
        const bearerToken = tokenData.token;
        cy.fixture('attendanceId').then((attendanceIdData) => {
          const attendanceId = attendanceIdData.attendanceId;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/candidate/approver/report-submit/${companyId}/${candidateId}/${attendanceId}`,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
                 },
        body: {
          remarks : "Hello testing"
        }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Saved');
      });
    });
    });
});
});