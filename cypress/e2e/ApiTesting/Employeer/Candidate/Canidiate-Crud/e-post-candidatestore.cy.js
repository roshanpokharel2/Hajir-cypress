/// <reference types="Cypress" />

import { candidatePhone, canname, codee, companyId } from "../../../Constantsfile/constants";
function generateRandomNumber() {
  const prefix = "98"; // The prefix for the random number
  const randomDigits = Math.floor(100000000 + Math.random() * 900000000); // Generate 8 random digits
  
  return Number(prefix + randomDigits.toString().substring(0, 8)); // Combine prefix and random digits
}

// Example usage:
const randomNumber = generateRandomNumber();
console.log(randomNumber); // Output a random number starting with "98" and followed by 8 digits

const baseUrl = Cypress.config('baseUrl');

describe("Candidate store", () => {
  it('should be able to store candidate', () => {
    cy.fixture('employerToken').then((tokenDataa) => {
      const employerToken = tokenDataa.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/candidate/store/${companyId}`,
        headers: {
          'Authorization': `Bearer ${employerToken}`,
        },
        body: {
          "name_holder": "Mr", //required string
          "name": canname, // required
          "code": randomNumber, // required
          "contact": randomNumber, // required
          "designation": "QA", // required 
          "marriage_status": "Unmarried", //required enum['Married', 'Unmarried'] 
          "salary_type": "Weekly", // required - enum ['Weekly', 'Monthly']
          "salary": "Fixed", // required - enum ['Fixed', 'Breakdown']
          "salary_amount": 20000.00, // required - double
          "allowance_amount": 2000.00, // nullable - double
          "joining_date": "2024-02-22", // required - date 
          "working_hours": "8:00", // required
          "duty_time": "08:00", // required - time
          "probation_period": 1, // required - unsignedBigInt
          "break_duration": "30", // required - min/hr to seconds - string
          "departments": [1, 2, 3], // required - array - api:<<globalLiveUrl>>/employer/all-departments  
          "allow_late_attendance": "30", // nullable -time
          "casual_leave": 6, //required - unsignedInteger
          "sick_leave": 7, //required - unsignedInteger
          "overtime_ratio": 1.2, // double(2.2)
          "overtime_hrs": 1, // float(2.2)
          "week_days_off": [1, 7], // array
          "allow_network_access": "All Net"// required - enum['All Net', 'QR']
        },
        failOnStatusCode: false // Adding this option to prevent Cypress from failing on non-2xx responses
      }).then(response => {
        try {
          if (response.status === 403) {
           if (response.body.message === "Either phone or email exists.") {
              expect(response.body.message).to.equal("Either phone or email exists.");
            } else {
              expect(response.body.message).to.equal("Candidate Code Exists.");
            }
          } else {
            // Handle other response statuses or success cases
            expect(response.status).to.equal(200); // Adjust as needed
            expect(response.body.status).to.equal("success");
            expect(response.body.message).to.include("created successfully")
                     }
        } catch (error) {
          // Handle any unexpected errors
          throw new Error(`Unexpected error: ${error}`);
        }

      });
    });
  });
});
