/// <reference types = "Cypress"/>
import { empToken } from './../../Constants file/constants';
import { companyId, candidateId, year } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("To get yearlyreport ", () => {
    it('should be able to get yearlyreport ', () => {
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/employer/report/monthly-report/${companyId}/${candidateId}/${year}`,
        headers: {
          'Authorization': empToken 
                 },
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Success');

        expect(response.body.data).to.exist;
        expect(response.body.data).to.be.an('array').and.not.empty;
        
        response.body.data.forEach(entry => {
          expect(entry).to.have.property('month').that.is.a('string').and.not.empty;
          expect(entry).to.have.property('status').that.is.a('string').and.equal('Unpaid');
          expect(entry).to.have.property('amount').that.is.a('string').and.not.empty;
        
        });
      });
    });
});