/// <reference types = "Cypress"/>


const baseUrl = Cypress.config('baseUrl');

describe("to get all join request  ", () => {
    it('should be able to get all join request  ', () => {
      cy.fixture('bearerToken').then((tokenData) => {
        const bearerToken = tokenData.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/candidate/invitation/all`,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
      
      const responseData = response.body;

      expect(responseData.status).to.equal('success');
      expect(responseData.message).to.equal('Successfully Fetched');
      expect(responseData.data.candidateInvitations).to.be.an('array');
      // const candidateInvitation = responseData.data.candidateInvitations[0];
      // expect(candidateInvitation).to.have.property('id');
      // expect(candidateInvitation).to.have.property('status');
      // expect(candidateInvitation).to.have.property('notification_id');
      // expect(candidateInvitation).to.have.property('company').that.is.an('object');
      // expect(candidateInvitation.company).to.have.property('id');
      // expect(candidateInvitation.company).to.have.property('name');
      // expect(candidateInvitation.company).to.have.property('status');
      // expect(candidateInvitation).to.have.property('employer');
      // expect(candidateInvitation.employer).to.have.property('id');
      // expect(candidateInvitation.employer).to.have.property('name');
      // expect(candidateInvitation.employer).to.have.property('phone');
      // expect(candidateInvitation.employer).to.have.property('email');
      // expect(candidateInvitation.employer).to.have.property('dob');
        });
      });
      });
    });

