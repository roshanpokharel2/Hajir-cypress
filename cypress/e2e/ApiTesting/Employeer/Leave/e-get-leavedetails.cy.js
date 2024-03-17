/// <reference types = "Cypress"/>
import { candidateId } from '../../Constantsfile/constants';
import { empToken } from './../../Constants file/constants';
import { companyId } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("get leavedetail ", () => {
    it('should be able to get leavedetail ', () => {
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/employercandidateLeave/detail/${companyId}/${candidateId}`,
        headers: {
          'Authorization': empToken 
                 }
                 
      }).then(response => {
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched');

        expect(response.body.data).to.exist;
        expect(response.body.data.leavedetail).to.exist;

        const leaveDetail = response.body.data.leavedetail;
        expect(leaveDetail).to.have.property('id').that.is.a('number');
        expect(leaveDetail).to.have.property('candidate_id').that.is.a('number');
        expect(leaveDetail).to.have.property('remarks').that.is.a('string').and.not.empty;
        expect(leaveDetail).to.have.property('status').that.is.a('string').and.not.empty;
        expect(leaveDetail).to.have.property('pay_status').that.is.a('string').and.not.empty;
        expect(leaveDetail).to.have.property('start_date').that.is.a('string').and.not.empty;
        expect(leaveDetail).to.have.property('end_date').that.is.a('string').and.not.empty;
        expect(leaveDetail).to.have.property('type').that.is.a('string').and.not.empty;
        expect(leaveDetail).to.have.property('file').that.is.null;
        expect(leaveDetail).to.have.property('profile_image').that.is.a('string').and.not.empty;
        expect(leaveDetail).to.have.property('leave_days').that.is.a('number');

        expect(leaveDetail.leave_type).to.exist;
        expect(leaveDetail.leave_type).to.have.property('id').that.is.a('number');
        expect(leaveDetail.leave_type).to.have.property('title').that.is.a('string').and.not.empty;
        expect(leaveDetail.leave_type).to.have.property('status').that.is.a('string').and.equal('Active');
        expect(leaveDetail.leave_type).to.have.property('desc').that.is.null;
        });
      });
    });
