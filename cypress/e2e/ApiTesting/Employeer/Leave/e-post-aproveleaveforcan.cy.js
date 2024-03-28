/// <reference types = "Cypress"/>

import { candidateId } from "../../Constantsfile/constants";

const baseUrl = Cypress.config('baseUrl');

describe("to approveleavefromcandidate ", () => {
    it('should be able to approveleavefromcandidate ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/candidateLeave/change-status/${candidateId}`,
        headers: {
          'Authorization': `Bearer ${employerToken}`,
                 },
            body: {
                    status: 'approved', 
                    pay_status: 'paid' 
                  }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Updated');
      });
        });
      });
    });
