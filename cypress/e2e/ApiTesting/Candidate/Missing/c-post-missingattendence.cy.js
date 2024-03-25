/// <reference types="Cypress" />

import { companyId } from "../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');

describe("Post missing attendence", () => {
  it('should be able to post missing attendence  ', () => {
    
 cy.fixture('bearerToken').then((tokenData) => {
  const bearerToken = tokenData.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/candidate/approver/missing-attendance-submit`, 
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
        },
        body :{
            'start_time':"8:00:00",
            'end_time':"2:00:00",
            'company_id':`${companyId}`,
            'candidate_id':15,
            'attendance_date':"3/18/2024",
            'overtime':"00:10"
        }
      }).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.status).to.equal("success");
            expect(response.body.message).to.equal("Successfully Saved");
      });
           });
    });
  
});
