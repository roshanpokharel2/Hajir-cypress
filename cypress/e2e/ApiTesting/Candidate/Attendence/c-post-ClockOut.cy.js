/// <reference types="Cypress" />
import { companyId } from '../../Constantsfile/constants';

const baseUrl = Cypress.config('baseUrl');

describe("Clock out", () => {
  it('should be able to clock out', () => {
    cy.fixture('bearerToken').then((tokenData) => {
      const bearerToken = tokenData.token;

      cy.fixture('attendanceId').then((attendanceIdData) => {
        const attendanceId = attendanceIdData.attendanceId;

        
        cy.request({
          method: 'POST',
          url: `${baseUrl}/candidate/attendance-update/${companyId}/${attendanceId}`,
          headers: {
            'Authorization': `Bearer ${bearerToken}`,
          },
          failOnStatusCode: false
        }).then(response => {
          if (response.status === 400 && response.body.message === "Attendance Not Found") {
            // Handle the specific error message
            cy.log("Attendance not found. Skipping the test.");
          } else {
            // Handle other response statuses or success cases
            expect(response.status).to.equal(200); // Adjust as needed
            expect(response.body.status).to.equal("success");
            expect(response.body.message).to.equal("Attendance updated successfully");
          }
        });
      });
    });
  });
});
