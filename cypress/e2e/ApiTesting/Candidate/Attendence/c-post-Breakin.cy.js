/// <reference types = "Cypress"/>

const baseUrl = Cypress.config('baseUrl');

describe("to get notice  ", () => {
    it('should be able to get notice ', () => {
      cy.fixture('bearerToken').then((tokenData) => {
        const bearerToken = tokenData.token;
        cy.fixture('attendanceId').then((attendanceIdData) => {
          const attendanceId = attendanceIdData.attendanceId;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/candidate/attendance-break-store/${attendanceId}`,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
                 },
                 failOnStatusCode: false
                 
      }).then(response => {
        if (response.status === 404) {
          // Handle the 404 status appropriately
          expect(response.body.message).to.equal("Attendance Not Found");
        } else {
          // Handle other response statuses or success cases
          expect(response.status).to.equal(200); // Adjust as needed
          expect(response.body.status).to.equal("success");
          expect(response.body.message).to.equal("Attendance break stored successfully");
        }
      }); 
        });
      });
      });
      });
    

