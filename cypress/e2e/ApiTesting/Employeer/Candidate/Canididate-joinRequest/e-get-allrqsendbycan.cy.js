/// <reference types="Cypress" />

import { companyId, empToken} from './../../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("Get akk request send by candidate ", () => {
  it('should view all request send by candidate ', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'GET',
      url: `https://veloxlabs.net/api/v2/employer/${companyId}/invitation`,
      headers: {
        'Authorization': `Bearer ${employerToken}`,
               }
               
    }).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body.status).to.eq('success')
        expect(response.body.message).to.eq('Successfully Fetched')
        expect(response.body.data).to.have.property('invitations').to.be.an('array')
        const invitations = response.body.data.invitations
        invitations.forEach(invitation => {
          expect(invitation).to.have.property('id')
          expect(invitation).to.have.property('company_id')
          expect(invitation).to.have.property('candidate').to.be.an('object')
          expect(invitation.candidate).to.have.property('id')
          expect(invitation.candidate).to.have.property('name')
          expect(invitation.candidate).to.have.property('contact')
          expect(invitation.candidate).to.have.property('email')
          expect(invitation.candidate).to.have.property('joining_date')
          expect(invitation).to.have.property('status')
        })
    });
  });
});
});
