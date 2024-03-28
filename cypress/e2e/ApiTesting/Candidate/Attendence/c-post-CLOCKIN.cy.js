import { companyId } from "../../Constantsfile/constants";


const baseUrl = Cypress.config('baseUrl');

describe("to clock in", () => {
  it('should be able to clock in', () => {
    cy.fixture('bearerToken').then((tokenData) => {
      const bearerToken = tokenData.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/candidate/attendance-store/${companyId}`, 
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
        },
        failOnStatusCode: false
      }).then(response => {
        try {
          if (response.status === 400) {
            // Handle the 400 status appropriately for early clock-in or sick leave
            if (response.body.message === "You are early to join. Please wait.") {
              expect(response.body.message).to.equal("You are early to join. Please wait.");
            } else {
              expect(response.body.message).to.equal("Your are in Full Day Sick Leave from 2024-03-28 to 2024-03-28");
            }
          } else {
            // Handle other response statuses or success cases
            expect(response.status).to.equal(200); // Adjust as needed
            expect(response.body.status).to.equal("success");
            expect(response.body.message).to.equal("Attendance stored successfully");
          }
        } catch (error) {
          // Handle any unexpected errors
          throw new Error(`Unexpected error: ${error}`);
        }
        });
      });
    });
  });
//});
