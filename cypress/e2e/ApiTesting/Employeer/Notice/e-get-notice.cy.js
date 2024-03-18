/// <reference types = "Cypress"/>
import { empToken } from './../../Constants file/constants';
import { companyId } from './../../Constantsfile/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to get notice  ", () => {
    it('should be able to get notice ', () => {
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/employer/notice/${companyId}`,
        headers: {
          'Authorization': empToken 
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched.');

        expect(response.body.data).to.exist;
        expect(response.body.data).to.be.an('object').and.not.empty;

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
        });
      });
    });

