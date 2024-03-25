/// <reference types = "Cypress"/>

import { candidateId, companyId, year } from "../../../Constantsfile/constants";


const baseUrl = Cypress.config('baseUrl');

describe("To get yearlyreport ", () => {
    it('should be able to get yearlyreport ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
  
      cy.request({
        method: 'GET',
        url: `${baseUrl}/employer/report/yearly-report/${companyId}/${candidateId}/${year}`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 },
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Success');

        expect(response.body.data).to.exist;
        expect(response.body.data).to.be.an('array');
        
        response.body.data.forEach(entry => {
          expect(entry).to.have.property('month').that.is.a('string');
          expect(entry).to.have.property('status').that.is.a('string');
          expect(entry).to.have.property('amount').that.is.a('string');
        
        });
      });
    });
});});