/// <reference types = "Cypress"/>

import { candidateId, companyId } from "../../Constantsfile/constants";


const baseUrl = Cypress.config('baseUrl');

describe("to assign approver ", () => {
    it('should be able to assign approver ', () => {
      cy.fixture('employerToken').then((tokenDataa) => {
        const employerToken = tokenDataa.token;
      cy.request({
        method: 'POST',
        url: `${baseUrl}/employer/approver/store/${companyId}/${candidateId}`,
        headers: {
          'Authorization': `Bearer ${employerToken}`
                 }
                 
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Approved Successfully Added.');
      });
        });
      });
    });

