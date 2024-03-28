/// <reference types = "Cypress"/>

const baseUrl = Cypress.env('baseUrl');

describe("to store resignlist  ", () => {
    it('should be able to store resignlist ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/resign/list`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 },
        body: {
            "company_id":2
        }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetch');

        expect(response.body.data).to.exist;
        expect(response.body.data).to.be.an('array').and.have.lengthOf(0);
        });
      });
    });
  });
