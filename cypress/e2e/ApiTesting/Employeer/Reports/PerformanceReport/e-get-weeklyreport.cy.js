/// <reference types = "Cypress"/>

import { candidateId, companyId } from "../../../Constantsfile/constants";


const baseUrl = Cypress.config('baseUrl');

describe("To get weeklyreport ", () => {
    it('should be able to get weeklyreport ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
  
      cy.request({
        method: 'GET',
        url: `${baseUrl}/employer/report/weekly-report/${companyId}/${candidateId}`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 },
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched');

        expect(response.body.data).to.exist;
        
        const salaryData = response.body.data;

        expect(salaryData).to.have.property('salary').that.is.a('number');
        expect(salaryData).to.have.property('overtime').that.is.a('number');
        expect(salaryData).to.have.property('allowance').that.is.a('number');
        expect(salaryData).to.have.property('total_salary').that.is.a('number');
        
        });
      });
    });

  });