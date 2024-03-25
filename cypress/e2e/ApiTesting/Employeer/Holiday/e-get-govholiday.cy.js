/// <reference types = "Cypress"/>

const baseUrl = Cypress.config('baseUrl');

describe("get govholidaypdf ", () => {
    it('should be able to get govholidaypdf ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/employer/get-government-holiday-PDF`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 }
                 
      }).then(response => {
          expect(response.status).to.equal(200);
          expect(response.headers['content-type']).to.equal('application/pdf'); 
          // expect(response.body.size).to.be.greaterThan(0);
          // const pdfBlob = new Blob([response.body], { type: 'application/pdf' });
      });
      });
    });
  });
