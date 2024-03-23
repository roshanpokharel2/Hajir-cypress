/// <reference types = "Cypress"/>

const baseUrl = Cypress.env('baseUrl');

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
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        const responseData = response.body.data;
       
      // expect(responseData.break_time).to.equal('00:00:00');
      expect(responseData.break_id).to.be.a('number');

      const breakId = responseData.break_id;
      cy.writeFile('cypress/fixtures/breakId.json', { breakId: breakId }).then(() => {
        console.log('Successfully wrote break ID to fixture');
      }); 
        });
      });
      });
      });
    });

