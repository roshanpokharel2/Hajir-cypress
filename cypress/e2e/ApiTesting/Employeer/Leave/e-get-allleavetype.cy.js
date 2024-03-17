/// <reference types = "Cypress"/>
import { empToken } from './../../Constants file/constants';
import { companyId } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("get allleavetypes ", () => {
    it('should be able to get allleavetypes ', () => {
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/employer/leave-type/all/${companyId}`,
        headers: {
          'Authorization': empToken 
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
          expect(leaveType).to.have.property('title').that.is.a('string').and.not.empty;
          expect(leaveType).to.have.property('status').that.is.a('string').and.equal('Active');
          expect(leaveType).to.have.property('desc').that.is.null;
        });
      });
    });
  });
