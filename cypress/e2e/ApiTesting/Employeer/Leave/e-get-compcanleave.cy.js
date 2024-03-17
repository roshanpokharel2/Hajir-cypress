/// <reference types = "Cypress"/>
import { empToken } from './../../Constants file/constants';
import { companyId } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("get companycanleave ", () => {
    it('should be able to get companycanleave ', () => {
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/employer/candidateLeave/all/${companyId}`,
        headers: {
          'Authorization': empToken 
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
          expect(candidate).to.have.property('leave_type').that.is.an('object').and.not.empty;
          expect(candidate.leave_type).to.have.property('id').that.is.a('number');
          expect(candidate.leave_type).to.have.property('title').that.is.a('string').and.not.empty;
          expect(candidate.leave_type).to.have.property('status').that.is.a('string').and.equal('Active');
          expect(candidate).to.have.property('start_date').that.is.a('string').and.not.empty;
          expect(candidate).to.have.property('status').that.is.a('string').and.not.empty;
          expect(candidate).to.have.property('end_date').that.is.a('string').and.not.empty;
          expect(candidate).to.have.property('created_at').that.is.a('string').and.not.empty;
          expect(candidate).to.have.property('name').that.is.a('string').and.not.empty;
          expect(candidate).to.have.property('attachment').that.is.a('string').and.not.empty;
          expect(candidate).to.have.property('profile_image').that.is.a('string').and.not.empty;
        });
      });
    });
  });
