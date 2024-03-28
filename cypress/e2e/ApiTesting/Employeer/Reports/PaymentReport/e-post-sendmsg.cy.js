/// <reference types = "Cypress"/>

import { candidateId, companyId } from "../../../Constantsfile/constants";


const baseUrl = Cypress.config('baseUrl');

describe("To Sendmessage ", () => {
    it('should be able to send message ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
  
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/send-message/${companyId}/${candidateId}`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 },
        body: {
            message : 'Testing Send Msg from Employer'
        }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Successfully Sent');
      });
        });
      });
    });

