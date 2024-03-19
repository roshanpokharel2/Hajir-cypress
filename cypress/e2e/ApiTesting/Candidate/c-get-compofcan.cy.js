/// <reference types = "Cypress"/>

import { canToken } from "../Constantsfile/constants";




const baseUrl = Cypress.env('baseUrl');
describe("Get company of candidate  ", () => {
    it('should be able get company of candidate ', () => {
      cy.request({
        method: 'GET',
        url: 'https://veloxlabs.net/api/v2/candidate/get-companies',
        headers: {
          'Authorization': canToken 
                 }
                 
      }).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.status).to.equal("success");
            expect(response.body.message).to.equal("Successfully Fetched");
            expect(response.body.data.active_companies).to.be.an('array').that.has.lengthOf.at.least(1);
            expect(response.body.data.inactive_companies).to.be.an('array').that.has.lengthOf.at.least(1);
//  //active companies
//             response.body.data.active_companies.forEach(company => {
//             expect(company.id).to.be.a('number');
//             expect(company.name).to.be.a('string');
//             expect(company.office_hours).to.be.null;
//             expect(company.office_hour_start).to.be.a('string');
//             expect(company.office_hour_end).to.be.a('string');
//             expect(company.verified_status).to.be.a('string');
//             expect(company.is_approver).to.be.a('number');
//             expect(company.status).to.be.a('string');
//             if (company.clock_in_time !== null) {
//                 expect(company.clock_in_time.id).to.be.a('number');
//                 expect(company.clock_in_time.candidate_id).to.be.a('number');
//                 expect(company.clock_in_time.company_id).to.be.a('number');
//                 expect(company.clock_in_time.employee_status).to.be.a('string');
              
//                 expect(company.clock_in_time.start_time).to.be.a('number');
                
//                 expect(company.clock_in_time.end_time).to.be.a('number');
                
//                 expect(company.clock_in_time.early_clock_out).to.be.a('null');
               
//                 expect(company.clock_in_time.earning).to.be.null;
             
//                 expect(company.clock_in_time.approve_status).to.be.a('number');
             
//                 expect(company.clock_in_time.approver_id).to.be.a('number');
             
//                 expect(company.clock_in_time.overtime_earning).to.be.a('number');
//             }
//             });
//                    response.body.data.inactive_companies.forEach(company => {
//             // Asserting the 'id' field in the company object
//             expect(company.id).to.be.a('number');
//             // Asserting the 'name' field in the company object
//             expect(company.name).to.be.a('string');
//             // Asserting the 'generate_code' field in the company object
//             expect(company.generate_code).to.be.a('boolean');
//             // Asserting the 'phone' field in the company object
//             expect(company.phone).to.be.null;
//             // Asserting the 'address' field in the company object
//             expect(company.address).to.be.null;
//             // Asserting the 'office_hours' field in the company object
//             expect(company.office_hours).to.be.null;
//             // Asserting the 'office_hour_start' field in the company object
//             expect(company.office_hour_start).to.be.a('string');
//             // Asserting the 'office_hour_end' field in the company object
//             expect(company.office_hour_end).to.be.a('string');
//             // Asserting the 'verified_status' field in the company object
//             expect(company.verified_status).to.be.a('string');
//             // Asserting the 'is_approver' field in the company object
//             expect(company.is_approver).to.be.a('number');
//             // Asserting the 'status' field in the company object
//             expect(company.status).to.be.a('string');
//             // Asserting the 'clock_in_time' field in the company object
//             expect(company.clock_in_time).to.be.null;
//             });

        });
      });
    });

