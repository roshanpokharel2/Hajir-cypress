/// <reference types="Cypress" />

const baseUrl = Cypress.config('baseUrl');

describe("get all unread notification ", () =>  {
  it('should be able to get all unread notification ', () => {
    cy.fixture('bearerToken').then((tokenData) => {
      const bearerToken = tokenData.token;

    cy.request({
      method: 'GET',
      url: `${baseUrl}/notification/unread`,
      headers: {
        'Authorization': `Bearer ${bearerToken}`
               }

    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched');
        expect(response.body.data.notifications).to.be.an('array'); 
        
    });
  });
  });
});