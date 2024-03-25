/// <reference types="Cypress" />

const baseUrl = Cypress.config('baseUrl');

describe("get all notification as read", () =>  {
  it('should be able to get all notification as read ', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
  
    cy.request({
      method: 'GET',
      url: `${baseUrl}/notification/mark-all-read`,
      headers: {
        'Authorization': `Bearer ${employerToken}`
               }

    }).then(response => {
        expect(response.status).to.equal(200);
      expect(response.body.status).to.equal('success');
      expect(response.body.message).to.equal('Successfully Marked As Read');
      });  
    });
  });
  });