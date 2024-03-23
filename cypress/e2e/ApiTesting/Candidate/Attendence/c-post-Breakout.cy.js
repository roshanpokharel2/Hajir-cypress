/// <reference types = "Cypress"/>

const baseUrl = Cypress.env('baseUrl');

describe("to update break  ", () => {
    it('should be able to update break ', () => {
      cy.fixture('bearerToken').then((tokenData) => {
        const bearerToken = tokenData.token;
        cy.fixture('breakId').then((breakIdData) => {
          const breakId = breakIdData.breakId;
            
      cy.request({
        method: 'POST',
        url: `${baseUrl}/api/v2/candidate/attendance-break-update/${breakId}`,
        headers: {
          'Authorization': `Bearer ${bearerToken}`, 
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        const responseData = response.body;
      expect(responseData.status).to.equal('success');
      expect(responseData.message).to.equal('Successfully Updated.');
        });
      });
      });
      });
    });

