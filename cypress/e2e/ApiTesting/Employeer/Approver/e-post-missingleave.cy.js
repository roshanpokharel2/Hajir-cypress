/// <reference types = "Cypress"/>

import { candidateId, companyId, missingleaveend, missingleavestart } from "../../Constantsfile/constants";


const baseUrl = Cypress.config('baseUrl');

describe("to add missingleave  ", () => {
    it('should be able to add missingleave ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/candidate/missing-leave-submit`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 },
        body: {
            "start_date": missingleavestart ,
            "end_date": missingleaveend ,
            "company_id" : companyId,
            "candidate_id" : candidateId,
            "leave_type" : 1,
            "status": ""
        }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Saved.');
      });
        });
      });
    });

