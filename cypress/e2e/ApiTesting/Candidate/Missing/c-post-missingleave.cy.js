/// <reference types="Cypress" />

import { companyId } from "../../Constantsfile/constants";
const baseUrl = Cypress.config('baseUrl');
describe("Post missing Leave", () => {
  it('should be able to post missing Leave  ', () => {
    cy.fixture('bearerToken').then((tokenData) => {
      const bearerToken = tokenData.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/candidate/approver/missing-leave-submit`, 
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
        },
        body :{
            'start_time':"8:00:00",
            'end_time':"2:00:00",
            'company_id':`${companyId}`,
            'candidate_id':13,
            'leave_type':1,
            'attendance_date':"3/18/2024",
            'overtime':"00:10"
        },
        failOnStatusCode: false
      }).then(response => {
        if (response.status === 200) {
          expect(response.body.status).to.equal("success");
          expect(response.body.message).to.equal("Successfully Saved");
        } else if (response.status === 400 && response.body.message === "Leave on this date already exists") {
          expect(response.body.status).to.equal("error");
          
        } else {
          throw new Error(`Unexpected response: ${response.status} - ${response.body.message}`);
        }
     });
    });
  });  
});