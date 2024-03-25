/// <reference types="Cypress" />
import { companyId } from '../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("Clock out", () => {
  it('should be able to clock out', () => {
    cy.fixture('bearerToken').then((tokenData) => {
      const bearerToken = tokenData.token;

      // Retrieve the attendanceId from the fixture file
      cy.fixture('attendanceId').then((attendanceIdData) => {
        const attendanceId = attendanceIdData.attendanceId;

        // Make the API request using the retrieved attendanceId
        cy.request({
          method: 'POST',
          url: `https://veloxlabs.net/api/v2/candidate/attendance-update/${companyId}/${attendanceId}`,
          headers: {
            'Authorization': `Bearer ${bearerToken}`,
          }
        }).then(response => {
          expect(response.status).to.equal(200);
          const responseData = response.body;
          expect(responseData.status).to.equal('success');
          // expect(responseData.message).to.equal('Successfully Updated.');
        });
      });
    });
  });
});
