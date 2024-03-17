/// <reference types = "Cypress"/>
import { empToken } from './../../Constants file/constants';
import { companyId, candidateId } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("To get dailycompcandreport ", () => {
    it('should be able to get dailycompcandreport ', () => {
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/employer/report/daily-report/${companyId}/${candidateId}`,
        headers: {
          'Authorization': empToken 
                 },
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Fetched.');

        expect(response.body.data).to.exist;
        
        const attendanceData = response.body.data;

        expect(attendanceData).to.have.property('start_time').that.is.null;
        expect(attendanceData).to.have.property('end_time').that.is.null;
        expect(attendanceData).to.have.property('break_time').that.is.a('string').and.equal('00:00:00');
        expect(attendanceData).to.have.property('attendance_duration').that.is.a('string').and.equal('00:00:00');
        expect(attendanceData).to.have.property('earning').that.is.null;
        expect(attendanceData).to.have.property('overtime_earning').that.is.null;
        expect(attendanceData).to.have.property('totalearning').that.is.a('number').and.equal(0);
        expect(attendanceData).to.have.property('allowance').that.is.a('number').and.equal(0);
        expect(attendanceData).to.have.property('status').that.is.a('string').and.equal('Absent');
        
        });
      });
    });

