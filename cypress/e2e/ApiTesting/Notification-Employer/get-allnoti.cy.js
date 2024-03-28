/// <reference types="Cypress" />

const baseUrl = Cypress.config('baseUrl');

describe("get all notification ", () =>  {
  it('should be able to get all notification ', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;

    cy.request({
      method: 'GET',
      url: `${baseUrl}/notification/all`,
      headers: {
        'Authorization': `Bearer ${employerToken}`
               }

    }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched');
  
        // Check if notifications array exists and is not empty
        expect(response.body.data.notifications).to.exist;
        expect(response.body.data.notifications).to.be.an('array');
  
        // Iterate over each notification and verify its details
        response.body.data.notifications.forEach(notification => {
          expect(notification.id).to.be.a('string');
          expect(notification.type).to.be.a('string');
          expect(notification.type_id).to.be.a('number');
          expect(notification.title).to.be.a('string');
          expect(notification.message).to.be.a('string');
          expect(parseInt(notification.company_id)).to.be.a('number');
          expect(parseInt(notification.company_id)).to.be.a('number');
          expect(parseInt(notification.employer_id)).to.be.a('number');
          expect(notification.created_date).to.be.a('string');
          expect(notification.read_at).to.be.a('string');
        });
    });
  });
  });
});