/// <reference types = "Cypress"/>

import { companyId } from '../../Constantsfile/constants';


const baseUrl = Cypress.env('baseUrl');
describe("Get candidate today detail  ", () => {
    it('should be able get candidate today detail ', () => {
     
 cy.fixture('bearerToken').then((tokenData) => {
  const bearerToken = tokenData.token;
      cy.request({
        method: 'GET',
        url: `https://veloxlabs.net/api/v2/candidate/today-details/${companyId}`,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
                 }
                 
      }).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.status).to.equal("success");
            expect(response.body.message).to.equal("Successfully Fetched");
            expect(response.body.data.id).to.be.a('number');
            expect(response.body.data.candidate_id).to.be.a('number');
            expect(response.body.data.company_id).to.be.a('number');
            expect(response.body.data.candidate_code).to.be.a('string');
            expect(response.body.data.attendance_id).to.be.a('number');
            expect(response.body.data.start_time).to.be.a('number');
            expect(response.body.data.end_time).to.be.a('number');
            expect(response.body.data.today_earning).to.be.a('number');
            expect(response.body.data.today_overtime_earning).to.be.a('number');
            expect(response.body.data.status).to.be.a('string');
            expect(response.body.data.today_hour_work).to.be.a('number');
            expect(response.body.data.per_minute_salary).to.be.a('number');
            expect(response.body.data.break_limit).to.be.a('number');
            expect(response.body.data.total_earning).to.be.a('number');
            expect(response.body.data.overtime_ratio).to.be.a('number');
            expect(response.body.data.overtime_hr).to.be.a('number');
            expect(response.body.data.duty_time).to.be.a('number');
            expect(response.body.data.duty_end_time).to.be.a('number');
            expect(response.body.data.daily_salary).to.be.a('number');
            expect(response.body.data.allow_network_access).to.be.a('string');
            expect(response.body.data.attendance_time).to.be.a('string');
            expect(response.body.data.total_break_time_taken).to.be.a('string');
            expect(response.body.data.breaks).to.deep.equal([]);
            expect(response.body.data.current_break).to.be.a('string');
      });
        });
      });
    });

