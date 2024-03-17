/// <reference types = "Cypress"/>
import { empToken } from './../../Constants file/constants';
import { companyId, candidateId } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("To get weeklyreport ", () => {
    it('should be able to get weeklyreport ', () => {
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/employer/report/weekly-report/${companyId}/${candidateId}`,
        headers: {
          'Authorization': empToken 
                 },
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched');

        expect(response.body.data).to.exist;
        
        const salaryData = response.body.data;

        expect(salaryData).to.have.property('salary').that.is.a('number').and.equal(2000);
        expect(salaryData).to.have.property('overtime').that.is.a('number').and.equal(0);
        expect(salaryData).to.have.property('allowance').that.is.a('number').and.equal(0);
        expect(salaryData).to.have.property('total_salary').that.is.a('number').and.equal(2000);
        
        });
      });
    });

