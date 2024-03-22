/// <reference types="Cypress" />
import { companyId, candidatePhone } from './../../../Constantsfile/constants';
const baseUrl = Cypress.env('baseUrl');

describe("Candidate store", () =>  {
  it('should be able to store candiate', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
    cy.request({
      method: 'POST',
      url: `https://veloxlabs.net/api/v2/employer/candidate/store/${companyId}`,
      headers: {
        'Authorization': `Bearer ${employerToken}`,
      },
      body: {
        
            "name_holder" : "Mr", //required string
            "name": "Roshan Pokharel", // required
            "code": "C-2222" , // required
            "contact" : candidatePhone, // required
            "designation" : "QA", // required 
            "marriage_status" : "Unmarried", //required enum['Married', 'Unmarried'] 
            "salary_type" : "Weekly", // required - enum ['Weekly', 'Monthly']
            "salary" : "Fixed", // required - enum ['Fixed', 'Breakdown']
            "salary_amount" : 20000.00,  // required - double
            "allowance_amount" : 2000.00,  // nullable - double
            "joining_date" : "2024-02-22", // required - date 
            "working_hours" : "8:00", // required
            "duty_time" : "08:00", // required - time
            "probation_period" : 1, // required - unsignedBigInt
            "break_duration":"30", // required - min/hr to seconds - string
            "departments" : [1,2,3],  // required - array - api:<<globalLiveUrl>>/employer/all-departments  
            "allow_late_attendance":"30", // nullable -time
            "casual_leave":6, //required - unsignedInteger
            "sick_leave":7, //required - unsignedInteger
            "overtime_ratio" : 1.2, // double(2.2)
            "overtime_hrs" : 1, // float(2.2)
            "week_days_off" : [1,7], // array
            
            "allow_network_access" : "All Net"// required - enum['All Net', 'QR']
        
      }
    }).then(response => {
      expect(response.status).to.equal(200); 
      expect(response.body.status).to.equal("success"); 
      expect(response.body.message).to.equal("Logged in successfully"); 
      expect(response.body.data.token).to.be.a('string');
    });
  });
});
});