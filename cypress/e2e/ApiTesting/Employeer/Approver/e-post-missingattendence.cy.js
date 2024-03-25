/// <reference types = "Cypress"/>

import { attendancedate, candidateId, companyId } from "../../Constantsfile/constants";


const baseUrl = Cypress.config('baseUrl');

describe("to add missingattendance  ", () => {
    it('should be able to add missingattendance ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/candidate/missing-attendance-submit`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 },
        body: {
            "start_time": "8:00:00",
            "end_time": "2:00:00",
            "company_id" : companyId,
            "candidate_id" : 3,
            "attendance_date" : attendancedate,
            "overtime": "00:30"
        }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Saved');
      });
        });
      });
    });

