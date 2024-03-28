/// <reference types = "Cypress"/>

import { candidateId, companyId } from "../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');

describe("get leavedetail ", () => {
    it('should be able to get leavedetail ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/employer/candidateLeave/detail/${companyId}/${candidateId}`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 }
                 
      }).then(response => {
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched');

        expect(response.body.data).to.exist;
        expect(response.body.data.leavedetail).to.exist;

        const leaveDetail = response.body.data.leavedetail;
        expect(leaveDetail).to.have.property('id').that.is.a('number');
        expect(leaveDetail).to.have.property('candidate_id').that.is.a('number');
        expect(leaveDetail).to.have.property('remarks').that.is.a('string');
        expect(leaveDetail).to.have.property('status').that.is.a('string');
        expect(leaveDetail).to.have.property('pay_status').that.is.a('string');
        expect(leaveDetail).to.have.property('start_date').that.is.a('string');
        expect(leaveDetail).to.have.property('end_date').that.is.a('string');
        expect(leaveDetail).to.have.property('type').that.is.a('string');
        expect(leaveDetail).to.have.property('file');
        expect(leaveDetail).to.have.property('profile_image').that.is.a('string');
        expect(leaveDetail).to.have.property('leave_days').that.is.a('number');

        expect(leaveDetail.leave_type).to.exist;
        expect(leaveDetail.leave_type).to.have.property('id').that.is.a('number');
        expect(leaveDetail.leave_type).to.have.property('title').that.is.a('string');
        expect(leaveDetail.leave_type).to.have.property('status').that.is.a('string');
        expect(leaveDetail.leave_type).to.have.property('desc');
        });
      });
      });
    });
