/// <reference types = "Cypress"/>

import { companyId } from "../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');

describe("get companycanleave ", () => {
    it('should be able to get companycanleave ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/employer/candidateLeave/all/${companyId}`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 }
                 
      }) .then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched');

        expect(response.body.data).to.exist;
        expect(response.body.data.candidates).to.be.an('array');

        response.body.data.candidates.forEach(candidate => {
          expect(candidate).to.have.property('leave_id').that.is.a('number');
          expect(candidate).to.have.property('candidate_id').that.is.a('number');
          expect(candidate).to.have.property('leave_type').that.is.an('object');
          expect(candidate.leave_type).to.have.property('id').that.is.a('number');
          expect(candidate.leave_type).to.have.property('title').that.is.a('string');
          expect(candidate.leave_type).to.have.property('status').that.is.a('string');
          expect(candidate).to.have.property('start_date').that.is.a('string');
          expect(candidate).to.have.property('status').that.is.a('string');
          expect(candidate).to.have.property('end_date').that.is.a('string');
          expect(candidate).to.have.property('created_at').that.is.a('string');
          expect(candidate).to.have.property('name').that.is.a('string');
          expect(candidate).to.have.property('attachment').that.satisfy(value => typeof value === "string" || value === null);
          expect(candidate).to.have.property('profile_image').that.satisfy(value => typeof value === "string" || value === null);
        });
      });
    });
  });
});
