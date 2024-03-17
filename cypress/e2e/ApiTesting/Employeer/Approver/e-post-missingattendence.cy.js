/// <reference types = "Cypress"/>
import { empToken } from './../../Constants file/constants';
import { companyId, candidateId } from './../../Constants file/constants';

const baseUrl = Cypress.env('baseUrl');

describe("to add missingattendance  ", () => {
    it('should be able to add missingattendance ', () => {
      cy.request({
        method: 'POST',
        url: `https://veloxlabs.net/api/v2/employer/candidate/missing-attendance-submit`,
        headers: {
          'Authorization': empToken 
                 },
        body: {
            "start_time": "8:00:00",
            "end_time": "2:00:00",
            "company_id" : 2,
            "candidate_id" : 72,
            "attendance_date" : "3/17/2024",
            "overtime": "00:30"
        }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Saved.');
        
        });
      });
    });

