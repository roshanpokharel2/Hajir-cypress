/// <reference types = "Cypress"/>
import { empToken } from './../../Constants file/constants';
import { companyId, candidateId, month, year } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("To get monthlyreport ", () => {
    it('should be able to get monthlyreport ', () => {
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/employer/report/monthly-report/${companyId}/${candidateId}/${month}/${year}`,
        headers: {
          'Authorization': empToken 
                 },
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Success');

        expect(response.body.data).to.exist;
        
        const salaryData = response.body.data;

        expect(salaryData).to.have.property('allowed_breaks').that.is.a('number').and.equal(0);
        expect(salaryData).to.have.property('salary').that.is.a('number').and.equal(122.92);
        expect(salaryData).to.have.property('overtime').that.is.a('number').and.equal(0);
        expect(salaryData).to.have.property('bonus').that.is.a('number').and.equal(0);
        expect(salaryData).to.have.property('allowance').that.is.a('number').and.equal(0);
        expect(salaryData).to.have.property('tax').that.is.a('number').and.equal(0);
        expect(salaryData).to.have.property('penalty').that.is.a('number').and.equal(0);
        expect(salaryData).to.have.property('total_salary').that.is.a('number').and.equal(122.92);
        expect(salaryData).to.have.property('total_deduction').that.is.a('number').and.equal(0);
        expect(salaryData).to.have.property('used_sick_leave').that.is.a('number').and.equal(0);
        expect(salaryData).to.have.property('used_casual_leave').that.is.a('number').and.equal(0);
        expect(salaryData).to.have.property('total_casual_leave').that.is.a('number').and.equal(4);
        expect(salaryData).to.have.property('total_sick_leave').that.is.a('number').and.equal(5);
        
        });
      });
    });

