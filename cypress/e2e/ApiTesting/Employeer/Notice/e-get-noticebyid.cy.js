/// <reference types = "Cypress"/>
import { empToken, noticeId } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to get noticebyid  ", () => {
    it('should be able to get noticebyid ', () => {
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/employer/notice/${noticeId}`,
        headers: {
          'Authorization': empToken 
                 }
               
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched.');

        // Assert the structure of the 'data' object
        expect(response.body.data).to.exist;
        expect(response.body.data).to.be.an('object').and.not.empty;

        // Assert properties of the notice data
        const noticeData = response.body.data;
        expect(noticeData).to.have.property('id').that.is.a('number');
        expect(noticeData).to.have.property('title').that.is.a('string').and.not.empty;
        expect(noticeData).to.have.property('description').that.is.a('string').and.not.empty;
        expect(noticeData).to.have.property('image').that.is.a('string').and.empty; // Assuming empty image is valid
        expect(noticeData).to.have.property('notice_date').that.is.a('string').and.not.empty;
        expect(noticeData).to.have.property('company_id').that.is.a('number');
        expect(noticeData).to.have.property('status').that.is.a('string').and.not.empty;
        expect(noticeData).to.have.property('departments').that.is.an('array').and.not.empty;
        expect(noticeData).to.have.property('candidates').that.is.an('array').and.not.empty;

        // Assert properties of each candidate
        noticeData.candidates.forEach(candidate => {
          expect(candidate).to.have.property('id').that.is.a('number');
          expect(candidate).to.have.property('name').that.is.a('string').and.not.empty;
          expect(candidate).to.have.property('designation').that.is.a('string').and.not.empty;
          expect(candidate).to.have.property('marriage_status').that.is.a('string').and.not.empty;
          expect(candidate).to.have.property('salary_type').that.is.a('string').and.not.empty;
          expect(candidate).to.have.property('salary').that.is.a('string').and.not.empty;
          expect(candidate).to.have.property('verified_status').that.is.a('string').and.not.empty;
          expect(candidate).to.have.property('status').that.is.a('string').and.not.empty;
          expect(candidate).to.have.property('allow_network_access').that.is.a('string').and.not.empty;
          expect(candidate).to.have.property('company_id').that.is.a('number');
          expect(candidate).to.have.property('candidate_id').that.is.a('number');
          expect(candidate).to.have.property('invitation_id').that.is.a('number').or.be.null;
          expect(candidate).to.have.property('read_at').that.is.null;
        });
      });
    });
});
