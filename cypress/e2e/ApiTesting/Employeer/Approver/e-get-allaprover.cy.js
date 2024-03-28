/// <reference types = "Cypress"/>

import { companyId } from "../../Constantsfile/constants";



const baseUrl = Cypress.config('baseUrl');

describe("get allapprover ", () => {
    it('should be able to get allapprover ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/employer/approver/list/${companyId}`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched.');
        expect(response.body.data).to.exist;
        expect(response.body.data).to.be.an('array').and.not.empty;
        
        // Iterate over each candidate and assert its properties
        response.body.data.forEach(candidate => {
          expect(candidate).to.have.property('id').that.is.a('number');
          expect(candidate).to.have.property('company_id').that.is.a('number');
          expect(candidate).to.have.property('candidate_id').that.is.a('number');
          expect(candidate).to.have.property('name').that.is.a('string');
          expect(candidate).to.have.property('name_holder').that.is.a('string');
          expect(candidate).to.have.property('marriage_status').that.is.a('string');
          expect(candidate).to.have.property('phone').that.is.a('string');
          expect(candidate).to.have.property('email').that.is.a('string');
          expect(candidate).to.have.property('code');
          expect(candidate).to.have.property('designation').that.is.a('string');
          expect(candidate).to.have.property('dob').that.is.a('string');
          expect(candidate).to.have.property('profile_image').that.is.a('string');
          expect(candidate).to.have.property('status').that.is.a('string');
          expect(candidate).to.have.property('office_hour_start').that.is.a('string');
          expect(candidate).to.have.property('office_hour_end').that.is.a('string');
        });
        });
      });
    });
});
