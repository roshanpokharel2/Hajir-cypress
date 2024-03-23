/// <reference types = "Cypress"/>

import { companyId } from "../../Constantsfile/constants";


const baseUrl = Cypress.env('baseUrl');

describe("get allleavetypes ", () => {
    it('should be able to get allleavetypes ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
      cy.request({
        method: 'GET',
        url: `${baseUrl}/employer/leave-type/all/${companyId}`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched.');

        expect(response.body.data).to.exist;
        expect(response.body.data.leavetypes).to.be.an('array');
        expect(response.body.data.leavetypes).to.have.lengthOf(4);

        const leaveTypes = response.body.data.leavetypes;
        leaveTypes.forEach(leaveType => {
          expect(leaveType).to.have.property('id').that.is.a('number');
          expect(leaveType).to.have.property('title').that.is.a('string');
          expect(leaveType).to.have.property('status').that.is.a('string');
          expect(leaveType).to.have.property('desc');
        });
      });
      });
      });
    });

