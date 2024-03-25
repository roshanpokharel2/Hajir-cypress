import { companyId } from "../../Constantsfile/constants";


const baseUrl = Cypress.config('baseUrl');

describe("to clock in", () => {
  it('should be able to clock in', () => {
    cy.fixture('bearerToken').then((tokenData) => {
      const bearerToken = tokenData.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/candidate/attendance-store/${companyId}`, // Hardcoded companyId for testing
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
        }
      }).then(response => {
        expect(response.status).to.equal(200);
        const responseData = response.body.data;
        expect(responseData.attendance_id).to.be.a('number');
        expect(responseData.start_time).to.be.a('string');

        const attendanceId = responseData.attendance_id;
        cy.writeFile('cypress/fixtures/attendanceId.json', { attendanceId: attendanceId }).then(() => {
          console.log('Successfully wrote attendance ID to fixture');
        });
      });
    });
  });
});
